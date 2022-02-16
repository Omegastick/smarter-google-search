import { SiteReplacer } from "../../mutators/site_replacer";

describe("SiteReplacer.mutate()", () => {
    it("should replace websites at the end of the query with the correct advanced parameter", () => {
        expect(new SiteReplacer(["reddit"]).mutate("something reddit")).toBe(
            "something site:reddit.com"
        );
    });

    it("shouldn't replace websites at the start of queries", () => {
        expect(
            new SiteReplacer(["reddit"]).mutate("reddit something something")
        ).toBe("reddit something something");
    });
});
