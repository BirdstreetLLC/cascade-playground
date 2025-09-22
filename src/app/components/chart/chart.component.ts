import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart',
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  basicData: any;
  basicOptions: any;
  @Input() data: any = [];
  @Input() keys: any = {};

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    const chartKeys = [...this.keys];
    const dataValues = [...this.data];
    const backgroundColors = [
      'rgba(41, 76, 246, 1)',
      'rgba(151, 115, 238, 1)',
      'rgba(0, 205, 209, 1)',
      'rgba(253, 212, 73, 1)',
      'rgba(253, 0, 82, 1)',
    ];

    this.basicData = {
      labels: chartKeys,
      datasets: [
        {
          label: chartKeys[0],
          data: dataValues,
          backgroundColor: backgroundColors,
          borderWidth: 0
        }
      ]
    };

    this.basicOptions = {
      categoryPercentage: 1,
          barPercentage: 1,
          barThickness: 32,
      scales: {
        y: {
          beginAtZero: true
        },
      },
      plugins: {
        legend: {
          //do not show legend
          display: false
        },
      },
      
    };
  }
}
