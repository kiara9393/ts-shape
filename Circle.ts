import {Ishape} from './Ishape'
import { angularMath } from 'angular-ts-math';

export class Circle implements Ishape {
    constructor(public radius: number){
    }

    area(): number{
        return angularMath.powerOfNumber(this.radius, 2) * angularMath.getPi() 
    }

    perimeter(): number{
        return this.radius * 2 * angularMath.getPi()
    }
}
