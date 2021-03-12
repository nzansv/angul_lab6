import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-parent1-component',
  templateUrl: './parent1-component.component.html',
  styleUrls: ['./parent1-component.component.css'],
  providers : [ SharedServiceService]
})
export class Parent1ComponentComponent implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedServiceService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Parent1Component\'s value:  ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
