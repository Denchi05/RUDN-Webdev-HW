import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>Dencake</div>
        <nav className={styles.nav}>
          <a href="#catalog">Каталог</a>
          <a href="#instagram">Галерея</a>
          <a href="#reviews">Отзывы</a>
          <a href="#order">Заказ</a>
        </nav>
        <a className={styles.phone} href="tel:+78120000000">
          +7 (812) 000‑00‑00
        </a>
      </div>
    </header>
  )
}