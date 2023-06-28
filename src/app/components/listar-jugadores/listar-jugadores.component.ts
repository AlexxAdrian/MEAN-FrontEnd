import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Jugador } from 'src/app/models/jugador';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-listar-jugadores',
  templateUrl: './listar-jugadores.component.html',
  styleUrls: ['./listar-jugadores.component.css']
})
export class ListarJugadoresComponent implements OnInit {
  listJugadores: Jugador[] = [];

  constructor(private _jugadorService: JugadorService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerJugadores();
  }

  obtenerJugadores() {
    this._jugadorService.getJugadores().subscribe(
      data => {
        console.log(data);
        this.listJugadores = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  eliminarJugador(id: any) {
    this._jugadorService.eliminarJugador(id).subscribe(
      data => {
        this.toastr.error('El jugador se eliminó correctamente', 'Jugador Eliminado', {
          closeButton: true,
          progressBar: true,
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        this.obtenerJugadores();
      },
      error => {
        console.log(error);
      }
    );
  }
}
