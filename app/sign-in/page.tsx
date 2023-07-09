"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function SignInPage() {
    const supabase = createClientComponentClient()
    const handleAuth = ()=>{
      supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${location.origin}/auth/callback`,
        }
      })
    }
    return (
        <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
          <button onClick={handleAuth}>Sign In</button>
        </div>
    )
}
