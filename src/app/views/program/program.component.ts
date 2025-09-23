import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalHeaderComponent } from '../../components/global-header/global-header.component';
import { HeaderComponent } from '../../components/program-manager/header/header.component';
import { programData } from '../../services/programData';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { cascadeFigmaVariables } from '../../cascade';
import { NgIf } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { programManagerPrototypeImg } from '../../consts/consts';
import { memberData } from '../../services/memberData';
import { Button } from 'primeng/button';
import { MatIcon } from '@angular/material/icon';
import { ChartComponent } from '../../components/chart/chart.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-program',
  imports: [
    GlobalHeaderComponent,
    ChartComponent,
    HeaderComponent,
    TabMenuModule,
    ButtonModule,
    NgIf,
    TableComponent,
    DialogModule,
    Button,
    MatIcon,
  ],
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
})
export class ProgramComponent implements OnInit {
  items: MenuItem[] = [];
  public activeItem: MenuItem = { label: 'Overview' };
  programData = programData;
  title: string = '';
  currentProgram: any = {};
  cascade = cascadeFigmaVariables;
  programManagerScreen = programManagerPrototypeImg;
  memberList = memberData?.rows ?? [];
  chartData: any[] = [];
  chartKeys: any[] = [];
  outcomeRates: any[] = [];
  visible: boolean = false;
  dialogImageUrl: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title') ?? '';
    this.items = [
      { label: 'Overview' },
      { label: 'Insights' },
      { label: 'Member List' },
    ];
    this.activeItem = this.items[0];

    if (this.programData && this.title) {
      const foundProgram = this.programData.find(
        (program) => program.title === this.title,
      );
      if (foundProgram) {
        this.currentProgram = foundProgram;
      }
    }

    // Set dialog image URL based on current program
    this.setDialogImage();
    this.chartData = [
      this.currentProgram.memberList,
      this.currentProgram.engaged,
      this.currentProgram.didNotEngage,
    ];
    this.chartKeys = ['Total Members', 'Engaged', 'Did Not Engage'];
    
    // Outcome rates for secondary axis (percentages) - only if they exist
    const hasOutcomeRates = this.currentProgram.engagedOutcomeRate || this.currentProgram.unengagedOutcomeRate;
    
    if (hasOutcomeRates) {
      this.outcomeRates = [
        null, // No outcome rate for total members
        this.currentProgram.engagedOutcomeRate || null,
        this.currentProgram.unengagedOutcomeRate || null, // Unengaged outcome rate for did not engage
      ];
    } else {
      this.outcomeRates = []; // Empty array when no outcome data exists
    }
  }

  onActiveItemChange(event: MenuItem): void {
    this.activeItem = event;
  }

  onViewMembers(): void {
    this.activeItem = { label: 'Member List' };
  }
  setDialogImage() {
    // Set different images based on the current program
    // Default image for most programs
    const defaultImage = 'https://res.cloudinary.com/dbrkk86kt/image/upload/v1758585024/mpulse/program-manager-prototype/tracked-outcome-cleaned_qpktc7.png';
    
    // You can specify a different image for this current program
    // Replace 'YOUR_PROGRAM_TITLE' with the actual title of the program you want to change
    if (this.title === 'Post ED Visit Follow up with a PCP') {
      // Replace this URL with your new image URL
      this.dialogImageUrl = 'https://res.cloudinary.com/dbrkk86kt/image/upload/v1758585024/mpulse/program-manager-prototype/tracked-outcome-cleaned_qpktc7.png';
    } else {
      // Use default image for all other programs
      this.dialogImageUrl = defaultImage;
    }
  }

  showDialog() {
    this.visible = true;
    console.log('clicked');
  }
}
