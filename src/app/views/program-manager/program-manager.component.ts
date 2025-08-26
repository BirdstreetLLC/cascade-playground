import { Component } from '@angular/core';
import { GlobalHeaderComponent } from '../../components/global-header/global-header.component';
import { HeaderComponent } from '../../components/program-manager/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-program-manager',
  imports: [GlobalHeaderComponent, HeaderComponent, CardComponent, NgFor],
  standalone: true,
  templateUrl: './program-manager.component.html',
  styleUrl: './program-manager.component.css',
})
export class ProgramManagerComponent {
  programData = [
    {
      status: 'Published',
      title: 'Health Outcomes Survey',
      startDate: '01/12/2024',
      endDate: '03/12/2025',
      engagementRate: 50.77,
      engagementRateTitle: 'Engagement Rate',
      engagementRateSubtitle: 'Your program is ahead of benchmarks!',
      memberList: 127703,
      engaged: 50.77,
      unableToReach: 2.83,
      optOut: 1.68,
    },
    {
      status: 'Published',
      title: 'Complete Casey Care',
      startDate: '01/12/2024',
      endDate: '03/12/2025',
      engagementRate: 57.84,
      engagementRateTitle: 'Engagement Rate',
      engagementRateSubtitle: 'Your program is ahead of benchmarks!',
      memberList: 127703,
      engaged: 57.84,
      unableToReach: 2.83,
      optOut: 3.68,
    }, 
    {
      status: 'Published',
      title: 'Breast Cancer Screening',
      startDate: '01/12/2024',
      endDate: '03/12/2025',
      engagementRate: 35.77,
      engagementRateTitle: 'Engagement Rate',
      engagementRateSubtitle: 'Your program is ahead of benchmarks!',
      memberList: 24206,
      engaged: 42.33,
      unableToReach: 2.83,
      optOut: 3.71,
    }
  ]
}
