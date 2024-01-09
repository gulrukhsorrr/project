import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import Link from 'next/link'
import languages from '@/languages'
import { Bars3Icon } from '@heroicons/react/20/solid'

export default function Navbar({
  lang,
  setLang,
}: {
  lang: any
  setLang: (value: number | string) => void
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: languages.aboutus[lang], href: '#' },
    { name: languages.tatw[lang], href: '#' },
    { name: languages.ttu[lang], href: '#' },
    { name: languages.viu[lang], href: '#' },
    { name: languages.photogallery[lang], href: '#' },
    { name: languages.reviews[lang], href: '#' },
    { name: languages.contact[lang], href: '#' },
    { name: languages.aop[lang], href: '#' },
    // { name: 'Сертификаты №8', href: '#' },
  ]

  const changeLang = (lang: string) => {
    if (typeof window !== 'undefined') {
      setLang(lang)
      window.localStorage.setItem('langjoy', lang)
    }
  }

  return (
    <header className='bg-white'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto'
        aria-label='Global'
      >
        <div className='flex lg:flex-1 w-full'>
          <Link
            href='/'
            className='-m-1.5 p-1.5 text-xl font-bold flex md:justify-normal justify-around items-center md:w-auto w-full'
          >
            <img src='/images/logo.jpg' alt='logo' className='mr-1 w-20 h-10 -mb-1.5' />
            <div>
              JOY-TRAVEL.UZ
              <span className='block text-xs font-normal'>{languages.lmtft[lang]}</span>
            </div>
          </Link>
        </div>
        <div className='md:flex hidden mr-4 items-center'>
          <a href='tel:998950990777' className='mr-4'>
            +998 95 099-07-77
          </a>
          <Link
            href='tel:998950990777'
            className='mr-4 rounded px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-red-600 bg-red-50 focus-visible:outline-red-50'
          >
            {languages.request[lang]}
          </Link>
          <div className='items-center flex'>
            <img
              src='/images/uz.png'
              alt='uz'
              className='mr-2 hover:cursor-pointer'
              onClick={() => changeLang('2')}
            />
            <img
              src='/images/en.png'
              alt='en'
              className='mr-2 hover:cursor-pointer'
              onClick={() => changeLang('0')}
            />
            <img
              src='/images/ru.png'
              alt='ru'
              className='mr-2 hover:cursor-pointer'
              onClick={() => changeLang('1')}
            />
          </div>
        </div>
        {/* <div className='md:hidden flex'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div> */}
      </nav>
      <div className='md:hidden flex flex-col'>
        <div className='flex justify-around items-center'>
          <a href='tel:998950990777' className='mr-4'>
            +998 95 099-07-77
          </a>
          <Link
            href='tel:998950990777'
            className='mr-4 rounded px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-red-600 bg-red-50 focus-visible:outline-red-50'
          >
            {languages.request[lang]}
          </Link>
        </div>
        <div className='items-center flex justify-center my-4'>
          <img
            src='/images/uz.png'
            alt='uz'
            className='mr-2 hover:cursor-pointer'
            onClick={() => changeLang('2')}
          />
          <img
            src='/images/en.png'
            alt='en'
            className='mr-2 hover:cursor-pointer'
            onClick={() => changeLang('0')}
          />
          <img
            src='/images/ru.png'
            alt='ru'
            className='mr-2 hover:cursor-pointer'
            onClick={() => changeLang('1')}
          />
        </div>
      </div>
      <Dialog as='div' className='' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          {/* <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div> */}
          <div className='sm:hidden block mr-4 mt-4 items-center'>
            <div className='mb-4 flex flex-col'>
              <a href='tel:998950990777' className='mr-4'>
                +998 95 099-07-77
              </a>
              <Button variant='text' className='mt-4'>
                {languages.request[lang]}
              </Button>
            </div>
            <div className='items-center mt-4'></div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
