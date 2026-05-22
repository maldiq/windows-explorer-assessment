<script setup lang="ts">
import FolderItem from "./FolderItem.vue";

defineProps<{
    folders: any[];
}>();

const emit = defineEmits(["select", "rename", "delete"]);
</script>

<template>
    <ul>
        <FolderItem
            v-for="folder in folders"
            :key="folder.id"
            :folder="folder"
            @select="emit('select', $event)"
            @rename="emit('rename', $event)"
            @delete="emit('delete', $event)"
        />
    </ul>
</template>
