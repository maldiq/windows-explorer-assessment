// import { prisma } from "../utils/prisma";

// export class FolderRepository {
//     async getAllFolders() {
//         return prisma.folder.findMany({
//             orderBy: {
//                 name: "asc",
//             },
//         });
//     }

//     async getChildren(folderId: string) {
//         return prisma.folder.findMany({
//             where: {
//                 parentId: folderId,
//             },
//             orderBy: {
//                 name: "asc",
//             },
//         });
//     }
// }

import { prisma } from "../config/prisma";

export class FolderRepository {
    async getAllFolders() {
        return prisma.folder.findMany({
            orderBy: {
                name: "asc",
            },
        });
    }

    async getChildren(folderId: string) {
        return prisma.folder.findMany({
            where: {
                parentId: folderId,
            },
            include: {
                files: true,
            },
            orderBy: {
                name: "asc",
            },
        });
    }

    async createFolder(name: string, parentId?: string) {
        return prisma.folder.create({
            data: {
                name,
                parentId,
            },
        });
    }

    async searchFolders(keyword: string) {
        return prisma.folder.findMany({
            where: {
                name: {
                    contains: keyword,
                    mode: "insensitive",
                },
            },
            orderBy: {
                name: "asc",
            },
        });
    }

    async deleteFolder(id: string) {
        return prisma.folder.delete({
            where: {
                id,
            },
        });
    }

    async renameFolder(id: string, name: string) {
        return prisma.folder.update({
            where: {
                id,
            },
            data: {
                name,
            },
        });
    }
}
