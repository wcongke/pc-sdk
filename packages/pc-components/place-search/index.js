import PlaceSearch from './src/main.vue'

PlaceSearch.install = (Vue) => {
  Vue.component(PlaceSearch.name, PlaceSearch)
}

export default PlaceSearch
