import { useSelector } from 'react-redux';
import { CartIcon } from '../constants/icons';
import styled from 'styled-components';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <NavbarWrapper>
      <NavbarContent>
        <h3 style={{fontSize:'30px'}}>UMC Playlist</h3>
        <CartContainer>
            <CartWrapper>
                <CartIcon />
                {amount > 0 && <Badge>{amount}</Badge>}
            </CartWrapper>
        </CartContainer>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;

// Styled-components
const NavbarWrapper = styled.nav`
  background-color: #5852fe;
  color: white;
  padding:5px;
  height:60px
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:100%
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartWrapper = styled.div`
  position: relative;  // 배지 위치를 지정할 수 있도록 상대적 위치 설정
  display: inline-block;  // 아이콘과 배지가 인라인으로 표시되도록 설정
`;

const Badge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff6347;  /* 배지 배경색 */
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;