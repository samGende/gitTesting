import { Component, OnInit } from '@angular/core';
import {SortService} from 'src/app/core/sort.service'

import {Team} from '../shared/interfaces'

@Component({
  selector: 'Leuguetable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table: Team[] = [
    { name: 'Arsenal', GD: 7, points: 15},
    { name: 'Man City', GD: 12, points: 13},
    { name: 'Man United', GD: 7, points: 15}
  ]

  constructor(private sorter: SortService) { }

  ngOnInit(): void {
    this.sorter.sort(this.table);
  }

}
