import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'This is the default title' }: Props) => {

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
      url:'/comingsoon'
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
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="favicon.gif" />
    </Head>
    <header className='mb-4'>
      <div className='flex justify-between items-center'>
      <Link href="/">
        <a>
          <img className='object-contain h-24 mb-6' src="/logo.svg"/>
        </a>
        </Link>

        <div className='flex flex-row'>
        {navigationSocialNetwork.map(({id,url}: any) => {
           return <Link key={id} href={`icon_${id}.svg`}>
            <a href={url} target='_blank'>
            <img className='object-contain h-16' src={`/icon_${id}.svg`} />
          </a>
          </Link>
         
        })
        }
        </div>

        </div>
        

      <nav className='flex flex-col md:flex-row md:items-end justify-between mx-8 space-x-6'>
      {navigationUrls.map(({title, url}: any) => {
           return <Link key={title} href={url}>
           <a className='text-xl md:text-2xl underline decoration-cel-orange decoration-2'>{title}</a>
         </Link>
        })
        }
       
      </nav>
    </header>
    {children}
  </div>
}
