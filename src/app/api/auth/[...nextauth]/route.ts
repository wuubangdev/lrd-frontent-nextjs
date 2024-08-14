
import { sendRequest } from "@/utils/api";
import NextAuth, { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt/types";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        CredentialsProvider({
            name: "Land resources department",
            credentials: {
                username: { label: "Email", type: "text", },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await sendRequest<IBackendRes<JWT>>({
                    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
                    method: "POST",
                    body: { email: credentials?.username, password: credentials?.password },
                })
                if (res && res.data) {
                    return res.data as any;
                } else {
                    throw new Error(res?.message);
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ account, token, user, trigger, profile }) {

            if (trigger === "signIn" && account?.provider === "credentials") {
                //@ts-ignore    
                token.access_token = user.access_token;
                //@ts-ignore
                token.refresh_token = user.refresh_token;
                //@ts-ignore
                token.user = user.user;

            }

            return token;
        },
        session({ session, token, user }) {
            if (token) {
                session.access_token = token.access_token;
                session.refresh_token = token.refresh_token;
                // session.access_expire = token.access_expire;
                // session.error = token.error;
                session.user = token.user;
            }
            // session.address = token.address;
            return session;
        }
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }