<template>
  <div>
    <main
      class="w-[80%] mx-auto flex flex-col justify-center content-center items-center"
    >
      <!-- first-picture -->
      <div class="flex flex-col my-10 relative">
        <img src="/Pictures/peacock.png" alt="" />
        <h1
          class="w-fit flex absolute top-[15%] text-[6rem] mx-20 text-gray-800 font-bold"
        >
          ΚΑΡΔΙΤΣΑ
        </h1>
        <h2
          class="w-fit flex absolute top-[35%] font-medium text-[2rem] mx-20 w-full text-gray-800"
        >
          Ο,ΤΙ ΧΡΕΙΑΖΕΤΑΙ ΝΑ ΞΕΡΕΙΣ
        </h2>
        <span
          class="w-fit flex absolute top-[40%] font-medium text-[2rem] mx-20 w-full text-gray-800"
          >ΓΙΑ ΤΗΝ ΠΟΛΗ ΜΑΣ.</span
        >
      </div>
      <!-- useful-categories -->
      <span class="flex mx-auto text-3xl font-medium text-gray-800 pb-16"
        >ΧΡΗΣΙΜΕΣ ΚΑΤΗΓΟΡΙΕΣ</span
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
        class="w-full my-[140px] bg-fixed h-[380px] bg-no-repeat bg-cover flex"
        style="background-image: url(/Pictures/parko.jpg)"
      >
        <div
          class="w-full h-[380px] bg-[#3a4c40]/90 backdrop-opacity-50 flex py-[30px] flex-col"
        >
          <div class="flex w-full justify-center content-center">
            <p class="font-bold text-4xl text-white mb-[20px]">
              Η Καρδίτσα σε νούμερα
            </p>
          </div>
          <div
            class="w-full flex justify-center content-center items-center my-auto py-5"
          >
            <div
              class="flex content-center justify-center flex-col w-[280px] h-[180px] backdrop-opacity-50 bg-white/70 mx-5"
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
              class="flex content-center justify-center flex-col w-[280px] h-[180px] backdrop-opacity-50 bg-white/70 mx-5"
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
              class="flex content-center justify-center flex-col w-[280px] h-[180px] backdrop-opacity-50 bg-white/70 mx-5"
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
      <div class="flex justify-center content-center mb-[150px]">
        <nuxt-link
          to="/istoria"
          class="rounded-full w-[300px] h-[300px] flex justify-center content-center items-center text-white bg-cover mx-10"
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
          class="rounded-full w-[300px] h-[300px] flex justify-center content-center items-center text-white bg-cover bg-main backdrop-opacity-50 mx-6"
          style="background-image: url(/Pictures/plateia.jpg)"
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
      <div
        class="flex flex-wrap justify-center content-center items-center flex-col w-full"
      >
        <h2 class="flex mx-auto text-3xl font-medium text-gray-800 pb-8">
          Τελευταίες καταχωρήσεις καταστημάτων
        </h2>
      </div>
      <div class="flex justify-center content-center items-center w-full">
        <div class="flex justify-center content-center items-center">
          <div
            class="flex justify-center content-start flex-col w-80 p-4 border my-4 mr-5 hover:shadow-lg"
            v-for="s in stores.slice(0, 4)"
            :key="s._id"
          >
            <img
              :src="s.logo"
              alt=""
              class="w-full h-52 mx-auto sticky top-0 object-contain"
            />
            <p class="my-2 text-gray-500 text-xs">{{ s.activity }}</p>

            <p class="font-medium text-2xl">{{ s.company }}</p>
            <p
              class="desc text-sm text-gray-500 mt-2 h-24 overflow-x-auto h-[40px]"
            >
              {{ s.store_description }}
            </p>

            <div class="flex text-sm text-gray-500 mt-4 items-end">
              <span class="material-symbols-outlined text-md text-secondary"
                >location_on</span
              >
              <span class="text-sm ml-2">{{ s.store_address }}</span>
              <span>, </span>
              <span class="text-sm">{{ s.city_code }}</span>
            </div>
            <hr class="my-4 divide-y divide-blue-200" />
            <nuxt-link
              :to="`/company/${s._id}`"
              class="flex justify-end text-main"
              >Περισσότερα ></nuxt-link
            >
          </div>
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
      let stores = await this.$axios.$post(`http://localhost:5002/stores`, {
        sort: "created",
      });
      console.log(stores);
      this.stores = stores;
    },
  },
};
</script>
