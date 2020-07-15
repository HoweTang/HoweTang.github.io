(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-flex\">\n  <main-header></main-header>\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/address-handler/address-handler.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/address-handler/address-handler.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n  <mat-card>\n      <mat-card-title *ngIf=\"title\"><img src=\"{{ imgUrl }}\" width=\"24px\" height=\"24px\">{{ title }}</mat-card-title>\n  <mat-card-content>\n      <mat-form-field class=\"full-width\" [appearance]=\"appearance\">\n        <mat-label>{{addressLabelText}}</mat-label>\n        <input matInput [ngStyle]=\"inputAddressStyles()\"\n               [(ngModel)]=\"address\"\n               (change)=\"onQuery($event)\"\n               placeholder=\"{{placeholderText}}\"\n               class=\"form-control\"\n               #search\n               MatValidateAddress\n               required> \n              <img src=\"/assets/imgs/icon/location.png\"  height=\"24px\" matSuffix *ngIf=\"! this.address\">\n              <button mat-icon-button color=\"primary\" (click)=\"resetAddress()\" *ngIf=\"this.address\">\n                <mat-icon matSuffix>indeterminate_check_box</mat-icon>\n              </button>\n        <mat-error *ngIf=\"addressSearchControl.hasError('required')\">\n          {{requiredErrorText}}\n        </mat-error>\n        <mat-error *ngIf=\"addressSearchControl.hasError('validateAddress')\">\n          {{invalidErrorText}}\n        </mat-error>\n      </mat-form-field>\n      <section class=\"stair-section\">\n        <p>Does the item fit in the elevator or have to take stairs?</p>\n        <mat-radio-group [(ngModel)]=\"chosenstairs\">\n          <mat-radio-button class=\"stair-help\" checked value=\"elevator\" fxFlex=\"50%\">\n            <img width=\"50%\" src=\"/assets/imgs/icon/Elevator.png\"/>\n          </mat-radio-button>\n          <mat-radio-button class=\"stair-help\" value=\"stairs\" fxFlex=\"50%\">\n            <img width=\"50%\" src=\"/assets/imgs/icon/Stairs.png\"/>\n          </mat-radio-button>\n        </mat-radio-group>\n      </section>\n      <div class=\"floors-help\">\n        <mat-form-field appearance=\"outline\" fxFlex=\"50%\">\n          <mat-label>Floors/Unit</mat-label>  \n          <input\n            matInput\n            [formControl]=\"floors\"\n            >\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" style=\"padding-left: 1%;\" fxFlex=\"50%\">\n          <mat-label>Door pin code</mat-label>  \n          <input\n            matInput\n            [formControl]=\"doorPinCode\"\n            >\n        </mat-form-field>\n      </div>\n      </mat-card-content>\n   </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/begin-state.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/begin-state.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div id=\"ad-create\">\n        <div class=\"sub-item\">\n            <p>What would you like to move or deliver?</p>\n            <p>Description</p>\n            <mat-form-field  appearance=\"outline\" class=\"desc\">\n                <mat-label  class=\"place-holder\">Enter item description</mat-label>\n                <textarea\n                    matInput\n                    [formControl]=\"descriptionFC\"\n                    [maxLength]=300\n                    rows=\"4\"\n                ></textarea>\n                <mat-error *ngIf=\"descriptionFC.hasError('required')\">Oops! You have to describe your item.</mat-error>\n                <mat-error *ngIf=\"descriptionFC.hasError('maxlength')\">Oops! Max description length is 300.</mat-error>        \n            </mat-form-field>\n            <p>Pictures of the item</p> \n            <div class=\"images-wrapper\">\n                <image-handler\n                 #imageHandler\n                ></image-handler>\n            </div>\n        </div>\n        <div class=\"sub-item\">\n            <p>Do you need 1 or 2 people to help?</p>\n            <mat-card>\n                <mat-card-content>\n                  <section class=\"carry-section\">\n                    <mat-radio-group [(ngModel)]=\"chosenCarryItem\">\n                      <mat-radio-button class=\"carry-help\" checked value=\"one\">\n                        <img src=\"/assets/imgs/icon/run-1.png\" width=\"87px\">\n                      </mat-radio-button>\n                      <mat-radio-button class=\"carry-help\" value=\"two\">\n                        <img src=\"/assets/imgs/icon/run-2.png\">\n                      </mat-radio-button>\n                    </mat-radio-group>\n                  </section>\n                  \n                </mat-card-content>\n              </mat-card>\n        </div>\n        <div class=\"section-seperator-line mt-30\"></div>\n        <div class=\"sub-item\">  \n            <p>Collection & Delivery information</p>\n            <address-handler\n                title=\"Pick up address\"\n                type=\"address\"\n                appearance=\"outline\"\n                country=\"\"\n                addressLabelText=\"pick up address\"\n                (collectionAndDeleiveryInfo)=\"pickupAddress($event)\"\n                #PickUpAddressHandler\n            ></address-handler>\n            <div class=\"section-seperator-line mt-30\" style=\"margin-top: 15px; margin-bottom: 15px;\"></div>\n            <address-handler\n                imgUrl=\"/assets/imgs/icon/drop off@3x.png\"\n                title=\"Delivery address\"\n                type=\"address\"\n                appearance=\"outline\"\n                country=\"\"\n                addressLabelText=\"delivery address\"\n                #DeliveryAddressHandler\n                (collectionAndDeleiveryInfo)=\"deliveryAddress($event)\"\n            ></address-handler>\n        </div>\n        <div class=\"section-seperator-line mt-30\"></div>\n        <div class=\"sub-item\">  \n            <p>Collection time</p>\n            <span>When is the seller avaliable for pickup?</span>\n              <mat-button-toggle-group #group=\"matButtonToggleGroup\" (change)=\"onEndpointValChange(group.value)\" multiple=\"false\" >\n                <mat-button-toggle value=\"today\" fxFlex=\"50%\" class=\"light-button\" \n                 [ngStyle]=\"{'background-color': selectedTimeListForToday ? 'rgb(233, 189, 131)' : 'rgb(255, 255, 255)'}\">< Today</mat-button-toggle>\n                <mat-button-toggle value=\"tomorrow\" fxFlex=\"50%\" class=\"light-button\" \n                [ngStyle]=\"{'background-color': !selectedTimeListForToday ? 'rgb(233, 189, 131)' : 'rgb(255, 255, 255)'}\">Tomorrow ></mat-button-toggle>\n              </mat-button-toggle-group>\n              <section class=\"section-list\">\n                  <div class=\"time-checkbox\" *ngFor=\"let sectionTime of getTimeList()\" [ngStyle]='{\"background-color\" : \n                  sectionTime.completed ? \"rgb(236, 177, 50)\" : \"rgb(221, 218, 218)\"}'>\n                    <mat-checkbox\n                    [(ngModel)]=\"sectionTime.completed\"\n                    [disabled]=\"isDisabled(sectionTime.completed)\"\n                    (change)=\"updateSelectedTimeList(sectionTime.completed, sectionTime.value)\"\n                    >{{ sectionTime.value }}</mat-checkbox>\n                  </div>\n              </section>\n            <p id=\"time-slot-text\">({{ selectedTimeSlotNumber }} time slot selected)</p>\n            <p class=\"delivery-note mb-30 inner\" style=\"font-weight: 300;\">\n                *Delivery usually takes place within 2h after pick-up\n              </p>\n        </div>\n        <div class=\"section-seperator-line mt-30\"></div>\n        <div class=\"sub-item\">  \n            <p>How much would you like to pay?</p>\n            <span>Mooov uses algorithm between supply and demand to recommend prices according to the item size and travel distance. Prices like below will ge you quicker response.</span>\n            <div class=\"price-container\">\n                <mat-slider\n                thumbLabel\n                [displayWith]=\"updateDisplayPoiont\"\n                tickInterval=\"1000\"\n                min=\"1\"\n                max=\"990000\"\n                value=\"{{ payment }}\"\n                (change)=\"updateCharge($event)\"\n                ></mat-slider>\n                <input matInput \n                class=\"payment-label\"\n                [formControl]=\"paymentFC\"\n                (change)=\"updateSliderCharge($event)\"\n                fxFlex=\"15%\" required>\n            </div>\n            <mat-error *ngIf=\"paymentFC.hasError('pattern')\">Oops! invalid charge.</mat-error>   \n        </div>\n        <div class=\"section-seperator-line mt-30\" style=\"margin-top: 10px;\"></div>\n        <div class=\"sub-item\">  \n            <p>Your phone number</p>\n            <div id=\"buyer-phone\" class=\"phone-container mb-8 inner\" style=\"border-color: rgb(90, 85, 85);\">\n                <p class=\"country-code\" matPrefix>+46</p>\n                <div class=\"input-seperator\" matPrefix>|</div>\n                <mat-form-field class=\"phone-full-width\" appearance=\"fill\" style=\"color: black;\">\n                    <input type=\"tel\"\n                    matInput\n                    placeholder=\"Phone number\"\n                    [formControl]=\"phoneFC\"\n                    >\n                    <mat-icon matSuffix>smartphone</mat-icon>\n                  </mat-form-field>\n              </div>            \n              <mat-error *ngIf=\"phoneFC.hasError('required')\">Oops! You have to input your phone number.</mat-error>\n              <mat-error *ngIf=\"phoneFC.hasError('pattern')\">Oops, invalid phone number.</mat-error> \n              <p style=\"font-weight: 300; font-size: 10px;\">SMS with delivery details will be sent to you</p>\n        </div>\n        <div class=\"sub-item\">  \n           <p>Total amount</p>\n            <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n\n                <mat-grid-tile\n                    [colspan]=\"2\"\n                    [rowspan]=\"1\">\n                    Offer {{ getCharge() }} kr\n                </mat-grid-tile>\n                <mat-grid-tile\n                    [colspan]=\"2\"\n                    [rowspan]=\"2\"\n                    style=\"background : rgb(248, 205, 86)\">\n                    Total {{ getCharge() + 19 }} kr\n                </mat-grid-tile>\n                <mat-grid-tile\n                    [colspan]=\"2\"\n                    [rowspan]=\"1\">\n                    Admin fee 19 kr\n                </mat-grid-tile>\n              </mat-grid-list>\n        </div>\n        <div class=\"sub-item\">  \n            <section class=\"item-statement-section\">\n                <mat-checkbox class=\"item-statement\" [(ngModel)]=\"disabled\">\n                    I hereby acknowledge that what is being collected matches the image and descreption, \n                        does not contain toxec or harmful substance, \n                        and will be available at the time for collection or deliver.\n                    </mat-checkbox>\n            </section>\n        </div>\n        <div class=\"sub-item\">\n            <div class=\"example-button-row\">\n                <button mat-flat-button class=\"cta mb-30 inner\" style=\"background-color: rgb(248, 193, 42);\" (click)=\"onContiune()\" [disabled]=\"!disabled\">CONTINUE</button>\n            </div>\n        </div>\n    </div>    \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/image-handler/image-handler.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/image-handler/image-handler.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"imgs-container\">\n    <input class=\"img-input\" #imageUpload type=\"file\" accept=\"image/*\" multiple=\"\">\n    <mat-card class=\"ad-img-container\">  \n        <mat-card-content  class=\"ad-img-aspect\">  \n            <div class=\"ad-img-overlay visible\"  (click)=\"uploadImage()\" *ngIf=\"imgUrl.length < 4\">\n                <img src=\"/assets/imgs/plus.png\" alt=\"plus icon\" width=\"28\" height=\"28\" class=\"ad-img-plus\">\n            </div>\n            <div class=\"ad-img-overlay visible\" *ngIf=\"imgUrl.length > 3\">\n                <img [src]=\"imgUrl[3]\" class=\"ad-img\">\n                \n                <mat-icon  class=\"delete-img\" id=\"ad-img-4\" (click)=\"deleteImage(3)\">remove_circle_outline</mat-icon>\n            </div>\n        </mat-card-content>  \n    </mat-card>\n    <mat-card class=\"ad-img-container\">  \n        <mat-card-content  class=\"ad-img-aspect\">  \n            <div class=\"ad-img-overlay visible\">\n                <img src=\"/assets/imgs/icon/photo.png\" *ngIf=\"imgUrl[0] === undefined\">\n                <div *ngIf=\"imgUrl[0]\">\n                    <img [src]=\"imgUrl[0]\" class=\"ad-img\">\n                    <img [src]=\"imgUrl[0]\" class=\"ad-img\">\n                    <mat-icon  class=\"delete-img\" id=\"ad-img-1\" (click)=\"deleteImage(0)\">remove_circle_outline</mat-icon>\n                    \n                </div>\n            </div>\n            \n        </mat-card-content>  \n    </mat-card>\n    <mat-card class=\"ad-img-container\">  \n        <mat-card-content  class=\"ad-img-aspect\">  \n            <div class=\"ad-img-overlay visible\">\n                <img src=\"/assets/imgs/icon/photo.png\" *ngIf=\"imgUrl[1] === undefined\">\n                <div *ngIf=\"imgUrl[1]\">\n                    <img [src]=\"imgUrl[1]\" class=\"ad-img\">\n                    <mat-icon  class=\"delete-img\" id=\"ad-img-2\" (click)=\"deleteImage(1)\">remove_circle_outline</mat-icon>\n                </div>\n            </div>\n        </mat-card-content>  \n    </mat-card>\n    <mat-card class=\"ad-img-container\">  \n        <mat-card-content  class=\"ad-img-aspect\">  \n            <div class=\"ad-img-overlay visible\">\n                <img src=\"/assets/imgs/icon/photo.png\" *ngIf=\"imgUrl.length !== 3\">\n                <div *ngIf=\"imgUrl.length > 2\">\n                    <img [src]=\"imgUrl[2]\" class=\"ad-img\">\n                    <mat-icon  class=\"delete-img\" id=\"ad-img-3\" (click)=\"deleteImage(2)\">remove_circle_outline</mat-icon>\n                </div>\n            </div>\n        </mat-card-content>  \n    </mat-card>\n    <mat-error *ngIf=\"getMessage()\">{{ getMessage() }}</mat-error>  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-header/main-header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-header/main-header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"background-color: rgb(245, 170, 83);\">\n    <mat-toolbar-row  fxHide fxShow.gt-xs>\n        <div fxFlex fxLayout fxLayoutAlign=\"flex-head\">\n            <div class=\"center-child-vh\">\n              <img class=\"mooov-logo\" src=\"{{ mooovLogo }}\" alt=\"Mooov logo\">\n            </div>\n            <p class=\"tagline\">Speedy same day removals!</p>\n          </div>\n          <div fxFlex fxLayout fxLayoutAlign=\"flex-end\">\n            <img class=\"store-badge\" src=\"/assets/imgs/logo/appstore-badge.svg\">\n            <img class=\"store-badge\" src=\"/assets/imgs/logo/googleplaystore-badge.png\">\n          </div>\n    </mat-toolbar-row>\n    <mat-toolbar-row  fxShow fxHide.gt-xs>\n        <div fxFlex fxLayout fxLayoutAlign=\"center\">\n            <div class=\"center-child-vh\">\n              <img class=\"mooov-logo\" src=\"{{ mooovLogo }}\" alt=\"Mooov logo\">\n            </div>\n          </div>\n    </mat-toolbar-row>\n    <mat-toolbar-row  fxShow fxHide.gt-xs>\n        <div fxFlex fxLayout fxLayoutAlign=\"center\">\n            <p class=\"tagline\">Speedy same day removals!</p>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _begin_state_begin_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./begin-state/begin-state.component */ "./src/app/begin-state/begin-state.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'begin-state' },
    { path: 'begin-state', pathMatch: 'full', component: _begin_state_begin_state_component__WEBPACK_IMPORTED_MODULE_2__["BeginStateComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\nmain {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxlZ3VpaHRhXFxMZWFybmluZ1xcbW9vb3ZcXG1vb292LW5nLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0FDQ2hCOztBREVBO0VBQ0ksWUFBWTtBQ0NoQjs7QURFQTtFQUNJLGFBQWE7QUNDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4gXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG4gXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSIsIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mooov-ng-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-header/main-header.component */ "./src/app/main-header/main-header.component.ts");
/* harmony import */ var _begin_state_begin_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./begin-state/begin-state.component */ "./src/app/begin-state/begin-state.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-bar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _begin_state_image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./begin-state/image-handler/image-handler.component */ "./src/app/begin-state/image-handler/image-handler.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slide-toggle.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/radio.js");
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ "./node_modules/@angular-material-extensions/google-maps-autocomplete/__ivy_ngcc__/fesm5/angular-material-extensions-google-maps-autocomplete.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm5/ngx-markdown.js");
/* harmony import */ var _begin_state_address_handler_address_handler_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./begin-state/address-handler/address-handler.component */ "./src/app/begin-state/address-handler/address-handler.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button-toggle.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slider.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var googleMapsParams = {
    apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].GOOGLE_MAPS_API_KEY,
    libraries: ['geometry', 'places'],
    language: 'en',
    region: 'se'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_5__["MainHeaderComponent"],
                _begin_state_begin_state_component__WEBPACK_IMPORTED_MODULE_6__["BeginStateComponent"],
                _begin_state_image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_19__["ImageHandlerComponent"],
                _begin_state_address_handler_address_handler_component__WEBPACK_IMPORTED_MODULE_26__["AddressHandlerComponent"]
            ],
            imports: [
                ngx_markdown__WEBPACK_IMPORTED_MODULE_25__["MarkdownModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_23__["AgmCoreModule"].forRoot(googleMapsParams),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_28__["MatButtonToggleModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatGoogleMapsAutocompleteModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/begin-state/address-handler/address-handler.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/begin-state/address-handler/address-handler.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-card {\n  color: #080202;\n  box-shadow: none;\n  background-color: rgba(250, 250, 250, 0.596) !important;\n  padding: 0;\n}\n\n.container .mat-card mat-icon {\n  color: #3a36fa;\n}\n\n.container .mat-card .mat-card-title {\n  box-shadow: none;\n  font-weight: 600;\n  font-size: 16px;\n  color: #000;\n}\n\n.full-width {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW4tc3RhdGUvYWRkcmVzcy1oYW5kbGVyL0M6XFxVc2Vyc1xcZWd1aWh0YVxcTGVhcm5pbmdcXG1vb292XFxtb29vdi1uZy1hcHAvc3JjXFxhcHBcXGJlZ2luLXN0YXRlXFxhZGRyZXNzLWhhbmRsZXJcXGFkZHJlc3MtaGFuZGxlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmVnaW4tc3RhdGUvYWRkcmVzcy1oYW5kbGVyL2FkZHJlc3MtaGFuZGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1REFBdUQ7RUFDdkQsVUFBVTtBQ0NkOztBREVBO0VBQ0ksY0FBdUI7QUNDM0I7O0FERUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0FDQ2Y7O0FERUE7RUFDSSxXQUFXO0FDQ2YiLCJmaWxlIjoic3JjL2FwcC9iZWdpbi1zdGF0ZS9hZGRyZXNzLWhhbmRsZXIvYWRkcmVzcy1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICAgIGNvbG9yOiByZ2IoOCwgMiwgMik7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjU5NikgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLm1hdC1jYXJkIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoNTgsIDU0LCAyNTApO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5tYXQtY2FyZCAubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiIsIi5tYXQtY2FyZCB7XG4gIGNvbG9yOiAjMDgwMjAyO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNTk2KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGFpbmVyIC5tYXQtY2FyZCBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjM2EzNmZhO1xufVxuXG4uY29udGFpbmVyIC5tYXQtY2FyZCAubWF0LWNhcmQtdGl0bGUge1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/begin-state/address-handler/address-handler.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/begin-state/address-handler/address-handler.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddressHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressHandlerComponent", function() { return AddressHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ "./node_modules/@angular-material-extensions/google-maps-autocomplete/__ivy_ngcc__/fesm5/angular-material-extensions-google-maps-autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AddressHandlerComponent = /** @class */ (function () {
    function AddressHandlerComponent(titleService, mapsAPILoader, ngZone) {
        this.titleService = titleService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.addressLabelText = 'Address';
        this.placeholderText = 'Please enter the address';
        this.requiredErrorText = 'The address is required';
        this.invalidErrorText = 'The address is not valid';
        this.appearance = _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_2__["Appearance"].OUTLINE;
        this.country = 'se';
        this.autoCompleteOptions = {};
        this.imgUrl = '/assets/imgs/icon/pick up@3x.png';
        this.title = 'Pick up address';
        // tslint:disable-next-line:no-output-on-prefix
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNewPlaceResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addressValidator = new _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatValidateAddressDirective"]();
        this.collectionAndDeleiveryInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLocationSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chosenstairs = 'elevator';
    }
    AddressHandlerComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Home | @angular-material-extensions/google-maps-autocomplete');
        this.chosenstairs = 'elevator';
        this.addressValidator.subscribe(this.onNewPlaceResult);
        var options = {
            // types: ['address'],
            // componentRestrictions: {country: this.country},
            placeIdOnly: this.placeIdOnly,
            strictBounds: this.strictBounds,
            // types: this.types,
            type: this.type
        };
        // tslint:disable-next-line:no-unused-expression
        this.country ? options.componentRestrictions = { country: this.country } : null;
        // tslint:disable-next-line:no-unused-expression
        this.country ? options.types = this.types : null;
        this.autoCompleteOptions = Object.assign(this.autoCompleteOptions, options);
        this.initGoogleMapsAutocomplete();
        this.createFormControls();
    };
    AddressHandlerComponent.prototype.createFormControls = function () {
        this.floors = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.doorPinCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.addressSearchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: null }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            this.addressValidator.validate()
        ]));
    };
    AddressHandlerComponent.prototype.initGoogleMapsAutocomplete = function () {
        var _this = this;
        this.mapsAPILoader
            .load()
            .then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, _this.autoCompleteOptions);
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    if (!place.place_id || place.geometry === undefined || place.geometry === null) {
                        // place result is not valid
                        return;
                    }
                    else {
                        // show dialog to select a address from the input
                        // emit failed event
                    }
                    _this.address = place.formatted_address;
                    _this.collectionAndDeleiveryInfo.emit(place);
                    // console.log('onAutocompleteSelected -> ', place);
                    _this.onLocationSelected.emit({
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng()
                    });
                });
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    AddressHandlerComponent.prototype.onQuery = function (event) {
        // console.log('onChange()', event);
        this.onChange.emit(this.address);
    };
    AddressHandlerComponent.prototype.resetAddress = function () {
        this.address = null;
        this.addressSearchControl.updateValueAndValidity();
    };
    AddressHandlerComponent.prototype.inputAddressStyles = function () {
        return {
            'vertical-align': this.address ? 'middle' : '',
            'line-height': this.address ? '36px' : '',
            'width': this.address ? '90%' : '100%',
        };
    };
    AddressHandlerComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] },
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddressHandlerComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "addressLabelText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "placeholderText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "requiredErrorText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "invalidErrorText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddressHandlerComponent.prototype, "appearance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "address", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "country", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddressHandlerComponent.prototype, "placeIdOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddressHandlerComponent.prototype, "strictBounds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddressHandlerComponent.prototype, "types", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddressHandlerComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "autoCompleteOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "imgUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddressHandlerComponent.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddressHandlerComponent.prototype, "collectionAndDeleiveryInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddressHandlerComponent.prototype, "onLocationSelected", void 0);
    AddressHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'address-handler',
            template: __importDefault(__webpack_require__(/*! raw-loader!./address-handler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/address-handler/address-handler.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./address-handler.component.scss */ "./src/app/begin-state/address-handler/address-handler.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AddressHandlerComponent);
    return AddressHandlerComponent;
}());



