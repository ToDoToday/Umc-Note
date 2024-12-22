import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import styled from 'styled-components';
import { closeModal } from '../features/modal/modalSlice';

const ModalButton = () => {
  const dispatch = useDispatch();
  const {isOpen} =useSelector((state)=>state.modal)
  return (
    <ModalButtonWrapper>
      <Button onClick={() => {
        dispatch(clearCart());
        dispatch(closeModal())
      }}>
        네
      </Button>
      <Button onClick={()=>{dispatch(closeModal())}}>
        아니오
      </Button>
    </ModalButtonWrapper>
  );
};

export default ModalButton;

// Styled-components
const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #4f6d7a;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
`;
