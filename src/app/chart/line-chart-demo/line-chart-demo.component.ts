import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
@Component({
  selector: 'app-line-chart-demo',
  templateUrl: './line-chart-demo.component.html',
  styleUrls: ['./line-chart-demo.component.css'],
})
export class LineChartDemoComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40] },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    legend: {
      display: false,
    },
    elements: { line: { fill: false } },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          display: false,
        },
        {
          id: 'y-axis-1',
          position: 'right',
          display: false,
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          },
        },
      ],
    },
    annotation: {},
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
    {
      // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  ngOnInit() {}
}
