import ActivableLink from "../(client-components)/activableLink"
import styles from './styles.module.css'

export default function DataFetchingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* <!-- The sidebar --> */}
        <div className={styles.sidebar}>
          <ActivableLink href="/data-fetching/client-side" content="client component"></ActivableLink>
          <ActivableLink href="/data-fetching/server-side" content="server component"></ActivableLink>
        </div>
   
        <div className={styles.content}>{children}</div>
      </section>
    )
  }