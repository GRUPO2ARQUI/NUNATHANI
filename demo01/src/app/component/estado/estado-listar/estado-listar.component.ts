import { Component, OnInit, ViewChild  } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import { EstadoService } from 'src/app/service/estado';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EstadoDialogoComponent } from './estado-dialogo/estado-dialogo.component';
import { MatPaginator } from '@angular/material/paginator'; //THIS
@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.css'],
})
export class EstadoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Estado> = new MatTableDataSource();
  lista: Estado[] = [];
  displayedColumns: string[] = [
    'No',
    'Disponibilidad',
    'ceditar'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idMayor: number = 0;

  constructor(private rS: EstadoService, private dialog:MatDialog) {}
  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    });
    this.rS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    });
    this.rS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(EstadoDialogoComponent);
  }
  eliminar(id: number) {
    this.rS.eliminar(id).subscribe(() => {
      this.rS.list().subscribe(data => {
        this.rS.setList(data);/* se ejecuta la línea 27 */
        this.dataSource = new MatTableDataSource(data); //THIS
        this.dataSource.paginator = this.paginator; //THIS
      });
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}