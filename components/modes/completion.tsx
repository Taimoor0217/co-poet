'use client'
import React from "react";
import { InputPanel } from "@/components/input-panel";
import { EmptyScreen } from "@/components/empty-screen";
import { Message, useCompletion } from "ai/react";
import { ChatList } from "../chat-list";
import { cn } from '@/lib/utils'
import { ChatScrollAnchor } from "@/components/chat-scroll-anchor";
const CompleteOrExplain = ({explainMode, lang}: any) => {
    const {
        completion,
        input,
        stop,
        isLoading,
        handleInputChange,
        handleSubmit,
        setInput,
        complete,
    } = useCompletion({
        api: explainMode ? `/api/${lang}/explanation` :`/api/${lang}/completion`
    })
    const [prevInput, setPrevInput] = React.useState('')

    return (
        <>
            <div className={cn('pb-[200px] pt-4 md:pt-10')}>
                {completion ? (
                    <>
                        <ChatList messages={[
                            {
                                content: prevInput,
                                id: 'input',
                                role: "user"
                            },
                            {
                                content: completion,
                                id: 'completion',
                                role: "system"
                            }
                        ]} />
                        <ChatScrollAnchor trackVisibility={isLoading} />
                    </>
                ) : (
                    <EmptyScreen setInput={setInput} lang={lang} isLoading={isLoading} mode={explainMode ? 'explain' : 'complete'}/>
                )}
            </div>
            <InputPanel
                isChat={false}
                id={'completion'}
                isLoading={isLoading}
                stop={stop}
                onSubmit={(val: string)=>{
                    setPrevInput(val)
                    complete(val)
                }}
                input={input}
                onChange={setInput}
                reload={()=>complete(prevInput)}
                showReload={completion ? true : false}
            />
        </>
    )
}
export default CompleteOrExplain;
