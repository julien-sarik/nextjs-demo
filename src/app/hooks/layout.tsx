import SidebarLayout from "../(server-components)/sidebar-layout"

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const links = [
      {href: "/hooks/useRef", content: "useRef"},
      {href: "/hooks/custom-hooks", content: "custom hooks"}
    ]
    return (
      <SidebarLayout linksmetadata={links}>{children}</SidebarLayout>
    )
}