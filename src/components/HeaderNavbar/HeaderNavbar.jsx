import { useNavigate } from 'react-router-dom';
import { handleHome, handleCart } from '../../router/coordinator';

export function HeaderNavbar() {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <button
          onClick={() => {
            handleHome(navigate);
          }}
        >
          HOME
        </button>
        <button
          onClick={() => {
            handleCart(navigate);
          }}
        >
          CART
        </button>
      </nav>
    </header>
  );
}
