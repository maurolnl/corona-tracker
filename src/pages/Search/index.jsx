import React from 'react'
import Layout from '../../Layouts/Layout'
import Main from '../../components/Main/Main'

const Search = ({params}) => {
  const {keyword} = params
  return (
    <Layout>
      <Main keyword={keyword}/>
    </Layout>
  )
} 

export default Search