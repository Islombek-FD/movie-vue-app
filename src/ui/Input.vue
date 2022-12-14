<template>
   <input
      class="form-control" 
      type="text"
      @input="onChange"
      :value="modelValue"
   >
</template>

<script>
   export default {
      name: 'Input',
      props: {
         modelValue: [String, Number]
      },
      methods: {
         onChange(e) {
            this.$emit('update:modelValue', e.target.value);
         }
      }
   }
</script>

<style>
   
</style>