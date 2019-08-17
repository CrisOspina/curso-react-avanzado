import React, { useContext, Suspense } from 'react'
import { Loader } from './styles/loader'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />

        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}

        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </Suspense>
  )
}
