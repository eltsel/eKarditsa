<template>
  <div
    class="flex justify-center content-start flex-col w-80 p-4 border my-4 mr-5 hover:shadow-lg"
  >
    <img
      :src="s.logo"
      alt=""
      class="w-full h-52 mx-auto sticky top-0 object-contain"
    />
    <p class="my-2 text-gray-500 text-xs">{{ s.activity }}</p>

    <p class="font-medium text-2xl">{{ s.company }}</p>
    <p class="desc text-sm text-gray-500 mt-2 h-24 overflow-x-auto h-[40px]">
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
    <nuxt-link :to="`/company/${s._id}`" class="flex justify-end text-main"
      >Περισσότερα ></nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ["s"],
};
</script>
