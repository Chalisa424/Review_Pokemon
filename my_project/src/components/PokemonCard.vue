<template>
    <div class="flex items-center justify-between">
        <h3 class="font-bold text-lg capitalize">{{ name }}</h3>
        <span class="">{{ id }}</span>
    </div>
</template>
<script setup lang="ts">
import {useRouter} from 'vue-router';
const router = useRouter();

defineProps<{
   id:{
     type: number,
     required: true
   },
   name:{
     type: string,
     required: true
   },
   image:{
    type: string,
    required: true
   }
}>();
</script>
