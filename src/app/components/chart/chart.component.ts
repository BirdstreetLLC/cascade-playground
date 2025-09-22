import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const chartKeys = ['Members in the Outreach', 'Engaged', 'Unengaged', 'Q4'];
    const dataValues = [540, 325, 702, 620];
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

    this.basicOptions = {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },

        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
