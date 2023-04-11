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
            @click="openModalToRegisterPatient()"
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
                    @click="openModalToViewDataPatient(patient)"
                    class="btn btn-outline-primary"
                  >
                    <i class="bi-eye"></i>
                  </button>
                  <button
                    @click="openModalToEditDataPatient(patient)"
                    class="btn btn-outline-secondary"
                  >
                    <i class="bi-pencil-square"></i>
                  </button>
                  <button
                    @click="openModalToRemoveDataPatient(patient)"
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
    <ModalViewPatient :data-patient="dataPatient" />
    <ModalEditPatient :data-edit-patient="dataPatient" :is-edit-patient="isEditPatient" />
    <ModalPatientRemove :data-patient="dataPatient" />
    <notifications group="notification" />
  </div>
</template>

<script>
import $ from 'jquery'
import ModalViewPatient from './ModalViewPatient.vue'
import ModalEditPatient from './ModalEditPatient.vue'
import ModalPatientRemove from './ModalPatientRemove.vue'

export default {
  name: 'PatientsComponent',
  components: { ModalViewPatient, ModalEditPatient, ModalPatientRemove },
  data () {
    return {
      dataPatients: [],
      errorDataPatients: '',
      dataPatient: '',
      isEditPatient: false
    }
  },
  async created () {
    await this.$https.get()
      .then((response) => {
        this.dataPatients = response.data
      })
      .catch((_error) => {
        this.errorDataPatients = 'Erro ao realizar a requisição. Tente novamente mais tarde!'
        this.$notify({
          group: 'notification',
          title: `<i class="bi bi-x-circle"></i> ${this.errorDataPatients}`,
          type: 'error'
        })
      })
  },
  methods: {
    openModalToRegisterPatient () {
      this.isEditPatient = false
      this.dataPatient = ''
      $('#modalEditPatient').modal('show')
    },
    openModalToViewDataPatient (patient) {
      this.dataPatient = patient
      $('#modalViewPatient').modal('show')
    },
    openModalToEditDataPatient (patient) {
      this.dataPatient = patient
      this.isEditPatient = true
      $('#modalEditPatient').modal('show')
    },
    openModalToRemoveDataPatient (patient) {
      this.dataPatient = patient
      $('#modalPatientRemove').modal('show')
    }
  }
}
</script>
<style scoped lang="scss">
.custom-file-label::after {
  content: 'Anexar foto';
}
</style>
