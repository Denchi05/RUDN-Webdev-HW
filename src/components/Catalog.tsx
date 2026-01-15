import { useState } from 'react'

interface Product {
  name: string
  desc: string
  price: number
  img: string
}

const products: Product[] = [
  {
    name: 'Клубничный чизкейк',
    desc: 'Нежный чизкейк с клубничным муссом и свежими ягодами.',
    price: 200,
    img: '/img/card-red-velvet.jpg',
  },
  {
    name: 'Черничный бриз',
    desc: 'Сочный черничный крем на бисквите и лёгкий аромат ванили.',
    price: 250,
    img: '/img/card-berry-mix.jpg',
  },
  {
    name: 'Карамельный крем',
    desc: 'Воздушный ванильный бисквит с карамельным соусом и кремом.',
    price: 300,
    img: '/img/card-blue-frost.jpg',
  },
  {
    name: 'Шоколадный фестиваль',
    desc: 'Интенсивный шоколадный вкус с хрустящими орешками.',
    price: 350,
    img: '/img/card-choco-frost.jpg',
  },
  {
    name: 'Фисташковая нежность',
    desc: 'Классическое сочетание фисташкового крема и ванильного кекса.',
    price: 400,
    img: '/img/card-milky-paradise.jpg',
  },
]

export interface CatalogProps {
  onTotalChange: (total: number) => void
}

export default function Catalog({ onTotalChange }: CatalogProps) {
  const [quantities, setQuantities] = useState<number[]>(products.map(() => 0))

  function updateTotal(qty: number[]) {
    const total = qty.reduce((sum, q, idx) => sum + q * products[idx].price, 0)
    onTotalChange(total)
  }

  function handleOrder(index: number) {
    const next = [...quantities]
    next[index] = next[index] + 1
    setQuantities(next)
    updateTotal(next)
  }

  function handleChange(index: number, delta: number) {
    const next = [...quantities]
    next[index] = Math.max(0, next[index] + delta)
    setQuantities(next)
    updateTotal(next)
  }

  return (
    <section id="catalog" className="section">
      <h2 className="section-title">Каталог десертов</h2>
      <div className="catalog-grid">
        {products.map((prod, i) => (
          <article key={i} className="card">
            <img src={prod.img} alt={prod.name} />
            <div className="card-body">
              <h3>{prod.name}</h3>
              <p className="card-price">{prod.price} ₽/шт.</p>
              <p className="card-text">{prod.desc}</p>
              {quantities[i] === 0 ? (
                <button className="btn btn-secondary" onClick={() => handleOrder(i)}>
                  Заказать
                </button>
              ) : (
                <>
                  <div className="quantity-controls">
                    <button className="btn btn-secondary" onClick={() => handleChange(i, -1)}>
                      −
                    </button>
                    <span>{quantities[i]}</span>
                    <button className="btn btn-secondary" onClick={() => handleChange(i, 1)}>
                      +
                    </button>
                  </div>
                  <p style={{ fontWeight: 'bold' }}>Итого: {quantities[i] * prod.price} ₽</p>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}