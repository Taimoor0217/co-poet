import { Database } from "@/lib/database.types"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextRequest, NextResponse } from "next/server"

export const checkUserSesssion = async (req: NextRequest) => {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient<Database>({ req, res })
    const { data, error } = await supabase.auth.getSession()
    if (!data.session || error) {
        return error ? NextResponse.error() : NextResponse.redirect('/sign-in')
    }
}