import { useState } from 'react'
import languages from '@/languages'
import Button from './Button'
import Modal from './Modal'

const Card = ({ lang }: { lang: any }) => {
  const [open, setOpen] = useState(false)

  const cards = [
    {
      id: 1,
      name: languages.egypt[lang],
      role: languages.egyptc[lang],
      imageUrl: '/images/t7.jpg',
    },
    {
      id: 2,
      name: languages.turkey[lang],
      role: languages.turkeyc[lang],
      imageUrl: '/images/t6.jpg',
    },
    {
      id: 3,
      name: languages.greece[lang],
      role: languages.greecec[lang],
      imageUrl: '/images/t4.jpg',
    },
    {
      id: 4,
      name: languages.dubai[lang],
      role: languages.dubaic[lang],
      imageUrl: '/images/t3.jpg',
    },
    {
      id: 5,
      name: languages.italy[lang],
      role: languages.italyc[lang],
      imageUrl: '/images/t2.jpg',
    },
    {
      id: 6,
      name: languages.maldives[lang],
      role: languages.maldivesc[lang],
      imageUrl: '/images/t1.jpg',
    },
  ]

  return (
    <ul
      role='list'
      className='mx-auto mt-20 px-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2'
    >
      {cards.map(card => (
        <li key={card.id} className='bg-white border px-8 rounded'>
          <div className='-translate-y-8'>
            <div className='overflow-hidden'>
              <img
                className='aspect-[3/2] rounded object-cover hover:scale-110 transition-all ease-in-out duration-1000'
                src={card.imageUrl}
                alt=''
              />
            </div>
            <h3 className='mt-6 text-lg text-center font-semibold leading-8 tracking-tight text-gray-900'>
              {card.name}
            </h3>
            <p className='text-base leading-7 text-gray-600'>{card.role}</p>
            <hr className='my-10' />
            <Button className='mt-2 w-full' onClick={() => setOpen(true)}>
              {languages.bookatour[lang]}
            </Button>
          </div>
        </li>
      ))}
      <Modal open={open} setOpen={setOpen} lang={lang} cards={cards} />
    </ul>
  )
}

export default Card
