import { ThemeProvider } from '@emotion/react'
import App from 'next/app'
import { Provider } from 'react-redux'
import Layout from '../components/Layout/Index'
import theme from '../Configs/theme'
import store from '../Configs/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  appContext.ctx.reduxStore = store
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
