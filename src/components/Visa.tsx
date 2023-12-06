import languages from '@/languages'

const Visa = ({ lang }: { lang: any }) => {
  return (
    <div className='bg-[#ff2d3e1a]'>
      <div className='sm:p-14 md:px-8 max-w-7xl container mx-auto lg:relative p-6'>
        <div className='block lg:absolute lg:w-[46%] w-full right-0 top-7 bottom-7 h-full -z-10'>
          <img src='/images/viza.jpg' className='rounded-lg lg:h-[89%]' />
        </div>
        <div className='bg-white rounded-lg p-10 lg:w-7/12 z-10'>
          <h3 className='lg:text-[40px] text-[28px] font-bold'>{languages.viu[lang]}</h3>
          <div
            className='text-base text-gray-500'
            dangerouslySetInnerHTML={{ __html: languages.viuc[lang] }}
          />
        </div>
      </div>
    </div>
  )
}

export default Visa
