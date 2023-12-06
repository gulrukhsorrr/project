import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import languages from '@/languages'

const Images = ({ lang }: { lang: any }) => {
  const images = [
    { image: '/images/poi-kalyan.jpg', text: languages.bukhara[lang] },
    { image: '/images/ba50999f7f0001015388d5174b197a6a.jpg', text: languages.khiva[lang] },
    { image: '/images/img_1450_0.jpg', text: languages.kokand[lang] },
    { image: '/images/7502253.jpg', text: languages.shakhrisabz[lang] },
    { image: '/images/19060023.jpg', text: languages.karakalpakstan[lang] },
    { image: '/images/5e033f44cc065218928608.jpg', text: languages.ritmou[lang] },
    { image: '/images/scale_1200.webp', text: languages.samarkand[lang] },
  ]

  return (
    <div id='images' className='px-6'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Navigation, Autoplay]}
        className='p-6 lg:px-10 max-w-7xl mx-auto'
      >
        {images.map(image => (
          <SwiperSlide key={image.image} className=''>
            <div className='h-[298px]'>
              <img src={image.image} alt={image.text} className='w-full h-full object-cover' />
            </div>
            <h3 className='text-2xl text-red-500 font-bold text-center mt-5'>{image.text}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Images
