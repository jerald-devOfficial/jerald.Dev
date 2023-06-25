import { User } from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email: email.toLowerCase(),
    password: hashedPassword,
    authType: 'LOCAL',
  });

  try {
    await newUser.save();
    return new NextResponse('User has been created', {
      status: 201,
    });
  } catch (err: unknown) {
    // Assuming err is of Error type.
    const errorMessage =
      err instanceof Error ? err.message : 'An error occurred';
    return new NextResponse(errorMessage, {
      status: 500,
    });
  }
};
