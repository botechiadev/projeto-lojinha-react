import { useContext } from 'react';
import { ApiContext } from './../../common/context/api-context';
import { HomePageContainer } from './styled.HomePage';
import { Card } from '../../components/Card/Card';
export default function HomePage() {
  const { products, setProducts } = useContext(ApiContext);

  return (
    <HomePageContainer>
      <h2> HOME</h2>
      <ul>
        {products.map((product) => (
          <Card key={product.id} objitem={product} />
        ))}
      </ul>
    </HomePageContainer>
  );
}
