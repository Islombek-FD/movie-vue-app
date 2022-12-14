<template>
   <nav aria-label="pagination">
      <ul class="pagination">
         <li
            v-for="pageNumber in totalPages"
            @click="$emit('onChangePagination', pageNumber - 1)"
            class="page-item"
            :class="{ active: page == pageNumber - 1 }"
            :key="pageNumber"
         >         
            <span class="page-link">{{ pageNumber }}</span>
         </li>
      </ul>           
   </nav>
</template>

<script>
   export default {
      name: 'Pagination',
      props: {
         totalPages: {
            type: Number,
            required: true
         },
         page: {
            type: Number,
            required: true
         }
      }
   }
</script>

<style>
   
</style>