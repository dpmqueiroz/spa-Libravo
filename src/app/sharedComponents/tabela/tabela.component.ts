import { Usuario } from './../../models/Usuario';
import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
    this.dataSource.paginator = this.paginator;
  }

  @Input()
  usuarios!: Usuario[];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    console.log("Nesse momento usuarios são")
    console.log(this.usuarios)
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

  }

}
