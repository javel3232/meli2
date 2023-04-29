import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import React, { Children } from 'react'

interface LayoutProps{
    children: JSX.Element;

}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export {Layout};