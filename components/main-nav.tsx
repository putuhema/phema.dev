import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MainNav = () => {
  return (
    <div className='flex items-center justify-between p-4 border fixed top-0 w-full bg-background/60 backdrop-blur-md'>
      <Link href="/" className='px-4 text-muted-foreground hover:text-foreground transition-all duration-200'>
        <ArrowLeft className='h-5 w-5' />
      </Link>
      <div className='flex gap-4'>
        {
          [
            {
              href: '/projects',
              text: 'projects',
              shortcut: "2"
            },
            {
              href: '/writing',
              text: 'writing',
              shortcut: "3"
            },
          ].map((link) => (
            <Link href={link.href} key={link.href} className='text-muted-foreground hover:text-foreground transition-all duration-200'>
              {link.text} {link.shortcut}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default MainNav