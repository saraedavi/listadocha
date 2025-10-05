import { useParams, Link } from 'react-router-dom'
import { Button, Card, Container, Footer, Price } from './styles'

import allegra from '../src/assets/1.jpg'
import arroz from '../src/assets/arroz.jpg'
import feijao from '../src/assets/feijao.jpg'
import farinha from '../src/assets/farinha.jpg'
import acucar from '../src/assets/acucar.jpg'
import actualite from '../src/assets/actualite.jpg'
import centrifuga from '../src/assets/centrifuga.jpg'
import tigela from '../src/assets/tigela.jpg'
import cristalwave1 from '../src/assets/cristalwave1.jpg'
import cristalwave2 from '../src/assets/cristalwave2.jpg'
import descascador from '../src/assets/descascador.jpg'
import cafe from '../src/assets/cafe.jpg'

const products = [
  {
    id: 1,
    name: 'Arroz 5 kg Tupperware',
    price: '99,90',
    description: 'Descrição do Produto A',
    image: arroz
  },
  {
    id: 2,
    name: 'Feijão 2 kg Tupperware',
    price: '96,90',
    description: 'Descrição do Produto A',
    image: feijao
  },
  {
    id: 3,
    name: 'Farinha 1,8 kg Tupperware',
    price: '96,90',
    description: 'Descrição do Produto A',
    image: farinha
  },
  {
    id: 4,
    name: 'Açúcar 1,4 kg Tupperware',
    price: '83,90',
    description: 'Descrição do Produto A',
    image: acucar
  },
  {
    id: 5,
    name: 'Tigela Allegra 2,5 lt',
    price: '139,90',
    description: 'Descrição do Produto A',
    image: allegra
  },
  {
    id: 7,
    name: 'Tigela Aactualite Tupperware 10 LT ',
    price: '119,90',
    description: 'Descrição do Produto A',
    image: actualite
  },
  {
    id: 8,
    name: 'Centrífuga Plus Tupperware 3,9 LT',
    price: '119,90',
    description: 'Descrição do Produto A',
    image: centrifuga
  },
  {
    id: 9,
    name: 'Café com Filtro Tupperware 3,7 LT',
    price: '137,90',
    description: 'Descrição do Produto A',
    image: cafe
  },
  {
    id: 10,
    name: '4 Tigelinha Alegra 250 ml',
    price: '79,60',
    description: 'Descrição do Produto C',
    image: tigela
  },
  {
    id: 11,
    name: 'Cristalwave Tupperware 1 lt',
    price: '84,90',
    description: 'Descrição do Produto C',
    image: cristalwave1
  },
  {
    id: 12,
    name: 'Cristalwave Tupperware 3 lt',
    price: '89,90',
    description: 'Descrição do Produto C',
    image: cristalwave2
  },
  {
    id: 13,
    name: 'Descascador Tupperware',
    price: '34,90',
    description: 'Descrição do Produto C',
    image: descascador
  },
  {
    id: 10,
    name: '4 Tigelinha Alegra 250 ml',
    price: '79,60',
    description: 'Descrição do Produto C',
    image: tigela
  }
]

export default function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id)) // <-- converte para número

  if (!product)
    return (
      <div>
        Produto não encontrado. <Link to="/">Voltar</Link>
      </div>
    )

  const numeroWhats = '5511968128718'
  const mensagem = `Eu vi o produto ${product.name} e gostaria de comprar para os noivos`
  const linkWhats = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(
    mensagem
  )}`

  return (
    <Container>
      <Card>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '200px' }}
        />
        <Price>R$ {product.price}</Price>
        <Footer>
          <Button href={linkWhats}>Comprar</Button>
          <p>Você será encaminhado para o WhatsApp para finalizar a compra.</p>
        </Footer>
      </Card>
    </Container>
  )
}
