import Header from '../components/Header/Header'
import Footer from '../components/Footer/index'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
