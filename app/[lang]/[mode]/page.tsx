import { Chat } from "@/components/chat";
import Completion from "@/components/modes/completion";
import { modes as ChatModes } from "@/lib/modes";
import { redirect } from "next/navigation";
const Page = ({ params: { lang, mode } }: any) => {
    switch (mode) {
        case ChatModes.complete.code:
            return <Completion lang={lang} mode={mode} />
        case ChatModes.explain.code:
            return <Completion explainMode={true} lang={lang} mode={mode} />
        case ChatModes.chat.code:
            return <Chat lang={lang} />
        default:
            redirect('/404')
            break;
    }
};
export default Page;