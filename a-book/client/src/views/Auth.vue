<template>
  <LoginForm/>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  name: 'Auth',
  methods: {
    submit(){},
  },
  data() {
    return {
      action: 0, // 0 - Login, 1 - Registration
    }
  },
  components: {
    LoginForm,
  }
}
</script>