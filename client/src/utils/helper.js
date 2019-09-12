export const limitString = (string) => {
  const maxLength = 30

  let trimmedString = string.substring(0, maxLength)

  return trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
}

export const convertCategoriesToMap = categories => {
  const convertedCategories = categories.map(category => {
    const { _id, name, items } = category;

    return {
      _id,
      name,
      items
    }
  })

  return convertedCategories.reduce((acc, category) => {
    acc[category.name.toLowerCase()] = category;
    return acc;
  }, {})
}

export const convertShippingToFloat = shipping => {
  if (isNaN(shipping.replace(' Shipping', '').replace('$', ''))) {
    return 0;
  }

  return parseFloat(shipping.replace(' Shipping', '').replace('$', ''));
}

export const convertPriceToString = price => {
  const priceArr = price.toLocaleString('en-US').split('.')
  let [priceMain, priceSub] = priceArr;

  if (!priceSub) {
    priceSub = '00'
  }

  if (priceSub.length === 1) {
    priceSub += '0'
  }

  return { priceMain, priceSub }
}

export const convertFeatureToSubstrings = feature => {
  let [featureName, featureDescription] = feature.split(':')

  return { featureName, featureDescription }
}