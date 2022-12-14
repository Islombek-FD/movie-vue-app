<template> 
   <li 
      class="list-group-item d-flex justify-content-between align-items-center" 
      :class="[{ like: movie.like }, { favourite: movie.favourite }]"
   >
      <span class="list-group-item-label">{{ movie.name }}</span>

      <Input class="list-group-item-input w-auto ml-auto mr-3 border" type="text" :value="movie.viewers" />

      <div class="d-flex gutter">
         <Button @click="$emit('onToggle', { id: movie.id, name: 'favourite' })" class="btn-sm">
            <i class="fas fa-cookie" style="color: #e89f3e;"></i>
         </Button>

         <Button @click="$emit('onToggle', { id: movie.id, name: 'like' })" class="btn-sm">
            <i class="fas fa-star"></i>
         </Button>

         <Button @click="$emit('onDelete', movie.id)" class="btn-sm">
            <i class="fas fa-trash" style="color: #e5383b;"></i>
         </Button>
      </div>
   </li>
</template>

<script>
   export default {
      components: {
      },
      props: {
         movie: {
            type: Object,
            required: true
         }
      },
      methods: {
      }
   }
</script>
 
<style scoped>
   .favourite .list-group-item-label,
   .favourite .list-group-item-input {
      color: #e89f3e;
   }

   .gutter {
      column-gap: 8px;
   }

   .list-group-item .fa-star {
      color: #ffffff;
   }

   .list-group-item.like .fa-star {
      color: #ffd700;
   }
</style>