import React from 'react'
import Main from './Main'
import Row from './Row'
import Requests from '../Request'

function Home() {
  return (
    <>
      <Main />
      <Row rowID={1} title={'Top Rated'} fetchURL={Requests.topRated} />
      <Row rowID={2} title={'Popular'} fetchURL={Requests.popular} />
      <Row rowID={3} title={'Up Coming'} fetchURL={Requests.upcoming} />
      <Row rowID={4} title={'Trending'} fetchURL={Requests.popular} />
    </>
  )
}

export default Home