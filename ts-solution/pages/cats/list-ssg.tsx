import React from 'react'
import catService, { Cat } from '../../lib/catService'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import CatsListWithProps from '../../components/catsListWithProps'

const CatsListPage = ({ cats }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <CatsListWithProps cats={cats}/>
  )
}

export const getStaticProps: GetStaticProps<{ cats: Cat[] }> = async () => {
  const cats: Cat[] = await catService.getCats()
  
  return {
    props: {
      cats
    }
  }
}

export default CatsListPage
