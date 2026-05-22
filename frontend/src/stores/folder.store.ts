import { defineStore } from "pinia";

import {
    getFolderTree,
    getFolderChildren,
    searchFolders,
} from "../services/api";
import { renameFolder, deleteFolder } from "../services/api";

export const useFolderStore = defineStore("folder", {
    state: () => ({
        folders: [] as any[],
        selectedChildren: [] as any[],
        selectedFolder: null as any,
        breadcrumb: [] as string[],
        loading: false,
    }),

    actions: {
        async loadTree() {
            this.loading = true;

            try {
                this.folders = await getFolderTree();
            } finally {
                this.loading = false;
            }
        },

        async selectFolder(folder: any) {
            this.selectedFolder = folder;

            this.selectedChildren = await getFolderChildren(folder.id);

            this.breadcrumb = this.buildPath(folder);
        },

        async search(keyword: string) {
            if (!keyword) {
                return this.loadTree();
            }

            this.folders = await searchFolders(keyword);
        },

        async rename(payload: any) {
            await renameFolder(payload.id, payload.name);

            await this.loadTree();

            if (this.selectedFolder) {
                await this.selectFolder(this.selectedFolder);
            }
        },

        async remove(id: string) {
            await deleteFolder(id);

            await this.loadTree();

            this.selectedChildren = this.selectedChildren.filter(
                (item: any) => item.id !== id,
            );
        },

        buildPath(folder: any) {
            const paths = [];

            let current = folder;

            while (current) {
                paths.unshift(current.name);
                current = current.parent;
            }

            return paths;
        },
    },
});
