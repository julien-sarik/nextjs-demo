import styles from './styles.module.css'

export default function Quote({quote}: {quote: string}) {
  return <div className={styles.quote}>{quote}</div>
}
