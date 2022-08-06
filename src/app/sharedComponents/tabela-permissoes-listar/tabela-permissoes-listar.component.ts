import { Component, OnChanges, AfterViewInit, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Permissao } from 'src/app/models/Permissao';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-tabela-permissoes-listar',
  templateUrl: './tabela-permissoes-listar.component.html',
  styleUrls: ['./tabela-permissoes-listar.component.scss']
})
export class TabelaPermissoesListarComponent implements OnChanges,AfterViewInit {
  @Input() permissoes!: Permissao[];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'ações'];
  dataSource = new MatTableDataSource<Permissao>(this.permissoes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    console.log("iniciei o construtor de permissoes")
    console.log(this.permissoes)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Permissao>(this.permissoes);
    this.ngAfterViewInit();
    console.log("OnChanges aqui")
    console.log(this.permissoes)
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
