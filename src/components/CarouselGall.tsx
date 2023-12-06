// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Navigation } from 'swiper/modules'

const CarouselGall = () => {
  const imaages = [
    { src: '/images/gal77.jpg', alt: 'gal77' },
    { src: '/images/gal33.jpg', alt: 'gal33' },
    { src: '/images/gal22.jpg', alt: 'gal22' },
    { src: '/images/gal55.jpg', alt: 'gal55' },
    { src: '/images/gal11.jpg', alt: 'gal11' },
    { src: '/images/gal66.jpg', alt: 'gal66' },
  ]

  return (
    <div className='container mx-auto p-6 lg:px-8 max-w-7xl'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 15 },
        }}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className='mySwiper'
      >
        {imaages.map(image => (
          <SwiperSlide key={image.src}>
            <img src={image.src} className='h-[533px] object-cover' alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselGall
