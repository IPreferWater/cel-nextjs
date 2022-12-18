import { IQuestionProps } from '@/interfaces/index';
import React from 'react'

export const Question = ( {question, texts} : IQuestionProps) => {

  const moveCarrousel = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    
    copyTextToClipboard(texts);
  };

  async function copyTextToClipboard(texts: Array<string>) {
    const str = texts.join("\r\n");
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(str);
    } else {
      return document.execCommand('copy', true, str);
    }
  }


return <div>
      <h1 className='font-bold'>{question}</h1>
    <div className='flex flex-col gap-y-2' onClick={(e) => moveCarrousel(e)}>
    {texts.map((str: string,i: number) => {
  return <p key={i}>{str}</p>})}
</div>
</div>
}
