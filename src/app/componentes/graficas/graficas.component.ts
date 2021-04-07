import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.sass']
})
export class GraficasComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() fecha: string[] = ['1', '2'];
  @Input() grupos: string[] = [];
  @Input() valor: object[] = [];

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.fecha,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.valor,
        type: 'line',
      },
    ],
  };;

  constructor() { }

  ngOnInit(): void {
    this.chartOption = {
      title: {
        text: this.titulo
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: this.grupos
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        boundaryGap: false,
        type: 'category',
        data: this.fecha,
      },
      yAxis: {
        type: 'value',
      },
      series: this.valor
    };
  }

}
