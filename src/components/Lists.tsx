import languages from '@/languages'

const Lists = ({ lang }: { lang: any }) => {
  const lists = [
    {
      id: 1,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          // width='32'
          // height='32'
          viewBox='0 0 64 64'
          fill='currentColor'
        >
          <path d='M12 42c.6 0 1-.4 1-1V26c0-.6.4-1 .9-1h32.3c.5 0 .9.4.9 1v4c0 .6.5 1 1 1 .6 0 1-.4 1-1v-4c0-1.7-1.2-3-2.6-3H30c0-2.8-2.2-5-5-5s-5 2.2-5 5h-6.4c-1.4 0-2.6 1.3-2.6 3v15c0 .6.5 1 1 1zm13-22c1.7 0 3 1.3 3 3h-6c0-1.7 1.3-3 3-3zM11 45a1 1 0 1 0 2 0 1 1 0 1 0-2 0zm37 2c-.6 0-1 .4-1 1v4c0 .6-.4 1-.9 1H13.9c-.5 0-.9-.4-.9-1v-3c0-.6-.5-1-1-1-.6 0-1 .4-1 1v3c0 1.7 1.2 3 2.6 3h32.8c1.4 0 2.6-1.3 2.6-3v-4c0-.6-.5-1-1-1zm-5-14c-3.3 0-6 2.7-6 6s2.7 6 6 6h10V33H43zm8 10h-8c-2.2 0-4-1.8-4-4s1.8-4 4-4h8v8zm-9.5-4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0zM37 19c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z'></path>
        </svg>
      ),
      title: languages.tourprices[lang],
      subtitle: languages.tlpit[lang],
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          // width='64'
          // height='64'
          viewBox='0 0 64 64'
          fill='currentColor'
        >
          <path d='M18 21a1 1 0 1 0 2 0 1 1 0 1 0-2 0zm25-8H21c-1.7 0-3 1.3-3 3v1c0 .6.4 1 1 1s1-.4 1-1v-1c0-.6.4-1 1-1h22c.6 0 1 .5 1 1v32c0 .6-.4 1-1 1H21c-.6 0-1-.5-1-1V25c0-.6-.4-1-1-1s-1 .4-1 1v23c0 1.6 1.3 3 3 3h22c1.7 0 3-1.3 3-3V16c0-1.7-1.3-3-3-3zm-5.2 8.5C36.3 20 34.3 19 32 19c-4.4 0-8 3.6-8 8s3.6 8 8 8c3.4 0 6.2-2.1 7.4-5 0-.1.1-.1.1-.2l.1-.2c0-.1.1-.2.1-.4l.1-.4c.2-.5-.1-1.1-.6-1.3-.5-.2-1.1.1-1.3.6l-.2.9c-.8 2.3-3 4-5.7 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.7 0 3.3.7 4.4 1.9l.6.7c.4.4 1 .5 1.4.1.4-.4.5-1 .1-1.4l-.4-.5-.3-.3zM25 41h14c.6 0 1-.4 1-1s-.4-1-1-1H25c-.6 0-1 .4-1 1s.4 1 1 1zm2 2c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1H27zM13.2 28.3c-.4-.4-1-.4-1.4 0l-3.5 3.5c-.1.1-.1.1-.1.2-.3.4-.2.9.1 1.2l3.5 3.5c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-2.8-2.8 2.8-2.8c.4-.4.4-1.1 0-1.4zM55.9 32c0-.1-.1-.1-.1-.2l-3.5-3.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.8 2.8-2.8 2.8c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l3.5-3.5c.3-.3.3-.8.1-1.2z'></path>
        </svg>
      ),
      title: languages.uniquetours[lang],
      subtitle: languages.csoht[lang],
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          // width='64'
          // height='64'
          viewBox='0 0 64 64'
          fill='currentColor'
        >
          <path d='M11 45a1 1 0 1 0 2 0 1 1 0 1 0-2 0zm39.003-22H41v-3.003A3.006 3.006 0 0 0 37.993 17H26.007A3.001 3.001 0 0 0 23 19.997V23h-9.003A3 3 0 0 0 11 25.993V41a1 1 0 1 0 2 0V25.993a1 1 0 0 1 .997-.993h36.006a.996.996 0 0 1 .997.993V36H39.938v.002a1 1 0 0 0 0 1.996V38H51v13.007a1 1 0 0 1-.997.993H13.997a.996.996 0 0 1-.997-.993V49a1 1 0 1 0-2 0v2.007A2.996 2.996 0 0 0 13.997 54h36.006A3 3 0 0 0 53 51.007V25.993A2.996 2.996 0 0 0 50.003 23zM39 23H25v-3.003A1.001 1.001 0 0 1 26.007 19h11.986a1.006 1.006 0 0 1 1.007.997zM13 36v2h11.062v-.002a1 1 0 0 0 0-1.996V36zm24 1a5 5 0 1 0-5 5 5 5 0 0 0 5-5zm-8 0a3 3 0 1 1 3 3 3 3 0 0 1-3-3z'></path>
        </svg>
      ),
      title: languages.years10[lang],
      subtitle: languages.rcrr[lang],
    },
  ]

  return (
    <div className='bg-white py-16'>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 px-6 grid-cols-1 max-w-7xl mx-auto lg:justify-items-center'>
        {lists.map(list => (
          <div className='flex lg:my-0 my-4 col-span-1' key={list.id}>
            <div className='flex-shrink-0 self-center p-[18px] mr-[30px] bg-gray-100 rounded-full'>
              <div className='w-8 h-8 overflow-hidden flex justify-center'>{list.icon}</div>
            </div>
            <div>
              <h4 className='text-2xl font-bold'>{list.title}</h4>
              <p className='mt-1 text-base'>{list.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lists
