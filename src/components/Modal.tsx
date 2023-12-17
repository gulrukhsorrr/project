import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import languages from '@/languages'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import DatePicker from 'react-datepicker'
import { XMarkIcon } from '@heroicons/react/20/solid'
import 'react-datepicker/dist/react-datepicker.css'
import Notification from './Notification'

interface ICards {
  id: number
  name: string
  role: string
}

export default function Modal({
  lang,
  cards,
  open,
  setOpen,
  data,
  setData,
  token,
  id,
}: {
  lang: any
  cards: ICards[]
  open: boolean
  setOpen: (value: boolean) => void
  data: any
  setData: (value: any) => void
  token: string
  id: string
}) {
  const formSchema = yup.object().shape({
    name: yup.string(),
    country: yup.string(),
    travel_date: yup.string(),
    adults: yup.string(),
    children: yup.string(),
    babies: yup.string(),
    phone: yup.string().required(languages.required[lang]),
    agree: yup.bool().required(languages.required[lang]).default(true),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(formSchema),
    defaultValues: { agree: true, country: '', children: '', babies: '', adults: String(1) },
  })
  const [startDate, setStartDate] = useState<Date>()
  const [show, setShow] = useState(false)

  // https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&text=Hello world

  const cancel = () => {
    setOpen(false)
    setData(null)
    setValue('name', '')
    setValue('country', '')
    setValue('adults', '1')
    setValue('children', '')
    setValue('babies', '')
    setValue('phone', '')
  }

  const onSubmit = (values: any) => {
    if (!values.agree) setError('agree', { type: 'manual', message: languages.required[lang] })
    else {
      let my_text = `
Ism: ${values.name || ''} %0A
Mamlakat: ${values.country || ''} %0A
Sana: ${
        startDate
          ? startDate?.getFullYear() +
            '/' +
            (Number(startDate?.getMonth()) + 1) +
            '/' +
            startDate?.getDate()
          : ''
      } %0A
Kattalar: ${values.adults || ''} %0A
Yosh bolalar: ${values.children || ''} %0A
Chaqaloqlar: ${values.babies || ''} %0A
Telefon raqam: ${values.phone} %0A`

      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${my_text}` // &parse_mode = html => teglarini my_text ichida ishlatishga yordam beradi. Lekin ishlamadi warning ham bermadi!!!
      let api = new XMLHttpRequest()
      api.open('GET', url, true)
      api.send()
      cancel()
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 3000)
    }
  }
  const cancelButtonRef = useRef(null)

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <form
            className='fixed inset-0 z-10 w-screen overflow-y-auto'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg sm:my-8'>
                  <div className='absolute right-0 top-0 pr-4 pt-4 sm:block'>
                    <button
                      type='button'
                      className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      onClick={() => setOpen(false)}
                    >
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                  <div>
                    <img src='/images/fon_turf1.jpg' alt='fon_turf1.png' />
                  </div>
                  <h3 className='mt-6 text-lg text-center font-semibold leading-8 tracking-tight text-gray-900'>
                    {languages.bookatour[lang]}
                  </h3>
                  <p className='text-base text-gray-500 text-center'>{languages.etdoac[lang]}</p>
                  <div className='px-4 pb-4 pt-5 sm:p-6'>
                    <div className='space-y-6'>
                      {/* name */}
                      <div>
                        <label
                          htmlFor='name'
                          className='block mb-2 text-sm font-medium text-gray-500'
                        >
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
                      {/* country */}
                      <div>
                        <label
                          htmlFor='country'
                          className='block text-sm font-medium leading-6 text-gray-500'
                        >
                          {languages.cac[lang]}
                        </label>
                        <select
                          id='country'
                          placeholder={languages.cac[lang]}
                          {...register('country')}
                          className='mt-2 block w-full rounded border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        >
                          {cards.map(card => (
                            <option key={card.id} value={card.name}>
                              {card.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* date */}
                      <div>
                        <label
                          htmlFor='date'
                          className='block text-sm font-medium leading-6 text-gray-500'
                        >
                          {languages.traveldate[lang]}
                        </label>
                        <DatePicker
                          className='mt-2 block w-full rounded border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          dateFormat='yyyy/MM/dd'
                          minDate={new Date()}
                          closeOnScroll={true}
                          selected={startDate}
                          onChange={date => setStartDate(date!)}
                        />
                      </div>
                      {/* adults */}
                      <div>
                        <label
                          htmlFor='adults'
                          className='block text-sm font-medium leading-6 text-gray-500'
                        >
                          {languages.adults[lang]}
                        </label>
                        <select
                          id='adults'
                          placeholder={languages.adults[lang]}
                          {...register('adults')}
                          className='mt-2 block w-full rounded border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        >
                          {[...new Array(10)].map((_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* children */}
                      <div>
                        <label
                          htmlFor='children'
                          className='block text-sm font-medium leading-6 text-gray-500'
                        >
                          {languages.children[lang]}
                        </label>
                        <select
                          id='children'
                          placeholder={languages.children[lang]}
                          {...register('children')}
                          className='mt-2 block w-full rounded border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        >
                          {[...new Array(10)].map((_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* babies */}
                      <div>
                        <label
                          htmlFor='babies'
                          className='block text-sm font-medium leading-6 text-gray-500'
                        >
                          {languages.babies[lang]}
                        </label>
                        <select
                          id='babies'
                          placeholder={languages.babies[lang]}
                          {...register('babies')}
                          className='mt-2 block w-full rounded border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        >
                          {[...new Array(10)].map((_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          ))}
                        </select>
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
                        <label
                          htmlFor='checkbox'
                          className='ms-2 text-sm font-medium text-gray-500'
                        >
                          <span className='text-red-500'>*</span> {languages.agree[lang]}
                        </label>
                        {errors.agree?.message ? (
                          <p className='mt-2 text-sm text-red-600 block'>{errors.agree.message}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                      <button
                        type='submit'
                        className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                      >
                        {languages.send[lang]}
                      </button>
                      <button
                        type='button'
                        className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                        onClick={() => cancel()}
                        ref={cancelButtonRef}
                      >
                        {languages.cancel[lang]}
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </form>
        </Dialog>
      </Transition.Root>
      <Notification show={show} setShow={setShow} lang={lang} />
    </div>
  )
}
