import { StreamingTextResponse, LangChainStream, Message } from 'ai'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { LLMChain } from "langchain/chains";
import { explanationPrompt } from '@/langchain/explanation';
import { NextRequest } from 'next/server';
import { codes } from '@/lib/languages';
export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const lang : string = new URL(req.url).searchParams.get('lang') ?? 'en'
  const { prompt } = await req.json()

  const { stream, handlers } = LangChainStream()

  const model = new ChatOpenAI({temperature: 0.9, streaming: true });
  const chain = new LLMChain({
    prompt: explanationPrompt(),
    llm: model
  })
  chain.call({
    language: codes[lang],
    input: prompt
  }, [handlers])
    .catch(console.error)
  return new StreamingTextResponse(stream)
}