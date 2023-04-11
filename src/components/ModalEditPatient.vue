<template>
  <div class="modal fade" id="modalEditPatient">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4
            v-if="isEditPatient"
            class="modal-title"
          >
            Edição de paciente
          </h4>
          <h4
            v-else
            class="modal-title"
          >
            Cadastro de paciente
          </h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12 form-group input-group mb-3">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                <label class="custom-file-label" for="inputGroupFile01">Escolha uma foto</label>
              </div>
            </div>
            <div class="col-md-6 form-group">
              <label for="nome-completo" class="col-form-label">Nome Completo*:</label>
              <input
                v-model="data.nome"
                class="form-control"
                id="nome-completo"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="nome-mae" class="col-form-label">Nome Completo da Mãe*:</label>
              <input
                v-model="data.nomeMae"
                class="form-control"
                id="nome-mae"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="data-nascimento" class="col-form-label">Data de Nascimento*:</label>
              <input
                v-model="data.dataNascimento"
                class="form-control"
                id="data-nascimento"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="cpf" class="col-form-label">CPF*:</label>
              <input
                v-model="data.cpf"
                class="form-control"
                id="cpf"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="cns" class="col-form-label">CNS*:</label>
              <input
                v-model="data.cns"
                class="form-control"
                id="cns"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="cep" class="col-form-label">CEP*:</label>
              <input
                v-model="data.cep"
                class="form-control"
                id="cep"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="rua" class="col-form-label">Rua*:</label>
              <input
                v-model="data.rua"
                class="form-control"
                id="rua"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="numero" class="col-form-label">Número*:</label>
              <input
                v-model="data.numero"
                class="form-control"
                id="numero"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="bairro" class="col-form-label">Bairro*:</label>
              <input
                v-model="data.bairro"
                class="form-control"
                id="bairro"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="cidade" class="col-form-label">Cidade*:</label>
              <input
                v-model="data.cidade"
                class="form-control"
                id="cidade"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="estado" class="col-form-label">Estado*:</label>
              <input
                v-model="data.estado"
                class="form-control"
                id="estado"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            @click="saveOrUpdate()"
            type="button"
            class="btn btn-success"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { validaCns, validaCnsProv } from '../helpers/index'
let titleNotification = '<i class="bi bi-check-circle"></i>'
let typeNotification = 'success'

export default {
  name: 'ModalEditPatientComponent',
  props: ['dataEditPatient', 'isEditPatient'],
  data: function () {
    return {
      data: {
        nome: '',
        nomeMae: '',
        dataNascimento: '',
        cpf: '',
        cns: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        foto: ''
      }
    }
  },
  watch: {
    dataEditPatient: function () {
      this.data.nome = this.dataEditPatient.nome
      this.data.nomeMae = this.dataEditPatient.nomeMae
      this.data.dataNascimento = this.dataEditPatient.dataNascimento
      this.data.cpf = this.dataEditPatient.cpf
      this.data.cns = this.dataEditPatient.cns
      this.data.cep = this.dataEditPatient.cep
      this.data.rua = this.dataEditPatient.rua
      this.data.numero = this.dataEditPatient.numero
      this.data.bairro = this.dataEditPatient.bairro
      this.data.cidade = this.dataEditPatient.cidade
      this.data.estado = this.dataEditPatient.estado
      this.data.foto = this.dataEditPatient.foto
    },
    'data.cep' (value) {
      value = value.trim()
      value = value.replace(/[^a-z0-9]/gi, '')
      if (value.length === 8) {
        this.getAdress(value)
      } else {
        this.rua = ''
        this.cidade = ''
        this.bairro = ''
        this.estado = ''
      }
    }
  },
  methods: {
    async saveOrUpdate () {
      if (this.isEditPatient) {
        await this.update()
      } else {
        await this.save()
      }
    },
    async update () {
      await this.$https.put('/' + this.dataEditPatient.id, this.data)
        .then(() => {
          titleNotification = 'Dados atualizados com sucesso'
          typeNotification = 'success'
          this.$('#modalEditPatient').modal('hide')
        })
        .catch((_error) => {
          typeNotification = 'error'
          titleNotification = 'Erro ao atualizar os dados. Tente novamente mais tarde!'
        })

      this.$notify({
        group: 'notification',
        title: titleNotification,
        type: typeNotification
      })
    },
    async save () {
      await this.$https.post('', this.data)
        .then(() => {
          typeNotification = 'success'
          titleNotification = 'Dados salvo com sucesso'
          this.$('#modalEditPatient').modal('hide')
        })
        .catch((_error) => {
          typeNotification = 'error'
          titleNotification = 'Erro ao salvar os dados. Tente novamente mais tarde!'
        })

      this.$notify({
        group: 'notification',
        title: titleNotification,
        type: typeNotification
      })
    },
    async getAdress (cep) {
      const thisVue = this
      await this.$https.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          const data = response.data
          if (data.erro) {
            throw new Error('CEP Invalido')
          }
          thisVue.data.rua = data.logradouro
          thisVue.data.cidade = data.localidade
          thisVue.data.bairro = data.bairro
          thisVue.data.estado = data.uf
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
