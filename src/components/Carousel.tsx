// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import languages from '@/languages'

const Carousel = ({ lang }: { lang: any }) => {
  const data = [
    {
      id: 1,
      title: languages.tte[lang],
      subtitle: languages.ttes[lang],
      image: '/images/55236166_2.jpg',
    },
    {
      id: 2,
      title: languages.rhitm[lang],
      subtitle: languages.rhitms[lang],
      image: '/images/55236164_2.jpg',
    },
    {
      id: 3,
      title: languages.ttc[lang],
      subtitle: languages.ttcs[lang],
      image: '/images/55217957_2.jpg',
    },
    {
      id: 4,
      title: languages.tti[lang],
      subtitle: languages.ttic[lang],
      image: '/images/fgs16.jpg',
    },
    {
      id: 5,
      title: languages.hid[lang],
      subtitle: languages.hids[lang],
      image: '/images/55236165_2.jpg',
    },
  ]

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      // autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      {data.map(item => (
        <SwiperSlide key={item.id}>
          <div
            className='bg-no-repeat bg-cover h-[100vh] sm:block hidden'
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <div className='mx-auto container grid sm:grid-cols-4 items-center h-full'>
              <div className='bg-white rounded p-10 pb-14 col-span-2 2xl:col-start-1 col-start-2'>
                <h2 className='lg:text-[40px] text-[28px] leading-[120%] font-bold text-red-500'>
                  {item.title}
                </h2>
                <div
                  className='text-[#2f2f2f] text-base'
                  dangerouslySetInnerHTML={{ __html: item.subtitle }}
                />
              </div>
            </div>
          </div>
          <div className='sm:hidden block'>
            <img src={item.image} alt={item.title} className='w-full h-52 object-cover' />
            <div className='bg-white rounded p-10 pb-0'>
              <h2 className='text-[28px] font-bold text-red-500'>{item.title}</h2>
              <div
                className='text-[#2f2f2f] text-base'
                dangerouslySetInnerHTML={{ __html: item.subtitle }}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
