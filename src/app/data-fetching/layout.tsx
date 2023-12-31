import SidebarLayout from "../(server-components)/sidebar-layout"

export default function DataFetchingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const links = [
      {href: "/data-fetching/client-side", content: "client component"},
      {href: "/data-fetching/server-side", content: "server component"}
    ]
    return (
      <SidebarLayout linksmetadata={links}>{children}</SidebarLayout>
    )
  }