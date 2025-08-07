import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import bgImage from "../../assets/images/Header/Headers.png"

const podcasts = () => {
  return (
   <>
   <Navbar/>
   <Header text="Podcasts" page="policy" img={bgImage}/>
   <Footer/>
   </>
  )
}

export default podcasts