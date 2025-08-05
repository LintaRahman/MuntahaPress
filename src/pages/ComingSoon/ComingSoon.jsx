import React from 'react'
import Logo from '../../assets/images/MuntahaWhite.png'

const ComingSoon = () => {
  return (
    <>
    <div style={{width: '100%', height: '100vh', background: 'var(--color-primary)', display: 'flex', flexDirection: 'column', justifyContent : 'center', alignItems: 'center'}}>
        <div><img src={Logo} style={{height: '70vh'}}/></div>
        <div><h1 style={{fontSize: '2rem', color: 'white'}}>Coming soon...</h1></div>
        </div>
        </>
  )
}

export default ComingSoon