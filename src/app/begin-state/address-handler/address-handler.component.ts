import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location, Appearance, MatValidateAddressDirective } from '@angular-material-extensions/google-maps-autocomplete';
import { FormControl, Validators } from '@angular/forms';
import AutocompleteOptions = google.maps.places.AutocompleteOptions;
import PlaceResult = google.maps.places.PlaceResult;
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'address-handler',
  templateUrl: './address-handler.component.html',
  styleUrls: ['./address-handler.component.scss']
})
export class AddressHandlerComponent implements OnInit {

  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;

  @Input()
  addressLabelText = 'Address';

  @Input()
  placeholderText = 'Please enter the address';

  @Input()
  requiredErrorText = 'The address is required';

  @Input()
  invalidErrorText = 'The address is not valid';

  @Input()
  appearance: string | Appearance = Appearance.OUTLINE;

  @Input()
  address: PlaceResult | string;

  @Input()
  country: string | string[] = 'se';

  @Input()
  placeIdOnly?: boolean;

  @Input()
  strictBounds?: boolean;

  @Input()
  types?: string[];


  @Input()
  type?: string;

  @Input()
  autoCompleteOptions: AutocompleteOptions = {};

  @Input()
  imgUrl = '/assets/imgs/icon/pick up@3x.png';

  @Input()
  title = 'Pick up address';

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChange: EventEmitter<PlaceResult | string | null> = new EventEmitter<PlaceResult | string | null>();

  private onNewPlaceResult: EventEmitter<any> = new EventEmitter();
  private addressValidator: MatValidateAddressDirective = new MatValidateAddressDirective();

  public addressSearchControl: FormControl;

  @Output() collectionAndDeleiveryInfo: EventEmitter<PlaceResult> = new EventEmitter<PlaceResult>();
  @Output() onLocationSelected: EventEmitter<Location> = new EventEmitter<Location>();

  chosenstairs = 'elevator';
  floors: FormControl;
  doorPinCode: FormControl;
  constructor(private titleService: Title,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) { }

  ngOnInit() {
    this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');
    this.chosenstairs = 'elevator';
    this.addressValidator.subscribe(this.onNewPlaceResult);

    const options: AutocompleteOptions = {
      // types: ['address'],
      // componentRestrictions: {country: this.country},
      placeIdOnly: this.placeIdOnly,
      strictBounds: this.strictBounds,
      // types: this.types,
      type: this.type
    };

    // tslint:disable-next-line:no-unused-expression
    this.country ? options.componentRestrictions = {country: this.country} : null;
    // tslint:disable-next-line:no-unused-expression
    this.country ? options.types = this.types : null;

    this.autoCompleteOptions = Object.assign(this.autoCompleteOptions, options);
    this.initGoogleMapsAutocomplete();
    this.createFormControls();

  }

  createFormControls() {
    this.floors = new FormControl('');
    this.doorPinCode = new FormControl('');
    this.addressSearchControl = new FormControl({value: null}, Validators.compose([
      Validators.required,
      this.addressValidator.validate()])
    );
  }

  public initGoogleMapsAutocomplete() {
    this.mapsAPILoader
      .load()
      .then(() => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, this.autoCompleteOptions);
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            // get the place result
            const place: PlaceResult = autocomplete.getPlace();

            if (!place.place_id || place.geometry === undefined || place.geometry === null) {
              // place result is not valid
              return;
            } else {
              // show dialog to select a address from the input
              // emit failed event
            }
            this.address = place.formatted_address;
            this.collectionAndDeleiveryInfo.emit(place);
            // console.log('onAutocompleteSelected -> ', place);
            this.onLocationSelected.emit(
              {
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
              });
          });
        });
      })
      .catch((err) => console.log(err));
  }

  public onQuery(event: any) {
    // console.log('onChange()', event);
    this.onChange.emit(this.address);
  }

  resetAddress() {
    this.address = null;
    this.addressSearchControl.updateValueAndValidity();
  }

  inputAddressStyles() {
    return {
      'vertical-align': this.address ? 'middle' : '',
      'line-height': this.address ? '36px' : '',
      'width': this.address ? '90%' : '100%',
    };
  }
}
