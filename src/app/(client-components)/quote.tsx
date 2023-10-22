'use client'

import useSWR from 'swr'
import styles from './styles.module.css'

const fetcher = (args: string) => fetch(args).then(res => res.json())

export default function Quote() {
    const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_QUOTE_URL, fetcher)
    return <div className={styles.quote}>{data}</div>
}
