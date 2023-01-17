import React from 'react'
import catService, { Cat } from '../../lib/catService'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import CatsListWithProps from '../../components/catsListWithProps'

const CatsListPage = ({ cats }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <CatsListWithProps cats={cats}/>
  )
}

export const getServerSideProps: GetServerSideProps<{ cats: Cat[] }> = async () => {
  const cats: Cat[] = await catService.getCats()
  
  return {
    props: {
      cats
    }
  }
}

export default CatsListPage
