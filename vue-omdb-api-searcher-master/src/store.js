import Vue from 'vue'
import Vuex from 'vuex'

import OMDb from './utility/OMDb'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: []
  },

  actions: {
    /*
    Search OMDb API
    @param {object} context - the store context
    @param {string} title   - the title to search for
    @param {string} type    - the type to search for (movie/series)
     */
    search (context, {title, type}) {
      // firstly clear the items to not get search results from different titles
      context.state.items = []
      // search OMDb API
      OMDb.searchFor(title, type)
        .then((response) => {
          // loop though the response and do a detailed api call for each item
          response.data.Search.forEach(item => {
            // look up all the details about an item, looking by IMDb ID
            OMDb.details(item.imdbID)
              .then((response) => {
                // push each item to the store
                context.commit('push_items', response.data)
              })
          })
        })
    },
    randomMovie (context) {
      // firstly clear the items to not get search results from different titles
      context.state.items = []
      // search OMDb API
      OMDb.randomMovie()
        .then((response) => {
          let item = response.data
          // loop though the response and do a detailed api call for each item
          // look up all the details about an item, looking by IMDb ID
          OMDb.details(item.imdbID)
            .then((response) => {
              // push each item to the store
              context.commit('push_items', response.data)
            })
        })
    }
  },

  mutations: {
    /*
    Push movie/series object to store
    @param state - the state
    @param {object} object - the object containing search results to be pushed
     */
    push_items (state, object) {
      state.items.push(object)
    }
  },

  getters: {
    /*
    Get all the search results from the store
    @return {array} the search result array
     */
    items: state => {
      return state.items
    }
  },

  modules: {
  }
})

export default store
