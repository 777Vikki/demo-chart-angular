import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartsModule } from 'ng2-charts';
import { LineChartDemoComponent } from './line-chart-demo/line-chart-demo.component';


@NgModule({
  declarations: [LineChartDemoComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartsModule
  ]
})
export class ChartModule { }
