<template>
  <div class="page__wrapper">
    <div class="page__title">World Weather</div>
    <div v-if="currentLocation" class="card__wrapper_current_location_inner">
      <div class="card__title">
        <span>Watch weather in your current location</span>
      </div>
      <div class="card__wrapper_current_location">
        <div class="card__wrapper_title">
          <span class="card__city"
            >{{ currentLocation.name }}, {{ currentLocation.country }}</span
          >
          <span class="card__subtitle">Your current location</span>
        </div>
        <div class="card__wrapper_info">
          <span>Weather</span>
          <span>{{ currentLocation.mainWeather }}</span>
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
          <span> {{ currentLocation.timeAgo }} </span>
        </div>
        <div class="card__wrapper_btn">
          <button class="card__remove"></button>
          <button class="card__reload" @click="getTimeAgo(currentLocation)">
            RELOAD
          </button>
        </div>
      </div>
    </div>

    <div class="card__wrapper_outer">
      <div
        v-for="(city, cityIndex) in cityItems"
        :key="cityIndex"
        class="card__wrapper_inner"
      >
        <div class="card__wrapper_title">
          <span class="card__city">{{ city.name }}</span>
          <span class="card__subtitle">{{ city.country }}</span>
        </div>
        <div class="card__wrapper_info">
          <span>Weather</span>
          <span>{{ city.mainWeather }}</span>
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
          <span> {{ city.timeAgo }} </span>
        </div>
        <div class="card__wrapper_btn">
          <button class="card__remove" @click="remove(cityIndex)">
            REMOVE
          </button>
          <button class="card__reload" @click="getTimeAgo(city)">RELOAD</button>
        </div>
      </div>
    </div>

    <template>
      <button class="page__add" @click="showModal = true">+</button>
      <transition v-if="showModal">
        <div class="modal__mask">
          <div class="modal__wrapper">
            <div class="modal__container">
              <div class="modal__header">
                <span class="modal__header_title"> Choose a city </span>
                <span class="modal__header_subtitle">
                  To find city start typing and pick one from the
                  suggestions</span
                >
              </div>

              <div class="modal__body">
                <input
                  v-model="$v.city.$model"
                  cols="40"
                  rows="1"
                  type="text"
                  placeholder="Search city"
                />
                <div
                  class="input__error"
                  v-if="!$v.city.required && $v.city.$error"
                >
                  Choose a city
                </div>
              </div>

              <div>
                <button
                  class="modal__btn_add"
                  :disabled="$v.city.$model === ''"
                  @click="add()"
                >
                  ADD
                </button>
                <button class="modal__btn_cancel" @click="cancel()">
                  CANCEL
                </button>

                <button
                  class="modal__btn_clear"
                  :disabled="$v.city.$model === ''"
                  @click="$v.city.$model = ''"
                >
                  CLEAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import moment from "moment";

// const API_key = "cb781537c5b4a64c0117f640dc95ff03";
const API_key = "4fe24e64144b4d92545e1c9c08b6c7d0";
// const API_key = "0398e399b3df2ff22e1f0e119431eda9";

