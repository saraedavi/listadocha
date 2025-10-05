import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
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
import borboletas1 from '../src/assets/borboletas1.jpg'
import borboletas2 from '../src/assets/borboletas2.jpg'
import flamingo from '../src/assets/flamin.jpg'
import lencol1 from '../src/assets/lencol1.jpg'
import lencol2 from '../src/assets/lencol2.jpg'
import cafe from '../src/assets/cafe.jpg'

const products = [
  { id: 1, name: 'Arroz 5 kg Tupperware', price: '99,90', image: arroz },
  { id: 2, name: 'Feijão 2 kg Tupperware', price: '96,90', image: feijao },
  { id: 3, name: 'Farinha 1,8 kg Tupperware', price: '96,90', image: farinha },
  { id: 4, name: 'Açúcar 1,4 kg Tupperware', price: '83,90', image: acucar },
  { id: 5, name: 'Tigela Allegra 2,5 lt', price: '139,90', image: allegra },
  { id: 7, name: 'Tigela Aactualite 10 LT', price: '119,90', image: actualite },
  { id: 8, name: 'Centrífuga Plus 3,9 LT', price: '119,90', image: centrifuga },
  { id: 9, name: 'Café com Filtro 3,7 LT', price: '137,90', image: cafe },
  { id: 10, name: '4 Tigelinha Alegra 250 ml', price: '79,60', image: tigela },
  { id: 11, name: 'Cristalwave 1 lt', price: '84,90', image: cristalwave1 },
  { id: 12, name: 'Cristalwave 3 lt', price: '89,90', image: cristalwave2 },
  {
    id: 13,
    name: 'Descascador Tupperware',
    price: '34,90',
    image: descascador
  },
  {
    id: 14,
    name: 'Tigela Murano Borboletas 2,5L',
    price: '74,90',
    image: borboletas1
  },
  {
    id: 15,
    name: 'Tigela Murano Borboletas 1,3L',
    price: '55,90',
    image: borboletas2
  },
  {
    id: 16,
    name: 'Pote Master Flamingo Tropical 1,5L',
    price: '49,90',
    image: flamingo
  },
  {
    id: 17,
    name: 'Kit LENÇOL Queen 3 peças 600 fios ',
    price: '99,90',
    image: lencol1
  },
  {
    id: 18,
    name: 'Jogo de lençol Queen 3 peças 100% algodão ',
    price: '156,90',
    image: lencol2
  }
]

export default function Product() {
  const { id } = useParams()

  if (!id) return <div>Teste!!</div>

  useEffect(() => {
    // se a página foi aberta direto (sem passar pelo React Router),
    // recarrega para forçar o carregamento correto
    if (
      !window.location.hash &&
      !document.referrer.includes(window.location.host)
    ) {
      window.location.href = window.location.href
    }
  }, [])

  const product = products.find((p) => p.id === parseInt(id))

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
