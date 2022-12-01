import styled from 'styled-components'
import { Icon } from '@/icon/icon'

export const Container = styled.header`
  padding: 2rem 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HomelInkNavigate = styled.a`
cursor: pointer;
`;


export const UserSection = styled.section`
  display: flex;
  column-gap: 0.8rem;
`;

export const BoxCartLength = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;

position: absolute;
width: 22px;
height: 22px;
right: -8.35px;
top: -8px;

background: ${({ theme }) => theme.primary_dark};
border-radius: 1000px;

flex: none;
order: 1;
flex-grow: 0;
z-index: 1;
color: ${({ theme }) => theme.shape};
font-weight: bold;
font-size: 0.875rem;
`

export const Location = styled.div`
  display: flex;
  background: ${({ theme }) => theme.secondary_light};
  padding: .8rem;
  border-radius: 6px;
  align-items: center;
  column-gap: 0.6rem;
`;

export const Cart = styled.button`
  padding: .8rem;
  background: ${({ theme }) => theme.primary_light};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  position: relative;
  &:focus {
      outline: none !important;
    box-shadow: none !important;
       }
       &:active {
        border: none;
        outline: none;
       }
       &:hover {
        filter: brightness(0.9);
        transition: 1ms;
       }
`

export const LocationText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${({ theme }) => theme.secondary};
`

export const CoffeeLogo = styled(Icon).attrs({
  icon: 'logo'
})`

`;

export const CartLogo = styled(Icon).attrs({
  icon: 'cart'
})`

`;

export const PinLogo = styled(Icon).attrs(({ theme }) => ({
  icon: 'pin',
  color: theme.secondary
}))`

`;
