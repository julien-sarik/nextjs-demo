'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ActivableLink({href, content}: { href: string, content: string}) {
    const pathname = usePathname()
    return <Link className={`${pathname === '/' ? 'active' : ''}`} href={href}>{content}</Link>
}