import ActivableLink from '../(client-components)/activableLink'
import styles from './styles.module.css'

export default function SidebarLayout({ linksmetadata, children }: 
    { linksmetadata: LinkMetadata[], children: React.ReactNode }) {
    const links = linksmetadata.map(link => 
        <ActivableLink key={link.href} href={link.href} content={link.content}/>
    )
    return     (
      <div>
        {/* <!-- The sidebar --> */}
        <nav className={styles.sidebar}>
          {links}
        </nav>
  
        <div className={styles.content}>{children}</div>
      </div>
    )
}

export interface LinkMetadata {
    content: string,
    href: string,
}