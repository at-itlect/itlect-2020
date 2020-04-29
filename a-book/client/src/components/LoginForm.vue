<template>
<v-row
      class="mb-6"
      justify="center"
      no-gutters
>
   <v-col lg="4" sm="4">
    <form action="" method="post" style="">
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        label="Password"
        type="password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
    </form>
   </v-col>
</v-row>
</template>

<script>
export default {
  name: 'LoginForm',
  methods: {
    submit(){},
  },
  data() {
    return {
      email: '',
      emailErrors: '',
      password: '',
      passwordErrors: '',
    }
  }
}
</script>