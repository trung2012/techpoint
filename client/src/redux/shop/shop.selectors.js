import { createSelector } from 'reselect';
import { convertCategoriesToMap } from '../../utils/helper';

const selectShop = state => state.shopReducer;

export const selectCategories = createSelector(
  [selectShop],
  shop => shop.categories
);

export const selectCategoriesInfo = createSelector(
  [selectCategories],
  categories => categories.map(({ _id, name, imageUrl }) => {
    return { _id, name, imageUrl }
  })
)

export const selectCategory = urlParam => createSelector(
  [selectCategories],
  categories => categories ? convertCategoriesToMap(categories)[urlParam] : null
)

export const selectCategoryItems = createSelector(
  [selectCategories],
  categories => categories.map(({ _id, name, items }) => {
    return { _id, name, items }
  })
)

export const selectIsCategoriesLoading = createSelector(
  [selectShop],
  shop => shop.isLoading
);

export const selectShopItems = createSelector(
  [selectCategories],
  categories => categories.reduce((acc, category) => {
    return acc.concat(...category.items)
  }, [])
)

export const selectItemById = id => createSelector(
  [selectShopItems],
  items => items ? items.find(item => item._id === id) : undefined
)

export const selectShopError = createSelector(
  [selectShop],
  state => state.errorMessage
);