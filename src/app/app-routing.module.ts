import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearJugadorComponent } from './components/crear-jugador/crear-jugador.component';
import { ListarJugadoresComponent } from './components/listar-jugadores/listar-jugadores.component';

const routes: Routes = [
  { path: '', component: ListarJugadoresComponent },
  { path: 'crear-jugador', component: CrearJugadorComponent },
  { path: 'editar-jugador/:id', component: CrearJugadorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
