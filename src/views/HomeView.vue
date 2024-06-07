<template>
  <div class="h-full w-full bg-[#1F1F1F] flex flex-col justify-center">
    <div
      class="bg-[url('../../public/home.jpg')] bg-cover bg-scroll bg-no-repeat flex justify-center"
    >
      <div
        class="flex justify-center items-center w-[90%] flex-col text-center py-64"
      >
        <h1 class="text-white font-semibold text-6xl">
          Domina la programación de forma práctica y divertida.
        </h1>
        <h3 class="text-white font-medium text-4xl pt-10">
          Aprende a programar de manera práctica y efectiva con nuestra
          plataforma interactiva, diseñada para transformar tus habilidades y
          llevarlas al siguiente nivel.
        </h3>
        <router-link
          to="/challenges"
          class="text-white mt-10 text-xl bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 w-[20%] py-2 text-center"
        >
          Empezar
        </router-link>
      </div>
    </div>
    <div class="flex flex-col text-white justify-center items-center mt-32">
      <h1 class="font-semibold text-6xl">¡Empieza a programar hoy!</h1>
      <h3 class="font-medium text-3xl w-[700px] my-16 text-center">
        ¿Listo para convertirte en un experto en programación? Nuestra
        plataforma te ofrece retos prácticos y soporte continuo para que
        desarrolles tus habilidades y alcances tus metas en el mundo de la
        programación. ¡Únete a nuestra comunidad y transforma tu futuro!
      </h3>

      <router-link
        to="/challenges"
        class="uppercase text-blue-600 font-bold text-3xl pb-24 hover:underline"
        >Nuestra colección de retos</router-link
      >
    </div>

    <div
      class="text-white bg-[url('../../public/code.avif')] bg-cover bg-scroll bg-no-repeat"
    >
      <div
        class="flex flex-col py-16 items-center bg-black/50 backdrop-blur-sm h-full"
      >
        <h1 class="uppercase text-3xl font-semibold">Te brindamos:</h1>
        <div class="flex py-10 px-6">
          <div class="px-12 text-center">
            <h3 class="text-blue-600 uppercase font-bold text-3xl pb-6">
              Retos Prácticos
            </h3>
            <p class="text-3xl">
              Pon a prueba tus habilidades con nuestros desafíos de programación
              diseñados para enseñarte de manera activa y divertida. Cada reto
              te permitirá aplicar conceptos teóricos en situaciones reales,
              asegurando un aprendizaje profundo y efectivo.
            </p>
          </div>
          <div class="text-center">
            <h3 class="text-blue-600 uppercase font-bold text-3xl pb-6">
              Seguimiento del Progreso
            </h3>
            <p class="text-3xl">
              Mantén un registro detallado de tu avance con nuestras
              herramientas de seguimiento. Monitorea tus logros, identifica
              áreas de mejora y establece metas claras para tu crecimiento
              continuo en el mundo de la programación.
            </p>
          </div>
          <div class="px-12 text-center">
            <h3 class="text-blue-600 uppercase font-bold text-3xl pb-6">
              Codificación en Tiempo Real
            </h3>
            <p class="text-3xl">
              Experimenta la codificación en vivo con nuestra plataforma
              interactiva. Escribe, prueba y depura tu código en tiempo real,
              recibiendo feedback inmediato para mejorar tus habilidades y
              solucionar problemas al instante.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
