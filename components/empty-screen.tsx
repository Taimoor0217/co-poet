import { UseChatHelpers } from 'ai/react'
import Options from '@/components/options'

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-5">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-xl font-semibold">
          Welcome to Co-Poet!
          <p className="text-sm leading-normal text-muted-foreground">
            Bienvenido a Co-Poet!
          </p>
        </h1>
        <h1 className="mb-2 text-lg font-semibold" dir="rtl" lang="ar">
          کوپوئٹ میں خوش آمدید !
          <p dir="rtl" lang="ar" className="text-sm leading-normal text-muted-foreground">
            خوش آمدید به کو پوت !
          </p>
        </h1>
        <Options />
      </div>
    </div>
  )
}
