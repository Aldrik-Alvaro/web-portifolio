<template>
  <div class="banner-1">
    <nav class="container px-6 mx-auto md:flex md:justify-between md:items-center">
    <div class="flex items-center justify-between">
    <div class="relative w-16 h-16">
      <img
        class="rounded-full border border-gray-100 shadow-sm"
        src="/src/assets/1.png"
        alt="user image"
      />
    </div>
    
    <button
      @click="showMenu = !showMenu"
      type="button"
      class="flex md:hidden text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
      aria-label="Toggle menu"
    >
      <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
        <path
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        ></path>
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  <ul
    :class="showMenu ? 'flex' : 'hidden'"
    class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
  >
    <li class="menu-button"><a href="#" class="hover:text-gray-600 transition">Início</a></li>
    <li class="menu-button"><a href="#work" v-smooth-scroll class="hover:text-gray-600 transition">Projetos</a></li>
    <!-- <li class="menu-button"><a href="#testimonial" v-smooth-scroll class="hover:text-gray-600 transition">Tirar</a></li> -->
    <li class="menu-button"><a href="#about" v-smooth-scroll class="hover:text-gray-600 transition">Sobre Mim</a></li>
  </ul>
</nav>


    <div class="flex items-center">
      
      <div class="w-11/12 space-y-5 md:space-y-10">
        <h3
          class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-sans"
        >
          👋 Olá,
        </h3>
        <h1
          class="3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-2xl text-lg font-sans font-bold leading-tight text-gray-700"
        >
          Eu sou
          <a
            href="https://www.linkedin.com/in/aldrikalvaro/"
            target="_blank"
            class="text-black hover:underline"
          >
            Aldrik</a
          > <br />Analista e Engenheiro de Dados
        </h1>


        
        <div class="md:flex gap-1 md:gap-10">
         <a href="https://www.linkedin.com/in/aldrikalvaro/" target="_blank" rel="noopener noreferrer">
  <button class="submit-button mb-5 md:mb-0 px-6 py-2 text-base font-semibold border-4 border-gray-800 text-gray-800 bg-transparent hover:bg-gray-800 hover:text-white transition">
    Fale comigo
  </button>
</a>
<a href="https://github.com/Aldrik-Alvaro/portifolio" target="_blank" rel="noopener noreferrer">
  <button class="submit-button hidden md:block px-6 py-2 text-base font-semibold border-4 border-gray-800 text-white bg-gray-800 hover:bg-white hover:text-gray-800 transition">
    Ver meu trabalho
  </button>
