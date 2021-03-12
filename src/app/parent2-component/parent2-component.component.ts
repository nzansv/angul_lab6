import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';
@Component({
  selector: 'app-parent2-component',
  templateUrl: './parent2-component.component.html',
  styleUrls: ['./parent2-component.component.css'],
  providers : [SharedServiceService]
})
export class Parent2ComponentComponent implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedServiceService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Parent2Component\'s value:  ' + this.sharedValue.toString());
  }

  ngOnInit(): void {
  }

}
