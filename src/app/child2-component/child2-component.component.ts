import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-child2-component',
  templateUrl: './child2-component.component.html',
  styleUrls: ['./child2-component.component.css'],
  providers : []
})
export class Child2ComponentComponent implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedServiceService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Child3Component\'s value:  ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
