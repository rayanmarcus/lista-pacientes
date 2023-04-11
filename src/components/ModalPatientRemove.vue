<template>
  <div class="modal fade" id="modalPatientRemove">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Remover paciente</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Você deseja realmente excluir o paciente <strong>{{ dataPatient.nome }}</strong>?
        </div>
        <div class="modal-footer">
          <button
            @click="removePatient()"
            type="button"
            class="btn btn-danger"
          >
            Remover paciente
          </button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ModalPatientRemoveComponent',
  props: ['dataPatient'],
  methods: {
    async removePatient () {
      await this.$https.delete(`${this.dataPatient.id}`)
        .then(() => {
          this.$('#modalPatientRemove').modal('hide')
          this.$notify({
            group: 'notification',
            title: '<i class="bi bi-check-circle"></i> Paciente removido com sucesso',
            type: 'success'
          })
        })
        .catch((_error) => {
          this.$notify({
            group: 'notification',
            title: '<i class="bi bi-x-circle"></i> Erro ao excluir paciente. <br/> Tente novamente mais tarde!',
            type: 'error'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
