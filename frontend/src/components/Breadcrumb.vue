<script setup lang="ts">
defineProps<{
    items: string[];
}>();
</script>

<template>
    <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <template v-for="(item, index) in items" :key="index">
            <span>
                {{ item }}
            </span>

            <span v-if="index !== items.length - 1"> / </span>
        </template>
    </div>
</template>
