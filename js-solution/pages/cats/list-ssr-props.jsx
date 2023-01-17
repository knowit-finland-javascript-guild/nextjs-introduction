import React from 'react'
import catService from '../../lib/catService'
import CatsListWithProps from '../../components/catsListWithProps'

const CatsListPage = ({ cats }) => {
  return (
    <CatsListWithProps cats={cats}/>
  )
}

export const getServerSideProps = async () => {
  const cats = await catService.getCats()
  
  return {
    props: {
      cats
    }
  }
}

export default CatsListPage
