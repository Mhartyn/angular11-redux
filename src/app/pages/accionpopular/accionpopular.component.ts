import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccionpopularService } from 'src/app/service/dashboard/accionpopular.service';

@Component({
  selector: 'app-accionpopular',
  templateUrl: './accionpopular.component.html',
  styleUrls: ['./accionpopular.component.sass']
})
export class AccionpopularComponent implements OnInit {

  public cant_tot_positivos: number = 0;
  public cant_tot_negativos: number = 0;
  public cant_tot_neutro: number = 0;
  public cant_tot_extraidos: number = 0;
  public cant_tot_positivos_porcentaje: number = 0;
  public cant_tot_negativos_porcentaje: number = 0;
  public cant_tot_neutro_porcentaje: number = 0;
  
  constructor(public router: Router,
    private accionpopularService: AccionpopularService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.accionpopularService.cantidadPost().subscribe(data => {
      this.cant_tot_positivos = data.cant_tot_positivos;
      this.cant_tot_negativos = data.cant_tot_negativos;
      this.cant_tot_neutro = data.cant_tot_neutro;
      this.cant_tot_extraidos = data.cant_tot_extraidos;

      this.cant_tot_positivos_porcentaje = (100 * data.cant_tot_positivos) / data.cant_tot_extraidos;
      this.cant_tot_negativos_porcentaje = (100 * data.cant_tot_negativos) / data.cant_tot_extraidos;
      this.cant_tot_neutro_porcentaje = (100 * data.cant_tot_neutro) / data.cant_tot_extraidos; 
    });
  }

}
