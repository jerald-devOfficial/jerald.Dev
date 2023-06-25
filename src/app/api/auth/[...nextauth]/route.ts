import { User } from '@/models/User';
import connect from '@/utils/db';
import NextAuth, { Account, User as NextAuthUser } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'text',
        },
      },
      async authorize(credentials) {
        // Check if the user exists.
        await connect();

        const user = await User.findOne({
          email: credentials?.email?.toLowerCase(),
        }).lean();

        if (user) {
          const isPasswordCorrect = await bcrypt.compare(
            credentials!.password,
            user.password
          );

          if (isPasswordCorrect) {
            return {
              id: user._id.toString(), // convert ObjectId to string
              name: user.name,
              email: user.email,
            };
          } else {
            throw new Error('Wrong Credentials!');
          }
        } else {
          throw new Error('User not found!');
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(
        `signIn called for account: ${account?.provider}, email from profile: ${profile?.email}`
      );

      if (account?.provider === 'google') {
        const isAllowedToSignIn =
          profile?.email?.toLowerCase() ===
          'spaueofficial@gmail.com'.toLowerCase();

        if (!isAllowedToSignIn) {
          console.log(
            'signIn denied for non-spaueOfficial@gmail.com email address'
          );
          return false; // if return false, the sign in will be aborted
        }

        try {
          await connect();

          // Note the addition of toLowerCase()
          const existingUser = await User.findOne({
            email: user?.email?.toLowerCase(),
          }).lean();

          // If user already exists in the database, sign in is successful
          if (existingUser) {
            console.log('signIn successful for existing user');

            if (existingUser.googleId !== account.id) {
              // Link the Google account to the existing user
              existingUser.googleId = String(account.id);

              await User.updateOne({ _id: existingUser._id }, existingUser);
              console.log('Linked Google account to existing user');
            }

            return true;
          }
          // Otherwise, create a new user and then sign in is successful
          else {
            const newUser = new User({
              name: user.name,
              email: user?.email?.toLowerCase(), // convert to lower case
              authType: 'GOOGLE', // set authType to 'GOOGLE'
              googleId: account.id, // set googleId
            });

            await newUser.save();
            console.log('signIn successful, new user created');
            return true;
          }
        } catch (error) {
          console.error(`signIn failed with error: ${error}`);
          throw error;
        }
      }
      return true;
    },
  },

  pages: {
    error: '/dashboard/login',
  },
});

export { handler as GET, handler as POST };
