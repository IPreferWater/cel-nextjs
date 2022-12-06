import React from 'react'


type QuestionProps = {
  // WARNING the title is used as a key, it need to be unique
  question: string
  text: string
  }

export const Question = ( {question, text} : QuestionProps) => {

  const moveCarrousel = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    
    copyTextToClipboard(text);
  };

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }


return <div>
      <h1 className='font-bold'>{question}</h1>
    <div className='border-l pl-3 border-gray-300' onClick={(e) => moveCarrousel(e)}>
  {text}
</div>
</div>
}
