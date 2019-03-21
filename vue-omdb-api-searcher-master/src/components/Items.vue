<template lang="">
  <div class="items">
    <div class="item" v-for="item in getItems()" :key="item.imdbID">
      <div class="image">
          <img v-if="item.Poster != 'N/A'" :src="item.Poster" :alt="item.Title">
          <img v-else src="http://placehold.it/100x150" :alt="item.Title">
      </div>
      <div class="info">
        <h2>{{ item.Title }}</h2>
        <div class="details">
          <div class="details-primary">
            <p>Released on {{ item.Released }}</p>
            <p>{{ item.Plot }}</p>
          </div>
          <div class="details-secondary">
            <p>
              {{ item.Genre }}
              <br>
              <i class="fa fa-star" aria-hidden="true"></i> {{ item.imdbRating }}
              <br>
              <a target="_blank" :href="imdb(item.imdbID)"><i class="fa fa-imdb fa-2x" aria-hidden="true"></i></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'items',

  methods: {
    /*
    Return all the items from the store
    @return {array} the array containing items from OMDb
     */
    getItems () {
      return this.$store.state.items
    },
    /*
    Return full url to OMDb item on IMDb
    @return {string} URL to item on IMDb
     */
    imdb (id) {
      return `http://www.imdb.com/title/${id}/`
    }
  }
}
</script>

<style lang="css">

h2 {
  margin-bottom: 0px;
}

a {
  color: #f3ce13;
}

.items {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.item {
  background: white;
  padding: 20px;
  margin-bottom: 40px;
  width: 55%;
  border-radius: 2px;
  display: flex;
}

img {
  max-height: 200px;
  max-width: 150px;
}

.info {
  padding-left: 10px;
}

.details {
  display: flex;
}

.details-primary, .details-secondary {
  padding: 4px;
}

.details-primary {
  flex-shrink: 3;
}

.details-secondary {
  color: gray;
}

</style>
