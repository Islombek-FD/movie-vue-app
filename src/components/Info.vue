<template>
   <Box class="mb-4 text-uppercase">
      <h3 class="fs-4">Barcha kinolar soni: {{ moviesCount }}</h3>
      <p class="m-0 fs-5">Ko'rilgan kinolar soni: {{ favouriteMoviesCount }}</p>
   </Box>
</template>

<script>
   export default {
      components: {
      },
      props: {
         moviesCount: {
            type: Number,
            required: true
         },
         favouriteMoviesCount: {
            type: Number,
            required: true
         }
      }
   }
</script>

<style>

</style>