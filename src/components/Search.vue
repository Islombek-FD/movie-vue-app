<template>
   <Box class="mb-4">
      <Input 
         @input="onChangeHandler"
         v-model="search"
         placeholder="Kinolarni qidirish..."
      />
   </Box>
</template>

<script>
   export default {
      components: {
      },
      data() {
         return {
            search: ''
         }
      },
      methods: {
         onChangeHandler() {
            this.$emit('onSearch', this.search);
         }
      },
   }
</script>

<style>
   
</style>