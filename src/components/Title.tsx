const Title = ({
  title,
  subtitle,
  dark,
  lang,
}: {
  title?: string
  subtitle?: string
  dark?: boolean
  lang: any
}) => {
  return (
    <div className='text-center p-0 lg:px-8 max-w-7xl mx-auto mb-5'>
      <h3 className='lg:text-[40px] text-[28px] font-bold'>{title}</h3>
      <p className={`text-base ${dark ? 'text-[#2f2f2f]' : 'text-gray-500'}`}>{subtitle}</p>
    </div>
  )
}

export default Title
