export interface FolderNode {
    id: string;
    name: string;
    parentId: string | null;
    children: FolderNode[];
}
