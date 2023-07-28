import { motion } from 'framer-motion';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';

export function EmptyScreen({ setInput, lang, mode, isLoading }: any) {
  const salutations: any = {
    'en': {
      heading: 'Welcome to Co-Poet!',
      subheading: {
        'complete': 'Unleash your creativity and finish the poem with your input!',
        'explain': 'Dont know the meaning of that poetry, let co-poet explain!',
        'chat': 'Chat with the AI on anything about poetry'
      }
    },
    'ur': {
      heading: 'کوپوئٹ میں خوش آمدید!',
      subheading: {
        'complete': 'اپنی تخلیق کو آزاد کریں اور پوری نظم کو اپنے ان پٹ کے ساتھ مکمل کریں!',
        'explain': 'AI کی مدد سے کسی بھی شاعر کا مفہوم سمجھیں!',
        'chat': 'ای ساتھ بات چیت کریں اور اس کے مشوروں سے متاثر ہوں!'
      }
    },
    'fa': {
      heading: 'به Co-Poet خوش آمدید!',
      subheading: {
        'complete': 'خلاقیت خود را رها کنید و شعر را با ورودی خود تکمیل دهید!',
        'explain': 'برای دریافت نتایج شخصی تر، خطوط خود را توضیح دهید!',
        'chat': 'با هوش مصنوعی گپ بزنید و از پیشنهادهای آن الهام بگیرید!'
      }
    },
    'es': {
      heading: '¡Bienvenido a Co-Poet!',
      subheading: {
        'complete': '¡Libera tu creatividad y completa el poema con tu entrada!',
        'explain': '¡Explica tus líneas para obtener resultados más personalizados!',
        'chat': '¡Chatea con la IA y déjate inspirar por sus sugerencias!'
      }
    },
  };
  

  const head: string = salutations[lang ?? "en"].heading;
  const subheading: string = salutations[lang ?? "en"].subheading[mode ?? "chat"];

  const direction = ["ur", "fa"].includes(lang) ? 'rtl' : 'ltr';
  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
      <CircularProgress />
    </div>
  }
  return (
    <div className="mx-auto max-w-2xl px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg border bg-background p-8"
        style={{ direction }}
      >
        <>
          <Typography variant="h3" style={{ fontSize: '2rem' }}>
            {head}
          </Typography>
          <Typography
            variant="h4"
            marginTop={5}
            style={{ fontSize: '1.2rem', color: '#888' }} // Add inline style to make the subheading grayed out
          >
            {subheading}
          </Typography>
        </>
      </motion.div>
    </div>
  );
}
