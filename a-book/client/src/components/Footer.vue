<template>
  <v-container>
    <v-footer dark color="primary" absolute class="font-weight-medium">
<!--        <v-col class="text-center" cols="12">{{message[0].text}}<v-icon right>{{icon}}</v-icon></v-col>-->
        <v-col class="text-center" cols="12">{{message[0].text}}<v-icon right>mdi-copyright</v-icon></v-col>
    </v-footer>
  </v-container>
</template>

<script>
  import { mdiCopyright } from '@mdi/js'
  export default {
    name: 'Footer',
    data: () => ({
      icon: mdiCopyright,
      message: [
        {
          text: "ITLect - Nur-Sultan - 2020 Copyright",
        }
      ],
    }),
  }
</script>
