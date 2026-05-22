import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { folderRoutes } from "./routes/folder.route";

const app = new Elysia()
    .use(cors())
    .use(folderRoutes)
    .get("/", () => ({
        success: true,
        message: "Windows Explorer API Running",
    }));

app.listen(3000);

console.log("Server running at http://localhost:3000");
