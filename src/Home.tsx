import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Produto A' },
  { id: 2, name: 'Produto B' },
  { id: 3, name: 'Produto C' },
  { id: 4, name: 'Produto C' },
  { id: 5, name: 'Produto C' },
  { id: 6, name: 'Produto C' }
]

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Produtos</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
