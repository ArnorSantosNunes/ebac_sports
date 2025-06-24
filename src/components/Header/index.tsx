import { useSelector } from 'react-redux'
import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { RootReducer } from '../../store'
import { paraReal } from '../Produto' // Importe a função paraReal do componente Produto

type Props = {
  favoritos: {
    id: number
    nome: string
    preco: number
    imagem: string
  }[]
}

const Header = ({ favoritos }: Props) => {
  const itensNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  // Calcular o valor total do carrinho
  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    return acc + item.preco
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {itensNoCarrinho.length} itens no carrinho $ Valor total:{' '}
          {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
