import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageHandlerComponent } from './image-handler/image-handler.component';

import { AddressHandlerComponent } from './address-handler/address-handler.component';
import PlaceResult = google.maps.places.PlaceResult;
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ThemePalette } from '@angular/material/core';

export interface CollectionTime {
  id: number;
  value: string;
  completed: boolean;
  backgroundColor: string;
}

@Component({
  selector: 'app-begin-state',
  templateUrl: './begin-state.component.html',
  styleUrls: ['./begin-state.component.css']
})
export class BeginStateComponent implements OnInit {

  descriptionFC: FormControl;
  @ViewChild(ImageHandlerComponent) imageHandler: ImageHandlerComponent;
  @ViewChild(AddressHandlerComponent) deliveryAddressHandler: AddressHandlerComponent;
  @ViewChild(AddressHandlerComponent) pickUpAddressHandler: AddressHandlerComponent;

  carryHelpFC: FormControl;
  phoneFC: FormControl;
  chosenCarryItem = 'one';
  checked = false;
  disabled = false;
  collectionTimes: CollectionTime[] = [
    {id: 8, value: '08-09', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 9, value: '09-10', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 10, value: '10-11', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 11, value: '11-12', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 12, value: '12-13', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 13, value: '13-14', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 14, value: '14-15', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 15, value: '15-16', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 16, value: '16-17', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 17, value: '17-18', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 18, value: '18-19', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 19, value: '19-20', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 20, value: '20-21', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 21, value: '21-22', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 22, value: '22-23', completed: false, backgroundColor: 'rgb(221, 218, 218)'},
    {id: 23, value: '23-24', completed: false, backgroundColor: 'rgb(221, 218, 218)'}
  ];
  timeList = {'today': JSON.parse(JSON.stringify(this.collectionTimes)), 'tomorrow': JSON.parse(JSON.stringify(this.collectionTimes))};
  selectedTimeListForToday = true;
  selectedTimes: Map<string, string[]> = new Map<string, []>();
  selectedTimeSlotNumber = 0;
  payment = 400000;
  paymentFC: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.createFormControls();
    this.selectedTimeListForToday = true;
    this.selectedTimes.set('today', []);
    this.selectedTimes.set('tomorrow', []);
  }

  createFormControls() {
    const phoneRegex = /^(7[02369])\s*(\d{4})\s*(\d{3})$/;
    this.descriptionFC = new FormControl('', [
      Validators.required,
      Validators.maxLength(30)
    ]);
    this.carryHelpFC = new FormControl(false);
    this.phoneFC = new FormControl('', [
      Validators.required,
      Validators.pattern(phoneRegex)]);
    this.paymentFC = new FormControl(Math.round(this.payment / 1000) + 'kr', [
        Validators.pattern(/^(\d{1,3})kr$/)
    ]);
  }

  onContiune() {
    console.log(this.chosenCarryItem);
  }

  pickupAddress(result: PlaceResult) {
    console.log('pickupAddress: ', result.formatted_address);

  }
  deliveryAddress(result: PlaceResult) {
    console.log('deliveryAddress: ', result.formatted_address);

  }

  onEndpointValChange(value: string) {
    if (value === 'today') {
      this.selectedTimeListForToday = true;
    }
    if (value === 'tomorrow') {
      this.selectedTimeListForToday = false;
    }
  }

  getTimeList() {
    let currentHour = 0;
    if (this.selectedTimeListForToday) {
      currentHour = new Date().getHours();
      return this.timeList['today'].filter(v => v.id >= currentHour);
    } else {
      return this.timeList['tomorrow'];
    }
  }
  updateSelectedTimeList(isSelected, value: string) {
    if (isSelected) {
      this.selectedTimeSlotNumber = this.selectedTimeSlotNumber + 1;
      if (this.selectedTimeListForToday) {
        this.selectedTimes.get('today').push(value);
      } else {
        this.selectedTimes.get('tomorrow').push(value);
      }
    } else {
      this.selectedTimeSlotNumber = this.selectedTimeSlotNumber - 1;
      if (this.selectedTimeListForToday) {
        const data = this.selectedTimes.get('today').filter(v => v !== value);
        this.selectedTimes.set('today', data);
      } else {
        const data = this.selectedTimes.get('tomorrow').filter(v => v !== value);
        this.selectedTimes.set('tomorrow', data);
      }
    }

    console.log(this.selectedTimes);
  }

  isDisabled(isSelected: boolean) {
    if (this.selectedTimeSlotNumber > 4) {
      if (isSelected) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  updateDisplayPoiont(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'kr';
    }
    return value;
  }

  updateCharge(event: any) {
    this.paymentFC.setValue(Math.round(event.value / 1000) + 'kr');
    this.payment = event.value;
  }

  updateSliderCharge(event: any) {
    if (!this.paymentFC.hasError('pattern')) {
      this.payment = event.target.value.replace('kr', '') * 1000;
    }
  }

  getCharge() {
    return Math.round(this.payment / 1000);
  }

}
