import { useState } from 'react'
import Header from './components/Header/Header'
import Catalog from './components/Catalog'

export default function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <Header />

      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label">натуральные десерты</p>
            <h1>
              Панкейки и капкейки от 200 ₽/шт.
              <br />с доставкой по Санкт‑Петербургу
            </h1>
            <p className="hero-sub">
              Приготовим за 1 день для любого события. Доставка в удобное время.
            </p>
            <a href="#catalog" className="btn btn-primary">
              Перейти в каталог
            </a>
          </div>
          <div className="hero-image-wrap">
            <img
              src="/img/hero-cupcakes.jpg"
              alt="Панкейки"
              className="hero-image"
            />
          </div>
        </div>
      </header>

      <Catalog onTotalChange={setTotal} />

      <section className="section section-dark">
        <div className="two-cols">
          <div className="phone-mockup">
            <img
              src="/img/phone-mockup.png"
              alt="Панкейк на телефоне"
            />
          </div>
          <div className="section-text">
            <h2>Приготовим заказ любой сложности по фото или эскизу</h2>
            <p>
              Просто пришлите фотографию или рисунок, расскажите о своём празднике — и мы
              создадим индивидуальный десерт.
            </p>
            <a href="#order" className="btn btn-primary">
              Заказать по фото
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="two-cols">
          <div className="section-text">
            <h2>О кондитере</h2>
            <p>
              Лично приготовлю десерты и аккуратно упакую их, чтобы всё доехало целым и
              красивым.
            </p>
            <p>
              Опыт работы более 5 лет, использую только свежие продукты и проверенные
              рецепты.
            </p>
            <a href="#order" className="btn btn-secondary">
              Заказать сейчас
            </a>
          </div>
          <div className="about-photo">
            <img src="/img/confectioner.png" alt="Кондитер" />
          </div>
        </div>
      </section>

      <section id="reviews" className="section section-dark">
        <h2 className="section-title">Отзывы клиентов</h2>
        <div className="reviews">
          <article className="review-card">
            <p className="review-text">
              «Капкейки и панкейки оказались даже вкуснее, чем выглядели. Гости были в
              восторге!»
            </p>
            <div className="review-author">
              <img src="/img/review-avatar1.jpg" alt="Отзыв клиента 1" />
              <div>
                <p className="review-name">Ирина Петрова</p>
                <p className="review-meta">Заказ на день рождения</p>
              </div>
            </div>
          </article>
          <article className="review-card">
            <p className="review-text">
              «Заказала набор “Ванильное чудо”, всё привезли вовремя и очень
              вкусно!»
            </p>
            <div className="review-author">
              <img src="/img/review-avatar2.jpg" alt="Отзыв клиента 2" />
              <div>
                <p className="review-name">Анна Смирнова</p>
                <p className="review-meta">Корпоративный заказ</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="instagram" className="section">
        <h2 className="section-title">Наши работы</h2>
        <p className="section-subtitle">
          Посмотрите фото реальных заказов из нашего Instagram
        </p>
        <div className="gallery-grid">
          <img src="/img/gallery-1.jpg" alt="Фото 1" />
          <img src="/img/gallery-2.jpg" alt="Фото 2" />
          <img src="/img/gallery-3.jpg" alt="Фото 3" />
          <img src="/img/gallery-4.jpg" alt="Фото 4" />
          <img src="/img/gallery-5.jpg" alt="Фото 5" />
          <img src="/img/gallery-6.jpg" alt="Фото 6" />
          <img src="/img/gallery-7.jpg" alt="Фото 7" />
          <img src="/img/gallery-8.jpg" alt="Фото 8" />
          <img src="/img/gallery-9.jpg" alt="Фото 9" />
        </div>
      </section>

      <section id="order" className="section section-dark">
        <div className="order-inner">
          <h2>Сделать заказ</h2>
          <p>Укажите ваш телефон, мы перезвоним и уточним детали.</p>
          <p id="total-sum">Общая сумма: {total} ₽</p>
          <form
            className="order-form"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Спасибо за ваш заказ! Мы свяжемся с вами для уточнения деталей.')
            }}
          >
            <input type="tel" placeholder="+7 (___) ___‑__‑__" required />
            <button type="submit" className="btn btn-primary">
              Оформить заказ
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Dencake. Все права защищены.</p>
      </footer>
    </>
  )
}