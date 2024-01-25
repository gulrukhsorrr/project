// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Navigation } from 'swiper/modules'
import Title from './Title'
import languages from '@/languages'

const Comments = ({ lang }: { lang: any }) => {
  const comments = [
    {
      userImage: '/images/otziv1.png',
      userName: 'Shahlo Umarova',
      comment:
        '<p>Мы с супругом много путешествуем и всегда от разных туроператоров. После того, как приобрели тур в <b>JOY TRAVEL</b>, обращаемся только туда. Так как уверены, что отдых будет нам обеспечен на лучшем уровне. Спасибо за чуткое внимательное отношение, доброжелательность и оперативность.</p>',
    },
    {
      userImage: '/images/otziv14.png',
      userName: 'Komil Haydarov',
      comment:
        '<p>Вчера вернулись из Турции. Путешествие удалось на славу!! Спасибо Вам большие! За отличное предложение , за своевременное оперативное участие!Все наши пожелания были учтены и реализованы !!! Увидели страну, прекрасно отдохнули!!!</p>',
    },
    {
      userImage: '/images/otziv6.png',
      userName: 'Anna Kraich',
      comment:
        '<p>Привет всем! С удовольствием напишу об этой незабываемой, одной из лучших моих поездок! Послевкусие!!!! Вот что до сих пор обволакивает сознание! Великолепная организация тура, начиная с перелетов. Удобно , качественно, не утомительно. Одни восторги, спасибо огромное JOY TRAVEL!!!</p>',
    },
  ]

  return (
    <div className='bg-[#1f50a10d] py-10' id='reviews'>
      <Title lang={lang} title={languages.ffoc[lang]} />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1, spaceBetween: 15 },
          1024: { slidesPerView: 2, spaceBetween: 15 },
        }}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className='container mx-auto p-6 lg:px-8 max-w-7xl mySwiper h-full items-stretch'
      >
        {comments.map(comment => (
          <SwiperSlide key={comment.userName} className='h-full py-14 p-6'>
            <div className='h-full relative'>
              <img
                src={comment.userImage}
                className='rounded-full border-[6px] border-white absolute -top-14 left-[39%]'
                alt={comment.userName}
              />
              <div className='bg-white text-center rounded px-12 pb-10 pt-16 h-full bottom-0'>
                <h5 className='text-[#2f2f2f] text-xl font-bold leading-[150%] my-5'>
                  {comment.userName}
                </h5>
                <div dangerouslySetInnerHTML={{ __html: comment.comment }} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Comments
