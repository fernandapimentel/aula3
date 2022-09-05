<template>
  <section class="section">

        <b-breadcrumb
            size="is-small"
        >
            <b-breadcrumb-item tag='router-link' to="/">Home</b-breadcrumb-item>
            <b-breadcrumb-item tag='router-link' to="/roupas">Produtos</b-breadcrumb-item>
            <b-breadcrumb-item tag='router-link' to="/roupas/breadcrumb" active>Calça</b-breadcrumb-item>
        </b-breadcrumb>

<script>
export default {

  name: 'ExSizes',

}
</script>
    
    <div class="columns mt-5">
      <div class="column is-3">
        <figure class="image">
          <img src="https://amaroecp-res.cloudinary.com/image/upload/v1649418917/images/calca-slim-com-cinto-forrado-preto-01.jpg">
        </figure>
      </div>
      <div class="column is-8">
        
        <article class="notification is-danger is-light">
          <p class="title is-2">Calça slim com cinto forrado</p>
          <p class="subtitle is-6 mt-1">Um clássico queridinho. Perfeita para usar no trabalho e arrasar. Essa calça tem comprimento longo, shape slim, cintura alta com cinto forrado, pregas, bolsos e fechamento por zíper e botão.</p>
          <p>
            <template>
                <section>
                    <b-rate custom-text="5 avaliações"></b-rate>
                </section>
            </template>
            <script>
                export default {
                    methods: {
                        success() {
                            this.$buefy.toast.open({
                                message: 'Thanks for you Rate!',
                                type: 'is-success'
                            })
                        }
                    }
                }
            </script>
          </p>
        </article>

        <nav class="level-left">
          <div class="level-item has-text-left">
            <div>
              <p class="heading">10x R$ 31,99</p>
              <p class="title">R$ 319,90</p>
            </div>
          </div>
        </nav>
        
        <div class="buttons mt-4">
          <b-button type="is-danger is-rounded">Comprar</b-button>
          <b-button type="is-rounded"
            icon-left="heart">
            Favoritar
          </b-button>
        </div>

        <div class="buttons">
          <button class="button">34</button>
          <button class="button">36</button>
          <button class="button">38</button>
          <button class="button">40</button>
          <button class="button">42</button>
          <button class="button">44</button>
          <button class="button">46</button>
          <button class="button">48</button>
        </div>


<style scoped>
    .content {
        margin-bottom: 0 !important;
    }
</style>    
      </div>      
    </div>

        <div>
          <template>
              <section>
                  <b-tabs v-model="activeTab">
                      <b-tab-item label="Descrição">

                        <template>
                            <section>
                                <div class="content">
                                    <p>
                                        CALÇA SLIM COM CINTO FORRADO é um clássico queridinho Perfeita para usar no trabalho e arrasar. Essa calça tem comprimento longo, shape slim, cintura alta com cinto forrado, pregas, bolsos e fechamento por zíper e botão. <br/>
                                        Esta é uma peça Special Edition, nossa linha de produtos com design atemporal, tecido nobre e acabamento único. <br/>
                                    </p>
                                </div>
                                <b-collapse 
                                    :open="false" 
                                    position="is-bottom" 
                                    aria-id="contentIdForA11y4">
                                    <template #trigger="props">
                                        <a
                                            aria-controls="contentIdForA11y4"
                                            :aria-expanded="props.open">
                                            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
                                            {{ !props.open ? 'Mostrar mais' : 'Mostrar menos' }}
                                        </a>
                                    </template>
                                    <p>
                        Possui tecido de qualidade superior devido a estrutura dublada da peça, que traz sofisticação e resistência, não sendo transparente em cores claras. O algodão, fibra natural, é a matéria-prima principal e proporciona maior durabilidade, maciez e conforto. Ele se une com o elastano, o que permite maior flexibilidade e não marca o joelho em roupas de comprimento longo. É a peça perfeita para usar durante anos.
                                    </p>
                                </b-collapse>
                            </section>
                        </template>
                        
                      </b-tab-item>
          
                      <b-tab-item label="Comentários">

                        <div class="box">
                        <article class="media">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img src="https://cdn-icons-png.flaticon.com/512/206/206881.png">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>Chiara Bernal</strong> <small>@chiarabb</small> <small>31m</small>
                                <br>
                                Amei a calça! É perfeita.
                              </p>
                            </div>
                            <nav class="level is-mobile">
                              <div class="level-left">
                                <a class="level-item">
                                  <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                  <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                </a>
                              </div>
                            </nav>
                          </div>
                        </article>
                        </div>

                        <div class="box">
                        <article class="media">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="content">
                              <p>
                                <strong>Clarissa</strong> <small>@clarissa</small> <small>31m</small>
                                <br>
                                Veste muito bem.
                              </p>
                            </div>
                            <nav class="level is-mobile">
                              <div class="level-left">
                                <a class="level-item">
                                  <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                  <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                </a>
                              </div>
                            </nav>
                          </div>
                        </article>
                        </div>

                          <b>Deixe sua avaliação:</b> <br>

                        <div class="box mt-5">
                        <article class="media">
                          <figure class="media-left">
                            <p class="image is-64x64">
                              <img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png">
                            </p>
                          </figure>
                          <div class="media-content">
                            <div class="field">
                              <p class="control">
                                <textarea class="textarea" placeholder="Adicionar um comentário..."></textarea>
                              </p>
                            </div>
                            <nav class="level">
                              <div class="level-left">
                                <div class="level-item">
                                  <a class="button is-round is-danger">Enviar</a>
                                </div>
                              </div>
                              <div class="level-right">
                                <div class="level-item">
                                  <label class="checkbox">
                                    <input type="checkbox"> Pressione enter para enviar
                                  </label>
                                </div>
                              </div>
                            </nav>
                          </div>
                        </article>
                        </div>
                        
                      </b-tab-item>
          
                  </b-tabs>
              </section>
          </template>
          
          <script>
              export default {
                  data() {
                      return {
                          activeTab: 0,
                          showBooks: false
                      }
                  }
              }
          </script>
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
  </section>
</template>

