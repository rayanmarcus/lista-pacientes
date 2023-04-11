<template>
  <div class="modal fade" id="modalPatient">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Cadastro de pacientes</h4>
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
              <input class="form-control" id="nome-completo"/>
            </div>
            <div class="col-md-6 form-group">
              <label for="nome-mae" class="col-form-label">Nome Completo da Mãe*:</label>
              <input class="form-control" id="nome-mae"/>
            </div>
            <div class="col-md-6 form-group">
              <label for="data-nascimento" class="col-form-label">Data de Nascimento*:</label>
              <input class="form-control" id="data-nascimento"/>
            </div>
            <div class="col-md-6 form-group">
              <label for="cpf" class="col-form-label">CPF*:</label>
              <input class="form-control" id="cpf"/>
            </div>
            <div class="col-md-6 form-group">
              <label for="cns" class="col-form-label">CNS*:</label>
              <input class="form-control" id="cns"/>
            </div>
            <div class="col-md-6 form-group">
              <label for="cep" class="col-form-label">CEP*:</label>
              <input
                v-model="cep"
                class="form-control"
                id="cep"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="rua" class="col-form-label">Rua*:</label>
              <input
                v-model="rua"
                class="form-control"
                id="rua"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="numero" class="col-form-label">Número*:</label>
              <input
                v-model="numero"
                class="form-control"
                id="numero"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="bairro" class="col-form-label">Bairro*:</label>
              <input
                v-model="bairro"
                class="form-control"
                id="bairro"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="cidade" class="col-form-label">Cidade*:</label>
              <input
                v-model="cidade"
                class="form-control"
                id="cidade"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="estado" class="col-form-label">Estado*:</label>
              <input
                v-model="estado"
                class="form-control"
                id="estado"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-dismiss="modal">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ModalPatientComponent',
  data () {
    return {
      nome: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
