<template>
  <main>
    <div class="flex justify-center content-center items-center w-full my-2">
      <div class="flex justify-center content-center items-center w-full">
        <div
          class="flex flex-row justify-center content-start w-[900px] p-4 border my-4 mr-5 hover:shadow-lg justify-between"
          v-for="s in stores"
          :key="s._id"
        >
          <div class="flex flex-col justify-between">
            <div class="flex">
              <p class="font-medium text-4xl">{{ s.company }}</p>
            </div>
            <div class="flex flex-col">
              <div class="flex text-lg text-gray-500 mt-4 items-end">
                <span class="material-symbols-outlined text-md text-secondary"
                  >location_on</span
                >
                <span class="text-lg ml-2">{{ s.store_address }}</span>
                <span>,</span>
                <span class="text-lg ml-2">{{ s.city_code }}</span>
              </div>
              <div class="flex text-lg text-gray-500 mt-4 items-end content-center">
                <span class="material-symbols-outlined text-md text-secondary">
                  <span class="material-symbols-outlined"> phone_in_talk </span>
                </span>
                <a :href="`tel:${s.store_phone}`" class="text-lg ml-2">{{ s.store_phone }}</a>
              </div>
              <div class="flex text-lg text-gray-500 mt-4 items-end content-center">
                <span class="material-symbols-outlined text-md text-secondary">
                  <span class="material-symbols-outlined"> language </span>
                </span>
                <a :href="`https://${s.site}`" target="_blank" class="text-lg ml-2">{{ s.site }}</a>

              </div>
            </div>
          </div>

          <div>
            <img
              :src="s.logo"
              alt=""
              class="w-52 h-52 mx-auto sticky top-0 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col py-4 mx-auto w-[900px]"
      v-for="s in stores"
      :key="s._id"
    >
      <p class="flex desc text-lg text-gray-800 mt-2 h-24 h-[40px] font-medium">
        Περιγραφή καταστήματος
      </p>
      <p class="flex desc text-lg text-gray-500 mt-2 h-auto">
        {{ s.store_description }}
      </p>
    </div>
    <div v-for="s in stores" :key="s._id" style="width: 100%">
      <iframe
        class="flex mx-auto w-[900px] my-4"
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        :src="`https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${s.store_address}+(${s.company})&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`"
        ><a href="https://www.maps.ie/distance-area-calculator.html"
          >measure distance on map</a
        ></iframe
      >
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
      let stores = await this.$axios.$post(`https://api.ekarditsa.gr/stores`, {
        id: this.$route.params.store_id,
      });
      console.log(stores);
      this.stores = stores;
    },
  },
};
</script>
