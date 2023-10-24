import Navbar from './(main)/_components/navbar'
import Footer from './(main)/_components/footer'

export default function NotFound() {
  return (
    <section>
      <Navbar />
      <main className='min-h-screen p-6 md:p-12 container lg:max-w-7xl mx-auto shadow-xl bg-slate-200/[0.75]
      flex items-center justify-center'>
          <div className='text-center'>
          <h1 className="text-lg md:text-xl font-semibold">
              404 | This page could not be found.
          </h1>
          <small></small>
          </div>
      </main>
      <Footer />
    </section>
  )
}