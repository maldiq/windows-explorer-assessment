<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["search"]);

const keyword = ref("");

const handleInput = () => {
    emit("search", keyword.value);
};
</script>

<template>
    <input
        v-model="keyword"
        type="text"
        placeholder="Search folders..."
        class="w-full border rounded-lg p-2 mb-4"
        @input="handleInput"
    />
</template>
