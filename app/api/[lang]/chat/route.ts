import { StreamingTextResponse, LangChainStream, Message } from 'ai'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { AIMessage, HumanMessage, SystemMessage } from 'langchain/schema'
import { getSystemMessage as BaseSystemMessage } from '@/langchain/chat'
import { NextRequest, NextResponse } from 'next/server'
import { codes } from '@/lib/languages'
import { checkUserSesssion } from '../../common'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const err = await checkUserSesssion(req)
  if(err){
    return err
  }
  const lang : string = new URL(req.url).searchParams.get('lang') ?? 'en'
  const { messages } = await req.json()
  const { stream, handlers } = LangChainStream()

  const llm = new ChatOpenAI({
    streaming: true
  })

  llm
    .call(
      [new SystemMessage(BaseSystemMessage(codes[lang] ?? 'en')), ...(messages as Message[]).map(m =>
        m.role == 'user'
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      )],
      {},
      [handlers]
    )
    .catch(console.error)

  return new StreamingTextResponse(stream)
}