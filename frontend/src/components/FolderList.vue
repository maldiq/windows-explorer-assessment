<script setup lang="ts">
defineProps<{
    folders: any[];
}>();

const onDragStart = (event: DragEvent, folder: any) => {
    event.dataTransfer?.setData("folderId", folder.id);
};

const onDrop = (event: DragEvent, targetFolder: any) => {
    const folderId = event.dataTransfer?.getData("folderId");

    console.log("MOVE", folderId, targetFolder);
};
</script>

<template>
    <div
        v-for="folder in folders"
        :key="folder.id"
        draggable="true"
        class="border rounded-xl p-4 mb-3 bg-white shadow-sm"
        @dragstart="onDragStart($event, folder)"
        @dragover.prevent
        @drop="onDrop($event, folder)"
    >
        <div class="font-medium">📁 {{ folder.name }}</div>

        <div
            v-for="file in folder.files"
            :key="file.id"
            class="ml-4 mt-2 text-sm text-gray-500"
        >
            📄 {{ file.name }}
        </div>
    </div>
</template>
