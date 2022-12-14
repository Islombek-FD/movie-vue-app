<template>
   <Box>
     <h3>Yangi kino qo'shish</h3>
      
      <form @submit.prevent>
         <div class="d-flex gap-x-3">
            <Input 
               v-model="name"
               placeholder="Kino nomi"
            />
            <Input 
               v-model="viewers"
               type="number" 
               placeholder="Nechi marotaba ko'rilgan?"
            />
            <Button 
               @click="onCreate"
               class="btn-primary" 
               type="submit"
            >
               Qo'shish
            </Button>
         </div>
      </form>
   </Box>
</template>

<script>
   export default {
      components: {
      },
      data() {
         return {
            name: '',
            viewers: 0
         }
      },
      methods: {
         onCreate() {
            if (!this.name || !this.viewers)
               return;

            const movie = {
               id: Date.now(),
               name: this.name,
               viewers: this.viewers,
               favourite: false,
               like: false   
            };

            this.$emit('onCreate', movie);

            this.name = '';
            this.viewers = 0;
         },
         mountedLog() {
            console.log('Component Mounted!');
         },
         updatedLog() {
            console.log('Component Updated!');
         },
         unmountedLog() {
            console.log('Component Unmounted!');
         }
      },
      // Life Cycle Hooks
      mounted() {
         this.mountedLog();
      },
      updated() {
         this.updatedLog();
      },
      unmounted() {
         this.unmountedLog();
      }
   }
</script>

<style>
   
</style>