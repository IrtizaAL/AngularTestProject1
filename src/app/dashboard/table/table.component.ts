import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  number: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen Nin', email: 'irtiza@gmail.com', number: 42654756583 },
  { position: 2, name: 'Helium Rot', email: 'irtiza@gmail.com', number: 25724574527 },
  { position: 3, name: 'Lithium Tan', email: 'irtiza@gmail.com', number: 2575424267 },
  { position: 4, name: 'Beryllium Yak', email: 'irtiza@gmail.com', number: 57452744225 },
  { position: 5, name: 'Boron Bor', email: 'irtiza@gmail.com', number: 25757250652 },
  { position: 6, name: 'Carbon Ser', email: 'irtiza@gmail.com', number: 572572046277 },
  { position: 7, name: 'Nitrogen cen', email: 'irtiza@gmail.com', number: 257208757777 },
  { position: 8, name: 'Oxygen Yen', email: 'irtiza@gmail.com', number: 52752759072 },
  { position: 9, name: 'Fluorine Pil', email: 'irtiza@gmail.com', number: 257549807257 },
  { position: 10, name: 'Neon Lib', email: 'irtiza@gmail.com', number: 52772570957 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'number'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
