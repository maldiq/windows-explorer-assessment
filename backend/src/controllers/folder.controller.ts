import { FolderRepository } from "../repositories/folder.repository";
import { FolderService } from "../services/folder.service";

const folderRepository = new FolderRepository();
const folderService = new FolderService();

export class FolderController {
    async getTree() {
        const folders = await folderRepository.getAllFolders();

        return folderService.buildTree(folders);
    }

    async getChildren(folderId: string) {
        return folderRepository.getChildren(folderId);
    }

    async createFolder(body: any) {
        return folderRepository.createFolder(body.name, body.parentId);
    }

    async search(query: string) {
        return folderRepository.searchFolders(query);
    }

    async deleteFolder(id: string) {
        return folderRepository.deleteFolder(id);
    }

    async renameFolder(id: string, body: any) {
        return folderRepository.renameFolder(id, body.name);
    }
}
