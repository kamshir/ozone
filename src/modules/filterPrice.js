import getData from './getData'
import renderGoods from "./renderGoods"
import { minPrice } from './filters'
import { maxPrice } from './filters'

const filterPrice = () => {
  const minInput = document.getElementById('min')
  const maxInput = document.getElementById('max')

  minInput.addEventListener('input', e => {
    const value = e.target.value;
    if (parseInt(value)){
      getData().then((data) => {
        renderGoods(minPrice(data, value))
      })
    }
  })

  maxInput.addEventListener('input', e => {
    const value = e.target.value;
    if (parseInt(value)){
      getData().then((data) => {
        renderGoods(maxPrice(data, value))
      })
    }
  })
}

export default filterPrice