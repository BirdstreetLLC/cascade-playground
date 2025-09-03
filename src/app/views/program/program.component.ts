import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalHeaderComponent } from '../../components/global-header/global-header.component';
import { HeaderComponent } from '../../components/program-manager/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { programData } from '../../services/programData';

@Component({
  selector: 'app-program',
  imports: [GlobalHeaderComponent, HeaderComponent, CardComponent, NgFor],
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  programData = programData;
  title: string = '';
  currentProgram: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title') ?? "";

    if (this.programData && this.title) {
      const foundProgram = this.programData.find((program) => program.title === this.title);
      if (foundProgram) {
        this.currentProgram = foundProgram;
      }
    }

  }
}
