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
      datasets: chartKeys.map((key, index) => ({
        label: key,
        data: [dataValues[index]],
        backgroundColor: [backgroundColors[index]],
        borderWidth: 0,
      })),
    };

    console.log(this.basicData)

    this.basicOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: textColor,
          },
        },
      },
      
    };
  }
}
