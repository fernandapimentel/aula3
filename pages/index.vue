<template>
  <section class="section">

    <div>
       <!-- carousel com imagens -->
      <b-carousel>
        <b-carousel-item>
          <b-image
              :src="require('@/assets/1.png')"
              alt="Banner 1"
          ></b-image>
        </b-carousel-item>
        <b-carousel-item>
          <b-image
              :src="require('@/assets/2.png')"
              alt="Banner 2"
          ></b-image>
        </b-carousel-item>      
        <b-carousel-item>
        <b-image
            :src="require('@/assets/3.png')"
            alt="Banner 3"
        ></b-image>
        </b-carousel-item>            
      </b-carousel>
    </div>


    <div>
        <section class="hero is-danger mt-5">
      <div class="hero-body">
        <p class="title">
          Destaques
        </p>
        <p class="subtitle">
          Confira os produtos mais desejados da semana!
        </p>
      </div>
        </section>
    </div>

    <div class="columns mt-5">
      <div class="column">
        <figure class="image">
          <img src="https://amaroecp-res.cloudinary.com/image/upload/v1649808117/images/vestido-longo-de-guipir-verde-01.jpg">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="https://amaroecp-res.cloudinary.com/image/upload/v1649638247/images/vestido-midi-brilho-decote-v-com-alca-larga-e-dourado-01.jpg">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="https://amaroecp-res.cloudinary.com/image/upload/v1649418284/images/trench-coat-london-breeze-camel-01.jpg">
        </figure>
      </div>
      <div class="column">
        <figure class="image">
          <img src="https://amarotech-res.cloudinary.com/image/fetch/c_limit,f_auto,dpr_1,w_1200,q_auto/v1/https://amaroecp-res.cloudinary.com/image/upload/v1650911858/images/macacao-casual-acinturado-creponado-vinho-01.jpg">
        </figure>
      </div>
    </div>

    <section class="hero">
      <div class="hero-body">
        <p class="title">
          Moda, beleza, bem-estar e casa.
        </p>
        <p class="subtitle">
          AMARO é uma marca de <i>lifestyle</i> que oferece o melhor da moda, beleza, bem-estar e casa num só lugar. <i>Se tem na sua vida, tem na AMARO.</i>
        </p>
      </div>
    </section>
      
  </section>
</template>

