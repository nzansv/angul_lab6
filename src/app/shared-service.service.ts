import { Injectable } from '@angular/core';

@Injectable()
export class SharedServiceService {

  sharedValue: number;

  constructor(){
    console.log('Shared Service initialised');
    this.sharedValue = Math.random();
    console.log(this.sharedValue);
  }

  public  getSharedValue() {
    return this.sharedValue;
  }
}
