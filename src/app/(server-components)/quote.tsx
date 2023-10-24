import styles from './styles.module.css'

export default function Quote({quote}: {quote: string | null}) {
  return <div className={styles.quote}>{quote}</div>
}
