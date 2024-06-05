import { useContext } from 'react';
import { CartContainer } from './styled.Cart';
import { ApiContext } from '../../common/context/api-context';

export function Cart() {
  const { cart, setCart } = useContext(ApiContext);

  return (
    <CartContainer>
      {cart.length === 0 && (
        <tr>
          <td>carrinho vazio</td>
          <td>items 0</td>
          <td>R$00,00</td>
          <td>R$00,00</td>
        </tr>
      )}

      {cart.length > 0 &&
        cart.map((item) => (
          <tr key={item.id}>
            <td>{item.item}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.price * item.quantity}</td>
          </tr>
        ))}
    </CartContainer>
  );
}
