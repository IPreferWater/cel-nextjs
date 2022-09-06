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
      url:'/about'
    },
    {
      title:'Réparations et transformations',
      url:'/about'
    },
    {
      title:'Les créations upcyclées',
      url:'/about'
    },
    {
      title:'Le projet',
      url:'/about'
    }
  ]

  const navigationSocialNetwork = [
    {
      id:'facebook',
      url : 'https://www.facebook.com/Clementinestla'
    },
    {
      id:'instagram',
      url: 'todo'
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
    </Head>
    <header>
    
      <div className='flex justify-between items-center'>
      <Link href="/">
        <a>
          <img className='object-contain h-24' src="/logo.svg"/>
        </a>
        </Link>

        <div className='flex flex-row'>
        {navigationSocialNetwork.map(({id,url}: any) => {
           return <Link key={id} href={`icon_${id}.svg`}>
            <a href={url} target='_blank'>
            <img className='object-contain h-16' src={`icon_${id}.svg`} />
          </a>
          </Link>
         
        })
        }
        </div>

        </div>
        

      <nav className='flex flex-col md:flex-row md:items-end justify-between mr-8'>
      {navigationUrls.map(({title, url}: any) => {
           return <Link key={title} href={url}>
           <a className='text-xl md:text-2xl'>{title}</a>
         </Link>
        })
        }
       
      </nav>
    </header>
    {children}
  </div>
}
