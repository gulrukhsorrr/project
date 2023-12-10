import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import Link from 'next/link'
import languages from '@/languages'

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

  return (
    <header className='bg-white'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5 text-xl font-bold flex items-center'>
            <img src='/images/logo.jpg' alt='logo' className='mr-1 w-20 h-10 -mb-1.5' />
            <div>
              JOY-TRAVEL.UZ
              <span className='block text-xs font-normal'>{languages.lmtft[lang]}</span>
            </div>
          </Link>
        </div>
        <div className='sm:flex hidden mr-4 items-center'>
          <a href='tel:998974420308' className='mr-4'>
            +998 97 442-03-08
          </a>
          <Button variant='text' className='mr-4'>
            {languages.request[lang]}
          </Button>
          <div className='items-center'>
            <select
              id='language'
              name='language'
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6'
              value={lang}
              onChange={e => {
                setLang(e.target.value)
                window.localStorage.setItem('langjoy', e.target.value)
              }}
            >
              <option value='2'>Uz</option>
              <option value='1'>Ru</option>
              <option value='0'>Eng</option>
            </select>
          </div>
        </div>
        <div className='flex'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
      </nav>
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
          <div className='mt-6 flow-root'>
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
          </div>
          <div className='sm:hidden block mr-4 items-center'>
            <div className='mb-4'>
              <a href='tel:998974420308' className='mr-4'>
                +998 97 442-03-08
              </a>
              <Button variant='text'>{languages.request[lang]}</Button>
            </div>
            <div className='items-center'>
              <select
                id='language'
                name='language'
                className='block w-20 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6'
                value={lang}
                onChange={e => {
                  setLang(e.target.value)
                  window.localStorage.setItem('langjoy', e.target.value)
                }}
              >
                <option value='2'>Uz</option>
                <option value='1'>Ru</option>
                <option value='0'>Eng</option>
              </select>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
