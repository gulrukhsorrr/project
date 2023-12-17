import { ReactNode, useState } from 'react'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import languages from '@/languages'
import Notification from './Notification'

const SendMessage = ({
  action,
  lang,
  token,
  id,
}: {
  action?: ReactNode
  lang: any
  token: string
  id: string
}) => {
  const formSchema = Yup.object().shape({
    name: Yup.string(),
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
  const [show, setShow] = useState(false)

  const onSubmit = (values: any) => {
    if (!values.agree) setError('agree', { type: 'manual', message: languages.required[lang] })
    else {
      let my_text = `
Ism: ${values.name || ''} %0A
Telefon raqam: ${values.phone || ''} %0A`

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${my_text}` // &parse_mode = html => teglarini my_text ichida ishlatishga yordam beradi. Lekin ishlamadi warning ham bermadi!!!
      let api = new XMLHttpRequest()
      api.open('GET', url, true)
      api.send()
      setShow(true)
      setValue('name', '')
      setValue('phone', '')
      setTimeout(() => {
        setShow(false)
      }, 3000)
    }
  }

  return (
    <form className='p-6 lg:py-14 lg:px-8 max-w-7xl mx-auto' onSubmit={handleSubmit(onSubmit)}>
      {action}
      <div className='mb-6 bg-white p-8 pb-14 rounded'>
        <div className='grid lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-2 grid lg:grid-cols-2 gap-4'>
            {/* Name */}
            <div>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-500'>
                {languages.name[lang]}
              </label>
              <input
                type='text'
                id='name'
                {...register('name')}
                className='bg-gray-50 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder={languages.name[lang]}
              />
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
            <div className='lg:col-span-2 mt-7 text-end'>
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
            <div className='mt-7 w-full'>
              <Button className='w-full'>{languages.pick[lang]}</Button>
            </div>
          </div>
        </div>
      </div>
      <Notification show={show} setShow={setShow} lang={lang} />
    </form>
  )
}

export default SendMessage