/***/ }),

/***/ "./src/app/begin-state/begin-state.component.css":
/*!*******************************************************!*\
  !*** ./src/app/begin-state/begin-state.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 600px){\r\n    .container {\r\n        max-width: 495px;\r\n        width: 495px;\r\n        margin: auto auto 50px;\r\n        border-radius: 19px;\r\n        box-shadow: 0 2px 28px 0 rgba(0,0,0,.08);\r\n    }\r\n}\r\n\r\n\r\n#ad-create {\r\n    display: block;\r\n}\r\n\r\n\r\n#ad-create div.sub-item {\r\n    padding-top: 20px;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n\r\n#ad-create div.sub-item p {\r\n    font-family: Lato,sans-serif;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    color: #000;\r\n}\r\n\r\n\r\n#ad-create div.sub-item span{\r\n    font-weight: 300;\r\n    font-size: 8px;\r\n    color: #000;\r\n}\r\n\r\n\r\n.place-holder {\r\n    font-family: Lato,sans-serif;\r\n    font-weight: 300;\r\n    font-size: 15px;\r\n    color: rgb(63, 62, 62);\r\n}\r\n\r\n\r\n.desc {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.mat-slide-toggle-label {\r\n    width: 50%;\r\n}\r\n\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color: black;\r\n  }\r\n\r\n\r\n.sub-item .mat-card {\r\n    background: white;\r\n    color: rgb(8, 2, 2);\r\n    box-shadow: none;\r\n    padding: 0px;\r\n}\r\n\r\n\r\n::ng-deep  .mat-radio-outer-circle {\r\n    border-color: rgba(0,0,0,.54);\r\n}\r\n\r\n\r\n.carry-section .carry-help {\r\n    color: rgb(243, 142, 10);\r\n    width: 50%;\r\n}\r\n\r\n\r\n@media (min-width: 375px) {\r\n    .cta {\r\n        width: 80%;\r\n        height: 60px;\r\n        border-radius: 30px;\r\n        font-size: 22px;\r\n        font-weight: 900;\r\n    }\r\n}\r\n\r\n\r\n.cta {\r\n    width: 80%;\r\n    display: block;\r\n    height: 48px;\r\n    margin: 16px auto 30px;\r\n    border-radius: 30px;\r\n    border: none;\r\n    background-color: #2a91f5;\r\n    cursor: pointer;\r\n    outline: none;\r\n    -webkit-appearance: none;\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.section-seperator-line {\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: #eed231;\r\n}\r\n\r\n\r\nagm-map {\r\n    height: 400px;\r\n  }\r\n\r\n\r\n.autocomplete-container {\r\n    padding: 1rem 0 1rem 0;\r\n    width: 50%;\r\n}\r\n\r\n\r\n.sub-item .container {\r\n    width: 98%;\r\n}\r\n\r\n\r\n::ng-deep .mat-form-field-label {\r\n    color: rgba(33, 32, 32, 0.7);\r\n}\r\n\r\n\r\n::ng-deep input .mat-input-element {\r\n    color: rgba(33, 32, 32, 0.7);\r\n    border: rgba(33, 32, 32, 0.7);\r\n}\r\n\r\n\r\n::ng-deep .mat-tab-label .mat-tab-label-content {\r\n    color: black;\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n::ng-deep mat-ink-bar {\r\n    border-bottom: 0;\r\n}\r\n\r\n\r\n::ng-deep mat-tab {\r\n    width: 50%;\r\n}\r\n\r\n\r\n.mat-button-toggle-appearance-standard {\r\n    color: black;\r\n    background-color: white;\r\n}\r\n\r\n\r\n.light-button {\r\n    font-size: 110%;\r\n    border: 2px solid rgb(236, 177, 50) !important;\r\n    margin: 1px 1px 1px 1px;\r\n}\r\n\r\n\r\n::ng-deep .sub-item .section-list .time-checkbox .mat-checkbox-inner-container {\r\n    display: none!important; \r\n}\r\n\r\n\r\n.sub-item .section-list .time-checkbox {\r\n    width: 24.5% !important;\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin: 1px 1px 1px 1px;\r\n}\r\n\r\n\r\n.sub-item .section-list {\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n#time-slot-text {\r\n    margin-top: 10px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1.38;\r\n    text-align: center;\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n.delivery-note {\r\n    line-height: 1.69;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.phone-full-width {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.item-statement-section {\r\n    background-color: rgb(245, 241, 179);\r\n}\r\n\r\n\r\n.item-statement-section .item-statement {\r\n    margin-left: 5px;\r\n}\r\n\r\n\r\n::ng-deep .sub-item .item-statement-section .item-statement .mat-checkbox-layout {\r\n    white-space: normal;\r\n    width: 98%;\r\n}\r\n\r\n\r\n::ng-deep .sub-item .item-statement-section .item-statement .mat-checkbox-inner-container {\r\n    background-color: rgb(221, 147, 10);\r\n}\r\n\r\n\r\n::ng-deep .mat-form-field-prefix{\r\n    border: 1px solid rgb(236, 177, 50) !important;\r\n    height: 30px !important;\r\n}\r\n\r\n\r\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label {\r\n    margin-left: 5px;\r\n    color: black;\r\n}\r\n\r\n\r\n.phone-container {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    border: 1px solid #eceef2;\r\n    border-radius: 4px;\r\n}\r\n\r\n\r\n.country-code {\r\n    margin: 0 0 0 16px;\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n.input-seperator {\r\n    font-size: 28px;\r\n    padding: 0;\r\n    font-weight: 300;\r\n    color: #cecece;\r\n    margin: -5px 8px 0 12px;\r\n}\r\n\r\n\r\n#resend-phone, .phone {\r\n    border: none;\r\n    outline: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n::ng-deep .mat-form-field-underline {\r\n /*change color of underline*/\r\n  background-color:  rgb(255, 255, 255) !important;\r\n}\r\n\r\n\r\n::ng-deep .mat-form-field-ripple {\r\n /*change color of underline when focused*/\r\n background-color: rgb(255, 255, 255) !important;;\r\n}\r\n\r\n\r\n::-moz-placeholder {\r\n    color: rgb(10, 10, 10);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n\r\n::-ms-input-placeholder {\r\n    color: rgb(10, 10, 10);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n\r\n::placeholder {\r\n    color: rgb(10, 10, 10);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n   color: rgb(10, 10, 10);\r\n  }\r\n\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n   color: rgb(10, 10, 10);\r\n  }\r\n\r\n\r\n.price-container {\r\n      width: 100%;\r\n  }\r\n\r\n\r\n.mat-slider-horizontal {\r\n      width: 80%;\r\n  }\r\n\r\n\r\n::ng-deep .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb, .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\r\n      background-color: #ffd740;\r\n  }\r\n\r\n\r\n::ng-deep .mat-slider-thumb {\r\n      width: 25px !important;\r\n      height: 25px !important;\r\n      bottom: -36px !important;\r\n  }\r\n\r\n\r\n::ng-deep .mat-slider-thumb-label-text {\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n\r\n::ng-deep .mat-slider-horizontal .mat-slider-thumb-label {\r\n    top: -8px !important;\r\n}\r\n\r\n\r\nmat-slider ::ng-deep .mat-slider-wrapper ::ng-deep .mat-slider-track-wrapper ::ng-deep .mat-slider-track-background{\r\n    background-color: white; \r\n}\r\n\r\n\r\nmat-slider ::ng-deep .mat-slider-wrapper ::ng-deep .mat-slider-track-wrapper ::ng-deep .mat-slider-track-fill{\r\n    background-color: white; \r\n}\r\n\r\n\r\nmat-slider {\r\n    background-image: url(/assets/imgs/icon/furnitures.png);\r\n    background-size: 100% 98px;\r\n    height: 98px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.payment-label {\r\n    margin-top: 5%;\r\n    height: 50px;\r\n    bottom: 30px;\r\n    margin-left: 2%;\r\n    border: 2px solid rgb(236, 177, 50); \r\n    text-align: center;\r\n}\r\n\r\n\r\n.sub-item p .total-amount {\r\n    font-weight: 200;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW4tc3RhdGUvYmVnaW4tc3RhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHdDQUF3QztJQUM1QztBQUNKOzs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztBQUNmOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztBQUNmOzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtBQUNkOzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksYUFBYTtFQUNmOzs7QUFFRjtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOENBQThDO0lBQzlDLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOzs7QUFFQTtJQUNJLDhDQUE4QztJQUM5Qyx1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7OztBQUVBO0lBRUksYUFBYTtJQUViLDJCQUEyQjtJQUUzQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7QUFDZDs7O0FBR0E7Q0FDQyw0QkFBNEI7RUFDM0IsZ0RBQWdEO0FBQ2xEOzs7QUFFQTtDQUNDLHlDQUF5QztDQUN6QywrQ0FBK0M7QUFDaEQ7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVUsRUFBRSxZQUFZO0VBQzFCOzs7QUFIRjtJQUNJLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsWUFBWTtFQUMxQjs7O0FBSEY7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVSxFQUFFLFlBQVk7RUFDMUI7OztBQUVGLHlCQUF5Qiw0QkFBNEI7R0FDbEQsc0JBQXNCO0VBQ3ZCOzs7QUFFRiwwQkFBMEIsbUJBQW1CO0dBQzFDLHNCQUFzQjtFQUN2Qjs7O0FBRUY7TUFDTSxXQUFXO0VBQ2Y7OztBQUNGO01BQ00sVUFBVTtFQUNkOzs7QUFFRjtNQUNNLHlCQUF5QjtFQUM3Qjs7O0FBRUY7TUFDTSxzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHdCQUF3QjtFQUM1Qjs7O0FBRUY7SUFDSSxpREFBaUQ7SUFDakQsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSx1REFBdUQ7SUFDdkQsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYmVnaW4tc3RhdGUvYmVnaW4tc3RhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ5NXB4O1xyXG4gICAgICAgIHdpZHRoOiA0OTVweDtcclxuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMjhweCAwIHJnYmEoMCwwLDAsLjA4KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiNhZC1jcmVhdGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbiNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG8sc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuXHJcbiNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHNwYW57XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnBsYWNlLWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogTGF0byxzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiByZ2IoNjMsIDYyLCA2Mik7XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LXNsaWRlLXRvZ2dsZS1sYWJlbCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuLnN1Yi1pdGVtIC5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZ2IoOCwgMiwgMik7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbjo6bmctZGVlcCAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbn1cclxuXHJcbi5jYXJyeS1zZWN0aW9uIC5jYXJyeS1oZWxwIHtcclxuICAgIGNvbG9yOiByZ2IoMjQzLCAxNDIsIDEwKTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkge1xyXG4gICAgLmN0YSB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmN0YSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW46IDE2cHggYXV0byAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTkxZjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2VjdGlvbi1zZXBlcmF0b3ItbGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZDIzMTtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5zdWItaXRlbSAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6IHJnYmEoMzMsIDMyLCAzMiwgMC43KTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGlucHV0IC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICBjb2xvcjogcmdiYSgzMywgMzIsIDMyLCAwLjcpO1xyXG4gICAgYm9yZGVyOiByZ2JhKDMzLCAzMiwgMzIsIDAuNyk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIG1hdC1pbmstYmFyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBtYXQtdGFiIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saWdodC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTc3LCA1MCkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMXB4IDFweCAxcHggMXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnN1Yi1pdGVtIC5zZWN0aW9uLWxpc3QgLnRpbWUtY2hlY2tib3ggLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4uc3ViLWl0ZW0gLnNlY3Rpb24tbGlzdCAudGltZS1jaGVja2JveCB7XHJcbiAgICB3aWR0aDogMjQuNSUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMXB4IDFweCAxcHggMXB4O1xyXG59XHJcblxyXG4uc3ViLWl0ZW0gLnNlY3Rpb24tbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jdGltZS1zbG90LXRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5kZWxpdmVyeS1ub3RlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGhvbmUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLml0ZW0tc3RhdGVtZW50LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQxLCAxNzkpO1xyXG59XHJcblxyXG4uaXRlbS1zdGF0ZW1lbnQtc2VjdGlvbiAuaXRlbS1zdGF0ZW1lbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdWItaXRlbSAuaXRlbS1zdGF0ZW1lbnQtc2VjdGlvbiAuaXRlbS1zdGF0ZW1lbnQgLm1hdC1jaGVja2JveC1sYXlvdXQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3ViLWl0ZW0gLml0ZW0tc3RhdGVtZW50LXNlY3Rpb24gLml0ZW0tc3RhdGVtZW50IC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDE0NywgMTApO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzYsIDE3NywgNTApICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBob25lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWVmMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNvdW50cnktY29kZSB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1zZXBlcmF0b3Ige1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogI2NlY2VjZTtcclxuICAgIG1hcmdpbjogLTVweCA4cHggMCAxMnB4O1xyXG59XHJcblxyXG4jcmVzZW5kLXBob25lLCAucGhvbmUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxufSBcclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7O1xyXG59IFxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gIH1cclxuICBcclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XHJcbiAgfVxyXG4gIFxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XHJcbiAgfVxyXG5cclxuLnByaWNlLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNzQwO1xyXG4gIH1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci10aHVtYiB7XHJcbiAgICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3R0b206IC0zNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgdG9wOiAtOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1zbGlkZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRyYWNrLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXHJcbn1cclxubWF0LXNsaWRlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxufVxyXG5cclxubWF0LXNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2ljb24vZnVybml0dXJlcy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDk4cHg7XHJcbiAgICBoZWlnaHQ6IDk4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wYXltZW50LWxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIzNiwgMTc3LCA1MCk7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLWl0ZW0gcCAudG90YWwtYW1vdW50IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/begin-state/begin-state.component.ts":
/*!******************************************************!*\
  !*** ./src/app/begin-state/begin-state.component.ts ***!
  \******************************************************/
/*! exports provided: BeginStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginStateComponent", function() { return BeginStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-handler/image-handler.component */ "./src/app/begin-state/image-handler/image-handler.component.ts");
/* harmony import */ var _address_handler_address_handler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-handler/address-handler.component */ "./src/app/begin-state/address-handler/address-handler.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var BeginStateComponent = /** @class */ (function () {
    function BeginStateComponent() {
        this.chosenCarryItem = 'one';
        this.checked = false;
        this.disabled = false;
        this.collectionTimes = [
            { id: 8, value: '08-09', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 9, value: '09-10', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 10, value: '10-11', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 11, value: '11-12', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 12, value: '12-13', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 13, value: '13-14', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 14, value: '14-15', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 15, value: '15-16', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 16, value: '16-17', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 17, value: '17-18', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 18, value: '18-19', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 19, value: '19-20', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 20, value: '20-21', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 21, value: '21-22', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 22, value: '22-23', completed: false, backgroundColor: 'rgb(221, 218, 218)' },
            { id: 23, value: '23-24', completed: false, backgroundColor: 'rgb(221, 218, 218)' }
        ];
        this.timeList = { 'today': JSON.parse(JSON.stringify(this.collectionTimes)), 'tomorrow': JSON.parse(JSON.stringify(this.collectionTimes)) };
        this.selectedTimeListForToday = true;
        this.selectedTimes = new Map();
        this.selectedTimeSlotNumber = 0;
        this.payment = 400000;
    }
    BeginStateComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.selectedTimeListForToday = true;
        this.selectedTimes.set('today', []);
        this.selectedTimes.set('tomorrow', []);
    };
    BeginStateComponent.prototype.createFormControls = function () {
        var phoneRegex = /^(7[02369])\s*(\d{4})\s*(\d{3})$/;
        this.descriptionFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)
        ]);
        this.carryHelpFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.phoneFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(phoneRegex)
        ]);
        this.paymentFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Math.round(this.payment / 1000) + 'kr', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(\d{1,3})kr$/)
        ]);
    };
    BeginStateComponent.prototype.onContiune = function () {
        console.log(this.chosenCarryItem);
    };
    BeginStateComponent.prototype.pickupAddress = function (result) {
        console.log('pickupAddress: ', result.formatted_address);
    };
    BeginStateComponent.prototype.deliveryAddress = function (result) {
        console.log('deliveryAddress: ', result.formatted_address);
    };
    BeginStateComponent.prototype.onEndpointValChange = function (value) {
        if (value === 'today') {
            this.selectedTimeListForToday = true;
        }
        if (value === 'tomorrow') {
            this.selectedTimeListForToday = false;
        }
    };
    BeginStateComponent.prototype.getTimeList = function () {
        var currentHour = 0;
        if (this.selectedTimeListForToday) {
            currentHour = new Date().getHours();
            return this.timeList['today'].filter(function (v) { return v.id >= currentHour; });
        }
        else {
            return this.timeList['tomorrow'];
        }
    };
    BeginStateComponent.prototype.updateSelectedTimeList = function (isSelected, value) {
        if (isSelected) {
            this.selectedTimeSlotNumber = this.selectedTimeSlotNumber + 1;
            if (this.selectedTimeListForToday) {
                this.selectedTimes.get('today').push(value);
            }
            else {
                this.selectedTimes.get('tomorrow').push(value);
            }
        }
        else {
            this.selectedTimeSlotNumber = this.selectedTimeSlotNumber - 1;
            if (this.selectedTimeListForToday) {
                var data = this.selectedTimes.get('today').filter(function (v) { return v !== value; });
                this.selectedTimes.set('today', data);
            }
            else {
                var data = this.selectedTimes.get('tomorrow').filter(function (v) { return v !== value; });
                this.selectedTimes.set('tomorrow', data);
            }
        }
        console.log(this.selectedTimes);
    };
    BeginStateComponent.prototype.isDisabled = function (isSelected) {
        if (this.selectedTimeSlotNumber > 4) {
            if (isSelected) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    BeginStateComponent.prototype.updateDisplayPoiont = function (value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'kr';
        }
        return value;
    };
    BeginStateComponent.prototype.updateCharge = function (event) {
        this.paymentFC.setValue(Math.round(event.value / 1000) + 'kr');
        this.payment = event.value;
    };
    BeginStateComponent.prototype.updateSliderCharge = function (event) {
        if (!this.paymentFC.hasError('pattern')) {
            this.payment = event.target.value.replace('kr', '') * 1000;
        }
    };
    BeginStateComponent.prototype.getCharge = function () {
        return Math.round(this.payment / 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_2__["ImageHandlerComponent"]),
        __metadata("design:type", _image_handler_image_handler_component__WEBPACK_IMPORTED_MODULE_2__["ImageHandlerComponent"])
    ], BeginStateComponent.prototype, "imageHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_address_handler_address_handler_component__WEBPACK_IMPORTED_MODULE_3__["AddressHandlerComponent"]),
        __metadata("design:type", _address_handler_address_handler_component__WEBPACK_IMPORTED_MODULE_3__["AddressHandlerComponent"])
    ], BeginStateComponent.prototype, "deliveryAddressHandler", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_address_handler_address_handler_component__WEBPACK_IMPORTED_MODULE_3__["AddressHandlerComponent"]),
        __metadata("design:type", _address_handler_address_handler_component__WEBPACK_IMPORTED_MODULE_3__["AddressHandlerComponent"])
    ], BeginStateComponent.prototype, "pickUpAddressHandler", void 0);
    BeginStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-begin-state',
            template: __importDefault(__webpack_require__(/*! raw-loader!./begin-state.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/begin-state.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./begin-state.component.css */ "./src/app/begin-state/begin-state.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BeginStateComponent);
    return BeginStateComponent;
}());



