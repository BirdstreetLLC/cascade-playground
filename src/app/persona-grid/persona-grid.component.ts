import { NgFor, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cascadeFigmaVariables } from '../cascade';
import { TooltipModule } from 'primeng/tooltip';

enum Condition {
  HighAdmit = 'High Admittance',
  CHF = 'CHF',
  DiabetesComp = 'Diabetes Complicated',
  Depression = 'Depression',
  PrevGaps = 'Previous Gaps',
}

@Component({
  selector: 'app-persona-grid',
  imports: [NgFor, NgIf, CommonModule, TooltipModule],
  templateUrl: './persona-grid.component.html',
  styleUrl: './persona-grid.component.css',
})
export class PersonaGridComponent {

  colors = cascadeFigmaVariables;
  createSquare(title: string, condition: string) {
    const randomNumber = Math.floor(Math.random() * 9) + 10;
    const randomDecimal = Math.random();
    const result = randomNumber + randomDecimal;
    const randomNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    const randomNum2 = Math.floor(Math.random() * (5000 - 1 + 1) + 1);
    return { title, condition, total: randomNum, members: randomNum2 };
  }

  heatColorMap = [
    { threshold: 80, color: this.colors.redDarker },
    { threshold: 75, color: this.colors.redDark },
    { threshold: 70, color: this.colors.red },
    { threshold: 65, color: this.colors.red },
    { threshold: 60, color: this.colors.redLight },
    { threshold: 55, color: this.colors.redLighter },
    { threshold: 50, color: this.colors.redLightest },
    { threshold: 45, color: this.colors.tealDarkest },
    { threshold: 40, color: this.colors.tealDarker },
    { threshold: 35, color: this.colors.tealDark },
    { threshold: 30, color: this.colors.teal },
    { threshold: 25, color: this.colors.tealLight },
    { threshold: 20, color: this.colors.tealLighter },
    { threshold: 15, color: this.colors.tealLightest },
  ];



  generateHeatColor = (total: number): string => {
    for (const { threshold, color } of this.heatColorMap) {
      if (total > threshold) return color;
    }
    return cascadeFigmaVariables.tealLightest;
  };

  getContrastingSpanColor = (backgroundColor: string): string => {
    const isDarkColor = this.isDarkColor(backgroundColor);
    return isDarkColor ? 'rgb(255, 255, 255, 0.8)' : 'rgb(0, 0, 0, 0.8)';
  };

  isDarkColor = (color: string): boolean => {
    const hexColor = this.hexColor(color);
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance < 0.5;
  };

  hexColor = (color: string): string => {
    if (color.startsWith('#')) return color;
    if (color.startsWith('rgb(')) {
      const rgb = color.substring(4, color.length - 1).split(',');
      const r = parseInt(rgb[0].trim());
      const g = parseInt(rgb[1].trim());
      const b = parseInt(rgb[2].trim());
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
    return color;
  };

  numbers = [
    this.createSquare(Condition.HighAdmit, 'Acute'),
    this.createSquare(Condition.CHF, 'Acute'),
    this.createSquare(Condition.DiabetesComp, 'Acute'),
    this.createSquare(Condition.Depression, 'Acute'),
    this.createSquare(Condition.PrevGaps, 'Acute'),
  ];

  urbanYoungAdults = [
    {
      title: 'Urban Young Adults',
      condition: '',
      total: 0,
      members: 12500,
    },
    ...[
      this.createSquare(Condition.HighAdmit, 'Acute'),
      this.createSquare(Condition.CHF, 'Acute'),
      this.createSquare(Condition.DiabetesComp, 'Acute'),
      this.createSquare(Condition.Depression, 'Acute'),
      this.createSquare(Condition.PrevGaps, 'Acute'),
    ],
  ];

  ruralSeniors = [
    {
      title: 'Rural Seniors',
      condition: '',
      total: 0,
      members: 12500,
    },
    ...[
      this.createSquare(Condition.HighAdmit, 'Acute'),
      this.createSquare(Condition.CHF, 'Acute'),
      this.createSquare(Condition.DiabetesComp, 'Acute'),
      this.createSquare(Condition.Depression, 'Acute'),
      this.createSquare(Condition.PrevGaps, 'Acute'),
    ],
  ];

  workingFamilies = [
    {
      title: 'Working Families',
      condition: '',
      total: 0,
      members: 12500,
    },
    ...[
      this.createSquare(Condition.HighAdmit, 'Acute'),
      this.createSquare(Condition.CHF, 'Acute'),
      this.createSquare(Condition.DiabetesComp, 'Acute'),
      this.createSquare(Condition.Depression, 'Acute'),
      this.createSquare(Condition.PrevGaps, 'Acute'),
    ],
  ];

  lowIncomeUrban = [
    {
      title: 'Low Income Urban',
      condition: '',
      total: 0,
      members: 12500,
    },
    ...[
      this.createSquare(Condition.HighAdmit, 'Acute'),
      this.createSquare(Condition.CHF, 'Acute'),
      this.createSquare(Condition.DiabetesComp, 'Acute'),
      this.createSquare(Condition.Depression, 'Acute'),
      this.createSquare(Condition.PrevGaps, 'Acute'),
    ],
  ];
}
