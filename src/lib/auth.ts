import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async signIn({ user }) {
            const isAllowedToSignIn = user.email === "carefreeav09@gmail.com"
            if (isAllowedToSignIn) {
                return true
            } else {
                return false
            }
        },

        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl)
                ? Promise.resolve(url)
                : Promise.resolve(baseUrl)
        }
    }
};
