<template>
  <div class="container login-container">
    <div class="row">
      <h1 class="mb-4 mx-auto">Login do usuário</h1>
      <div class="col-md-12">
        <div class="col-md-4 mb-2 mx-auto">
          <label for="user">Usuário</label>
          <input
            v-model="user"
            id="user"
            type="text"
            class="form-control"
            placeholder="Insira o seu usuário"
          />
        </div>
        <div class="col-md-4 mx-auto">
          <label for="password">Senha</label>
          <input
            v-model="password"
            id="password"
            type="password"
            class="form-control"
            placeholder="Insira a sua senha"
          />
        </div>
        <div
          v-if="msgErrorLogin"
          class="col-md-4 mx-auto text-center"
        >
          <small
            :class="{ 'error-login': msgErrorLogin }"
            class="text-center"
          >
            {{ msgErrorLogin }}
          </small>
        </div>
        <div class="col-md-4 mt-2 mx-auto text-center">
          <button
            @click="login"
            class="btn btn-primary"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data () {
    return {
      user: '',
      password: '',
      authenticated: false,
      errorUser: false,
      msgErrorLogin: ''
    }
  },
  methods: {
    login () {
      if (!this.user && !this.password) {
        this.msgErrorLogin = 'Preencha todos os campos adequadamente'
        return
      }
      if (!this.user) {
        this.msgErrorLogin = 'Preencha o campo de usuário'
        return
      }
      if (!this.password) {
        this.msgErrorLogin = 'Preencha o campo de senha'
        return
      }
      if (this.user === 'Rayan' && this.password === '12345') {
        this.$router.push(
          {
            path: '/patiente-list',
            query: {
              user: this.user,
              authenticated: true
            }
          }
        )
      } else {
        this.msgErrorLogin = 'Usuário ou senha inválidos'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-container{
  margin-top: 65px;
}
.error-login{
  color: #b60202ca;
}
</style>
