import { Injectable } from '@angular/core';
import { TagretTypes } from './target-types';

@Injectable({
    providedIn: "root"
  })
export class TargetModel {
    constructor(
         public id: number,
         public name: string,
         public description: string, 
         public deadline: string,
         public type: TagretTypes
         ) {
    }
}