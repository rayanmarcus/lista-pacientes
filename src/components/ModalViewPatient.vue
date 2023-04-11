<template>
  <div class="modal fade" id="modalViewPatient">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            Dados do paciente
          </h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12 mb-4">
              <img
                v-if="dataPatient.foto"
                :src="dataPatient.foto"
                alt="imagem do paciente"
                class="rounded mx-auto d-block img-patient"
              />
              <p
                v-else
                class="text-center"
              >
                <i>Paciente sem foto</i>
              </p>
            </div>
            <div class="col-md-6 form-group">
              <label for="nome-completo" class="col-form-label">Nome Completo: </label>
              <span> {{ dataPatient.nome }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="nome-mae" class="col-form-label">Nome Completo da Mãe:</label>
              <span> {{ dataPatient.nomeMae }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="data-nascimento" class="col-form-label">Data de Nascimento:</label>
              <span> {{ dataPatient.dataNascimento }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="cpf" class="col-form-label">CPF:</label>
              <span> {{ dataPatient.cpf }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="cns" class="col-form-label">CNS:</label>
              <span> {{ dataPatient.cns }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="cep" class="col-form-label">CEP:</label>
              <span> {{ dataPatient.cep }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="rua" class="col-form-label">Rua:</label>
              <span> {{ dataPatient.rua }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="numero" class="col-form-label">Número:</label>
              <span> {{ dataPatient.numero }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="bairro" class="col-form-label">Bairro:</label>
              <span> {{ dataPatient.bairro }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="cidade" class="col-form-label">Cidade:</label>
              <span> {{ dataPatient.cidade }}</span>
            </div>
            <div class="col-md-6 form-group">
              <label for="estado" class="col-form-label">UF:</label>
              <span> {{ dataPatient.estado }}</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ModalViewPatientComponent',
  props: ['dataPatient']
}
</script>

<style lang="scss" scoped>

</style>
