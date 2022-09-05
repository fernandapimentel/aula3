<template>
  <section class="section">

    <b-breadcrumb size="is-small">
        <b-breadcrumb-item tag='router-link' to="/">Home</b-breadcrumb-item>
        <b-breadcrumb-item tag='router-link' to="/roupas/breadcrumb" active>Produtos</b-breadcrumb-item>
    </b-breadcrumb>

<script>
export default {

  name: 'ExSizes',

}
</script>
    

    <article class="notification is-danger">
      <p class="title">Produtos</p>
    </article>

    <div class="columns mt-4">
      
      <div class="column is-one-quarter">
        <article class="notification is-danger is-light">
          <p class="title mb-5">Filtros</p>
          <p class="title is-6 mb-4">Categoria</p>

          <b-field>
              <b-checkbox :value="true"
              type="is-danger" size="is-small">
                  Calças
              </b-checkbox>
          </b-field>

          <b-field>
              <b-checkbox :value="true"
              type="is-danger" size="is-small">
                  Saias
              </b-checkbox>
          </b-field>

          <b-field>
              <b-checkbox :value="true"
              type="is-danger" size="is-small">
                  Vestidos
              </b-checkbox>
          </b-field>

          <p class="title is-6 mt-6 mb-2">Preço</p>

            <template>
                <section>
                    <b-field>
                        <b-slider type="is-danger" :min="0" :max="3" aria-label="Fan" :tooltip="false">
                            <b-slider-tick :value="0">$</b-slider-tick>
                            <b-slider-tick :value="1">$$</b-slider-tick>
                            <b-slider-tick :value="2">$$$</b-slider-tick>
                            <b-slider-tick :value="3">$$$$</b-slider-tick>
                        </b-slider>
                    </b-field>
                </section>
            </template>
              
        </article>
      </div>

      <div class="column">
        
        <div class="columns">
          
          <div class="column">
            <figure class="image">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1649418872/images/calca-slim-com-cinto-forrado-preto-03.jpg" href="https://aula-ecommerce.fernandapimentel.repl.co/cal%C3%A7a">
            </figure>

            <figure class="image mt-5">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1661543005/images/dolps-saia-mari-conhaque-02.jpg">
            </figure>

            <figure class="image mt-5">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1649418872/images/calca-slim-com-cinto-forrado-preto-03.jpg">
            </figure>
            
          </div>
          
          <div class="column">
            <figure class="image">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1655990756/images/calca-slim-com-cinto-forrado-caqui-03.jpg">
            </figure>

            <figure class="image mt-5">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1662037867/images/dolps-saia-mari-verde-militar-02.jpg">
            </figure>

            <figure class="image mt-5">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1655990756/images/calca-slim-com-cinto-forrado-caqui-03.jpg">
            </figure>
            
          </div>
          
          <div class="column">
            <figure class="image">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1649418908/images/calca-slim-com-cinto-forrado-off-white-03.jpg">
            </figure>

            <figure class="image mt-5">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1661525426/images/vestido-curto-manga-longa-recorte-costas-preto-01.jpg">
            </figure>

            <figure class="image mt-5">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1649418908/images/calca-slim-com-cinto-forrado-off-white-03.jpg">
            </figure>
            
          </div>
          
          <div class="column">
            <figure class="image">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1655939831/images/calca-slim-com-cinto-forrado-lilas-03.jpg">
            </figure>

            <figure class="image mt-5" tag="router-link" :to="{ path: '/calça' }">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1662138557/images/ave-rara-vestido-hi-perola-c-verde-01.jpg">
            </figure>

            <figure class="image mt-5">
              <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_3840,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1655939831/images/calca-slim-com-cinto-forrado-lilas-03.jpg">
            </figure>
            
          </div>
          
        </div>
      </div>
    </div>
    
  </section>
</template>

