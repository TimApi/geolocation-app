<script setup lang="ts">
import Search from "@/components/searchinput.vue";
import leaflet from "leaflet";
import { onMounted, ref, watch } from "vue";
import geoService from "@/services/geolocationService";
import { geolocationInterface } from "@/interfaces/geolocationInterface";
import { watchgeolocationInterface } from "@/interfaces/watchgeolocationInterface";

export interface locationprops {
  lat?: number;
  long?: number;
}

const props = defineProps<locationprops>();

let map = ref();

const customIcon = leaflet.icon({
    iconAnchor: [22, 94],
    iconUrl: "../src/assets/images/icon-location.svg",
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });


  
const getuserLocation = () => {
  navigator.geolocation.getCurrentPosition(showPosition, failedPosition);
};

const showPosition = (pos: watchgeolocationInterface) => {
  console.log(pos);
  map = leaflet
    .map("map")
    .setView([pos.coords.latitude, pos.coords.longitude], 13);
  leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

  leaflet
    .marker([pos.coords.latitude, pos.coords.longitude], { icon: customIcon })
    .addTo(map);
};

const failedPosition = (error: string) => {
  console.log(error);
};

watch(
  () => [props.lat, props.long],
  () => {
    addLocation();
  }
);


const addLocation = () => {
  leaflet.marker([props.lat, props.long], { icon: customIcon}).addTo(map);
  map.setView([props.lat, props.long], 13);
};


onMounted(() => {
  getuserLocation();
});
</script>

<template>
  <div id="map" class="relative h-[800px] z-10 mt-[-48px]"></div>
</template>
