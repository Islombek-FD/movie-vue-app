<template>
   <div class="wrapper font-monospace">
      <div class="content">
         <Info 
            :moviesCount="movies.length" 
            :favouriteMoviesCount="movies.filter(m => m.favourite).length"
         />

         <Search
            @onSearch="onSearchHandler"
         />

         <Filter
            :filter="filter"
            @onFilter="onFilterHandler"
         />

         <Box v-if="!movies.length && !isLoading">
            Kinolar yoq!
         </Box>
         
         <Box v-else-if="isLoading">
            <Loader />
         </Box> 

         <List 
            v-else
            :movies="getFilteredMovies(getSearchedMovies(movies, term), filter)"
            @onToggle="onToggleHandler"
            @onDelete="onDeleteHandler"
         />

         <Box class="d-flex justify-content-center">
            <Pagination
               :page="page"
               :totalPages="totalPages"
               @onChangePagination="onPaginationHandler"
            />
         </Box>

         <Form 
            @onCreate="onCreateHandler" 
         />
      </div>
   </div>
</template>

<script>
   import axios from 'axios';
   import Info from '@/components/Info.vue';
   import Search from '@/components/Search.vue';
   import Filter from '@/components/Filter.vue';
   import List from '@/components/List.vue';
   import Form from '@/components/Form.vue';

   export default {
      components: {
         Info,
         Search,
         Filter,
         List,
         Form
      },
      data() {
         return {
            isLoading: false,
            limit: 10,
            page: 0,
            totalPages: 0,
            movies: [],
            term: '',
            filter: 'all'
         }
      },
      mounted() {
         this.getMovies();
      },
      watch: {
         page() {
            this.getMovies();
         }
      },
      methods: {
         getSearchedMovies(arr, term) {
            if (!term.length)
               return arr;

            return arr.filter(m => m.name.toUpperCase().indexOf(term.toUpperCase()) > -1);   
         },
         getFilteredMovies(arr, filter) {
            switch (filter) {
               case 'popular':
                  return arr.filter(m => m.favourite);
               case 'mostViewers':
                  return arr.filter(m => m.viewers > 600);
               default:
                  return arr;
            }
         },
         onCreateHandler(movie) {
            this.movies.push(movie);
         },
         onToggleHandler({ id, name }) {
            const foundMovie = this.movies.find(m => m.id === id);

            foundMovie[name] = !foundMovie[name];
         },
         onDeleteHandler(movieId) {
            this.movies = this.movies.filter(m => m.id !== movieId);
         },
         onSearchHandler(value) {
            this.term = value;
         },
         onFilterHandler(value) {
            this.filter = value;
         },
         onPaginationHandler(page) {
            this.page = page;
         },
         // We are working with server
         async getMovies() {
            this.isLoading = true;

            try {
               const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                  params: {
                     _limit: this.limit,
                     _page: this.page
                  }
               });

               const updatedData = res.data.map(e => ({
                  id: e.id,
                  name: e.title,
                  like: false,
                  favourite: false,
                  viewers: Math.ceil(e.id * Math.random() * 100)
               }));    

               this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit);
               this.movies = updatedData;      
            } catch(e) {
               console.log('Error: ', e);
            } finally {
               this.isLoading = false;
            }
         }
      }
   }
</script>

<style scoped>
   .wrapper {
      min-height: 100vh;
   }

   .content {
      max-width: 800px;
      margin: 0 auto;
   }
</style>