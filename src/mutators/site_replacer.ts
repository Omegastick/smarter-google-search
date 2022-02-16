import { Mutator } from "./mutator";

export class SiteReplacer implements Mutator {
    protected sites: Array<string> = ["reddit", "stackoverflow", "github"];

    mutate(query: string): string {
        const words = query.split(" ");
        if (words.length === 0) {
            return query;
        }
        const last_word = words[words.length - 1];
        if (this.sites.includes(last_word)) {
            words[words.length - 1] = `site:${last_word}.com`;
            return words.join(" ");
        }
        return query;
    }
}
