import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Button from './Button'
import languages from '@/languages'

const YandexMap = ({ lang }: { lang: any }) => {
  const formSchema = Yup.object().shape({
    name: Yup.string().required(languages.required[lang]),
    phone: Yup.string().required(languages.required[lang]),
    agree: Yup.bool().required(languages.required[lang]).default(true),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm({ mode: 'onTouched', resolver: yupResolver(formSchema) })

  const onSubmit = (values: any) => {
    console.log(values)
    if (!values.agree) {
      setError('agree', { type: 'manual', message: languages.required[lang] })
    }
  }

  return (
    <YMaps>
      <div
        style={{ backgroundImage: 'url("/images/fon_tur.jpg")' }}
        className='bg-no-repeat bg-cover'
      >
        <div className='container p-6 lg:px-8 max-w-7xl mx-auto w-full'>
          <Map defaultState={{ center: [41.316429, 69.248387], zoom: 11 }} width='100%'>
            <Placemark geometry={[41.316429, 69.248387]} />
          </Map>
          <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-x-32 gap-x-16 mt-14'>
            <div>
              <h3 className='lg:text-[40px] font-bold text-[26px]'>{languages.contact[lang]}</h3>
              <p className='text-base text-gray-900 mt-1 mb-4 leading-[140%]'>
                {languages.yccuiacwooac[lang]}
              </p>
              <a href='tel:998' className='pt-4 text-xl block font-bold'>
                +998 98 888-00-94
              </a>
              <a href='mailto:' className='pt-4 text-base block'>
                info@musafirtour.uz
              </a>
              <p className='text-base text-gray-900 mt-4 leading-[140%]'>
                {languages.address[lang]}
              </p>
            </div>
            <div className='lg:mt-0 mt-10'>
              <h3 className='lg:text-[40px] font-bold text-[26px]'>{languages.request[lang]}</h3>
              <p className='text-base text-gray-500'>{languages.wwcys[lang]}</p>
              <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-4 mt-6'>
                <div className='col-span-1 grid grid-cols-1 gap-4'>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor='name'
                      className={`block mb-2 text-sm font-medium text-${
                        errors.name?.message ? 'red-700' : 'gray-500'
                      }`}
                    >
                      <span className='text-red-500'>*</span> {languages.name[lang]}
                    </label>
                    <input
                      type='text'
                      id='name'
                      {...register('name')}
                      placeholder={languages.name[lang]}
                      className={`text-sm rounded block w-full p-2.5 border ${
                        errors.name?.message
                          ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
                          : 'bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.name?.message ? (
                      <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor='phone'
                      className={`block mb-2 text-sm font-medium text-${
                        errors.phone?.message ? 'red-700' : 'gray-500'
                      }`}
                    >
                      <span className='text-red-500'>*</span> {languages.phonenumber[lang]}
                    </label>
                    <input
                      type='text'
                      id='phone'
                      {...register('phone')}
                      placeholder={languages.phonenumber[lang]}
                      className={`text-sm rounded block w-full p-2.5 border ${
                        errors.phone?.message
                          ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
                          : 'bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.phone?.message ? (
                      <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                        {errors.phone.message}
                      </p>
                    ) : null}
                  </div>
                  {/* Checkbox */}
                  <div className='col-span-1 mt-1 text-end'>
                    <input
                      id='checkbox'
                      type='checkbox'
                      {...register('agree')}
                      className='w-4 h-4 text-red-600 bg-gray-100 border-red-300 rounded'
                    />
                    <label htmlFor='checkbox' className='ms-2 text-sm font-medium text-gray-500'>
                      <span className='text-red-500'>*</span> {languages.agree[lang]}
                    </label>
                    {errors.agree?.message ? (
                      <p className='mt-2 text-sm text-red-600 block'>{errors.agree.message}</p>
                    ) : null}
                  </div>
                </div>
                <div className='col-span-1'>
                  <div className='mt-1 w-full'>
                    <Button className='w-full'>{languages.send[lang]}</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </YMaps>
  )
}

export default YandexMap
