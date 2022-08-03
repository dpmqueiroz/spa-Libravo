import { Usuario } from '../../models/Usuario';
import { Component, Input, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {AfterViewInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements AfterViewInit, OnChanges{

  @Input() usuarios!: Usuario[];

  displayedColumns: string[] = ['id', 'nome', 'email', 'permissao', 'criado em', 'atualizado em', 'ações'];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
