export class Scenario {
    public name: string
    public steps: {[key:string]:string}

    constructor(name:string, steps:{[key:string]:string} = {}){
        this.name = name
        this.steps = steps
    }
}