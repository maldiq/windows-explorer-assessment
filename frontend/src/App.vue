<script setup lang="ts">
import { onMounted } from "vue";

import FolderTree from "./components/FolderTree.vue";
import FolderList from "./components/FolderList.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import SearchBar from "./components/SearchBar.vue";

import { useFolderStore } from "./stores/folder.store";

const store = useFolderStore();

onMounted(() => {
    store.loadTree();
});
</script>

<template>
    <div class="flex h-screen">
        <aside class="w-80 border-r bg-gray-50 p-4 overflow-auto">
            <h1 class="text-xl font-bold mb-4">Windows Explorer</h1>

            <SearchBar @search="store.search" />

            <FolderTree
                :folders="store.folders"
                @select="store.selectFolder"
                @rename="store.rename"
                @delete="store.remove"
            />
        </aside>

        <main class="flex-1 p-6 overflow-auto">
            <Breadcrumb :items="store.breadcrumb" />

            <FolderList :folders="store.selectedChildren" />
        </main>
    </div>
</template>