/***/ }),

/***/ "./src/app/begin-state/image-handler/image-handler.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/begin-state/image-handler/image-handler.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n .imgs-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-left: -5px;\r\n    margin-right: -5px;\r\n}\r\n\r\n.imgs-container .img-input {\r\n    display: none;\r\n}\r\n\r\n.imgs-container .ad-img-container {\r\n    flex-basis: 25%;\r\n    width: 25%;\r\n    float: left;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    -webkit-tap-highlight-color: transparent;\r\n    box-shadow: none;\r\n}\r\n\r\n.ad-img-aspect {\r\n    width: 100%;\r\n    height: 0;\r\n    position: relative;\r\n    padding-top: 100%;\r\n}\r\n\r\n.ad-img, .ad-img-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.ad-img-overlay.visible {\r\n    visibility: visible;\r\n}\r\n\r\n.ad-img-overlay {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    z-index: 3;\r\n    border-radius: 10px;\r\n    border: 1px solid #ebebeb;\r\n    font-size: 30px;\r\n    font-weight: 900;\r\n    color: rgb(238, 208, 39);\r\n    visibility: hidden;\r\n}\r\n\r\n.imgs-container .mat-card {\r\n    background: white;\r\n    color: white;\r\n}\r\n\r\n.ad-img-spinner {\r\n    display: none;\r\n}\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n.ad-img-clear {\r\n    position: absolute;\r\n    top: 3px;\r\n    right: 3px;\r\n    z-index: 2;\r\n    visibility: hidden;\r\n}\r\n\r\n.ad-img-overlay .ad-img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.delete-img {\r\n    color: crimson;\r\n    position: absolute;\r\n    top: 3px;\r\n    right: 3px;\r\n    z-index: 2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW4tc3RhdGUvaW1hZ2UtaGFuZGxlci9pbWFnZS1oYW5kbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0lBQ0csYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFFSSxhQUFhO0lBRWIsdUJBQXVCO0lBR3ZCLHNCQUFzQjtJQUV0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9iZWdpbi1zdGF0ZS9pbWFnZS1oYW5kbGVyL2ltYWdlLWhhbmRsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gLmltZ3MtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTVweDtcclxufVxyXG5cclxuLmltZ3MtY29udGFpbmVyIC5pbWctaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltZ3MtY29udGFpbmVyIC5hZC1pbWctY29udGFpbmVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDI1JTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmFkLWltZy1hc3BlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwJTtcclxufVxyXG5cclxuLmFkLWltZywgLmFkLWltZy1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmFkLWltZy1vdmVybGF5LnZpc2libGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmFkLWltZy1vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiByZ2IoMjM4LCAyMDgsIDM5KTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmltZ3MtY29udGFpbmVyIC5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkLWltZy1zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmFkLWltZy1jbGVhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIHJpZ2h0OiAzcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uYWQtaW1nLW92ZXJsYXkgLmFkLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uZGVsZXRlLWltZyB7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgcmlnaHQ6IDNweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/begin-state/image-handler/image-handler.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/begin-state/image-handler/image-handler.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImageHandlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageHandlerComponent", function() { return ImageHandlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_service_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/upload.service */ "./src/app/service/upload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var ImageHandlerComponent = /** @class */ (function () {
    function ImageHandlerComponent(uploadService) {
        this.uploadService = uploadService;
        this.imgUrl = new Array();
        this.inputImgsNum = 0;
    }
    ImageHandlerComponent.prototype.ngOnInit = function () {
    };
    ImageHandlerComponent.prototype.uploadImage = function () {
        var _this = this;
        var fileUpload = this.imageUpload.nativeElement;
        fileUpload.onchange = function () {
            _this.inputImgsNum = _this.inputImgsNum + fileUpload.files.length;
            if (_this.inputImgsNum < 5) {
                var imagePath = fileUpload.files;
                var _loop_1 = function (index) {
                    var reader = new FileReader();
                    reader.readAsDataURL(fileUpload.files[index]);
                    reader.onload = function (event) {
                        if (_this.imgUrl[index] === undefined) {
                            _this.imgUrl[index] = event.target.result;
                        }
                        else {
                            _this.imgUrl.push(event.target.result);
                        }
                    };
                };
                for (var index = 0; index < fileUpload.files.length; index++) {
                    _loop_1(index);
                }
                //this.uploadFiles();  
            }
            ;
        };
        fileUpload.click();
    };
    ImageHandlerComponent.prototype.uploadFile = function (file) {
        var formData = new FormData();
        formData.append('file', file.data);
        file.inProgress = true;
        this.uploadService.upload(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress:
                    file.progress = Math.round(event.loaded * 100 / event.total);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response:
                    return event;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            file.inProgress = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(file.data.name + " upload failed.");
        })).subscribe(function (event) {
            if (typeof (event) === 'object') {
                console.log(event.body);
            }
        });
    };
    ImageHandlerComponent.prototype.uploadFiles = function () {
        var _this = this;
        this.imageUpload.nativeElement.value = '';
        this.imgUrl.forEach(function (file) {
            _this.uploadFile(file);
        });
    };
    ImageHandlerComponent.prototype.getMessage = function () {
        if (this.inputImgsNum === 0) {
            return "Oops! Pictures of the Item must be at least one image.";
        }
        if (this.inputImgsNum > 4) {
            return "Please keep up to 4 images that best describe your item.";
        }
    };
    ImageHandlerComponent.prototype.deleteImage = function (num) {
        this.imgUrl.splice(num, 1);
        this.inputImgsNum = this.inputImgsNum - 1;
        console.log("length : " + this.imgUrl.length);
    };
    ImageHandlerComponent.ctorParameters = function () { return [
        { type: src_app_service_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageUpload', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImageHandlerComponent.prototype, "imageUpload", void 0);
    ImageHandlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-handler',
            template: __importDefault(__webpack_require__(/*! raw-loader!./image-handler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/image-handler/image-handler.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./image-handler.component.css */ "./src/app/begin-state/image-handler/image-handler.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_service_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"]])
    ], ImageHandlerComponent);
    return ImageHandlerComponent;
}());



