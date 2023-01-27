<script setup lang="ts">
import Map from "@/components/map.vue";
import Info from "@/components/informationblock.vue";
import { onMounted, ref } from "vue";
import  geoService  from '@/services/geolocationService';
import { geolocationInterface } from '@/interfaces/geolocationInterface';

const geolocationData = ref<geolocationInterface | undefined>()
const useripAdress = ref("")

const getgeoLocation = () => {
        geoService.getGeoLocation(useripAdress.value).then((data => {
            console.log(useripAdress.value)
            console.log(data.data)
            geolocationData.value = data.data
    }))
}

</script>

<template>
  <div class="bg-pattern h-[250px] w-full bg-no-repeat bg-cover">
    <div class="container mx-auto px-2">
      <div class="flex flex-col items-center">
        <h1 class="text-2xl text-white mb-8 text-center pt-4 font-medium">
          IP Adress Tracker
        </h1>
        <div class="relative w-[500px]">
          <input
            type="text"
            v-model="useripAdress"
            class="w-full px-4 py-2 rounded-lg border-none"
            placeholder="Search for any IP adress or domein"
          />

          <button
            class="bg-arrow bg-black px-4 py-2 rounded-tr-lg rounded-br-lg absolute top-0 right-0 h-full"
            @click="getgeoLocation">
            <img src="../assets/images/icon-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <Info 
    :city="geolocationData?.location.city"
    :ip="geolocationData?.ip"
    :timezone="geolocationData?.location.timezone"
    :isp="geolocationData?.isp"
  />
  <Map
    ref="test"
    :lat="geolocationData?.location.lat"
    :long="geolocationData?.location.lng"
   />
</template>
