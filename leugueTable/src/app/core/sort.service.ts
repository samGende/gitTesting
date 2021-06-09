import { Injectable } from '@angular/core';

import {Team} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  sort(collection: Team[]){

    collection.sort(function(a,b) {return b.points - a.points})

  }

  constructor() { }
}
