type SingleCreationProps = {
  creationTitle: string
  imgUrl: string
  price : number
  }

export const SingleCreation = ( {creationTitle, imgUrl, price} : SingleCreationProps) => {

return <a href="https://www.google.com/" className='bg-lime-700  p-4 flex flex-col text-center'> 
<div className= 'bg-green-400 h-80 p-4'>
  <img src={imgUrl}/>
</div>
<div className='font-bold text-cel-orange text-2xl'>{creationTitle}</div>
<div className='italic text-cel-green'>réalisé</div>
<div className="font-bold">{price} €</div>
</a>
}





