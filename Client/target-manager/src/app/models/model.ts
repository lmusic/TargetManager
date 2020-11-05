import { TagretTypes } from './target-types';

export class Target {
    constructor(
         public id: number,
         public name: string,
         public description: string, 
         public deadline: string,
         public type: TagretTypes
         ) {
    }
}