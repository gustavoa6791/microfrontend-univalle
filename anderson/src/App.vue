<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: anderson</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <PresentationAnderson/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
import PresentationAnderson from './components/PresentationAnderson.vue';

  export default defineComponent({
    components:{
      PresentationAnderson
    }
  });
</script>
