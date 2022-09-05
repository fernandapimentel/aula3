<template>
  <div class="container">

    <div class="columns">
      <div class="column is-half is-offset-one-quarter mt-6 is-light is-rounded">
        <p class="title is-2">Login</p>
        <p class="subtitle is-5">Digite seu e-mail e 
         senha</p>
          <form class="box">

<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success">
      Login
    </button>
  </p>
</div>


          <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="alex@exemplo.com">
          </div>
          </div>
  
          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input class="input" type="password" placeholder="********">
            </div>
          </div>
            <b-checkbox v-model="checkboxCustom"
                type = "is-danger"
                true-value="Manter logado"
                false-value="No">
              Manter logado 
                {{ checkboxCustom }}
            </b-checkbox>
     <b-button type="is-rounded is-danger mt-6" expanded>Entrar</b-button>


          </form>
      </div>
    </div>  
    
  </div>
</template>
<script>
export default {
  layout: "clean"
}
</script>