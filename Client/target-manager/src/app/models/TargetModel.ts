import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import { TagretTypes } from './target-types';

@Injectable({
    providedIn: "root"
  })
export class TargetModel {
    constructor(
         public id: number,
         public name: string,
         public description: string, 
         public deadLine: string,
         public type: TagretTypes
         ) {
    }
}