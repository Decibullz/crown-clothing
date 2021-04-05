import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/Collection-item/Collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selector'

import './Collection.styles.scss'

const CollectionPage = ({ match }) => (
  <div className="collection-page">
    <h2>Collection page</h2>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
