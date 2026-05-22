<script setup lang="ts">
import { RecycleScroller } from "vue-virtual-scroller";

defineProps<{
    folders: any[];
}>();
</script>

<template>
    <RecycleScroller :items="folders" :item-size="60" class="h-screen">
        <template #default="{ item }">
            <div class="border p-3 mb-2 rounded">📁 {{ item.name }}</div>
        </template>
    </RecycleScroller>
</template>
