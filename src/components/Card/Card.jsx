import { useContext } from 'react';
import { CardContainer } from './styled.Card';
import { ApiContext } from '../../common/context/api-context';
export function Card({            objitem}){  const { id, item, price, imageUrl, description } = objitem;
  const { handleAddCart } = useContext(ApiContext);
  return (
    <CardContainer key={id}>
      <h2>{item}</h2>
      <img src={imageUrl} alt="img do produto" />
      <p>R$ {price}</p>
      <p>{description}</p>
      <button
        onClick={() => {
          handleAddCart(item);
        }}
      >
        AddCart
      </button>
    </CardContainer>
  );
}
