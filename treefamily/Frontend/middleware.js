import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import { getToken } from 'next-auth/jwt'

export default withAuth(
    async function middleware(req) {
        const session = await getToken({ req })
        if (req.nextUrl.pathname.startsWith("/admin") && session?.role != 'ADMIN') {
            const url = req.nextUrl.clone()
            url.pathname = '/home'
            return NextResponse.redirect(url)
        }
        return NextResponse.next()
    },
    {
        pages: {
            signIn: '/login'
        },
    }
)