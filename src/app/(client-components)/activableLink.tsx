'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './styles.module.css'

export default function ActivableLink({href, content}: { href: string, content: string}) {
    const pathname = usePathname()
    return <Link className={`${pathname === href ? styles.active : ''}`} href={href}>{content}</Link>
}