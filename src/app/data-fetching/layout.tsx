import Link from "next/link"

export default function DataFetchingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* <!-- The sidebar --> */}
        <div className="sidebar">
          <Link className="active" href="/data-fetching/client-side">client component</Link>
          <Link href="/data-fetching/server-side">server component</Link>
        </div>
   
        {children}
      </section>
    )
  }