<template>
  <div>
    <main
      class="lg:w-[80%] mx-auto flex flex-col justify-center content-center items-center"
    >
      <!-- first-picture -->
      <div class="flex flex-col lg:my-10 my-5 relative">
        <img src="/Pictures/karditsa-first.jpg" alt="" />
      </div>
      <!-- useful-categories -->
      <span
        class="flex mx-auto lg:text-3xl text-2xl font-medium text-gray-800 lg:pb-16"
        >Χρήσιμες Κατηγορίες</span
      >
      <div
        class="flex w-full justify-center content-center items-center mx-auto flex-wrap"
      >
        <nuxt-link
          to="/epaggelmatikos_odhgos"
          class="flex flex-col content-center items-center bg-[#001253] p-5 rounded-lg w-full lg:w-60 drop-shadow m-4"
        >
          <img
            src="/Icons/portfolio.png"
            alt=""
            class="py-5 h-[90px] stroke-white"
          />
          <span class="text-white font-medium font-8 text-xl"
            >Επαγγελματικός</span
          >
          <span class="text-white font-medium text-xl">οδηγός</span>
        </nuxt-link>
        <nuxt-link
          to="/dimosies_upiresies"
          class="flex flex-col content-center items-center bg-[#FD841F] p-5 rounded-lg w-full lg:w-60 drop-shadow m-4"
        >
          <img
            src="/Icons/public-service.png"
            alt=""
            class="py-5 h-[90px] stroke-white"
          />
          <span class="text-white font-medium text-xl">Χρήσιμα τοπικά</span>
          <span class="text-white font-medium text-xl">τηλέφωνα</span>
        </nuxt-link>
        <nuxt-link
          to="/mesa_metaforas"
          class="flex flex-col content-center items-center bg-[#3E6D9C] p-5 rounded-lg w-full lg:w-60 drop-shadow m-4"
        >
          <img
            src="/Icons/public-transport.png"
            alt=""
            class="py-5 h-[90px] stroke-white"
          />
          <span class="text-white font-medium font-8 text-xl">Μέσα</span>
          <span class="text-white font-medium text-xl">μεταφοράς</span>
        </nuxt-link>
        <button
          class="flex flex-col content-center items-center bg-[#E14D2A] p-5 rounded-lg w-full lg:w-60 drop-shadow m-4"
        >
          <img
            src="/Icons/newspaper-folded.png"
            alt=""
            class="py-5 h-[90px] stroke-white"
          />
          <span class="text-white font-medium font-8 text-xl">Νέα της</span>
          <span class="text-white font-medium text-xl">πόλης</span>
        </button>
      </div>
      <!-- city-numbers -->
      <div
        class="w-full lg:my-[140px] my-[60px] bg-fixed lg:h-[380px] lg:bg-no-repeat bg-cover flex"
        style="background-image: url(/Pictures/parko.jpg)"
      >
        <div
          class="flex flex-wrap w-full lg:h-[380px] bg-[#3a4c40]/90 backdrop-opacity-50 py-[30px]"
        >
          <div class="flex w-full justify-center content-center my-auto">
            <p class="font-bold lg:text-4xl text-3xl text-white my-[20px]">
              Η Καρδίτσα σε νούμερα
            </p>
          </div>
          <div
            class="w-full flex lg:flex-row flex-col justify-center content-center items-center my-auto py-5"
          >
            <div
              class="flex content-center justify-center flex-col lg:w-[280px] lg:h-[180px] w-[200px] h-[120px] backdrop-opacity-50 bg-white/70 mx-5"
            >
              <span class="flex justify-center text-main text-2xl h-16"
                >Πληθυσμός</span
              >
              <span
                class="flex justify-center content-center text-4xl text-main"
                >56.641</span
              >
            </div>
            <div
              class="flex content-center justify-center flex-col lg:w-[280px] lg:h-[180px] w-[200px] h-[120px] backdrop-opacity-50 bg-white/70 mx-5 my-5"
            >
              <span class="flex justify-center text-main text-2xl h-16"
                >Έκταση</span
              >
              <span
                class="flex justify-center content-center text-4xl text-main"
                >110.1 km²</span
              >
            </div>
            <div
              class="flex content-center justify-center flex-col lg:w-[280px] lg:h-[180px] w-[200px] h-[120px] backdrop-opacity-50 bg-white/70 mx-5"
            >
              <span class="flex justify-center text-main text-2xl h-16"
                >Δήμοι</span
              >
              <span
                class="flex justify-center content-center text-4xl text-main"
                >6</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- rounded-categories -->
      <div class="flex justify-center content-center flex-wrap">
        <nuxt-link
          to="/istoria"
          class="rounded-full w-[300px] h-[300px] flex justify-center content-center items-center text-white bg-cover mx-10 my-5"
          style="background-image: url(/Pictures/istoria.jpg)"
        >
          <div class="bg-[#3a4c40]/90 backdrop-opacity-50">
            <span
              class="bg-main h-[50px] flex justify-center content-center items-center px-[30px] text-2xl"
              >Η Iστορία μας</span
            >
          </div>
        </nuxt-link>
        <div
          class="rounded-full w-[300px] h-[300px] flex justify-center content-center items-center text-white bg-cover bg-main backdrop-opacity-50 mx-6 my-5"
          style="background-image: url(/Pictures/plateia.JPG)"
        >
          <nuxt-link to="/perioxi" class="bg-[#3a4c40]/90 backdrop-opacity-50">
            <span
              class="bg-main h-[50px] flex justify-center content-center items-center px-[30px] text-2xl"
              >Η περιοχή μας</span
            >
          </nuxt-link>
        </div>
        <div
          class="rounded-full w-[300px] h-[300px] flex justify-center content-center items-center text-white bg-cover bg-main backdrop-opacity-50 mx-6"
          style="background-image: url(/Pictures/MG_2542.jpeg)"
        >
          <nuxt-link
            to="/arxitektoniki"
            class="bg-[#3a4c40]/90 backdrop-opacity-50"
          >
            <span
              class="bg-main h-[50px] flex justify-center content-center items-center px-[30px] text-2xl"
              >Χώροι-Μνημία</span
            >
          </nuxt-link>
        </div>
      </div>
      <!--Last entries -->
      <div class="flex w-full my-[40px] justify-center text-center">
        <p
          class="flex lg:text-3xl text-2xl font-medium text-gray-800 text-center"
        >
          Τελευταίες καταχωρήσεις καταστημάτων
        </p>
      </div>
      <!-- shop_card -->
      <div
        class="flex lg:justify-center lg:content-center justify-start items-center w-full my-2 overflow-x-auto"
      >
        <div class="flex justify-center content-center items-center ml-4">
          <shopCard :s="s" v-for="s in stores.slice(0, 4)" :key="s._id" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "eKarditsa.gr",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  data() {
    return {
      stores: [],
    };
  },
  mounted() {
    this.getStores();
  },
  methods: {
    async getStores() {
      let stores = await this.$axios.$post(`http://api.ekarditsa.gr/stores`, {
        sort: "created",
      });
      console.log(stores);
      this.stores = stores;
    },
  },
};
</script>
