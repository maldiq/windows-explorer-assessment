import type { Folder } from "@prisma/client";

export class FolderService {
    buildTree(folders: Folder[]) {
        const map = new Map();

        const roots: any[] = [];

        folders.forEach((folder) => {
            map.set(folder.id, {
                ...folder,
                children: [],
            });
        });

        folders.forEach((folder) => {
            const node = map.get(folder.id);

            if (folder.parentId) {
                const parent = map.get(folder.parentId);

                if (parent) {
                    parent.children.push(node);
                }
            } else {
                roots.push(node);
            }
        });

        return roots;
    }
}
