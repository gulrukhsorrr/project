import languages from '@/languages'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useRouter } from 'next/router'
import { encode } from 'js-base64'
import { useState } from 'react'

const Payment = ({ lang }: { lang: any }) => {
  const formSchema = yup.object().shape({
    amount: yup.string().required(languages.required[lang]),
    email: yup.string().required(languages.required[lang]).email(),
    phone: yup.string().required(languages.required[lang]),
    comment: yup.string(),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm({ mode: 'onTouched', resolver: yupResolver(formSchema) })
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>()

  // https://checkout.paycom.uz/
  // https://checkout.paycom.uz/base64(m=587f72c72cac0d162c722ae2;ac.order_id=197;a=500;c=callback_url)
  const key = process.env.TEST_KEY
  const url = process.env.SITE_URL

  const onSubmit = async (values: any) => {
    setLoading(true)
    await axios({ url: '/api/adduser', method: 'post', data: values })
      .then(res => {
        setLoading(false)
        if (res?.data?.success) {
          router.replace(
            `https://checkout.paycom.uz/${encode(
              `m=${key};ac.order=${res.data._id};a=${res.data.amount}`
            )}`
          )
        }
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full'>
        <form
          className='space-y-6 p-6 pt-0 lg:px-8 max-w-5xl mx-auto'
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* amount */}
          <div>
            <label
              htmlFor='amount'
              className={`block mb-2 text-sm font-medium text-${
                errors.amount?.message ? 'red-700' : 'gray-500'
              }`}
            >
              <span className='text-red-500'>*</span> {languages.pac[lang]}
            </label>
            <div className='mt-2'>
              <input
                id='amount'
                type='text'
                {...register('amount')}
                placeholder={languages.pac[lang]}
                className={`text-sm rounded block w-full p-2.5 border ${
                  errors.amount?.message
                    ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
                    : 'bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
              {errors.amount?.message ? (
                <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                  {errors.amount.message}
                </p>
              ) : null}
            </div>
          </div>
          {/* email */}
          <div>
            <label
              htmlFor='email'
              className={`block mb-2 text-sm font-medium text-${
                errors.email?.message ? 'red-700' : 'gray-500'
              }`}
            >
              <span className='text-red-500'>*</span> {languages.email[lang]}
            </label>
            <div className='mt-2'>
              <input
                id='email'
                type='email'
                {...register('email')}
                placeholder={languages.email[lang]}
                className={`text-sm rounded block w-full p-2.5 border ${
                  errors.email?.message
                    ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
                    : 'bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
              {errors.email?.message ? (
                <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                  {errors.email.message}
                </p>
              ) : null}
            </div>
          </div>
          {/* phone */}
          <div>
            <label
              htmlFor='phone'
              className={`block mb-2 text-sm font-medium text-${
                errors.phone?.message ? 'red-700' : 'gray-500'
              }`}
            >
              <span className='text-red-500'>*</span> {languages.phonenumber[lang]}
            </label>
            <div className='mt-2'>
              <input
                id='phone'
                type='text'
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
          </div>
          {/* comment */}
          <div>
            <label htmlFor='comment' className='block text-sm font-medium leading-6 text-gray-900'>
              {languages.comment[lang]}
            </label>
            <div className='mt-2'>
              <textarea
                rows={4}
                id='comment'
                {...register('comment')}
                placeholder={languages.comment[lang]}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3'
              />
            </div>
          </div>
          {/* payment */}
          <p>{languages.ycpw[lang]}</p>
          <img src='/images/payme.png' alt='payme' className='border mt-4 border-black' />
          <div>
            <button
              type='submit'
              className='flex justify-center rounded bg-red-600 px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
            >
              {loading ? (
                <div role='status'>
                  <svg
                    aria-hidden='true'
                    className='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                  <span className='sr-only'>Loading...</span>
                </div>
              ) : (
                languages.pay[lang]
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Payment
