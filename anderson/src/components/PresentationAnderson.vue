<script>
export default {
  data() {
    return { 
      images: ["1.png","2.png","3.png"],
      basePath: `${process.env.PUBLIC_PATH}`,
    };
  },
};
</script>

<template>
  <div>
    <v-carousel>
      <v-carousel-item v-for="(item, i) in images" :key="i" :src="`${basePath}/images/${item}`"></v-carousel-item>
    </v-carousel>
  </div>
</template>