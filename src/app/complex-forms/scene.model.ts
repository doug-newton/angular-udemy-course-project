import { Person } from "./person.model";

export class Scene {
    constructor(
        public name: string = "<new scene>",
        public people: Person[] = []
    ) { }
}