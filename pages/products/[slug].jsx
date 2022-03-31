import Head from 'next/head'
import React from 'react'
import LayoutProductpage from '../../Containers/LayoutPorductPage'
import contentful from '../../Helpers/contentful'
import InfoPorduct from '../../components/InfoPorduct'

const PorductPage = (props) => {
  const { entry } = props.product

  return (
    <div>
      <Head>
        <title> {entry.fields.titleProduct} </title>{' '}
        <link rel="icon" href="/favicon.ico " />{' '}
      </Head>
      <LayoutProductpage>
        <InfoPorduct porduct={entry} />
      </LayoutProductpage>
    </div>
  )
}
PorductPage.getInitialProps = async (context) => {
  const { slug } = context.query
  const product = await contentful.getEntries({
    content_type: 'cardShop',
    'sys.id': slug,
  })
  const [entry] = product.items

  return { product: { entry } }
}

export default PorductPage
