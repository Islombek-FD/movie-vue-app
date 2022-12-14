<template>
   <Box class="mb-4">
      <ul class="list-unstyled">
         <Item
            v-for="movie in movies" 
            :movie="movie" 
            :key="movie.id" 
            @onToggle="$emit('onToggle', $event)"
            @onDelete="$emit('onDelete', $event)"
         />
      </ul>
   </Box>
</template>

<script>
   import Item from './Item.vue';

   export default {
      components: {
         Item,
      },
      props: {
         movies: {
            type: Array,
            required: true
         }
      },
      data() {
         return {
          
         }
      }
   }
</script>

<style>
   
</style>