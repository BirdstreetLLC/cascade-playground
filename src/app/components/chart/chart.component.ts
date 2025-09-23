import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
  @Input() outcomeRates: any = [];

  constructor() {
    Chart.register(...registerables, ChartDataLabels);
  }

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

    const datasets = [
      {
        type: 'bar',
        label: 'Member Counts',
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 0,
        yAxisID: 'y',
        order: 1, // Higher order means it draws behind
      },
    ];

    // Add outcome rates as scatter points (no connecting line) if data is provided
    if (this.outcomeRates && this.outcomeRates.some((rate: any) => rate !== null && rate !== undefined)) {
      datasets.push({
        type: 'scatter',
        label: 'Outcome Rate (%)',
        data: this.outcomeRates.map((rate: any, index: number) => ({
          x: index,
          y: rate
        })),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 3,
        yAxisID: 'y1',
        pointRadius: 8,
        pointHoverRadius: 10,
        order: 0, // Lower order means it draws on top
      } as any);
    }

    this.basicData = {
      labels: chartKeys,
      datasets: datasets,
    };

    this.basicOptions = {
      categoryPercentage: 1,
      barPercentage: 1,
      barThickness: 32,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          beginAtZero: true,
          title: {
            display: true,
            text: 'Member Count'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          beginAtZero: true,
          title: {
            display: true,
            text: 'Outcome Rate (%)'
          },
          grid: {
            drawOnChartArea: false,
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        },
        datalabels: {
          display: true,
          anchor: 'end',
          align: 'top',
          formatter: (value: any, context: any) => {
            // Format numbers with commas for readability
            if (context.datasetIndex === 0) {
              // Bar chart values (member counts)
              return value.toLocaleString();
            } else {
              // Scatter plot values (outcome rates)
              return value && value.y ? `${value.y}%` : '';
            }
          },
          font: {
            weight: 'bold',
            size: 11
          },
          color: (context: any) => {
            return context.datasetIndex === 0 ? '#374151' : '#dc2626';
          }
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              if (context.datasetIndex === 0) {
                // Bar chart values (member counts)
                return `${context.dataset.label}: ${context.parsed.y.toLocaleString()}`;
              } else {
                // Scatter plot values (outcome rates)
                return `${context.dataset.label}: ${context.parsed.y}%`;
              }
            }
          }
        }
      },
    };
  }
}
