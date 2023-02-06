<template>
  <div>
    <main>
      <div
        class="flex flex-col flex-wrap justify-center content-center mx-auto my-10 lg:w-[90%]"
      >
        <!-- karditsa_img -->
        <div class="w-full flex">
          <img
            src="/Pictures/Karditsa.jpg"
            alt=""
            class="lg:h-[450px] w-full object-cover rounded-sm opacity-60"
          />
        </div>
        <!-- categories -->
        <div
          class="lg:w-[70%] w-full flex lg:flex-wrap lg:justify-evenly justify-start content-center items-center mx-auto my-14 overflow-x-auto"
        >
          <nuxt-link
            to="/estiasi"
            class="w-[200px] group bg-white shadow-md w-full h-44 flex flex-col justify-center content-center items-center shrink-0"
          >
            <span
              class="material-symbols-outlined text-5xl text-[#abb8c0] group-hover:text-secondary"
              >local_cafe</span
            >
            <h2
              class="h-14 flex items-center font-medium text-main group-hover:text-secondary"
            >
              ΕΣΤΙΑΣΗ
            </h2>
          </nuxt-link>
          <nuxt-link
            to="#"
            class="group bg-white shadow-md w-[200px] h-44 flex flex-col justify-center content-center items-center shrink-0"
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
          </nuxt-link>
          <nuxt-link
            to="#"
            class="group bg-white shadow-md w-[200px] h-44 flex flex-col justify-center content-center items-center shrink-0"
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
          </nuxt-link>
          <nuxt-link
            to="#"
            class="group bg-white shadow-md w-[200px] h-44 flex flex-col justify-center content-center items-center shrink-0"
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
          </nuxt-link>
          <a
            href="#"
            class="group bg-white shadow-md w-[200px] h-44 flex flex-col justify-center content-center items-center shrink-0"
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
          class="flex flex-wrap justify-center content-center items-center flex-col w-full shrink-0"
        >
          <h2 class="text-2xl text-secondary flex text-center my-2">
            Τελευταίες καταχωρήσεις καταστημάτων
          </h2>
          <p class="text-sm text-[#abb8c0] flex text-center">
            Κάθε στοιχείο που εμφανίζεται και παρατίθεται έχει υποβληθεί
            προσεκτικά από τα μέλη μας.
          </p>
        </div>

        <!-- shop_card -->
        <div
          class="flex lg:justify-center lg:content-center justify-start items-center w-full my-2 overflow-x-auto"
        >
          <div class="flex justify-center content-center items-center">
            <shopCard :s="s" v-for="s in stores.slice(0, 4)" :key="s._id" />
          </div>
        </div>

        <!-- new_entry -->
        <div class="flex justify-center w-full">
          <nuxt-link
            to="/kataxorisi_katastimatos"
            class="bg-main text-white p-5 m-10 rounded-sm hover:text-secondary"
            >ΔΩΡΕΑΝ καταχώρηση καταστήματος!</nuxt-link
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "/components/Header";
import shopCard from "/components/shopCard";

export default {
  components: {
    Header,
    shopCard,
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
      let stores = await this.$axios.$post(`http://localhost:5002/stores`, {
        sort: "created",
      });
      console.log(stores);
      this.stores = stores;
    },
  },
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
