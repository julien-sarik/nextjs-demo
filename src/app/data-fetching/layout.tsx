import ActivableLink from "../(client-components)/activableLink"

export default function DataFetchingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* <!-- The sidebar --> */}
        <div className="sidebar">
          <ActivableLink href="/data-fetching/client-side" content="client component"></ActivableLink>
          <ActivableLink href="/data-fetching/server-side" content="server component"></ActivableLink>
        </div>
   
        {children}
      </section>
    )
  }