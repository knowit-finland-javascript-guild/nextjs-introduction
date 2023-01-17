import React, { useEffect, useState } from 'react'
import catService, { Cat } from '../lib/catService'
import CatCard from './catCard'

const CatsList = () => {
  const [cats, setCats] = useState<Cat[]>()
  useEffect(() => {
    const catFetchHelper = async () => {
      const response = await catService.getCats()
      setCats(response)
    }
    catFetchHelper()
  }, [])

  return (
    <div className='page'>
      <h1 className='animate-gradient-text'>Cat database</h1>
      <div className='container-cats'>
        {cats?.map((cat) => 
          <CatCard cat={cat}/>
        )}
      </div>
    </div>
  )
}

export default CatsList