export default {
  name: "weather",

  data() {
    return {
      city: "",
      cityItems: [],
      currentLocation: {},
      newObj: {},
      showModal: false,
      num1: null,
      num2: null,
    };
  },

  validations: {
    city: {
      required,
    },
  },

  async created() {
    let cities = JSON.parse(localStorage.getItem("cities"));
    if (cities) {
      cities.cities.forEach((city) => {
        this.getStorageCity(city.id);
      });
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { coords } = position;
      const cityObj = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_key}`
      ).then((response) => {
        return response.json();
      });
      cityObj.main.temp = Math.round(cityObj.main.temp - 273.15);
      cityObj.country = cityObj.sys.country;
      cityObj.mainWeather = cityObj.weather[0].main;
      cityObj.temp = cityObj.main.temp;
      cityObj.humidity = cityObj.main.humidity;

      this.currentLocation = cityObj;
      this.getTimeAgo(this.currentLocation);
    });
  },

  watch: {
    cityItems() {
      let cities = [];
      this.cityItems.forEach((city) => {
        cities.push({ id: city.id });
      });
      localStorage.setItem(
        "cities",
        JSON.stringify({
          cities,
        })
      );
    },
  },

  methods: {
    async getTimeAgo(obj, reset = true) {
      let getUpdate = {};
      if (reset) {
        getUpdate = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=${obj.id}&appid=${API_key}`
        ).then((response) => {
          return response.json();
        });
        getUpdate.main.temp = Math.round(getUpdate.main.temp - 273.15);
        getUpdate.country = getUpdate.sys.country;
        getUpdate.mainWeather = getUpdate.weather[0].main;
        getUpdate.temp = getUpdate.main.temp;
        getUpdate.humidity = getUpdate.main.humidity;
      }

      obj.timer = true;

      if (reset) {
        obj.timeStamp = moment();
      }

      while (obj.timer) {
        let indexCity = this.cityItems.findIndex((city) => city.id === obj.id);

        if (indexCity === -1) {
          let timeAgo = obj.timeStamp.subtract(1, "s").fromNow();
          this.currentLocation = Object.assign(
            {},
            this.currentLocation,
            getUpdate,
            {
              timeAgo,
            }
          );
          this.$set(this.currentLocation, "timeAgo", timeAgo);

          if (reset) {
            clearTimeout(this.currentLocation.timeout);
            this.getTimeAgo(this.currentLocation, false);
          } else {
            this.currentLocation.timeout = setTimeout(() => {
              this.getTimeAgo(this.currentLocation, false);
            }, 1000 * 60);
          }
          obj.timer = false;
        } else {
          let timeAgo = obj.timeStamp.subtract(1, "s").fromNow();
          this.cityItems[indexCity] = Object.assign(
            {},
            this.cityItems[indexCity],
            getUpdate,
            {
              timeAgo,
            }
          );
          this.$set(this.cityItems[indexCity], "timeAgo", timeAgo);

          if (reset) {
            clearTimeout(this.cityItems[indexCity].timeout);
            this.getTimeAgo(this.cityItems[indexCity], false);
          } else {
            this.cityItems[indexCity].timeout = setTimeout(() => {
              this.getTimeAgo(this.cityItems[indexCity], false);
            }, 1000 * 60);
          }
          obj.timer = false;
        }
      }
    },
    async add() {
      const getCity = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.$v.city.$model}&appid=${API_key}`
      ).then((response) => {
        return response.json();
      });
      getCity.main.temp = Math.round(getCity.main.temp - 273.15);
      getCity.country = getCity.sys.country;
      getCity.mainWeather = getCity.weather[0].main;
      getCity.temp = getCity.main.temp;
      getCity.humidity = getCity.main.humidity;

      this.cityItems.unshift(getCity);
      this.getTimeAgo(this.cityItems[0]);

      this.showModal = false;
      this.$v.city.$model = "";
      this.$v.$reset();
    },
    cancel() {
      this.showModal = false;
      this.$v.city.$model = "";
      this.$v.$reset();
    },
    remove(index) {
      this.cityItems.splice(index, 1);
    },
    async getStorageCity(id) {
      const getCity = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_key}`
      ).then((response) => {
        return response.json();
      });
      getCity.main.temp = Math.round(getCity.main.temp - 273.15);
      getCity.main.temp = Math.round(getCity.main.temp - 273.15);
      getCity.country = getCity.sys.country;
      getCity.mainWeather = getCity.weather[0].main;
      getCity.temp = getCity.main.temp;
      getCity.humidity = getCity.main.humidity;

      this.cityItems.unshift(getCity);
      this.getTimeAgo(this.cityItems[0]);
    },
  },
};
</script>
