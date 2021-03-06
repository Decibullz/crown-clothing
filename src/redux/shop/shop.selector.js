import { createSelector } from 'reselect'

// used before data normalization
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// }

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

//  used before data normalization
// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], (collections) =>
//     collections.find(
//       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   )

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
)

//  used after data normalization
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
