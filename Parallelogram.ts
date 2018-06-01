import {Ishape} from './Ishape'

export class Parallelogram implements Ishape {
    constructor(public base: number, public heigh: number){
    }

    area(): number{
        return this.base * this.heigh
    }
    
    perimeter(): number{
        return (this.base + this.heigh) *2
    }
}
export class Square extends Parallelogram {
    constructor (public side: number){
        super(side, side) // corrisponde a new Parallelogram
    }
}

