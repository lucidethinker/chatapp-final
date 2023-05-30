import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: "Iv1.d742f1ce9f690834",
      clientSecret: "d4449622b2f36c64c11a6f8102dc142a038e5702",
    }),
    GoogleProvider({
      clientId: "961814566403-37ko1ffjnlekk2bcsl0j87h81t9rk1ec.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "test",
  callbacks: {
    async session({ session, token, user }) {
      return { ...session, user: { ...session.user, ...user } };
    },
  },
});
