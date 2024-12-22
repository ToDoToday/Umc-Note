import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem } from '../features/cart/cartSlice';
import { ChevronUp, ChevronDown } from '../constants/icons';
import styled from 'styled-components';

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <CartItemWrapper>
      <CartItemImage src={img} alt={`${title} 이미지`} />
      <CartItemDetails>
        <ItemInfo>
          <ItemTitle>{title} | {singer}</ItemTitle>
          <ItemPrice>₩ {price}</ItemPrice>
        </ItemInfo>
        <CartItemControls>
          <AmountButton onClick={() => dispatch(increase(id))}>
            <ChevronUp />
          </AmountButton>
          <Amount>{amount}</Amount>
          <AmountButton
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease(id));
            }}
          >
            <ChevronDown />
          </AmountButton>
        </CartItemControls>
      </CartItemDetails>
    </CartItemWrapper>
  );
};

export default CartItem;

// Styled-components
const CartItemWrapper = styled.article`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  object-fit: cover;
  border-radius: 8px;
`;

const CartItemDetails = styled.div`
  display: flex;  /* Flexbox를 사용하여 수평 배치 */
  justify-content: space-between; /* 내용 사이의 간격을 균등하게 배치 */
  flex-grow: 1;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  /* 제목과 가격을 세로로 배치 */
  margin-right: 20px;  /* 제목과 가격과 수량 버튼 사이에 여백 추가 */
`;

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ItemPrice = styled.h5`
  font-size: 1.1rem;
  color: #5852fe;
  margin-bottom: 10px;
  margin-top: 0px;
`;

const CartItemControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`;

const AmountButton = styled.button`
  color: #5752f5;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

const Amount = styled.p`
  font-size: 1.1rem;
  margin: 0 10px;
  width: 30px;
  text-align: center;
`;
