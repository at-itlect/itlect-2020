<template>
  <v-container>
    <v-footer dark color="primary" absolute class="font-weight-medium">
        <v-col class="text-center" cols="12">{{message[0].text}}</v-col>
    </v-footer>
  </v-container>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      message: [
        {
          text: "ITLect - Nur-Sultan - 2020 Copyright &copy;"
        }
      ],
    }),
  }
</script>
