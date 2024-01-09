import { useEffect, useState } from 'react'
import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import CarouselGall from '@/components/CarouselGall'
import Comments from '@/components/Comments'
import Images from '@/components/Images'
import Lists from '@/components/Lists'
import Navbar from '@/components/Navbar'
import Payment from '@/components/Payment'
import Recreation from '@/components/Recreation'
import SendMessage from '@/components/SendMessage'
import Title from '@/components/Title'
import Visa from '@/components/Visa'
import YandexMap from '@/components/YandexMap'
import Head from 'next/head'
import languages from '@/languages'
// import { useRouter } from 'next/router'

export default function Home({
  token,
  id,
  merchant_key,
  url,
}: {
  token: string
  id: string
  merchant_key: string
  url: string
}) {
  // const router = useRouter()
  const [lang, setLang] = useState<any>(2)

  // useEffect(() => {
  //   router.replace('https://mirzamurod.uz/')
  // }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('langjoy')) setLang(window.localStorage.getItem('langjoy'))
      else window.localStorage.setItem('langjoy', lang)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Joy Travel</title>
        <link rel='icon' href='./images/icon.jpg' type='image/jpg' sizes='any' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content="Bizning sayohat ekspertlarimiz sizning xohishingiz va mablag'ingiz bo'yicha eng optimal yo'lovlar va sayohat paketlarini taqdim etishadi."
        />
        <link rel='apple-touch-icon' href='./images/icon.jpg' />
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MR75TW55');`,
            }}
          />
        )}
      </Head>
      <div>
        <Navbar lang={lang} setLang={setLang} />
        <Carousel lang={lang} />
        <div className='bgi md:bg-fixed' style={{ backgroundImage: 'url("/images/shap33.jpg")' }}>
          <SendMessage
            lang={lang}
            action={
              <Title
                lang={lang}
                title={languages.toatw[lang]}
                subtitle={languages.tatftltoiu[lang]}
                dark
              />
            }
            token={token}
            id={id}
          />
        </div>
        <Lists lang={lang} />
        <div className='bgi md:bg-fixed pt-14 pb-20' style={{ backgroundImage: 'url("/images/fon_tur.jpg")' }}>
          <div className='max-w-7xl mx-auto'>
            <Title lang={lang} title={languages.htatw[lang]} subtitle={languages.hutbutts[lang]} />
            <Card lang={lang} token={token} id={id} />
          </div>
        </div>
        <div className='bg-[#1f50a10d] py-20'>
          <Title lang={lang} title={languages.uttsu[lang]} />
          <Images lang={lang} />
        </div>
        <div className='py-20'>
          <Title lang={lang} title={languages.prn[lang]} />
          <Payment lang={lang} merchant_key={merchant_key} url={url} />
        </div>
        <Visa lang={lang} />
        <div className='pb-20'>
          <Recreation lang={lang} />
        </div>
        <div className='bgi md:bg-fixed' style={{ backgroundImage: 'url("/images/shap22.jpg")' }}>
          <SendMessage
            lang={lang}
            action={<Title lang={lang} title={languages.wylatfy[lang]} />}
            token={token}
            id={id}
          />
        </div>
        <div className='pb-20 pt-10'>
          <Title lang={lang} title={languages.photogallery[lang]} subtitle={languages.cotp[lang]} />
          <CarouselGall />
        </div>
        <Comments lang={lang} />
        <div className='bgi md:bg-fixed' style={{ backgroundImage: 'url("/images/shap33.jpg")' }}>
          <SendMessage
            lang={lang}
            action={<Title lang={lang} title={languages.luhyfat[lang]} />}
            token={token}
            id={id}
          />
        </div>
        <YandexMap lang={lang} token={token} id={id} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const token = process.env.TTOKEN
  const id = process.env.TID
  const merchant_key = process.env.PAYME_MERCHANT_KEY
  const url = process.env.SITE_URL

  return {
    props: { token, id, merchant_key, url },
  }
}
