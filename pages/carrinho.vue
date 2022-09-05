<template>
  <section class="section">

    <b-breadcrumb size="is-small">
        <b-breadcrumb-item tag='router-link' to="/">Home</b-breadcrumb-item>
              <b-breadcrumb-item tag='router-link' to="/produtos">Produtos</b-breadcrumb-item>
        <b-breadcrumb-item tag='router-link' to="/roupas/breadcrumb" active>Carrinho de compras</b-breadcrumb-item>
    </b-breadcrumb>
    
    <article class="notification is-danger">
      <h1 class="title">Carrinho de compras</h1>
    </article>


    <div class="box">

      <table class="table is-striped is-hoverable is-fullwidth" type="table is-rounded">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor unitário</th>
            <th>Quantidade</th>
            <th>Valor total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Calça slim com cinto forrado</td>
            <td>R$ 319,90</td>
            <td>1</td>
            <td>R$ 319,90</td>            
          </tr>
          <tr>
            <td>Calça slim com cinto forrado</td>
            <td>R$ 319,90</td>
            <td>1</td>
            <td>R$ 319,90</td> 
          </tr>
        </tbody>
      </table>
      
    </div>

    
  </section>
</template>

  

<script>
export default {
  name: 'Carrinho'
}
</script>

