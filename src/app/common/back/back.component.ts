import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-back',
  standalone: true,  
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {

  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }

  goBack(){
    this.common.getPreviousUrl();
  }

}
