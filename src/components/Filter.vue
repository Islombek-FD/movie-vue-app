<template>
   <Box class="mb-4">
      <div class="btn-group">
         <Button 
            @click="$emit('onFilter', button.filter)"
            v-for="button in buttons"
            :key="button.filter"
            :class="[filter === button.filter ? 'btn-primary' : 'btn-outline-primary']"
         >
            {{ button.title }}
         </Button>
      </div>
   </Box>
</template>

<script>
   export default {
      components: {
      },
      props: {
         filter: {
            type: String,
            required: true
         }
      },
      data() {
         return {
            buttons: [
               {
                  title: 'Barcha kinolar',
                  filter: 'all'
               },
               {
                  title: 'Mashhur kinolar',
                  filter: 'popular'
               },
               {
                  title: 'Eng ko\'p ko\'rilgan kinolar',
                  filter: 'mostViewers'
               }
            ]
         }
      }
   }
</script>

<style>
   
</style>