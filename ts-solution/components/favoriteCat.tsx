import Image from 'next/image'
import React from 'react'

const FavoriteCat = () => {
  return (
    <div className='page'>
      <h1 className='animate-gradient-text'>My favorite cat</h1>
      <div className='container-text'>
        My favorite cat is a playful ball of fluff named Luna! 
        They have the most vibrant orange fur that just begs to be petted. 
        Their big, round eyes are a bright yellow and always seem to be filled with mischief.
      </div>
      <div className='container-text'>
        When Luna is not busy taking a nap or grooming themselves, they are causing trouble, 
        playing with anything and everything they can get their paws on. 
        From chasing toys to climbing on top of the refrigerator, 
        there's never a dull moment with Luna around. They are a real comedian, 
        with a purrfect sense of timing when it comes to making me laugh. 
        I can't help but smile every time I see Luna's goofy grin and fluffy tail. 
        I'm lucky to have such a playful and loving companion by my side.
      </div>
      <div className='container-cat-image'>
        {/** TODO: Show cat image */}
        <Image src={'/cat.jpeg'} alt='Image of the goodest cat' width={300} height={300} />
      </div>
    </div>
  )
}

export default FavoriteCat