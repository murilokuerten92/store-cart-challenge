import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/providers/CartContext';

export function Header() {

  const navigate = useNavigate();

  const { items } = useCart()

  return (
    <S.Container>
      <S.CoffeeLogo />
      <S.UserSection>
        <S.Location>
          <S.PinLogo />
          <S.LocationText>
            Porto Alegre, RS
          </S.LocationText>
        </S.Location>

        <S.Cart data-testid='cartButton' onClick={() => navigate('/checkout')}>
          {items?.length > 0 && <S.BoxCartLength data-testid='cartItems' aria-label="Cart Items">
            {items?.length}
          </S.BoxCartLength>}
          <S.CartLogo aria-label="Shopping Cart" />
        </S.Cart>
      </S.UserSection>
    </S.Container>
  )
}
