<template>
  <main>
    <div
      class="lg:w-[80%] flex flex-col justify-center content-center items-center mx-auto mt-10"
    >
      <img
        src="/Pictures/estiasi.jpg"
        alt=""
        class="lg:h-[300px] w-full flex justify-center content-center"
      />
      <h1
        class="relative lg:bottom-[150px] text-main font-medium lg:text-5xl text-3xl bg-white/80 w-full flex justify-center content-center items-center h-24"
      >
        Εστίαση
      </h1>
    </div>
    <!-- shop_card -->
    <div
      class="flex lg:justify-center lg:content-center justify-start items-center w-full my-2 overflow-x-auto"
    >
      <div class="flex justify-center content-center items-center">
        <shopCard :s="s" v-for="s in stores.slice(0, 4)" :key="s._id" />
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
      let stores = await this.$axios.$post(`http://api.ekarditsa.gr/stores`, {
        category: "ΕΣΤΙΑΣΗ",
      });
      console.log(stores);
      this.stores = stores;
    },
  },
};
</script>
