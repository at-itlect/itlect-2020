<template>
  <!-- App.vue -->
    <v-app style="width: 80%; margin: 0 auto;">
      <Navigation/>
      <v-content>
        <v-container>
          <router-view></router-view>
         </v-container>
      </v-content>
      <Footer/>
  </v-app>
</template>
<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    Footer,
    Navigation
  }
}
</script>