import languages from '@/languages'
import Link from 'next/link'

const Payment = ({ lang }: { lang: any }) => {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full'>
        {/* <form className='space-y-6 p-6 pt-0 lg:px-8 max-w-5xl mx-auto'> */}
        {/* sum */}
        {/* <div>
            <label htmlFor='sum' className='block text-sm font-medium leading-6 text-gray-900'>
              <span className='text-red-500'>*</span> {languages.pac[lang]}
            </label>
            <div className='mt-2'>
              <input
                id='sum'
                name='sum'
                type='text'
                placeholder={languages.pac[lang]}
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3'
              />
            </div>
          </div> */}
        {/* email */}
        {/* <div>
            <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
              <span className='text-red-500'>*</span> {languages.email[lang]}
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                placeholder={languages.email[lang]}
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3'
              />
            </div>
          </div> */}
        {/* phone */}
        {/* <div>
            <label htmlFor='phone' className='block text-sm font-medium leading-6 text-gray-900'>
              <span className='text-red-500'>*</span> {languages.phonenumber[lang]}
            </label>
            <div className='mt-2'>
              <input
                id='phone'
                name='phone'
                type='tel'
                placeholder={languages.phonenumber[lang]}
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3'
              />
            </div>
          </div> */}
        {/* comment */}
        {/* <div>
            <label htmlFor='comment' className='block text-sm font-medium leading-6 text-gray-900'>
              {languages.comment[lang]}
            </label>
            <div className='mt-2'>
              <textarea
                rows={4}
                name='comment'
                id='comment'
                placeholder={languages.comment[lang]}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3'
              />
            </div>
          </div> */}
        {/* payment */}
        {/* <p>{languages.ycpw[lang]}</p>
          <Link href='/payment'>
            <img src='/images/payme.png' alt='payme' className='border mt-4 border-black' />
          </Link>
          <div>
            <button
              type='submit'
              className='flex justify-center rounded bg-red-600 px-6 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
            >
              {languages.pay[lang]}
            </button>
          </div> */}
        <form method='POST' action='https://test.paycom.uz'>
          <input type='hidden' name='merchant' value='6566dfdc94dc4293bdd3f3dd' />

          <input type='hidden' name='amount' value='5000' />

          <input type='hidden' name='account[{field_name}]' value='{field_value}' />

          <input type='hidden' name='lang' value='uz' />
          <input type='hidden' name='callback' value='https://joy-travel.uz/' />

          {/* <input type='hidden' name='callback_timeout' value='{miliseconds}' /> */}

          {/* <input type='hidden' name='description' value='{Описание платежа}' /> */}

          {/* <input type='hidden' name='detail' value='{JSON объект детализации в BASE64}' /> */}

          <button type='submit'>
            Оплатить с помощью <b>Payme</b>
          </button>
        </form>
        {/* </form> */}
      </div>
    </div>
  )
}

export default Payment
