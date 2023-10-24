import Navbar from './_components/navbar'
import Footer from './_components/footer'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
        <div className="[&>.container]:dark:bg-slate-900">
          {children}
        </div>
      <Footer />
    </section>
  )
}
