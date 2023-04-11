<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="mb-4 mx-auto">Listagem de pacientes</h1>
      <div class="col-md-12 mb-3">
        <div class="text-right">
          <button
            type="button"
            class="btn
            btn-primary"
            @click="openModal()"
          >
            Cadastrar novo paciente
          </button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-hover text-center mb-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Data de nascimento</th>
              <th scope="col">CNS</th>
              <th scope="col">Cidade/UF</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody  class="text-center">
            <tr
              v-for="(patient, index) in dataPatients"
              :key="index"
            >
              <th scope="row"> {{ index + 1 }}</th>
              <td>{{ patient.nome }}</td>
              <td>{{ patient.dataNascimento }}</td>
              <td>{{ patient.cns }}</td>
              <td>{{ patient.cidade }} - {{ patient.estado }}</td>
              <td>
                <div class="btn-group">
                  <button
                    @click="viewDataPatient(patient.id)"
                    class="btn btn-outline-primary"
                  >
                    <i class="bi-eye"></i>
                  </button>
                  <button
                    @click="editDataPatient(patient.id)"
                    class="btn btn-outline-secondary"
                  >
                    <i class="bi-pencil-square"></i>
                  </button>
                  <button
                    @click="removeDataPatient(patient)"
                    class="btn btn-outline-danger"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="errorDataPatients">
              <td colspan="6" class="text-secondary">
                {{ errorDataPatients }}
              </td>
            </tr>
            <tr v-if="!dataPatients.length && !errorDataPatients">
              <td colspan="6" class="text-secondary">
                Não há pacientes cadastrados
              </td>
            </tr>
            <tr v-if="dataPatients.length > 0 && !errorDataPatients">
              <td colspan="6" class="text-secondary">
                Total de pacientes: {{ dataPatients.length }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ModalPatient />
    <ModalPatientRemove :data-patient="dataPatient"/>
    <notifications group="notification" />
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import ModalPatient from './ModalPatient.vue'
import ModalPatientRemove from './ModalPatientRemove.vue'

// import { validaCns, validaCnsProv } from '../helpers/index'

const headers = { 'Content-type': 'application/json; charset=UTF-8' }
const urlApi = 'https://my-json-server.typicode.com/rayanmarcus/fakeapi'

export default {
  name: 'PatientsComponent',
  components: { ModalPatient, ModalPatientRemove },
  data () {
    return {
      dataPatients: [],
      errorDataPatients: '',
      patientSpecificData: [],
      errorPatientSpecificData: '',
      dataPatient: ''
    }
  },
  async mounted () {
    await axios.get(`${urlApi}/pacientes`, { headers })
      .then((response) => {
        this.dataPatients = response.data
      })
      .catch((_error) => {
        this.errorDataPatients = 'Erro ao realizar a requisição. Tente novamente mais tarde!'
      })
  },
  methods: {
    openModal () {
      // eslint-disable-next-line no-undef
      $('#modalPatient').modal('show')
    },
    async viewDataPatient (idPatient) {
      await axios.get(`${urlApi}/pacientes/${idPatient}`, { headers })
        .then((response) => {
          this.patientSpecificData = response.data
          // Chamar modal, com a opção de edição
        })
        .catch((_error) => {
          this.errorPatientSpecificData = 'Erro ao localizar os dados deste paciente. Tente novamente mais tarde!'
        })
    },
    async editDataPatient (idPatient) {
      console.log(idPatient)
    },
    async removeDataPatient (patient) {
      this.dataPatient = patient
      $('#modalPatientRemove').modal('show')
    },
    async saveData () {
      const data = {
        nome: 'Ricardo Souza',
        nomeMae: 'Ricardo Souza',
        dataNascimento: '06/06/1987',
        cpf: '433.666.666-66',
        cns: '678901234567890',
        cep: '56789-012',
        rua: 'Rua F',
        numero: '600',
        bairro: 'Bairro F',
        cidade: 'Cidade F',
        estado: 'MG'
      }
      axios.post(`${urlApi}/posts`, data, { headers })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    },
    async getAdress (cep) {
      const thisVue = this
      await axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function (response) {
          const data = response.data
          if (data.erro) {
            throw new Error('CEP Invalido')
          }
          thisVue.rua = data.logradouro
          thisVue.cidade = data.localidade
          thisVue.bairro = data.bairro
          thisVue.estado = data.uf
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  watch: {
    cep (value) {
      value = value.trim()
      value = value.replace(/[^a-z0-9]/gi, '')
      if (value.length === 8) {
        this.getAdress(value)
      } else {
        this.rua = ''
        this.cidade = ''
        this.bairro = ''
        this.uf = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom-file-label::after {
  content: 'Anexar foto';
}
</style>
