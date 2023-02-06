<template>
  <footer
    class="w-full h-[300px] bg-main b-0 flex flex-col content-center items-center justify-between py-4"
  >
    <div class="flex flex-col justify-center content-center items-center w-full">
      <img src="/Logo.png" alt="" class="w-[200px] h-[60px] my-5" />
      <p class="flex font-medium text-lg text-white px-5 text-center">Ο πιο ολοκληρωμένος οδηγός της πόλης μας !</p>
    </div>

    <div class="flex justify-end">
      <nuxt-link
        to="/kataxorisi_katastimatos"
        class="border-2 border-secondary bg-secondary text-white p-4 mb-2"
        >ΔΩΡΕΑΝ εγγραφή καταστήματος</nuxt-link
      >
    </div>
  </footer>
</template>

<script>
export default {};
</script>
