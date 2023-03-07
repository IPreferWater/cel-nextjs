import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

type Props = {
  children?: ReactNode
  title: string
  metaName: string,
  metaDescription: string
}

export const Layout = ({ children, title, metaName, metaDescription}: Props) => {

  const navigationUrls = [
    {
      title:'Cours et ateliers',
      url:'/cours'
    },
    {
      title:'Tarifs réparations',
      url:'/tarifs'
    },
    {
      title:'Les créations upcyclées',
      url:'/creations'
    },
    {
      title:'Le projet',
      url:'/comingsoon'
    }
  ]

  const navigationSocialNetwork = [
    {
      id:'facebook',
      url : 'https://www.facebook.com/Clementinestla'
    },
    {
      id:'instagram',
      url: 'https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fclementinestla%2F%3Fhl%3Dfr&h=AT14p2Xfzw9I8Y4Z2OKvwhHa4Oy8zcqNdCOjDL9ugUPX0yV8zJ0eqCUM2iJlQZZVR8LOOv1inSnCeR0VSHoqf5ZCr6gp0dAufB0Woi8VgHgYpA0yagvFf-0FVu9WiN6jdZgmsQ'
    },
    {
      id:'youtube',
      url : 'https://www.youtube.com/channel/UC-4tD0SeN4wTyoDqQ4VkYBQ'
    }
  ]

  return <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />      
      <link rel="shortcut icon" href="favicon.gif" />
    </Head>
    <header className='mb-4'>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name={metaName} content={metaDescription}/>
      <div className='flex justify-between items-center'>
      <Link href="/">
        <a>
          <img className='object-contain h-40 p-4' src="/logo.svg" alt="logo de la page d'index"/>
        </a>
        </Link>

        <div className='flex flex-row'>
        {navigationSocialNetwork.map(({id,url}: any) => {
           return <Link key={id} href={`icon_${id}.svg`}>
            <a href={url} target='_blank'>
            <img className='object-contain h-16' src={`/icon_${id}.svg`} alt={`icon reseau social ${id}`} />
          </a>
          </Link>
         
        })
        }
        </div>

        </div>
        

      <nav className='flex flex-col text-5xl md:flex-row md:text-2xl md:items-end md:justify-between md:mx-8 md:space-x-6'>
      {navigationUrls.map(({title, url}: any) => {
           return <Link key={title} href={url}>
           <a className='underline decoration-cel-orange decoration-2'>{title}</a>
         </Link>
        })
        }
       
      </nav>
    </header>
    {children}
  </div>
}
