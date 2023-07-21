import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  const {data, error} = await supabase.auth.getSession()
  if(!data.session || error){
    console.log("Redirecting to sign in")
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }
  return res
}

export const config = {
  matcher: ['/chat', '/sign-out']
}