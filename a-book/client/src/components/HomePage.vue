<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/eto_norma.png')"
          class="my-1"
          contain
          height = "200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomePage',

    data: () => ({
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
