<script setup lang="ts">



interface locationinfoInterface {
    ip?: string;
    city?: string;
    timezone?: string;
    isp?: string;
}


const props = defineProps<locationinfoInterface>()

</script>

<template>
<div class="container mx-auto px-2">
    <div class="bg-white p-[40px] rounded-lg mt-[-80px] z-20 shadow-lg relative">
      <ul class="flex">
        <li class="w-[25%] px-[20px] border-r-[1px]">
          <p class="coords-title font-Rubik text-darkGray uppercase text-xs font-bold mb-2">IP adress</p>
          <h3 class="font-bold text-grayDarkest text-xl">{{ props.ip}}</h3>
        </li>
        <li class="w-[25%] px-[20px]  border-r-[1px] ">
          <p class="coords-title font-Rubik text-darkGray uppercase text-xs font-bold mb-2">Location</p>
          <h3 class="font-bold text-grayDarkest text-xl">{{ props.city}}</h3>
        </li>
        <li class="w-[25%] px-[20px]  border-r-[1px]">
          <p class="coords-title font-Rubik text-darkGray uppercase text-xs font-bold mb-2">Timezone</p>
          <h3 class="font-bold text-grayDarkest text-xl">(GMT+1) {{ props.timezone }}</h3>
        </li>
        <li class="w-[25%] px-[20px]">
          <p class="coords-title font-Rubik text-darkGray uppercase text-xs font-bold mb-2">title 4</p>
          <h3 class="font-bold text-grayDarkest text-xl">{{ props.isp }}</h3>
        </li>
      </ul>
    </div>
</div>
</template>
