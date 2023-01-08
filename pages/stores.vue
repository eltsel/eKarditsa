<template>
  <div>
    <div class="flex flex-wrap">
      <input class="border m-2 p-1" type="text" v-model="newStore.company" placeholder="name" />
      <input class="border m-2 p-1" type="text" v-model="newStore.store_address" placeholder="address" />
      <input class="border m-2 p-1" type="text" v-model="newStore.location" placeholder="location" />
      <input class="border m-2 p-1" type="tel" v-model="newStore.store_phone" placeholder="phone" />
      <input class="border m-2 p-1" type="email" v-model="newStore.store_email" placeholder="email" />
      <input class="border m-2 p-1" type="url" v-model="newStore.site" placeholder="site" />
      <input class="border m-2 p-1" type="text" v-model="newStore.activity" placeholder="activity" />
      <input class="border m-2 p-1" type="text" v-model="newStore.store_description" placeholder="description" />
      <input class="border m-2 p-1" type="text" v-model="newStore.logo" placeholder="logo" />

      <button @click="createStore()">Create store</button>
    </div>
    <div class="flex">
      {{ stores }}
    </div>
    <div class="flex">
      <div
        class="flex flex-col w-96 p-4 border m-4 hover:shadow-lg"
        v-for="s in stores"
        :key="s._id"
      >
        <img
          :src="s.logo"
          alt=""
          class="w-full h-32 object-cover"
        />
        <h1 class="font-bold text-2xl">{{ s.company }}</h1>
        <h1 class="">{{ s.store_address }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stores: [],
      newStore: { full_name: "", 
      phone: "",
      email: "",
      company: "",
      activity: "",
      site: "",
      store_phone: "",
      store_email: "",
      store_address: "",
      city_code: "",
      store_description: ""
    },
    };
  },
  mounted() {
    this.getStores();
    this.updateStores('6370faeb6f6951a4f12c6895')
  },
  methods: {
    async createStore() {
      let creation = await this.$axios.post(`/api/stores`, this.newStore);
      this.newStore = { 
        full_name: "", 
        phone: "",
        email: "",
        company: "",
        activity: "",
        site: "",
        store_phone: "",
        store_email: "",
        store_address: "",
        city_code: "",
        store_description: ""
      };
      this.getStores();
    },
    async getStores() {
      let stores = await this.$axios.$get(`/api/stores`);
      console.log(stores);
      this.stores = stores;
    },
    async updateStores(id) {
      let update = await this.$axios.put(`/api/stores/${id}`, {
        update: { test: 1 },
      });
      console.log(update);
    },
    async deleteStores(id) {
      let deleteStore = await this.$axios.delete(`/api/stores/${id}`);
      console.log(deleteStore);
    },
  },
};
</script>

<style></style>
