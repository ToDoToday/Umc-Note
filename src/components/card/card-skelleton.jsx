import React from 'react'
import * as S from './card-skeleton.style'
const CardSkeleton = () => {
  return (
  
    <S.Container>
      <S.CardWrapper>
        <S.CardMain/>
        <S.TextWrapper>
            <S.TitleBox/>
            <S.DescriptionBox/>
        </S.TextWrapper>
      </S.CardWrapper>
    </S.Container>

  )
}

export default CardSkeleton;

