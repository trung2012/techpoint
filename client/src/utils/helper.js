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
  if (shipping) {
    if (!shipping.toLowerCase().includes('free')) {
      const newShipping = parseFloat(shipping.replace(' Shipping', '').replace('$', ''))
      return newShipping
    }
  }
  return 0;
}

export const convertPriceToString = price => {
  const priceArr = price.toLocaleString('en-US').split('.')
  let [priceMain, priceSub] = priceArr;

  if (!priceSub) {
    priceSub = '00'
  }
  return { priceMain, priceSub }
}