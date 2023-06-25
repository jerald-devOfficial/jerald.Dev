'use client';
import React, { FormEvent } from 'react';
import useSWR, { Fetcher } from 'swr';
import { Category } from '../portfolio/[category]/data';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Dashboard = () => {
  const { status, data: userData } = useSession();

  const router = useRouter();

  const fetcher: Fetcher<Category[], string> = (username) =>
    fetch(`/api/posts?username=${username}`).then((res) => res.json());

  //NEW WAY TO FETCH DATA
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const username = userData?.user?.name;

  const { data, mutate, error, isLoading } = useSWR(username, fetcher);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    router.push('/dashboard/login');
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const desc = formData.get('desc');
    const img = formData.get('img');
    const content = formData.get('content');

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: username,
        }),
      });
      mutate();
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (status === 'authenticated') {
    return (
      <main className='flex gap-24'>
        <div className='flex-1'>
          {isLoading
            ? 'loading'
            : data?.map((post) => (
                <div
                  className='flex items-center justify-between my-12'
                  key={post._id}
                >
                  <div className='relative h-24 w-48'>
                    <Image
                      src={post.img}
                      alt=''
                      fill
                      className='object-cover'
                    />
                  </div>
                  <h2 className='font-bold text-2xl'>{post.title}</h2>
                  <span
                    className='text-red-500 cursor-pointer'
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className='flex-1 flex flex-col gap-5' onSubmit={handleSubmit}>
          <h1 className='text-3xl font-bold'>Add New Post</h1>
          <input
            type='text'
            placeholder='Title'
            className='p-2.5 bg-transparent border-2 border-solid border-[#bbb] rounded text-[#bbb] text-xl font-bold'
          />
          <input
            type='text'
            placeholder='Desc'
            className='p-2.5 bg-transparent border-2 border-solid border-[#bbb] rounded text-[#bbb] text-xl font-bold'
          />
          <input
            type='text'
            placeholder='Image'
            className='p-2.5 bg-transparent border-2 border-solid border-[#bbb] rounded text-[#bbb] text-xl font-bold'
          />
          <textarea
            placeholder='Content'
            className='p-2.5 bg-transparent border-2 border-solid border-[#bbb] rounded text-[#bbb] text-xl font-bold'
            cols={30}
            rows={10}
          ></textarea>
          <button className='p-5 cursor-pointer bg-[#53c28b] border-none text-[#eee] font-bold'>
            Send
          </button>
        </form>
      </main>
    );
  }
};

export default Dashboard;
