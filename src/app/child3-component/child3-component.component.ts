import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-child3-component',
  templateUrl: './child3-component.component.html',
  styleUrls: ['./child3-component.component.css'],
  providers : []
})
export class Child3ComponentComponent implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedServiceService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Child3Component\'s value:  ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
