import languages from '@/languages'

const Recreation = ({ lang }: { lang: any }) => {
  return (
    <div className='grid grid-cols-1 gap-7 p-6 lg:px-8 max-w-7xl mx-auto items-center xl:mt-10'>
      <div className='grid xl:grid-cols-3 grid-cols-1 xl:mb-10 gap-x-7'>
        <div className='col-span-1'>
          <h3 className='lg:text-[40px] text-[28px] xl:mb-0 mb-4 font-bold leading-[120%]'>
            {languages.rathl[lang]}
          </h3>
        </div>
        <div className='lg:col-span-2 col-span-1'>
          <div
            className='text-base text-gray-500'
            dangerouslySetInnerHTML={{ __html: languages.rathlc[lang] }}
          />
        </div>
      </div>
      <div>
        <img src='/images/o_kompani.jpg' alt='o_kompani' className='rounded' />
      </div>
    </div>
  )
}

export default Recreation
