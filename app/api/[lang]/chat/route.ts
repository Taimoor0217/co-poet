import { StreamingTextResponse, LangChainStream, Message } from 'ai'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { AIMessage, HumanMessage } from 'langchain/schema'
import { LLMChain } from "langchain/chains";
import { completionPrompt } from '@/langchain/completion';
export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const { stream, handlers } = LangChainStream()

  const model = new ChatOpenAI({temperature: 0.9, streaming: true });
  const input = "dard uthta hai to beth jata hn"
  const chain = new LLMChain({
    prompt: completionPrompt(),
    llm: model
  })
  chain.call({
    language: 'urdu',
    mood: 'romantic',
    input
  }, [handlers])
    .catch(console.error)
  return new StreamingTextResponse(stream)
}