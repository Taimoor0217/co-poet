import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function GET(request: NextRequest) {
    const supabase = createRouteHandlerClient<Database>({ cookies })
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    if (code) {
        await supabase.auth.exchangeCodeForSession(code)
    }
    return NextResponse.redirect(requestUrl.origin)
}