import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import styled from 'styled-components';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state) => state.cart);

  return (
    <CartContainerWrapper>
      <CartHeader>
        <h1 style={{textAlign:'center', fontSize: '30px'}}>당신이 선택한 음반</h1>
      </CartHeader>
      <CartList>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </CartList>
      <CartFooter>
        <hr />
        <TotalPrice>총 가격: ₩ {total}</TotalPrice>
        <ClearCartButton onClick={() => dispatch(openModal())}>장바구니 초기화</ClearCartButton>
      </CartFooter>
    </CartContainerWrapper>
  );
};

export default CartContainer;

// Styled-components
const CartContainerWrapper = styled.section`
  padding: 20px;
  background-color: #eff3f6;
`;

const CartHeader = styled.header`
  margin-bottom: 20px;
`;

const CartList = styled.div`
  margin-bottom: 20px;
`;

const CartFooter = styled.footer`
  margin-top: 20px;
  text-align: center;
`;

const TotalPrice = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ClearCartButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
`;
