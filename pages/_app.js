import GlobalStyles from "../utils/GlobalStyles"
import Layout from "../utils/Layout"

function MyApp({ Component, pageProps }) {
  return <>
    <Layout page="Home">
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
