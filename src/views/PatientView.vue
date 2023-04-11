<!-- eslint-disable import/no-duplicates -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <nav class="text-right">
          Seja bem vindo<span v-if="$route.query.user">, {{ $route.query.user }} | </span>
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
  created () {
    if (!this.$route.query.authenticated) {
      this.$router.push('/')
    }
  }
}
</script>
