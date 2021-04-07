import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CloudData } from 'angular-tag-cloud-module';
import Palabra from 'src/app/models/palabra.model';
import Post from 'src/app/models/post.model';
import Tweet from 'src/app/models/tweet.model';
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

  public fechaMensiones: string[] = [];
  public valorMensionesTmp: string[] = [];
  public valorMensiones: object[] = [];

  public fechaAS: string[] = [];

  public tweetPTmp: string[] = [];
  public tweetNTmp: string[] = [];
  public tweetTmp: string[] = [];

  public tweet: object[] = [];

  public topTweet: Tweet[] = [];

  public postsPositivos: Post[] = [];
  public postsNegativos: Post[] = [];

  public palabras: Palabra[] = [];
  public cloudData: CloudData[] = [];

  constructor(public router: Router,
    private accionpopularService: AccionpopularService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cantidadPost() {
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

  mensiones() {
    this.accionpopularService.mensiones()
      .subscribe(data => {
        for (let index = 0; index < data.length; index++) {
          if (this.fechaMensiones.find(x => x == data[index]._id) === undefined) {
            this.fechaMensiones.push(data[index]._id);
          }
          this.valorMensionesTmp.push(data[index].numero);
        }

        this.valorMensiones.push(
          {
            name: '',
            stack: '',
            data: this.valorMensionesTmp,
            type: 'line',
          }
        );
      });
  }

  analisisSentimiento() {
    this.accionpopularService.analisisSentimiento()
      .subscribe(data => {
        const tweetPositivo: string = 'Positivo';
        const tweetNeutro: string = 'Neutro';
        const tweetNegativo: string = 'Negativo';

        for (let index = 0; index < data.length; index++) {
          switch (data[index].sentimiento) {
            case tweetNegativo:
              this.tweetNTmp.push(data[index].tweet);
              break;
            case tweetNeutro:
              this.tweetTmp.push(data[index].tweet);
              break;
            case tweetPositivo:
              this.tweetPTmp.push(data[index].tweet);
              break;
            default:
              break;
          }

          if (this.fechaAS.find(x => x == data[index].fecha) === undefined) {
            this.fechaAS.push(data[index].fecha);
          }
        }

        this.tweet.push(
          {
            name: tweetPositivo,
            stack: tweetPositivo,
            data: this.tweetPTmp,
            type: 'line',
          },
          {
            name: tweetNegativo,
            stack: tweetNegativo,
            data: this.tweetNTmp,
            type: 'line',
          },
          {
            name: tweetNeutro,
            stack: tweetNeutro,
            data: this.tweetTmp,
            type: 'line',
          }
        );
      });
  }

  top_twitter() {
    this.accionpopularService.top_twitter()
      .subscribe(data => {
        this.topTweet = data;
      });
  }

  mension_positivas() {
    this.accionpopularService.mension_positivas()
      .subscribe(data => {
        this.postsPositivos = data;        
      });
  }

  mension_negativas() {
    this.accionpopularService.mension_negativas()
      .subscribe(data => {
        this.postsNegativos = data;
      });
  }

  cargarDatos() {
    this.cantidadPost();
    this.mensiones();
    this.analisisSentimiento();
    this.top_twitter();
    this.mension_positivas();
    this.mension_negativas();

    this.accionpopularService.palabras()
      .subscribe(data => {
          this.palabras = data;

          for (let index = 0; index < this.palabras.length; index++) {
            const element = this.palabras[index];            
            this.cloudData.push({
              text: element.termino,
              weight: element.frecuencia,
              color: '#ffaaee'
            })    
          }
      });
  }

}
