import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types'

export const runtime = 'edge'

export default async function IndexPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase.auth.getUser();
  console.log({ data, error })
  const id = nanoid()

  return <Chat id={id} />
}
