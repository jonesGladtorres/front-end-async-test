"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SectionOne } from '@/components/SectionOne'
import { SectionTwo } from '@/components/SectionTwo'
import { GlobalStyle } from '@/styles/globalStyle'

export default function Home() {
  return (
    <>
      <GlobalStyle/>
      <div>
        <Header />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </div>
    </>
  )
}
