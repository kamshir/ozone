export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase())
  })
}

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value
  })
}

export const minPrice = (goods, value) => {
  const maxPrice = document.getElementById('max').value
  if (parseInt(maxPrice)){
    return goods.filter((goodsItem) => {
      return goodsItem.price >= value && goodsItem.price <= maxPrice
    })
  } else {
    return goods.filter((goodsItem) => {
      return goodsItem.price >= value
    })
  }
}

export const maxPrice = (goods, value) => {
  const minPrice = document.getElementById('min').value
  if (parseInt(minPrice)){
    return goods.filter((goodsItem) => {
        return goodsItem >= minPrice && goodsItem.price <= value
    })
  } else {
    return goods.filter((goodsItem) => {
      return goodsItem.price <= value
  })
  }
}