/***/ }),

/***/ "./src/app/main-header/main-header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main-header/main-header.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n \r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n \r\n.navigation-items{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n \r\nmat-toolbar{\r\n    border-radius: 3px;\r\n    margin-bottom: 30px;\r\n}\r\n \r\n@media(max-width: 959px){\r\n    mat-toolbar{\r\n        border-radius: 0px;\r\n        margin-bottom: 30px;\r\n    }\r\n}\r\n \r\n@media (max-width: 599px){\r\n    .mat-toolbar-row, .mat-toolbar-single-row {\r\n        height: 36px;\r\n    }\r\n}\r\n \r\n@media (min-width: 600px){\r\n    img.mooov-logo {\r\n        width: 110px;\r\n        position: relative;\r\n    }\r\n}\r\n \r\n@media (min-width: 600px){\r\n     p.tagline {\r\n        border-left: 1px solid rgb(7, 1, 1);\r\n        margin: 11px 0 11px 30px;\r\n        padding: 11px 0 11px 29px;\r\n    }\r\n}\r\n \r\n.center-child-vh {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n \r\np.tagline {\r\n    margin-top: 14px;\r\n    text-align: center;\r\n    color:  rgb(7, 1, 1);\r\n}\r\n \r\np.tagline {\r\n    font-size: 18px;\r\n}\r\n \r\ndiv.section-desc a, p {\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n \r\np {\r\n    font-family: Lato,sans-serif;\r\n    color: #000;\r\n}\r\n \r\nimg.mooov-logo {\r\n    height:  34px;\r\n    position: relative;\r\n}\r\n \r\nimg.store-badge {\r\n    height: 38px;\r\n}\r\n \r\nimg {\r\n    border-style: none;\r\n}\r\n \r\n.mooov-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0tBQ0s7UUFDRyxtQ0FBbUM7UUFDbkMsd0JBQXdCO1FBQ3hCLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBRUksYUFBYTtJQUViLG1CQUFtQjtJQUVuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4gXHJcbmE6aG92ZXIsIGE6YWN0aXZle1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4gXHJcbi5uYXZpZ2F0aW9uLWl0ZW1ze1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4gXHJcbm1hdC10b29sYmFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4gXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KXtcclxuICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpe1xyXG4gICAgLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgICBpbWcubW9vb3YtbG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAgICBwLnRhZ2xpbmUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDcsIDEsIDEpO1xyXG4gICAgICAgIG1hcmdpbjogMTFweCAwIDExcHggMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4IDAgMTFweCAyOXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2VudGVyLWNoaWxkLXZoIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnAudGFnbGluZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICByZ2IoNywgMSwgMSk7XHJcbn1cclxucC50YWdsaW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5kaXYuc2VjdGlvbi1kZXNjIGEsIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogTGF0byxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmltZy5tb29vdi1sb2dvIHtcclxuICAgIGhlaWdodDogIDM0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmltZy5zdG9yZS1iYWRnZSB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm1vb292LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/main-header/main-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-header/main-header.component.ts ***!
  \******************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent() {
        this.mooovLogo = '/assets/imgs/logo/tori-mooov-trans.png';
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
    };
    MainHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'main-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-header/main-header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./main-header.component.css */ "./src/app/main-header/main-header.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/service/upload.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/upload.service.ts ***!
  \*******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = "https://file.io/";
    }
    UploadService.prototype.upload = function (formData) {
        return this.httpClient.post(this.SERVER_URL, formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    UploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    GOOGLE_MAPS_API_KEY: 'AIzaSyDYKmJ94HSxRolBxEcmPs6zC5m09jzkvgM'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eguihta\Learning\mooov\mooov-ng-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map