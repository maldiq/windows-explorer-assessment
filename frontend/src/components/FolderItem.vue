<script setup lang="ts">
import { ref } from "vue";

import { Folder, FolderOpen } from "lucide-vue-next";

const props = defineProps<{
    folder: any;
}>();

const emit = defineEmits(["select", "rename", "delete"]);

const opened = ref(false);

const editing = ref(false);

const editingName = ref("");

const startRename = () => {
    editing.value = true;

    editingName.value = props.folder.name;
};

const contextMenu = ref({
    visible: false,
    x: 0,
    y: 0,
});

const toggle = () => {
    opened.value = !opened.value;
};

const selectFolder = () => {
    emit("select", props.folder);
};

const openContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    contextMenu.value = {
        visible: true,
        x: event.clientX,
        y: event.clientY,
    };
};

const closeContextMenu = () => {
    contextMenu.value.visible = false;
};

const submitRename = () => {
    emit("rename", {
        id: props.folder.id,
        name: editingName.value,
    });

    editing.value = false;
};

window.addEventListener("click", closeContextMenu);
</script>

<template>
    <li class="mb-1 relative">
        <div
            class="flex items-center gap-2 hover:bg-gray-100 rounded p-1"
            @contextmenu="openContextMenu"
        >
            <button
                v-if="folder.children?.length"
                class="w-5 h-5 border rounded text-xs"
                @click="toggle"
            >
                {{ opened ? "-" : "+" }}
            </button>

            <FolderOpen v-if="opened" class="w-4 h-4 text-yellow-500" />

            <Folder v-else class="w-4 h-4 text-yellow-500" />

            <input
                v-if="editing"
                v-model="editingName"
                class="border rounded px-1"
                @keyup.enter="submitRename"
            />

            <span v-else class="cursor-pointer" @click="selectFolder">
                {{ folder.name }}
            </span>
        </div>

        <div
            v-if="contextMenu.visible"
            class="fixed bg-white border shadow rounded z-50"
            :style="{
                left: contextMenu.x + 'px',
                top: contextMenu.y + 'px',
            }"
        >
            <div
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                @click="startRename"
            >
                Rename
            </div>

            <div
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                @click="emit('delete', folder.id)"
            >
                Delete
            </div>
        </div>

        <ul v-if="opened" class="pl-5">
            <FolderItem
                v-for="child in folder.children"
                :key="child.id"
                :folder="child"
                @select="emit('select', $event)"
                @rename="emit('rename', $event)"
                @delete="emit('delete', $event)"
            />
        </ul>
    </li>
</template>
