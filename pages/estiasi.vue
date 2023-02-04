<template>
  <main>
    <div
      class="w-[80%] flex flex-col justify-center content-center items-center mx-auto mt-10"
    >
      <img
        src="/Pictures/estiasi.jpg"
        alt=""
        class="h-[300px] w-full flex justify-center content-center"
      />
      <h1
        class="relative bottom-[150px] text-main font-medium text-5xl bg-white/80 w-full flex justify-center content-center items-center h-24"
      >
        Εστίαση
      </h1>
    </div>
    <div class="flex justify-center content-center items-center w-full my-2">
      <div class="flex justify-center content-center items-center">
        <div
          class="flex justify-center content-start flex-col w-80 p-4 border my-4 mr-5 hover:shadow-lg"
          v-for="s in stores"
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
            <span class="text-sm">{{ s.store_address }}</span>
          </div>
          <hr class="my-4 divide-y divide-blue-200" />
          <nuxt-link :to="`/company/${s._id}`" class="flex justify-end text-main">Περισσότερα ></nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
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
        category:"ΕΣΤΙΑΣΗ",
      });
      console.log(stores);
      this.stores = stores;
    },
  },
};
</script>
