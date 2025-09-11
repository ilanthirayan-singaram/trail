import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';  // ✅ fixed import
import { CommonService } from '../../common.service';

import { COMMON_IMPORTS } from '../../common/common.imports';

@Component({
  selector: 'app-testparticipation',
  standalone: true,
  imports: [...COMMON_IMPORTS,MatDialogModule],
  templateUrl: './testparticipation.component.html',
  styleUrls: ['./testparticipation.component.scss']
})
export class TestparticipationComponent implements OnInit {
  constructor(
    private router: Router,
    private common: CommonService,
    public dialogRef: MatDialogRef<TestparticipationComponent>   
  ) {}

  ngOnInit(): void {
    this.common.checkInitial();
  }

  partcipation(particip: any) {
    // console.log(particip.value)
  }

  closeModal() {
    this.dialogRef.close();
  }
}
