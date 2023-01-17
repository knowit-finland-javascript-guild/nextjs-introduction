import CatCard from "./catCard"

const CatsListWithProps = ({ cats }) => {
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