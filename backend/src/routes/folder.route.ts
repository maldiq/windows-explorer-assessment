import { Elysia } from "elysia";
import { FolderController } from "../controllers/folder.controller";

const controller = new FolderController();

export const folderRoutes = new Elysia({
    prefix: "/api/v1/folders",
})

    .get("/tree", () => controller.getTree())

    .get("/:id/children", ({ params }) => controller.getChildren(params.id))

    .get("/search/:query", ({ params }) => controller.search(params.query))

    .post("/", ({ body }) => controller.createFolder(body))

    .put("/:id", ({ params, body }) => controller.renameFolder(params.id, body))

    .delete("/:id", ({ params }) => controller.deleteFolder(params.id));
