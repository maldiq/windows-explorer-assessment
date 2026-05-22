import { mount } from "@vue/test-utils";

import FolderList from "./FolderList.vue";

describe("FolderList", () => {
    it("renders folders", () => {
        const wrapper = mount(FolderList, {
            props: {
                folders: [
                    {
                        id: "1",
                        name: "Documents",
                        files: [],
                    },
                ],
            },
        });

        expect(wrapper.text()).toContain("Documents");
    });
});
