import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';



@Component({
  selector: 'app-child1-component',
  templateUrl: './child1-component.component.html',
  styleUrls: ['./child1-component.component.css'],
  providers : []
})
export class Child1ComponentComponent implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedServiceService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Child3Component\'s value:  ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
