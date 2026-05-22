import { prisma } from "./config/prisma";

async function main() {
    const documents = await prisma.folder.create({
        data: {
            name: "Documents",
        },
    });

    const projects = await prisma.folder.create({
        data: {
            name: "Projects",
            parentId: documents.id,
        },
    });

    await prisma.folder.create({
        data: {
            name: "Vue Project",
            parentId: projects.id,
        },
    });

    await prisma.folder.create({
        data: {
            name: "Laravel Project",
            parentId: projects.id,
        },
    });

    const images = await prisma.folder.create({
        data: {
            name: "Images",
        },
    });

    await prisma.folder.create({
        data: {
            name: "Vacation",
            parentId: images.id,
        },
    });

    console.log("Seed completed");
}

main();