</a>


         
        </div>
      </div>




















      <div class="w-8/12 flex justify-end">
        <img
          class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          src="/src/assets/2.png"
          alt="user image"
        />
      </div>
    </div>
  </div>

  <div class="banner-2 space-y-10 pb-20" id="work">
    <h3 class="heading3 my-5">Projetos</h3>
    
    
    <!-- <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Análise de Sentimento por Geolocalização</h4>
        <p class="font-work_sans pr-12">
          Plataforma para envio de dados de feedback, com retorno de sentimentos e um painel analítico focado em geolocalização.
        </p>
        <a href="https://github.com/Fluffy-Fatec/Projeto-Integrador-Imagem" target="_blank" rel="noopener noreferrer">
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            Repositorio do Projeto
          </button>
        </a>
      </div>
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="/src/assets/3.jpg"
        />
      </div>
    </div> -->













    <div class="card flex flex-col md:flex-row">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Análise de Sentimento por Geolocalização</h4>
        <p class="font-work_sans pr-12">
          Plataforma para envio de dados de feedback, com retorno de sentimentos e um painel analítico focado em geolocalização.
        </p>
        <a href="https://github.com/Fluffy-Fatec/Projeto-Integrador-Imagem" target="_blank" rel="noopener noreferrer">
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            Repositório do Projeto
          </button>
        </a>
      </div>
      <div class="card-image md:w-1/2">
        <img
          class="object-cover w-full h-64 md:h-full rounded-xl shadow-lg"
          src="/src/assets/pandalyzeheader.jpg"
          alt="Imagem do projeto Oracle Dinner"
        />
      </div>
    </div>



    <div class="card flex flex-col md:flex-row">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Oracle Dinner - Dashboard de Restaurante</h4>
        <p class="font-work_sans pr-12">
          Plataforma para Realizar a ingestão de dados via CSV, tratá-los, carregá-los em um data warehouse e exibi-los em um painel analítico.
        </p>
        <a href="https://github.com/Aldrik-Alvaro/Projeto-Integrador-Oracle" target="_blank" rel="noopener noreferrer">
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            Repositório do Projeto
          </button>
        </a>
      </div>
      <div class="card-image md:w-1/2">
        <img
          class="object-cover w-full h-64 md:h-full rounded-xl shadow-lg"
          src="/src/assets/4.jpg"
          alt="Imagem do projeto Oracle Dinner"
        />
      </div>
    </div>

    <div class="card flex flex-col md:flex-row">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Automatização e Visualização dos Dados</h4>
        <p class="font-work_sans pr-12">
          Plataforma para minerar dados meteorológicos abertos (GOV.br), tratá-los e exibi-los em um painel analítico.
        </p>
        <a href="https://github.com/fluffyfatec/Iacit" target="_blank" rel="noopener noreferrer">
          <button class="text-sky-800 font-bold text-2xl tracking-wider">
            Repositório do Projeto
          </button>
        </a>
      </div>
      <div class="card-image md:w-1/2">
        <img
          class="object-cover w-full h-64 md:h-full rounded-xl shadow-lg"
          src="/src/assets/iacit.jpg"
          alt="Imagem do projeto Oracle Dinner"
        />
      </div>
    </div>


    <!-- <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title">Automatização e Visualização dos Dados</h4>
        <p class="font-work_sans pr-12">
          Plataforma para minerar dados meteorológicos abertos (GOV.br), tratá-los e exibi-los em um painel analítico.
        </p>
        <a href="https://github.com/fluffyfatec/Iacit" target="_blank" rel="noopener noreferrer">
        <button class="text-sky-800 font-bold text-2xl tracking-wider">
          Repositorio do Projeto
        </button>
        </a>
      </div>
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="/src/assets/gif"
        />
      </div>
    </div> -->
  </div>

  <!-- <div class="banner-1" id="testimonial">
    <div class="space-y-4 grid place-items-center mt-5">
      <h3 class="heading3">Some Generous Words</h3>
      <p class="font-work_sans text-gray-600 font-semibold leading-relaxed">
        Some of my favorite testimonials from my clients
      </p>
    </div>
    <div class="max-w-6xl mx-auto px-8 py-16">
      <div class="relative">
        <div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
          <div
            class="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center"
          >
            <img
              class="absolute h-full w-full object-cover"
              src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png"
              alt=""
            />
            <div class="absolute inset-0 bg-gray-700 opacity-75"></div>
            <svg
              class="relative"
              width="200"
              height="120"
              viewBox="0 0 200 120"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M63.75 75.24l2.5-5.93c2.7 2.05 6.3 3.13 9.85 3.13 2.61 0 4.27-1.03 4.27-2.6-.04-4.37-15.7-.95-15.82-11.9-.04-5.58 4.8-9.86 11.66-9.86 4.08 0 8.16 1.03 11.06 3.38l-2.34 6.05c-2.66-1.73-5.97-2.97-9.12-2.97-2.13 0-3.55 1.03-3.55 2.36.04 4.28 15.82 1.94 15.98 12.4 0 5.7-4.72 9.69-11.5 9.69-4.96 0-9.52-1.2-12.99-3.75zm96.01-8.08a7.16 7.16 0 0 1-8.11 3.5 7.35 7.35 0 0 1-5.38-7.13c0-3.34 2.2-6.27 5.38-7.12 3.16-.85 6.5.58 8.11 3.5l6.9-3.93a15.02 15.02 0 0 0-17.03-7.42 15.42 15.42 0 0 0-11.33 14.97c0 7.04 4.66 13.2 11.33 14.97a15.02 15.02 0 0 0 17.04-7.43l-6.9-3.9zM91.71 35.25h8.64v43.16h-8.64V35.25zm78.34 0v43.16h8.65V65.48l10.25 12.93H200l-13.03-15.37 12.06-14.34h-10.58l-9.76 11.9V35.25h-8.64zm-43.82 31.1a8.14 8.14 0 0 1-6.83 3.56 7.24 7.24 0 0 1-7.33-7.16 7.24 7.24 0 0 1 7.33-7.15 8.1 8.1 0 0 1 6.83 3.67v7.08zm0-18v3.4c-1.43-2.36-5-4-8.72-4-7.7 0-13.76 6.64-13.76 14.96 0 8.33 6.07 15.04 13.76 15.04 3.73 0 7.3-1.63 8.72-4v3.4H135v-28.8h-8.77zM10.53 66.4A5.32 5.32 0 0 1 5.3 71.8 5.32 5.32 0 0 1 .04 66.4a5.32 5.32 0 0 1 5.25-5.38h5.25v5.38zm2.63 0a5.32 5.32 0 0 1 5.25-5.38c2.9 0 5.25 2.4 5.25 5.38v13.46a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39V66.4zm5.26-21.63a5.32 5.32 0 0 1-5.25-5.38A5.32 5.32 0 0 1 18.42 34c2.9 0 5.25 2.41 5.25 5.39v5.38h-5.25zm0 2.74c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38H5.25A5.32 5.32 0 0 1 0 52.9a5.32 5.32 0 0 1 5.25-5.39h13.17zm21.03 5.39a5.32 5.32 0 0 1 5.25-5.39c2.9 0 5.25 2.41 5.25 5.39a5.32 5.32 0 0 1-5.25 5.38h-5.25V52.9zm-2.62 0a5.32 5.32 0 0 1-5.25 5.38 5.32 5.32 0 0 1-5.25-5.38V39.39A5.32 5.32 0 0 1 31.58 34c2.9 0 5.25 2.41 5.25 5.39v13.5zm-5.25 21.58c2.9 0 5.25 2.41 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39 5.32 5.32 0 0 1-5.25-5.39v-5.38h5.25zm0-2.7a5.32 5.32 0 0 1-5.25-5.38 5.32 5.32 0 0 1 5.25-5.38h13.17c2.9 0 5.25 2.4 5.25 5.38a5.32 5.32 0 0 1-5.25 5.39H31.58z"
              />
            </svg>
          </div>
          <div class="relative lg:w-7/12 bg-white">
            <svg
              class="absolute h-full text-white w-24 -ml-12"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div
              class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed"
            >
              <p>
                As
                <strong class="text-gray-900 font-medium">Slack</strong> grows
                rapidly, using Stripe helps them scale payments easily &mdash;
                supporting everything from getting paid by users around the
                world to enabling ACH payments for corporate customers.
              </p>
              <p class="mt-6">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-900"
                >
                  &rarr; Md Solaiman Hossain</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 left-0 lg:flex lg:items-center">
          <button
            class="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg"
          >
            <svg
              class="h-full w-full text-indigo-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
              />
            </svg>
          </button>
        </div>
        <div class="absolute inset-y-0 right-0 lg:flex lg:items-center">
          <button
            class="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg"
          >
            <svg
              class="h-full w-full text-indigo-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div> -->

  <div class="banner-2 md:flex items-center md:justify-evenly" id="about">
    <img
      class="md:h-[500px] h-[400px]"
      src="/src/assets/2.png"
      alt="user image"
    />
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h4 class="project-title item">Sobre Mim</h4>
      <p class="font-work_sans">
        Atuo na área de dados com foco em análise, integração e transformação de informações para gerar insights e apoiar a tomada de decisões.
        <br /><br />
        Tenho experiência em consultas SQL, procedures e desenvolvimento de relatórios no Power BI. Trabalho com migração de dados, uso de arquivos Parquet para performance e integração entre diferentes bancos de dados.
        <br /><br />
        Já participei da construção e manutenção de pipelines com Python, PySpark e MongoDB, processando grandes volumes de dados com eficiência.
        <br /><br />
        Busco aplicar soluções técnicas que otimizem processos, resolvam problemas reais e contribuam com projetos de alto impacto para o negócio.
      </p>
      <!-- <button class="text-sky-800 font-bold text-2xl tracking-wider">
        View Case Study
      </button> -->
    </div>
  </div>

  <div class="banner-1 flex flex-col lg:flex-row h-full items-center p-6 lg:p-12 gap-6">

    <div class="w-full lg:w-7/12">
      <h2 class="text-gray-700 text-2xl md:text-4xl font-sans mb-4 font-bold">Contatos</h2>
        <a href="mailto:Aldrikfariaalvaro@gmail.com"
            class="flex items-center gap-2 text-xl md:text-2xl text-blue-600 hover:text-blue-800 active:scale-95 transition-all duration-150 font-work_sans break-words">
            <span class="text-2xl">📧</span>
            <span>Aldrikfariaalvaro@gmail.com</span>
        </a>


    </div>

    <div class="w-full lg:w-5/12">
      <div class="flex flex-wrap justify-start lg:justify-end gap-3">
        
      <a href="https://github.com/Aldrik-Alvaro" target="_blank" rel="noopener noreferrer">
        <button class="bg-gray-700 p-3 md:p-4 font-semibold text-white inline-flex items-center rounded">
          <img src="/src/assets/github.svg" alt="GitHub" class="w-5 h-5 md:w-8 md:h-8" />
        </button>
      </a>

      <a href="https://www.linkedin.com/in/aldrikalvaro/" target="_blank" rel="noopener noreferrer">
        <button class="bg-gray-700 p-3 md:p-4 font-semibold text-white inline-flex items-center rounded">
          <img src="/src/assets/linkedin.svg" alt="LinkedIn" class="w-5 h-5 md:w-8 md:h-8" />
        </button>
      </a>

        <!-- <button class="bg-gray-700 p-3 md:p-4 font-semibold text-white inline-flex items-center rounded">
          <svg class="w-5 h-5 md:w-8 md:h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="" />
          </svg>
        </button>

        <button class="bg-gray-700 p-3 md:p-4 font-semibold text-white inline-flex items-center rounded">
          <svg class="w-5 h-5 md:w-8 md:h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="" />
          </svg>
        </button>

        <button class="bg-gray-700 p-3 md:p-4 font-semibold text-white inline-flex items-center rounded">
          <svg class="w-5 h-5 md:w-8 md:h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path d="" />
          </svg>
        </button> -->
      </div>
    </div>


  </div>

</template>
<script>
  export default {
    data() {
      return {
        showMenu: false,
      }
    },
  }
</script>
