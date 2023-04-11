<!-- eslint-disable import/no-duplicates -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <nav class="text-right">
          Seja bem vindo
          <span v-if="$route.query.user">, {{ $route.query.user }} | </span>
          <router-link to="/">Deslogar</router-link>
        </nav>
      </div>
      <Patients />
    </div>
  </div>
</template>

<script>
import Patients from '@/components/Patients.vue'

export default {
  name: 'PatientView',
  components: {
    Patients
  },
  data () {
    return {
      user: ''
    }
  },
  created () {
    if (this.$route.query.authenticated) {
      this.user = this.$route.query.user
    } else {
      // Deslogar usuário não autenticado
      this.$router.push('/')
    }
  }
}
</script>
