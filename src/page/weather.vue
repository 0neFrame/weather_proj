<template>
  <div class="page__wrapper">
    <div class="page__title">World Weather</div>
    <div v-if="!!currentLocation" class="card__wrapper_current_location_inner">
      <div class="card__title">
        <span>Watch weather in your current location</span>
      </div>
      <div class="card__wrapper_current_location">
        <div class="card__wrapper_title">
          <span class="card__city">{{ currentLocation.name }}, {{ currentLocation.country }}</span>
          <span class="card__subtitle">Your current location</span>
        </div>
        <div class="card__wrapper_info">
          <span>Weather</span>
          <span>{{ currentLocation.weather }}</span>
        </div>
        <div class="card__wrapper_info">
          <span>Temperature</span>
          <span> {{ currentLocation.temp }} &deg;C </span>
        </div>
        <div class="card__wrapper_info">
          <span>Humidity</span>
          <span>{{ currentLocation.humidity }} %</span>
        </div>
        <div class="card__time_ago">
          <span> {{ currentLocation.fromNow }} </span>
        </div>
        <div class="card__wrapper_btn">
          <button class="card__remove"></button>
          <button class="card__reload" @click="updateTimeAgo(currentLocation)">RELOAD</button>
        </div>
      </div>
    </div>

    <div class="card__wrapper_outer">
      <div v-for="(city, cityIndex) in cityList" :key="cityIndex" class="card__wrapper_inner">
        <div class="card__wrapper_title">
          <span class="card__city">{{ city.name }}</span>
          <span class="card__subtitle">{{ city.country }}</span>
        </div>
        <div class="card__wrapper_info">
          <span>Weather</span>
          <span>{{ city.weather }}</span>
        </div>
        <div class="card__wrapper_info">
          <span>Temperature</span>
          <span> {{ city.temp }} &deg;C </span>
        </div>
        <div class="card__wrapper_info">
          <span>Humidity</span>
          <span>{{ city.humidity }} %</span>
        </div>
        <div class="card__time_ago">
          <span> {{ city.fromNow }} </span>
        </div>
        <div class="card__wrapper_btn">
          <button class="card__remove" @click="remove(cityIndex)">REMOVE</button>
          <button class="card__reload" @click="updateTimeAgo(city)">RELOAD</button>
        </div>
      </div>
    </div>

    <button class="page__add" @click="showModal = true">+</button>
    <transition v-if="showModal">
      <div class="modal__mask">
        <div class="modal__wrapper">
          <div class="modal__container">
            <div class="modal__header">
              <span class="modal__header_title"> Choose a city </span>
              <span class="modal__header_subtitle"> To find city start typing </span>
            </div>

            <div class="modal__body">
              <input v-model="v$.city.$model" cols="40" rows="1" type="text" placeholder="Search city" />
              <div class="input__error" v-if="!v$.city.required && v$.city.$error">Enter a city</div>
              <div class="input__error" v-if="error">{{ error }}</div>
            </div>

            <div>
              <button class="modal__btn_add" :disabled="v$.city.$model === ''" @click="add()">ADD</button>
              <button class="modal__btn_cancel" @click="cancel()">CANCEL</button>
              <button class="modal__btn_clear" :disabled="v$.city.$model === ''" @click="v$.city.$model = ''">CLEAR</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { useVuelidate } from "@vuelidate/core";
  import { required } from "@vuelidate/validators";

  import { setWeatherProperty } from "@/function/weather.js";

  export default {
    name: "weather",

    validations() {
      return {
        city: { required },
      };
    },

    data() {
      return {
        v$: useVuelidate(),

        city: "",
        cityList: [],
        currentLocation: null,
        error: "",
        showModal: false,
      };
    },

    created() {
      this.getCityStorage();
    },

    watch: {
      cityList() {
        this.setCityStorage();
      },
    },

    methods: {
      getCurrentPosition() {
        navigator.geolocation.getCurrentPosition((position) => {
          setWeatherProperty(position.coords).then((cityWeather) => {
            this.currentLocation = cityWeather;
            this.updateTimeAgo(this.currentLocation, false);
          });
        });
      },
      updateTimeAgo(city, reload = true) {
        if (reload) {
          setWeatherProperty(city.id).then((cityWeather) => {
            this.reloadCycle(cityWeather, reload);
          });
        } else {
          let updateWeather = city;
          updateWeather.fromNow = city.dt.fromNow();
          this.reloadCycle(updateWeather, reload);
        }
      },
      reloadCycle(updateWeather, reload) {
        const findIndexCity = this.cityList.findIndex((city) => city.id === updateWeather.id);

        if (findIndexCity === -1) {
          this.checkWeatherTimeAgo(this, "currentLocation", updateWeather, reload);
        } else {
          this.checkWeatherTimeAgo(this.cityList, findIndexCity, updateWeather, reload);
        }
      },
      checkWeatherTimeAgo(obj, indx, updateWeather, reload) {
        const oneMin = 1000 * 60;

        if (reload) {
          clearTimeout(obj[indx].timeout);
          obj[indx] = updateWeather;
          this.updateTimeAgo(obj[indx], false);
        } else {
          obj[indx].timeout = setTimeout(() => {
            this.updateTimeAgo(obj[indx], false);
          }, oneMin);
        }
      },
      add() {
        setWeatherProperty(this.v$.city.$model)
          .then((cityWeather) => {
            this.cityList.push(cityWeather);
            this.updateTimeAgo(cityWeather);

            this.showModal = false;
            this.v$.city.$model = "";
            this.v$.$reset();
          })
          .catch(() => {
            this.error = "City not found";
          });
      },
      cancel() {
        this.showModal = false;
        this.error = "";
        this.v$.city.$model = "";
        this.v$.$reset();
      },
      remove(index) {
        this.cityList.splice(index, 1);
      },
      setCityStorage() {
        const cities = this.cityList.map((city) => {
          return { id: city.id };
        });

        localStorage.setItem("cities", JSON.stringify(cities));
      },
      getCityStorage() {
        const storageCities = JSON.parse(localStorage.getItem("cities"));

        if (storageCities) {
          storageCities.forEach((city) => {
            setWeatherProperty(city.id).then((cityWeather) => {
              this.cityList.push(cityWeather);
              this.updateTimeAgo(cityWeather);
            });
          });
        }

        this.getCurrentPosition();
      },
    },
  };
</script>
