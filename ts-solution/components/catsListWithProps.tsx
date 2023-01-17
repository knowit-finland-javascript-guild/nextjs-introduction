import type { Cat } from "../lib/catService"
import CatCard from "./catCard"

interface CatsListWithProps {
  cats: Cat[]
}

const CatsListWithProps = ({ cats }: CatsListWithProps) => {
  return (
    <div className='page'>
      <h1 className="animate-gradient-text">Cat database</h1>
      <div className='container-cats'>
        {cats?.map((cat) => 
          <CatCard cat={cat}/>
        )}
      </div>
    </div>
  )
}

export default CatsListWithProps