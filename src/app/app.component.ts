import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tareas = [] 
  public nuevaTarea

  public agregarNuevaTarea(){
    this.tareas.push({descripcion: this.nuevaTarea, terminada: false})
    console.log(this.tareas)
  }
}
