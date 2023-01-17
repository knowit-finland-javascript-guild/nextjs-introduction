import React from 'react'
import { Cat } from '../lib/catService'

interface CatCardProps {
  cat: Cat
}

const CatCard = ({ cat }: CatCardProps) => {
  return (
    <div className='card-cat'>
      <span className='card-cat-title'>{cat.name}</span>
      <div className='card-cat-details'>
        <span>Color: {cat.color}</span>
        <span>Age:   {cat.age}</span>
      </div>
    </div>
  )
}

export default CatCard