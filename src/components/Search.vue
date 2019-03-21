<template>
  <div class="search">
    <h1>Search for Movies or Series</h1>
    <div class="input-wrapper">
      <input type="text"
        v-model="title"
        @keyup="search()"
        name=""
        value=""
        placeholder="Search for...">
    </div>
    <div class="radio-buttons">
      <input @click="search()" type="radio" id="movie" value="movie" v-model="type">
      <label for="movie">Movies</label>
      <input @click="search()" type="radio" id="series" value="series" v-model="type">
      <label for="series">Series</label>
    </div>
    <div class="radio-buttons random">
    <button @click="randomMovie()">Show a Random Movie</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',

  data () {
    return {
      items: '', // object containing json response from OMDb API
      title: '', // v-model for title to search for
      type: 'movie'
    }
  },

  methods: {
    /*
    Search the OMDb API and set vue data object
    @param {string} title - The movie title to search for
     */
    search () {
      // No need to search if the search string is too short
      if (this.title.length > 2) {
        // dispatch action to store and pass title and type to search for
        this.$store.dispatch('search', {'title': this.title, 'type': this.type})
      }
    },
    randomMovie () {
      this.$store.dispatch('randomMovie')
    }
  }
}
</script>

<style>

.search h1 {
  text-align: center;
  color: white;
}

div.input-wrapper {
  text-align: center;
  margin-bottom: 50px;
}

.radio-buttons {
  width: 45%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
}

input[type=radio] {
  font-size: 1rem;
  display: inline-block;
}

label {
  color: white;
}

input[type=text] {
  width: 45%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  font-style: italic;
  background-color: rgba(0,0,0,0.1);
  color: white;
}

input[type=text]:focus {
  outline: none !important;
}

input[type=text]::-webkit-input-placeholder {
  font-style: italic;
  color:white;
}
input[type=text]::-moz-placeholder          {
  font-style: italic;
  color:white;
}
input[type=text]:-moz-placeholder           {
  font-style: italic;
  color:white;
}
input[type=text]:-ms-input-placeholder      {
  font-style: italic;
  color:white;
}

</style>
