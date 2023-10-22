'use client'

import useSWR from 'swr'
import styles from './styles.module.css'

const fetcher = (args: string) => fetch(args).then(res => res.json())

export default function Quote() {
    const { data, error, isLoading } = useSWR('https://ron-swanson-quotes.herokuapp.com/v2/quotes', fetcher)
    return <div className={styles.quote}>{data}</div>
}
