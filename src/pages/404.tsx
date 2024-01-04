export default function ErrorPage() {
  return (
    <main className='flex h-[100vh] place-items-center bg-white justify-center content-center w-full'>
      <div className='text-center'>
        <p className='text-base font-semibold text-indigo-600'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </main>
  )
}
