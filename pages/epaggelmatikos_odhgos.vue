<template>
  <div>
    <main>
      <div
        class="flex flex-col flex-wrap justify-center content-center mx-auto my-10 w-[90%]"
      >
        <!-- karditsa_img -->
        <div class="w-full flex">
          <img
            src="/Pictures/Karditsa.jpg"
            alt=""
            class="h-[450px] w-full object-cover rounded-sm opacity-60"
          />
        </div>
        <!-- categories -->
        <div
          class="lg:w-[70%] flex flex-wrap justify-evenly w-full content-center items-center mx-auto my-14"
        >
          <a
            href="#"
            class="lg:w-[200px] group bg-white shadow-md w-full h-44 flex flex-col justify-center content-center items-center"
          >
            <span
              class="material-symbols-outlined text-5xl text-[#abb8c0] group-hover:text-secondary"
              >local_cafe</span
            >
            <h2
              class="h-14 flex items-center font-medium text-main group-hover:text-secondary "
            >
              ΕΣΤΙΑΣΗ
            </h2>
          </a>
          <a
            href="#"
            class="group bg-white shadow-md w-[200px] h-44 flex flex-col justify-center content-center items-center"
          >
            <span
              class="material-symbols-outlined text-5xl text-[#abb8c0] group-hover:text-secondary"
              >handyman</span
            >
            <h2
              class="h-14 flex items-center font-medium text-main group-hover:text-secondary"
            >
              ΥΠΗΡΕΣΙΕΣ
            </h2>
          </a>
          <a
            href="#"
            class="group bg-white shadow-md w-[200px] h-44 flex flex-col justify-center content-center items-center"
          >
            <span
              class="material-symbols-outlined text-5xl text-[#abb8c0] group-hover:text-secondary"
              >dry_cleaning</span
            >
            <h2
              class="h-14 flex items-center font-medium text-main group-hover:text-secondary"
            >
              ΚΑΤΑΣΤΗΜΑΤΑ
            </h2>
          </a>
          <a
            href="#"
            class="group bg-white shadow-md w-[200px] h-44 flex flex-col justify-center content-center items-center"
          >
            <span
              class="material-symbols-outlined text-5xl text-[#abb8c0] group-hover:text-secondary"
              >medical_information</span
            >
            <h2
              class="h-14 flex items-center font-medium text-main group-hover:text-secondary"
            >
              ΥΓΕΙΑ
            </h2>
          </a>
          <a
            href="#"
            class="group bg-white shadow-md w-[200px] h-44 flex flex-col justify-center content-center items-center"
          >
            <span
              class="material-symbols-outlined text-5xl text-[#abb8c0] group-hover:text-secondary"
              >hotel</span
            >
            <h2
              class="h-14 flex items-center font-medium text-main group-hover:text-secondary"
            >
              ΔΙΑΜΟΝΗ
            </h2>
          </a>
        </div>
        <!-- latest_entries -->
        <div
          class="flex flex-wrap justify-center content-center items-center flex-col w-full"
        >
          <h2 class="text-2xl text-secondary my-2 flex">
            Τελευταίες καταχωρήσεις καταστημάτων
          </h2>
          <p class="text-sm text-[#abb8c0] flex">
            Κάθε στοιχείο που εμφανίζεται και παρατίθεται έχει υποβληθεί
            προσεκτικά από τα μέλη μας.
          </p>
        </div>
        <!-- shop_card -->
        <div
          class="flex justify-center content-center items-center w-full my-2"
        >
          <div class="flex justify-center content-center items-center">
            <div
              class="flex justify-center content-start flex-col w-80 p-4 border my-4 mr-5 hover:shadow-lg"
              v-for="s in stores"
              :key="s._id"
            >
              <img
                :src="s.picture"
                alt=""
                class="w-full h-52 object-cover mx-auto sticky top-0"
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
                <span class="text-sm">{{ s.store_address }}</span>
              </div>
              <hr class="my-4 divide-y divide-blue-200" />
              <button class="flex justify-end text-main">Περισσότερα ></button>
            </div>
          </div>
        </div>
        <!-- new_entry -->
        <div class="flex justify-center w-full">
          <nuxt-link
            to="/kataxorisi_katastimatos"
            class="bg-main text-white p-5 m-10 rounded-sm hover:text-secondary"
            >ΔΩΡΕΑΝ καταχώρηση</nuxt-link
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "/components/Header";

export default {
  components: {
    Header,
  },
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
    async apiTest(name, posotita) {
      let test = await this.$axios.get(
        `/api?name=${name}&posotita=${posotita}`
      );
      console.log(test);
    },
    async getStores() {
      let stores = await this.$axios.$get(`/api/stores`);
      console.log(stores);
      this.stores = stores;
    },
  }
};
</script>

<style>
.desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow-y: hidden;
}
</style>
