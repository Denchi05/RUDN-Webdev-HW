const products = [
  {
    name: 'Клубничный чизкейк',
    desc: 'Нежный чизкейк с клубничным муссом и свежими ягодами.',
    price: 200,
    img: 'img/card-red-velvet.jpg'
  },
  {
    name: 'Черничный бриз',
    desc: 'Сочный черничный крем на бисквите и лёгкий аромат ванили.',
    price: 250,
    img: 'img/card-berry-mix.jpg'
  },
  {
    name: 'Карамельный крем',
    desc: 'Воздушный ванильный бисквит с карамельным соусом и кремом.',
    price: 300,
    img: 'img/card-blue-frost.jpg'
  },
  {
    name: 'Шоколадный фестиваль',
    desc: 'Интенсивный шоколадный вкус с хрустящими орешками.',
    price: 350,
    img: 'img/card-choco-frost.jpg'
  },
  {
    name: 'Фисташковая нежность',
    desc: 'Классическое сочетание фисташкового крема и ванильного кекса.',
    price: 400,
    img: 'img/card-milky-paradise.jpg'
  }
];

const quantities = products.map(() => 0);

function updateTotal() {
  const total = quantities.reduce((sum, qty, i) => sum + qty * products[i].price, 0);
  document.getElementById('total-sum').textContent = `Общая сумма: ${total} ₽`;
}

function renderCard(i) {
  const prod = products[i];
  const card = document.querySelector(`#card-${i}`);
  card.innerHTML = '';
  const img = document.createElement('img');
  img.src = prod.img;
  img.alt = prod.name;
  card.appendChild(img);
  const body = document.createElement('div');
  body.className = 'card-body';
  card.appendChild(body);
  const title = document.createElement('h3');
  title.textContent = prod.name;
  body.appendChild(title);
  const priceEl = document.createElement('p');
  priceEl.className = 'card-price';
  priceEl.textContent = `${prod.price} ₽/шт.`;
  body.appendChild(priceEl);
  const descEl = document.createElement('p');
  descEl.className = 'card-text';
  descEl.textContent = prod.desc;
  body.appendChild(descEl);
  if (quantities[i] === 0) {
    const orderBtn = document.createElement('button');
    orderBtn.className = 'btn btn-secondary';
    orderBtn.textContent = 'Заказать';
    orderBtn.addEventListener('click', () => {
      quantities[i]++;
      renderCard(i);
      updateTotal();
    });
    body.appendChild(orderBtn);
  } else {
    const controls = document.createElement('div');
    controls.className = 'quantity-controls';
    const minusBtn = document.createElement('button');
    minusBtn.className = 'btn btn-secondary';
    minusBtn.textContent = '−';
    minusBtn.addEventListener('click', () => {
      quantities[i] = Math.max(0, quantities[i] - 1);
      renderCard(i);
      updateTotal();
    });
    controls.appendChild(minusBtn);
    const qtySpan = document.createElement('span');
    qtySpan.textContent = quantities[i];
    controls.appendChild(qtySpan);
    const plusBtn = document.createElement('button');
    plusBtn.className = 'btn btn-secondary';
    plusBtn.textContent = '+';
    plusBtn.addEventListener('click', () => {
      quantities[i]++;
      renderCard(i);
      updateTotal();
    });
    controls.appendChild(plusBtn);
    body.appendChild(controls);
    const totalRow = document.createElement('p');
    totalRow.style.fontWeight = 'bold';
    totalRow.textContent = `Итого: ${quantities[i] * prod.price} ₽`;
    body.appendChild(totalRow);
  }
}

function init() {
  const grid = document.getElementById('product-grid');
  products.forEach((prod, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.id = `card-${i}`;
    grid.appendChild(card);
    renderCard(i);
  });
  updateTotal();
}

document.addEventListener('DOMContentLoaded', init);