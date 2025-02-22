import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import connectToDatabase from "@/lib/mongodb"
import User from "../../../../../models/User"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // const { db } = await connectToDatabase()
      console.log("User", user);
      await connectToDatabase();
      const existingUser = await User.findOne({ email: user.email })

      if (!existingUser) {
        await User.insertOne({
          name: user.name,
          email: user.email,
          image: user.image,
        })
      }

      return true
    },
  },
})

export { handler as GET, handler as POST }

