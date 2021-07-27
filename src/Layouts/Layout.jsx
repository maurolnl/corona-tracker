import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/index'

const Layout = ({children, handleSubmit, handleChange, keyword}) => {
  return (
    <>
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        keyword={keyword}
      />
      {children}
      <Footer/>
    </>
  )
}

export default Layout
