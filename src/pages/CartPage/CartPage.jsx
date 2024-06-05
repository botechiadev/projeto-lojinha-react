import { Cart } from '../../components/Cart/Cart';
import { CartPageContainer } from './styled.CartPage';
export default function CartPage() {
  return (
    <CartPageContainer>
      <section>
        <h2>CART</h2>
        <Cart />
      </section>
    </CartPageContainer>
  );
}
