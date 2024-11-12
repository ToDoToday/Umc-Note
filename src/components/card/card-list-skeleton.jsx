import React from 'react'
import CardSkeleton from './card-skelleton'

const CardListSkeleton = ({number}) => {
  return (
    new Array(number).fill(0).map((_,)=><CardSkeleton/>)
  )
}

export default CardListSkeleton
