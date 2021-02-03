import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Layout = ({children,page}) => {
    return (
        <>
            <Head>
            <title>{page} &middot; Urban UI</title>
            <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <Container fluid>
                {children}
            </Container>
        </>
    )
}

export default Layout
  