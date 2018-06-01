import {Ishape} from './Ishape'
import { angularMath } from 'angular-ts-math';

export class Triangle implements Ishape {
    constructor(public base: number, public heigh: number){
    }

    area(): number{
        return (this.base * this.heigh) / 2
    }

    perimeter(): number{
       /*
        let hypotenuse = (Math.sqrt(Math.pow(this.heigh,2)) + (Math.pow(this.heigh,4)/4)) // Math.sqrt (radice quadrata) //Math.pow (esponente)
        return hypotenuse * 2 +this.base
       */

       let hypotenuse = angularMath.squareOfNumber(angularMath.powerOfNumber(this.base/2,2) + angularMath.powerOfNumber(this.heigh, 2))
       return hypotenuse *2 + this.base
    }
}
