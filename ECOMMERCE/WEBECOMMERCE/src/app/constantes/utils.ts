import { Token } from "../interfaces/interface";

export const instanceOfToken=(object: any): object is Token=>{
    return 'ok' in object;
}