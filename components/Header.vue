<template>
  <header>
    <div class="bg-main w-full h-[95px] text-white flex items-center px-5">
      <div class="w-[80px] lg:px-5 px-2">
        <button>
          <lottie-player
            @click="toggle"
            style="width: 40px; filter: invert(100%)"
            src="https://assets5.lottiefiles.com/packages/lf20_ioaivu7n.json"
            speed="1"
            debug
          />
        </button>
      </div>

      <div class="flex-1 flex justify-center">
        <a href="/"><img src="/Logo.png" alt="" class="object-contain" /></a>
      </div>
      <div class="w-[80px] flex lg:flex-row flex-col lg:items-end lg:justify-end items-end">
        <img :src="icons" alt="" class="w-[40px] hidden lg:flex"/>
        <div class="flex flex-col items-end text-end">
          <p class="text-sm">Καιρός</p>
          <p class="lg:px-10 font-bold">{{ temp }} °C</p>
        </div>
      </div>
    </div>
    <div
      class="z-30 flex fixed top-[95px] left-0 w-screen h-screen bg-black/40"
      :class="{ invisible: !menuOpen }"
    >
      <div
        :class="{
          '-translate-x-full': !menuOpen,
          'translate-x-0': menuOpen,
          'opacity-0': !menuOpen,
        }"
        class="w-1/2 bg-white transform-gpu transition-all ease-in-out duration-500 flex flex-col"
      >
        <div
          class="w-full flex flex-col justify-center content-start items-start text-gray-600 text-5xl font-bold px-[100px] py-[100px]"
        >
          <nuxt-link
            to="/epaggelmatikos_odhgos"
            class="py-[30px] hover:text-main"
            @click.native="menuOpen = false"
            >Επαγγελματικός οδηγός
          </nuxt-link>
          <nuxt-link to="/dimosies_upiresies" class="py-[30px] hover:text-main" @click.native="menuOpen=false"
            >Χρήσιμα τηλέφωνα</nuxt-link
          >
          <nuxt-link to="/mesa_metaforas" class="py-[30px] hover:text-main" @click.native="menuOpen=false"
            >Μέσα μεταφοράς</nuxt-link
          >
          <nuxt-link to="#" class="py-[30px] hover:text-main" @click.native="menuOpen=false"
            >Νέα της πόλης</nuxt-link
          >
          <div class="flex py-[200px]">
            <img src="/Icons/facebook.png" alt="facebook_logo">
            <img src="/Icons/instagram.png" alt="instagram_logo" class="px-[30px]">
          </div>
        </div>
      </div>
      <div
        :class="{
          'translate-x-full': !menuOpen,
          'translate-x-0': menuOpen,
          'opacity-0': !menuOpen,
        }"
        class="w-1/2 h-screen bg-secondary transform-gpu transition-all ease-in-out duration-500"
      >
        <img
          src="/Pictures/pausilupo.jpg"
          alt=""
          class="w-[960px] h-full object-cover"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      temp: 0,
      weather: {
        description: {
          Clear: "/Icons/sun.png",
          Rain: "/Icons/rain.png",
          Cloudy: "/Icons/partly-cloudy.png",
          nightClear: "/Icons/moon.png",
          nightCloud: "/Icons/moon-cloud.png",
        },
      },
      icons: "",
      sunrise: "",
      sunset: "",
      dt: "",
      menuOpen: false,
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    toggle(e) {
      console.log(e);
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        e.target.setDirection(1);
      } else {
        e.target.setDirection(-1);
      }
      e.target.play();
      setTimeout(() => {
        e.target.pause();
        if (this.menuOpen) {
          e.target.seek("50%");
        } else {
          e.target.seek(0);
        }
      }, 1300);
    },
    async getWeather() {
      try {
        let res = await this.$axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=39.3647412&lon=21.9021615&appid=8a1ebbebbca9f844ad464b5bd4a5937b&units=metric&lang=el"
        );
        console.log(res);

        this.temp = Math.ceil(res.data.main.temp);
        this.sunrise = res.data.sys.sunrise;
        this.sunset = res.data.sys.sunset;
        this.currentTime = res.data.dt;

        if (this.currentTime > this.sunrise) {
          if (res.data.weather[0].main == "Clear") {
            let clear = this.weather.description.Clear;
            this.icons = clear;
          } else if (res.data.weather[0].main == "Rain") {
            let rain = this.weather.description.Rain;
            this.icons = rain;
          } else if (res.data.weather[0].main == "Clouds") {
            let cloud = this.weather.description.Cloudy;
            this.icons = cloud;
          }
        } else {
          if (res.data.weather[0].main == "Clear") {
            let clear = this.weather.description.nightClear;
            this.icons = clear;
          } else if (res.data.weather[0].main == "Clouds") {
            let nightCloud = this.weather.description.nightCloud;
            this.icons = nightCloud;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
