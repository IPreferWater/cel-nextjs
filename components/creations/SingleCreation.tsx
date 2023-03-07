type SingleCreationProps = {
  creationTitle: string
  imgUrl: string
  url: string
  price : number
  }

export const SingleCreation = ( {creationTitle, imgUrl, url, price} : SingleCreationProps) => {

return <a href={url} className='flex flex-col text-center relative'>
  <div className={`w-36 h-16 bg-orange-400 absolute -top-6 left-1/2 -translate-x-11 opacity-80 rotate-6`}></div>

  <img className = "object-cover h-4/6 "src={imgUrl}/>
<div className='font-bold text-cel-black text-2xl'>{creationTitle}</div>
<div className='italic text-cel-black'>réalisé</div>
{
  price >0 ? <div className="font-bold">{price} €</div>:null 
}

</a>
}





