import React from 'react'
import CardSkeleton from './card-skelleton'

const CardListSkeleton = ({number}) => {
  return (
    new Array(number).fill(0).map((_,idx)=><CardSkeleton key={idx}/>)
  )
}

export default CardListSkeleton
