import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // useSelector 추가
import Navbar from './components/Navbar'; // import 수정
import Footer from './components/Footer'; // import 수정
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import ModalPortal from "./components/ModalPortal";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart); // cartItems로 통일
  const {isOpen} = useSelector((store)=>store.modal)

  useEffect(() => {
    dispatch(calculateTotals()); // Redux 상태에 따라 총합 계산
  }, [cartItems, dispatch]); // Redux 상태(cartItems) 의존성 추가

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{width:'1500px',display:"flex",  justifyContent: 'center', backgroundColor:'#f0f3f6'}}>
        <CartContainer />
        {isOpen && <ModalPortal>
          <Modal>
            <h4>담아둔 음반을 모두 삭제하시겠습니까?</h4>
          </Modal>
          </ModalPortal>}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
