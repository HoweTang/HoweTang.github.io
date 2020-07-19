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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n  <mat-card>\n  <mat-card-content>\n    <div id=\"address-handler\">\n      <div id=\"address-handler-img\">\n        <img src=\"{{ imgUrl }}\" width=\"25px\" height=\"25px\">\n      </div>\n      <div class=\"address-handler-info\">\n        <mat-form-field class=\"full-width\" [appearance]=\"appearance\">\n          <mat-label>{{ addressLabelText }}</mat-label>\n          <input matInput [ngStyle]=\"inputAddressStyles()\"\n                 [(ngModel)]=\"address\"\n                 (change)=\"onQuery($event)\"\n                 placeholder=\"{{placeholderText}}\"\n                 class=\"form-control\"\n                 #search\n                 MatValidateAddress\n                 required> \n                <img src=\"/assets/imgs/icon/location.png\"  height=\"24px\" matSuffix *ngIf=\"! this.address\">\n                <button matSuffix mat-icon-button color=\"primary\" (click)=\"resetAddress()\" *ngIf=\"this.address\">\n                  <mat-icon >indeterminate_check_box</mat-icon>\n                </button>\n        </mat-form-field>\n        <mat-error *ngIf=\"getMessage() && isCompleted\" class=\"mat-error\">{{ getMessage() }}</mat-error>  \n      </div>  \n    </div>\n    <div class=\"address-handler-info\">\n      <div class=\"floors-help\">\n        <mat-form-field appearance=\"outline\" fxFlex=\"50%\">\n          <mat-label>Floors/Unit</mat-label>  \n          <input\n            matInput\n            [formControl]=\"floors\"\n            >\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" style=\"padding-left: 1%;\" fxFlex=\"50%\">\n          <mat-label>Door pin code</mat-label>  \n          <input\n            matInput\n            [formControl]=\"doorPinCode\"\n            >\n        </mat-form-field>\n      </div>\n    </div>\n      <section class=\"stair-section\">\n        <p>Does the item fit in the elevator or have to take stairs?</p>\n        <mat-button-toggle-group class=\"stair-section-group\" [(ngModel)]=\"chosenstairs\" name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle class=\"stair-help\" checked value=\"elevator\"><img class=\"stair-img\" [src]=\"getToggleImgForElevator()\"></mat-button-toggle>\n          <mat-button-toggle class=\"stair-help\" value=\"stairs\"><img class=\"stair-img\" [src]=\"getToggleImgForStairs()\"></mat-button-toggle>\n        </mat-button-toggle-group>\n      </section>\n      </mat-card-content>\n   </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/begin-state.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/begin-state.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div id=\"ad-preview\" *ngIf=\"isBlocketWeb\">\n        <div id=\"ad-preview-img\" alt=\"Ad image\">\n          <img id=\"ad-preview-img\" [src]=\"imageHandler.imgUrl[0]\">\n          <div id=\"ad-preview-img-num\">{{imageHandler.imgUrl.length}}</div>\n        </div>\n        <div class=\"ad-preview-info\">\n          <p id=\"ad-preview-title\" class=\"sub-heading\">Tv bäck</p>\n          <div class=\"ad-feat-row\">\n          <img class=\"ad-checkmark\" src=\"/assets/imgs/check2.png\" alt=\"✔\">\n          <span> Home delivery today</span>\n          </div>\n          <div class=\"ad-feat-row\">\n          <img class=\"ad-checkmark\" src=\"/assets/imgs/check2.png\" alt=\"✔\">\n          <span> You set the price</span>\n          </div>\n          <div class=\"ad-feat-row\">\n          <img class=\"ad-checkmark\" src=\"/assets/imgs/check2.png\" alt=\"✔\">\n          <span> Pay after getting help</span>\n          </div>\n        </div>\n      </div>\n      <button type=\"button\" id=\"edit-title-and-images-button\" (click)=\"changeDesAndImgs()\" *ngIf=\"isBlocketWeb\">Edit description or images</button>\n    <div id=\"ad-create\">\n        <div id=\"title-and-images-create-form\" [fxShow]=\"editDesAndImgs\" >\n            <img class=\"drop-down-tip left\" [hidden]=\"visible()\" src=\"/assets/imgs/tip.svg\">\n            <div class=\"sub-item\">\n                <p class=\"item-title\">What would you like to move or deliver?</p>\n                <div class=\"images-wrapper\">\n                    <image-handler\n                     #imageHandler\n                    ></image-handler>\n                </div>\n            </div>\n            <div class=\"sub-item\">\n                <p>Description</p>\n                <div class=\"mat-input-field\">\n                    <mat-form-field  appearance=\"outline\" class=\"desc\">\n                        <mat-label  class=\"place-holder\">Enter item description</mat-label>\n                        <textarea\n                            matInput\n                            [formControl]=\"descriptionFC\"\n                            [maxLength]=300\n                            rows=\"1\"\n                        ></textarea>\n                    </mat-form-field>\n                </div>\n                <mat-error *ngIf=\"getDescriptionError() && isCompleted\" class=\"mat-error\">{{ getDescriptionError() }}</mat-error>\n            </div>\n        </div>\n            \n        \n        <div class=\"sub-item\">\n            <p class=\"carry-title\">Do you need 1 or 2 people to help?</p>\n            <mat-button-toggle-group class=\"carry-section-group\" [(ngModel)]=\"chosenCarryItem\" name=\"fontStyle\" aria-label=\"Font Style\">\n                <mat-button-toggle class=\"carry-toggle\" checked value=\"one\"><img [src]=\"getCarryToggleImgOne()\" width=\"87px\"></mat-button-toggle>\n                <mat-button-toggle class=\"carry-toggle\" value=\"two\"><img [src]=\"getCarryToggleImgTwo()\" width=\"100%\"></mat-button-toggle>\n              </mat-button-toggle-group>\n        </div>\n        <div class=\"sub-item\">  \n            <p>Collection & Delivery information</p>\n            <address-handler\n                title=\"Pick up address\"\n                type=\"address\"\n                appearance=\"outline\"\n                country=\"\"\n                addressLabelText=\"pick up address\"\n                (collectionAndDeleiveryInfo)=\"pickupAddress($event)\"\n                #PickUpAddressHandler\n            ></address-handler>\n            <div class=\"section-blank-line mt-30\"></div>\n            <address-handler\n                imgUrl=\"/assets/imgs/icon/drop off@3x.png\"\n                title=\"Delivery address\"\n                type=\"address\"\n                appearance=\"outline\"\n                country=\"\"\n                addressLabelText=\"delivery address\"\n                #DeliveryAddressHandler\n                (collectionAndDeleiveryInfo)=\"deliveryAddress($event)\"\n            ></address-handler>\n        </div>\n        <div class=\"section-seperator-line mt-30\"></div>\n        <div class=\"sub-item\">  \n            <p>Collection time <br/><span class=\"sub-content\">When is the seller avaliable for pickup?</span></p>\n                <mat-button-toggle-group #group=\"matButtonToggleGroup\" class=\"collection-time-title\" (change)=\"onEndpointValChange(group.value)\" multiple=\"false\">\n                    <mat-button-toggle value=\"today\" fxFlex=\"50%\" class=\"light-button\" \n                     [ngStyle]=\"{'background-color': selectedTimeListForToday ? '#fdc200' : '#fff'}\">{{ selectedTimeListForToday ? \"Today\" :\"< Today\" }}</mat-button-toggle>\n                    <mat-button-toggle value=\"tomorrow\" fxFlex=\"50%\" class=\"light-button\" \n                    [ngStyle]=\"{'background-color': !selectedTimeListForToday ? '#fdc200' : '#fff'}\">{{ selectedTimeListForToday ? \"Tomorrow >\" :\"Tomorrow\" }}</mat-button-toggle>\n                  </mat-button-toggle-group>\n              \n              <section class=\"section-list\">\n                  <div class=\"time-checkbox\" *ngFor=\"let sectionTime of getTimeList()\" [ngStyle]='{\"background-color\" : \n                  sectionTime.completed ? \"rgb(236, 177, 50)\" : \"background-color: silver;\"}'>\n                    <mat-checkbox\n                    [(ngModel)]=\"sectionTime.completed\"\n                    [disabled]=\"isDisabled(sectionTime.completed)\"\n                    (change)=\"updateSelectedTimeList(sectionTime.completed, sectionTime.value)\"\n                    >{{ sectionTime.value }}</mat-checkbox>\n                  </div>\n              </section>\n            <p class=\"delivery-note mb-30 inner\" style=\"font-weight: 300; font-size: 12px; color: #a8a6a6;\">\n                *Delivery usually takes place within 2h after pick-up\n              </p>\n        </div>\n        <div class=\"section-seperator-line mt-30\"></div>\n        <div class=\"sub-item\">  \n            <p>How much would you like to pay?</p>\n                <span style=\"line-height: normal;\">Mooov uses algorithm between supply and demand to \n                    recommend prices according to the item size and travel distance.\n                     Prices like below will ge you quicker response.</span>\n            <div class=\"price-container\">\n                <mat-slider\n                thumbLabel\n                [displayWith]=\"updateDisplayPoiont\"\n                tickInterval=\"1000\"\n                min=\"1\"\n                max=\"990000\"\n                value=\"{{ payment }}\"\n                (change)=\"updateCharge($event)\"\n                ></mat-slider>\n                <input matInput \n                class=\"payment-label\"\n                [formControl]=\"paymentFC\"\n                (change)=\"updateSliderCharge($event)\"\n                fxFlex=\"15%\" required>\n            </div>\n            <mat-error *ngIf=\"paymentFC.hasError('pattern')\">Oops! invalid charge.</mat-error>   \n        </div>\n        <div class=\"section-seperator-line mt-30\"></div>\n        <div class=\"sub-item\">  \n            <p>Your phone number</p>\n            <div class=\"mat-input-field\">\n                <div id=\"buyer-phone\" class=\"phone-container mb-8 inner\">\n                    <p class=\"country-code\" matPrefix>+46</p>\n                    <div class=\"input-seperator\" matPrefix>|</div>\n                    <mat-form-field class=\"phone-full-width\" appearance=\"fill\" style=\"color: black;\">\n                        <input type=\"tel\"\n                        matInput\n                        [formControl]=\"phoneFC\"\n                        >\n                      </mat-form-field>\n                  </div>            \n                  <mat-error *ngIf=\"getPhoneErrorMessage() && isCompleted\">{{ getPhoneErrorMessage() }}</mat-error>\n                  <p style=\"font-weight: 300; font-size: 10px;\">SMS with delivery details will be sent to you</p>\n            </div>\n        </div> \n        <div class=\"section-seperator-line mt-30\"></div>\n        <div class=\"sub-item\">  \n           <p>Total amount</p>\n            <mat-grid-list class=\"mat-grid-list\" cols=\"4\" rowHeight=\"15px\">\n                <mat-grid-tile\n                    class=\"mat-grid-tile\"\n                    [colspan]=\"2\"\n                    [rowspan]=\"1\"\n                    >\n                    Offer {{ getCharge() }} kr\n                </mat-grid-tile>\n                <mat-grid-tile\n                class=\"mat-grid-tile\"\n                    [colspan]=\"2\"\n                    [rowspan]=\"2\"\n                    style=\"background : rgb(248, 205, 86); border-radius: 5px;\">\n                    Total {{ getCharge() + 19 }} kr\n                </mat-grid-tile>\n                <mat-grid-tile\n                class=\"mat-grid-tile\"\n                    [colspan]=\"2\"\n                    [rowspan]=\"1\"\n                    >\n                    Admin fee 19 kr\n                </mat-grid-tile>\n              </mat-grid-list>\n        </div>\n        <div class=\"section-blank-line mt-30\"></div>\n        <div class=\"sub-item\">  \n            <section class=\"item-statement-section\">\n                <mat-checkbox class=\"item-statement\" [(ngModel)]=\"disabled\">\n                    I hereby acknowledge that what is being collected matches the image and descreption, \n                        does not contain toxec or harmful substance, \n                        and will be available at the time for collection or deliver.\n                    </mat-checkbox>\n            </section>\n        </div>\n        <div class=\"sub-item\">\n            <div class=\"example-button-row\">\n                <button mat-flat-button class=\"cta mb-30 inner\" style=\"background-color: rgb(248, 193, 42);\" (click)=\"onContiune()\" [disabled]=\"!disabled\">CONTINUE</button>\n            </div>\n        </div>\n    </div>    \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/image-handler/image-handler.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/image-handler/image-handler.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"imgs-container\">\n    <div>\n        <mat-grid-list cols=\"4\" rowHeight=\"1:1\">\n            <mat-grid-tile\n                [colspan]=\"3\"\n                [rowspan]=\"3\">\n                <mat-card class=\"ad-img-container\">  \n                    <mat-card-content  class=\"ad-img-aspect\">  \n                        <div class=\"ad-img-overlay visible\">\n                            <img src=\"/assets/imgs/icon/photo.png\" *ngIf=\"imgUrl[0] === undefined\">\n                            <div *ngIf=\"imgUrl[0]\">\n                                <img [src]=\"imgUrl[0]\" class=\"ad-img\">\n                                <img [src]=\"imgUrl[0]\" class=\"ad-img\">\n                                <mat-icon  class=\"delete-img\" id=\"ad-img-1\" (click)=\"deleteImage(0)\">remove_circle_outline</mat-icon>\n                                \n                            </div>\n                        </div>\n                        \n                    </mat-card-content>  \n                </mat-card>\n            </mat-grid-tile>\n            <mat-grid-tile\n                [colspan]=\"1\"\n                [rowspan]=\"1\"\n                >\n                <mat-card class=\"ad-img-container\">  \n                    <mat-card-content  class=\"ad-img-aspect\">  \n                        <div class=\"ad-img-overlay visible\">\n                            <img src=\"/assets/imgs/icon/photo.png\" *ngIf=\"imgUrl[1] === undefined\">\n                            <div *ngIf=\"imgUrl[1]\">\n                                <img [src]=\"imgUrl[1]\" class=\"ad-img\">\n                                <mat-icon  class=\"delete-img\" id=\"ad-img-2\" (click)=\"deleteImage(1)\">remove_circle_outline</mat-icon>\n                            </div>\n                        </div>\n                    </mat-card-content>  \n                </mat-card>\n            </mat-grid-tile>\n            <mat-grid-tile\n                [colspan]=\"1\"\n                [rowspan]=\"1\">\n                <mat-card class=\"ad-img-container\">  \n                    <mat-card-content  class=\"ad-img-aspect\">  \n                        <div class=\"ad-img-overlay visible\">\n                            <img src=\"/assets/imgs/icon/photo.png\" *ngIf=\"imgUrl.length !== 3\">\n                            <div *ngIf=\"imgUrl.length > 2\">\n                                <img [src]=\"imgUrl[2]\" class=\"ad-img\">\n                                <mat-icon  class=\"delete-img\" id=\"ad-img-3\" (click)=\"deleteImage(2)\">remove_circle_outline</mat-icon>\n                            </div>\n                        </div>\n                    </mat-card-content>  \n                </mat-card>\n            </mat-grid-tile>\n            <mat-grid-tile\n                [colspan]=\"1\"\n                [rowspan]=\"1\">\n                <input class=\"img-input\" #imageUpload type=\"file\" accept=\"image/*\" multiple=\"\">\n                <mat-card class=\"ad-img-container\">  \n                    <mat-card-content  class=\"ad-img-aspect\">  \n                        <div class=\"ad-img-overlay visible\"  (click)=\"uploadImage()\" *ngIf=\"imgUrl.length < 4\">\n                            <img src=\"/assets/imgs/plus.png\" alt=\"plus icon\" width=\"28\" height=\"28\" class=\"ad-img-plus\">\n                        </div>\n                        <div class=\"ad-img-overlay visible\" *ngIf=\"imgUrl.length > 3\">\n                            <img [src]=\"imgUrl[3]\" class=\"ad-img\">\n                            \n                            <mat-icon  class=\"delete-img\" id=\"ad-img-4\" (click)=\"deleteImage(3)\">remove_circle_outline</mat-icon>\n                        </div>\n                    </mat-card-content>  \n                </mat-card>\n            </mat-grid-tile>\n          </mat-grid-list>\n    </div>\n    <mat-error *ngIf=\"getMessage() && isCompleted\" class=\"mat-error\">{{ getMessage() }}</mat-error>  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-header/main-header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-header/main-header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"background-color: #fff;\">\n    <mat-toolbar-row  fxHide fxShow.gt-xs>\n        <div fxFlex fxLayout fxLayoutAlign=\"flex-head\">\n            <div class=\"center-child-vh\">\n              <img class=\"mooov-logo\" src=\"{{ mooovLogo }}\" alt=\"Mooov logo\">\n            </div>\n            <p class=\"tagline\">Speedy same day removals!</p>\n          </div>\n          <div fxFlex fxLayout fxLayoutAlign=\"flex-end\">\n            <img class=\"store-badge\" src=\"/assets/imgs/logo/appstore-badge.svg\">\n            <img class=\"store-badge\" src=\"/assets/imgs/logo/googleplaystore-badge.png\">\n          </div>\n    </mat-toolbar-row>\n    <mat-toolbar-row  fxShow fxHide.gt-xs>\n        <div fxFlex fxLayout fxLayoutAlign=\"center\">\n            <div class=\"center-child-vh\">\n              <img class=\"mooov-logo\" src=\"{{ mooovLogo }}\" alt=\"Mooov logo\">\n            </div>\n          </div>\n    </mat-toolbar-row>\n    <mat-toolbar-row  fxShow fxHide.gt-xs>\n        <div fxFlex fxLayout fxLayoutAlign=\"center\">\n            <p class=\"tagline\">Speedy same day removals!</p>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>");

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
    { path: 'begin-state/:id', pathMatch: 'full', component: _begin_state_begin_state_component__WEBPACK_IMPORTED_MODULE_2__["BeginStateComponent"] },
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
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\nmain {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxlZ3VpaHRhXFxMZWFybmluZ1xcbW9vb3ZcXG1vb292LW5nLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0FDQ2hCOztBREVBO0VBQ0ksWUFBWTtBQ0NoQjs7QURFQTtFQUNJLGFBQWE7QUNDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4gXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG4gXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4iLCJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 600px) {\n  .container .mat-card .mat-card-title {\n    box-shadow: none;\n    font-size: 18px;\n    color: #000;\n  }\n  ::ng-deep .mat-button-toggle {\n    width: 87px;\n    background-color: #8d8a8a;\n  }\n  .mat-error {\n    font-size: 100%;\n    margin-left: 17.5px;\n  }\n  .address-handler-info {\n    overflow: hidden;\n    padding-left: 5px;\n    width: 100%;\n    font-size: 13px;\n  }\n  .stair-img {\n    width: 100%;\n    height: 32px;\n  }\n}\n\n@media (max-width: 600px) {\n  .container .mat-card .mat-card-title {\n    box-shadow: none;\n    font-weight: 600;\n    font-size: 12px;\n    color: #000;\n  }\n  .mat-error {\n    font-size: 70%;\n    margin-left: 17.5px;\n  }\n  .address-handler-info {\n    overflow: hidden;\n    padding-left: 5px;\n    width: 100%;\n    font-size: 11px;\n  }\n  #address-handler-img img {\n    width: 20px;\n    height: 20px;\n  }\n  ::ng-deep .mat-button-toggle-button {\n    height: 25px !important;\n    width: 70px !important;\n  }\n  .stair-img {\n    width: 100%;\n    height: 25px;\n  }\n}\n\n.mat-card {\n  color: #080202;\n  box-shadow: none;\n  background-color: rgba(250, 250, 250, 0.596) !important;\n  padding: 0;\n}\n\n.container .mat-card mat-icon {\n  color: #3a36fa;\n}\n\n.full-width {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-label {\n  color: #8d8a8a !important;\n}\n\n::ng-deep .mat-button-toggle-checked {\n  background-color: #fff;\n}\n\n::ng-deep .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 0px !important;\n}\n\n.mat-button-toggle-appearance-standard {\n  color: black;\n  background-color: #ebebeb;\n}\n\n.stair-section p {\n  margin: 0 0 0px !important;\n  font-size: 10px;\n  color: #8d8a8a;\n}\n\n#address-handler-img {\n  display: flex;\n  position: relative;\n  min-height: 40px;\n  height: 50px;\n  border-radius: 10px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 10%;\n  align-items: center;\n}\n\n#address-handler {\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW4tc3RhdGUvYWRkcmVzcy1oYW5kbGVyL0M6XFxVc2Vyc1xcZWd1aWh0YVxcTGVhcm5pbmdcXG1vb292XFxtb29vdi1uZy1hcHAvc3JjXFxhcHBcXGJlZ2luLXN0YXRlXFxhZGRyZXNzLWhhbmRsZXJcXGFkZHJlc3MtaGFuZGxlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmVnaW4tc3RhdGUvYWRkcmVzcy1oYW5kbGVyL2FkZHJlc3MtaGFuZGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0VDQ2pCO0VERUU7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0VDQS9CO0VER0U7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0VDRHpCO0VESUU7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0VDRnJCO0VES0U7SUFDSSxXQUFXO0lBQ1gsWUFBWTtFQ0hsQjtBQUNGOztBRE1BO0VBQ0k7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0VDSGpCO0VES0U7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0VDSHpCO0VETUU7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0VDSnJCO0VET0U7SUFDSSxXQUFXO0lBQ1gsWUFBWTtFQ0xsQjtFRFFFO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQ041QjtFRFNFO0lBQ0ksV0FBVztJQUNYLFlBQVk7RUNQbEI7QUFDRjs7QURVQTtFQUNJLGNBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1REFBdUQ7RUFDdkQsVUFBVTtBQ1BkOztBRFVBO0VBQ0ksY0FBdUI7QUNQM0I7O0FEV0E7RUFDSSxXQUFXO0FDUmY7O0FEV0E7RUFDSSx5QkFBeUI7QUNSN0I7O0FEV0E7RUFDSSxzQkFBc0I7QUNSMUI7O0FEV0E7RUFDSSwyQkFBMkI7QUNSL0I7O0FEWUE7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0FDVDdCOztBRGVBO0VBQ0ksMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFjO0FDWmxCOztBRGVBO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUNadkI7O0FEZ0JBO0VBQ0ksYUFBYTtBQ2JqQiIsImZpbGUiOiJzcmMvYXBwL2JlZ2luLXN0YXRlL2FkZHJlc3MtaGFuZGxlci9hZGRyZXNzLWhhbmRsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpe1xyXG4gICAgLmNvbnRhaW5lciAubWF0LWNhcmQgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlIHtcclxuICAgICAgICB3aWR0aDogODdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ4YThhO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZXJyb3Ige1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTcuNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRyZXNzLWhhbmRsZXItaW5mbyB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YWlyLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgLmNvbnRhaW5lciAubWF0LWNhcmQgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgLm1hdC1lcnJvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3LjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkcmVzcy1oYW5kbGVyLWluZm8ge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZGRyZXNzLWhhbmRsZXItaW1nIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFpci1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICAgIGNvbG9yOiByZ2IoOCwgMiwgMik7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjU5NikgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLm1hdC1jYXJkIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoNTgsIDU0LCAyNTApO1xyXG59XHJcblxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICM4ZDhhOGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc3RhaXItc2VjdGlvbiBwIHtcclxuICAgIG1hcmdpbjogMCAwIDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4ZDhhOGE7XHJcbn1cclxuXHJcbiNhZGRyZXNzLWhhbmRsZXItaW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiNhZGRyZXNzLWhhbmRsZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSIsIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIC5tYXQtY2FyZCAubWF0LWNhcmQtdGl0bGUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIHdpZHRoOiA4N3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDhhOGE7XG4gIH1cbiAgLm1hdC1lcnJvciB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNy41cHg7XG4gIH1cbiAgLmFkZHJlc3MtaGFuZGxlci1pbmZvIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuc3RhaXItaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLm1hdC1jYXJkIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICAubWF0LWVycm9yIHtcbiAgICBmb250LXNpemU6IDcwJTtcbiAgICBtYXJnaW4tbGVmdDogMTcuNXB4O1xuICB9XG4gIC5hZGRyZXNzLWhhbmRsZXItaW5mbyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgI2FkZHJlc3MtaGFuZGxlci1pbWcgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN0YWlyLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG59XG5cbi5tYXQtY2FyZCB7XG4gIGNvbG9yOiAjMDgwMjAyO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNTk2KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGFpbmVyIC5tYXQtY2FyZCBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjM2EzNmZhO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICM4ZDhhOGEgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbn1cblxuLnN0YWlyLXNlY3Rpb24gcCB7XG4gIG1hcmdpbjogMCAwIDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjOGQ4YThhO1xufVxuXG4jYWRkcmVzcy1oYW5kbGVyLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNhZGRyZXNzLWhhbmRsZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuIl19 */");

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
        // tslint:disable-next-line:no-output-on-prefix
        this.onLocationSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCompleted = false;
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
        };
    };
    AddressHandlerComponent.prototype.getToggleImgForElevator = function () {
        if (this.chosenstairs === 'elevator') {
            return '/assets/imgs/icon/Elevator.png';
        }
        return '/assets/imgs/icon/el2.png';
    };
    AddressHandlerComponent.prototype.getToggleImgForStairs = function () {
        if (this.chosenstairs === 'stairs') {
            return '/assets/imgs/icon/Stairs.png';
        }
        return '/assets/imgs/icon/st2.png';
    };
    AddressHandlerComponent.prototype.getMessage = function () {
        if (this.addressSearchControl.hasError('required')) {
            return this.requiredErrorText;
        }
        if (this.addressSearchControl.hasError('validateAddress')) {
            return this.invalidErrorText;
        }
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
            // tslint:disable-next-line:component-selector
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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 600px){\r\n    .container {\r\n        max-width: 495px;\r\n        width: 495px;\r\n        margin: auto auto 50px;\r\n        border-radius: 19px;\r\n        box-shadow: 0 2px 28px 0 rgb(168, 166, 166);\r\n    }\r\n\r\n    #ad-create div.sub-item {\r\n        padding-top: 20px;\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n    }\r\n\r\n    #ad-create div.sub-item p {\r\n        font-family: Lato,sans-serif;\r\n        font-size: 20px;\r\n        color: #000;\r\n        margin: 0 0 1px;\r\n    }\r\n\r\n    #ad-create div.sub-item p.item-title {\r\n        color: rgb(0, 0, 0);\r\n        font-weight: 500;\r\n        font-size: 25px;\r\n        padding: 0px 0px 20px;\r\n    }\r\n\r\n    .mat-error {\r\n        font-size: 100%;\r\n        margin-left: 17.5px;\r\n    }\r\n\r\n    #ad-preview {\r\n        display: -ms-flexbox;\r\n        padding-top: 20px;\r\n        padding-left: 20px;\r\n        display: flex;\r\n    }\r\n\r\n    #ad-create div.sub-item .mat-input-field {\r\n        font-size: 13px;\r\n    } \r\n\r\n    #ad-create div.sub-item .carry-title {\r\n        font-size: 14px;\r\n    }\r\n\r\n    ::ng-deep .mat-button-toggle-button {\r\n        height: 32px !important;\r\n    }\r\n\r\n    .collection-time-title ::ng-deep .mat-button-toggle-button {\r\n        height: 40px !important;\r\n        width: 100% !important;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px){\r\n    #ad-create div.sub-item p {\r\n        font-family: Lato,sans-serif;\r\n        font-size: 14px;\r\n        color: rgb(49, 48, 48);\r\n        margin: 0 0 1px;\r\n    }\r\n\r\n    #ad-create div.sub-item {\r\n        padding-top: 10px;\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    #ad-create div.sub-item p.item-title {\r\n        color: rgb(0, 0, 0);\r\n        font-weight: 500;\r\n        font-size: 16px;\r\n        padding: 0px 20px 20px;\r\n    }\r\n   \r\n    .mat-error {\r\n        font-size: 70%;\r\n        margin-left: 17.5px;\r\n    }\r\n\r\n    #ad-preview {\r\n        display: flex;\r\n        padding-left: 12px;\r\n    }\r\n\r\n    #ad-create div.sub-item .mat-input-field {\r\n        font-size: 11px;\r\n    } \r\n\r\n    #ad-create div.sub-item .carry-title {\r\n        font-size: 10px;\r\n    }\r\n\r\n    ::ng-deep .mat-button-toggle-button {\r\n        height: 25px !important;\r\n        width: 70px !important;\r\n    }\r\n\r\n    .collection-time-title ::ng-deep .mat-button-toggle-button {\r\n        height: 30px !important;\r\n        width: 100% !important;\r\n    }\r\n    .carry-toggle img {\r\n        width: 70px;\r\n        position: relative;\r\n    }\r\n}\r\n\r\n#ad-create {\r\n    display: block;\r\n}\r\n\r\n#ad-preview-img {\r\n    position: relative;\r\n    min-width: 100px;\r\n    width: 100px;\r\n    min-height: 100px;\r\n    height: 100px;\r\n    border-radius: 10px;\r\n    background-color: silver;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 50%;\r\n}\r\n\r\n.ad-preview-info {\r\n    overflow: hidden;\r\n    padding-left: 5%;\r\n}\r\n\r\n#ad-preview-title {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.sub-heading {\r\n    font-weight: 700;\r\n}\r\n\r\n.ad-feat-row {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 15px;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.ad-checkmark {\r\n    height: 16px;\r\n    margin-right: 8px;\r\n}\r\n\r\n#edit-title-and-images-button {\r\n    margin-left: 30px;\r\n    padding: 15px 0;\r\n    -webkit-appearance: none;\r\n    background: none;\r\n    border: none;\r\n    font-size: 16px;\r\n    color: #42a5f5;\r\n    outline: none;\r\n}\r\n\r\n#title-and-images-create-form {\r\n    position: relative;\r\n    padding: 20px 0 30px;\r\n    border-top: 1px solid #f4f3f3;\r\n    background: #f9f9f9;\r\n}\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n#ad-preview-img-num {\r\n    font-size: 12px;\r\n    padding: 2px;\r\n    position: absolute;\r\n    bottom: 3px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    border: none;\r\n    width: 16px;\r\n    height: 16px;\r\n    right: 3px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#ad-create div.sub-item span{\r\n    font-size: 12px;\r\n    color: #8d8a8a;\r\n    margin-top: -10px;\r\n}\r\n\r\n#ad-create div.sub-item .carry-section-group{\r\n    width: 50%;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\r\n    line-height: 0px !important;\r\n}\r\n\r\n::ng-deep .mat-button-toggle{\r\n    background-color: #8d8a8a;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-checked {\r\n    background-color: #fff;\r\n}\r\n\r\n.place-holder {\r\n    font-family: Lato,sans-serif;\r\n    font-size: 12px;\r\n    color: #a8a6a6;\r\n}\r\n\r\n.desc {\r\n    width: 100%;\r\n}\r\n\r\n.section-blank-line {\r\n    width: 100%;\r\n    height: 1px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.mat-slide-toggle-label {\r\n    width: 50%;\r\n}\r\n\r\n#ad-create div.sub-item span {\r\n    font-size: 10px;\r\n}\r\n\r\n.mat-grid-list {\r\n    margin-top: 5px;\r\n}\r\n\r\n.mat-grid-tile {\r\n    font-weight: 300;\r\n    font-size: 12px;\r\n    color: #464545;\r\n}\r\n\r\n.mat-grid-tile >::ng-deep .mat-figure{\r\n    justify-content: flex-start;\r\n    margin-left: 5px;\r\n}\r\n\r\n.drop-down-tip.left {\r\n    left: 36px;\r\n}\r\n\r\n.drop-down-tip {\r\n    height: 8px;\r\n    position: absolute;\r\n    top: -8px;\r\n}\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color: #ebebeb; \r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\r\n    background-color: #fff !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-wrapper {\r\n    padding-bottom: 0px;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-label-content {\r\n    padding: 0 0 0 0 !important;\r\n}\r\n\r\n.sub-item .mat-card {\r\n    background: #ffffff;\r\n    color: #000;\r\n    box-shadow: none;\r\n    padding: 0px;\r\n}\r\n\r\n::ng-deep  .mat-radio-outer-circle {\r\n    border-color: rgba(145, 144, 144, 0.54);\r\n}\r\n\r\n.carry-section .carry-help {\r\n    color: #fdc200;\r\n    width: 50%;\r\n}\r\n\r\n@media (min-width: 375px) {\r\n    .cta {\r\n        width: 80%;\r\n        height: 60px;\r\n        border-radius: 30px;\r\n        font-size: 22px;\r\n        font-weight: 900;\r\n    }\r\n}\r\n\r\n.cta {\r\n    width: 80%;\r\n    display: block;\r\n    height: 48px;\r\n    margin: 16px auto 30px;\r\n    border-radius: 30px;\r\n    border: none;\r\n    background-color: #2a91f5;\r\n    cursor: pointer;\r\n    outline: none;\r\n    -webkit-appearance: none;\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.section-seperator-line {\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: #eed231;\r\n    margin-top: 20px;\r\n}\r\n\r\nagm-map {\r\n    height: 400px;\r\n  }\r\n\r\n.autocomplete-container {\r\n    padding: 1rem 0 1rem 0;\r\n    width: 50%;\r\n}\r\n\r\n.sub-item .container {\r\n    width: 98%;\r\n}\r\n\r\n::ng-deep .mat-tab-label .mat-tab-label-content {\r\n    color: #000;\r\n    font-size: 12px;\r\n}\r\n\r\n::ng-deep mat-ink-bar {\r\n    border-bottom: 0;\r\n}\r\n\r\n::ng-deep mat-tab {\r\n    width: 50%;\r\n}\r\n\r\n.mat-button-toggle-appearance-standard {\r\n    color: black;\r\n    background-color: #ebebeb;\r\n}\r\n\r\n.light-button {\r\n    font-size: 110%;\r\n    border: 2px solid #fdc200 !important;\r\n    margin: 1px 1px 1px 1px;\r\n    border-radius: 4px;\r\n}\r\n\r\n::ng-deep .sub-item .section-list .time-checkbox .mat-checkbox-inner-container {\r\n    display: none!important; \r\n}\r\n\r\n.sub-item .section-list .time-checkbox {\r\n    width: 24.3% !important;\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin: 1px 1px 1px 1px;\r\n    background-color: #ebebeb;\r\n    border-radius: 5px;\r\n}\r\n\r\n.sub-item .section-list {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#time-slot-text {\r\n    margin-top: 10px;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    line-height: 1.38;\r\n    text-align: center;\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n.delivery-note {\r\n    line-height: 1.69;\r\n    text-align: center;\r\n}\r\n\r\n.phone-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.item-statement-section {\r\n    background-color: rgb(245, 241, 179);\r\n    border-radius: 5px;\r\n}\r\n\r\n.item-statement-section .item-statement {\r\n    margin-left: 5px;\r\n    font-size: 10px;\r\n    color: #504f4f;\r\n}\r\n\r\n::ng-deep .sub-item .item-statement-section .item-statement .mat-checkbox-layout {\r\n    white-space: normal;\r\n    width: 98%;\r\n}\r\n\r\n::ng-deep .sub-item .item-statement-section .item-statement .mat-checkbox-inner-container {\r\n    background-color: #fdc200;\r\n}\r\n\r\n::ng-deep .mat-form-field-prefix{\r\n    border: 1px solid #fdc200 !important;\r\n    height: 30px !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label {\r\n    margin-left: 5px;\r\n    color: black;\r\n}\r\n\r\n.phone-container {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    border: 1px solid #a8a6a6;\r\n    border-radius: 4px;\r\n}\r\n\r\n.country-code {\r\n    margin: 0 0 0 16px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input-seperator {\r\n    font-size: 28px;\r\n    padding: 0;\r\n    font-weight: 300;\r\n    color: #cecece;\r\n    margin: -5px 8px 0 12px;\r\n}\r\n\r\n#resend-phone, .phone {\r\n    border: none;\r\n    outline: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n::ng-deep .mat-form-field-underline {\r\n /*change color of underline*/\r\n  background-color:  rgb(255, 255, 255) !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-ripple {\r\n /*change color of underline when focused*/\r\n background-color: rgb(255, 255, 255) !important;;\r\n}\r\n\r\n::-moz-placeholder {\r\n    color: rgb(10, 10, 10);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n::-ms-input-placeholder {\r\n    color: rgb(10, 10, 10);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n::placeholder {\r\n    color: rgb(10, 10, 10);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n   color: rgb(10, 10, 10);\r\n  }\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n   color: rgb(10, 10, 10);\r\n  }\r\n\r\n.price-container {\r\n      width: 100%;\r\n      margin-top: 10px;\r\n  }\r\n\r\n.mat-slider-horizontal {\r\n      width: 80%;\r\n  }\r\n\r\n::ng-deep .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb, .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\r\n      background-color: #fdc200;\r\n  }\r\n\r\n::ng-deep .mat-slider-thumb {\r\n      width: 25px !important;\r\n      height: 25px !important;\r\n      bottom: -36px !important;\r\n  }\r\n\r\n::ng-deep .mat-slider-thumb-label-text {\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n::ng-deep .mat-slider-horizontal .mat-slider-thumb-label {\r\n    top: -8px !important;\r\n}\r\n\r\nmat-slider ::ng-deep .mat-slider-wrapper ::ng-deep .mat-slider-track-wrapper ::ng-deep .mat-slider-track-background{\r\n    background-color: white; \r\n}\r\n\r\nmat-slider ::ng-deep .mat-slider-wrapper ::ng-deep .mat-slider-track-wrapper ::ng-deep .mat-slider-track-fill{\r\n    background-color: white; \r\n}\r\n\r\nmat-slider {\r\n    background-image: url(/assets/imgs/icon/furnitures.png);\r\n    background-size: 100% 98px;\r\n    height: 98px;\r\n    position: relative;\r\n}\r\n\r\n.payment-label {\r\n    margin-top: 5%;\r\n    height: 50px;\r\n    bottom: 30px;\r\n    margin-left: 2%;\r\n    border: 2px solid #fdc200; \r\n    text-align: center;\r\n}\r\n\r\n.sub-item p .total-amount {\r\n    font-weight: 200;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW4tc3RhdGUvYmVnaW4tc3RhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLDJDQUEyQztJQUMvQzs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7O0lBRUE7UUFFSSxvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFHSSxhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtJQUN0QjtBQUNKOztBQUtBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUVJLGFBQWE7SUFFYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFFVixhQUFhO0lBRWIsbUJBQW1CO0lBRW5CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFFRjtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBSUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUVJLGFBQWE7SUFFYiwyQkFBMkI7SUFFM0IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBR0E7Q0FDQyw0QkFBNEI7RUFDM0IsZ0RBQWdEO0FBQ2xEOztBQUVBO0NBQ0MseUNBQXlDO0NBQ3pDLCtDQUErQztBQUNoRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsWUFBWTtFQUMxQjs7QUFIRjtJQUNJLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsWUFBWTtFQUMxQjs7QUFIRjtJQUNJLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsWUFBWTtFQUMxQjs7QUFFRix5QkFBeUIsNEJBQTRCO0dBQ2xELHNCQUFzQjtFQUN2Qjs7QUFFRiwwQkFBMEIsbUJBQW1CO0dBQzFDLHNCQUFzQjtFQUN2Qjs7QUFFRjtNQUNNLFdBQVc7TUFDWCxnQkFBZ0I7RUFDcEI7O0FBQ0Y7TUFDTSxVQUFVO0VBQ2Q7O0FBR0Y7TUFDTSx5QkFBeUI7RUFDN0I7O0FBRUY7TUFDTSxzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHdCQUF3QjtFQUM1Qjs7QUFFRjtJQUNJLGlEQUFpRDtJQUNqRCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdURBQXVEO0lBQ3ZELDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9iZWdpbi1zdGF0ZS9iZWdpbi1zdGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogNDk1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ5NXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0byBhdXRvIDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTlweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAyOHB4IDAgcmdiKDE2OCwgMTY2LCAxNjYpO1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkLWNyZWF0ZSBkaXYuc3ViLWl0ZW0gcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHAuaXRlbS10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1lcnJvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNy41cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkLXByZXZpZXcge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIC5tYXQtaW5wdXQtZmllbGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH0gXHJcblxyXG4gICAgI2FkLWNyZWF0ZSBkaXYuc3ViLWl0ZW0gLmNhcnJ5LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2xsZWN0aW9uLXRpbWUtdGl0bGUgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAjYWQtY3JlYXRlIGRpdi5zdWItaXRlbSBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0byxzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogcmdiKDQ5LCA0OCwgNDgpO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDFweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWQtY3JlYXRlIGRpdi5zdWItaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHAuaXRlbS10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAyMHB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5tYXQtZXJyb3Ige1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNy41cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkLXByZXZpZXcge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIC5tYXQtaW5wdXQtZmllbGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH0gXHJcblxyXG4gICAgI2FkLWNyZWF0ZSBkaXYuc3ViLWl0ZW0gLmNhcnJ5LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbGxlY3Rpb24tdGltZS10aXRsZSA6Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jYXJyeS10b2dnbGUgaW1nIHtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgXHJcbiAgICBcclxuXHJcbiNhZC1jcmVhdGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG4jYWQtcHJldmlldy1pbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxufVxyXG5cclxuLmFkLXByZXZpZXctaW5mbyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuI2FkLXByZXZpZXctdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uc3ViLWhlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmFkLWZlYXQtcm93IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uYWQtY2hlY2ttYXJrIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4jZWRpdC10aXRsZS1hbmQtaW1hZ2VzLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzQyYTVmNTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiN0aXRsZS1hbmQtaW1hZ2VzLWNyZWF0ZS1mb3JtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNGYzZjM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4jYWQtcHJldmlldy1pbWctbnVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgcmlnaHQ6IDNweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzhkOGE4YTtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG4jYWQtY3JlYXRlIGRpdi5zdWItaXRlbSAuY2Fycnktc2VjdGlvbi1ncm91cHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDhhOGE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucGxhY2UtaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2E4YTZhNjtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWJsYW5rLWxpbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2xpZGUtdG9nZ2xlLWxhYmVsIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWdyaWQtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5tYXQtZ3JpZC10aWxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzQ2NDU0NTtcclxufVxyXG5cclxuLm1hdC1ncmlkLXRpbGUgPjo6bmctZGVlcCAubWF0LWZpZ3VyZXtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5kcm9wLWRvd24tdGlwLmxlZnQge1xyXG4gICAgbGVmdDogMzZweDtcclxufVxyXG5cclxuLmRyb3AtZG93bi10aXAge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC04cHg7XHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgY29sb3I6ICNlYmViZWI7IFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViLWl0ZW0gLm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuOjpuZy1kZWVwICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTQ1LCAxNDQsIDE0NCwgMC41NCk7XHJcbn1cclxuXHJcbi5jYXJyeS1zZWN0aW9uIC5jYXJyeS1oZWxwIHtcclxuICAgIGNvbG9yOiAjZmRjMjAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICAuY3RhIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3RhIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbjogMTZweCBhdXRvIDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOTFmNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXNlcGVyYXRvci1saW5lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVkMjMxO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gMDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5zdWItaXRlbSAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIG1hdC1pbmstYmFyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBtYXQtdGFiIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG5cclxuLmxpZ2h0LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDExMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmRjMjAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDFweCAxcHggMXB4IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdWItaXRlbSAuc2VjdGlvbi1saXN0IC50aW1lLWNoZWNrYm94IC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50OyBcclxufVxyXG5cclxuXHJcblxyXG4uc3ViLWl0ZW0gLnNlY3Rpb24tbGlzdCAudGltZS1jaGVja2JveCB7XHJcbiAgICB3aWR0aDogMjQuMyUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMXB4IDFweCAxcHggMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnN1Yi1pdGVtIC5zZWN0aW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiN0aW1lLXNsb3QtdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuLmRlbGl2ZXJ5LW5vdGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waG9uZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaXRlbS1zdGF0ZW1lbnQtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDEsIDE3OSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pdGVtLXN0YXRlbWVudC1zZWN0aW9uIC5pdGVtLXN0YXRlbWVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM1MDRmNGY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3ViLWl0ZW0gLml0ZW0tc3RhdGVtZW50LXNlY3Rpb24gLml0ZW0tc3RhdGVtZW50IC5tYXQtY2hlY2tib3gtbGF5b3V0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB3aWR0aDogOTglO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnN1Yi1pdGVtIC5pdGVtLXN0YXRlbWVudC1zZWN0aW9uIC5pdGVtLXN0YXRlbWVudCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjMjAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZGMyMDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucGhvbmUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYThhNmE2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY291bnRyeS1jb2RlIHtcclxuICAgIG1hcmdpbjogMCAwIDAgMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmlucHV0LXNlcGVyYXRvciB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjY2VjZWNlO1xyXG4gICAgbWFyZ2luOiAtNXB4IDhweCAwIDEycHg7XHJcbn1cclxuXHJcbiNyZXNlbmQtcGhvbmUsIC5waG9uZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDs7XHJcbn0gXHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XHJcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgfVxyXG4gIFxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcclxuICB9XHJcbiAgXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcclxuICB9XHJcblxyXG4ucHJpY2UtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjMjAwO1xyXG4gIH1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci10aHVtYiB7XHJcbiAgICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3R0b206IC0zNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgdG9wOiAtOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1zbGlkZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRyYWNrLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXHJcbn1cclxubWF0LXNsaWRlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdHJhY2stZmlsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxufVxyXG5cclxubWF0LXNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2ljb24vZnVybml0dXJlcy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDk4cHg7XHJcbiAgICBoZWlnaHQ6IDk4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wYXltZW50LWxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZkYzIwMDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItaXRlbSBwIC50b3RhbC1hbW91bnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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
    function BeginStateComponent(route) {
        this.route = route;
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
        this.isCompleted = false;
        this.isBlocketWeb = false;
        this.editDesAndImgs = true;
    }
    BeginStateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['ref'] && params['ref'] === 'blocketweb') {
                _this.isBlocketWeb = true;
                _this.id = _this.route.snapshot.paramMap.get('id');
                _this.editDesAndImgs = false;
            }
        });
        this.createFormControls();
        this.selectedTimeListForToday = true;
        this.selectedTimes.set('today', []);
        this.selectedTimes.set('tomorrow', []);
    };
    BeginStateComponent.prototype.createFormControls = function () {
        var phoneRegex = /^(7[02369])\s*(\d{4})\s*(\d{3})$/;
        this.descriptionFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)
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
        console.log(this.imageHandler.imgUrl[0]);
        this.isCompleted = true;
        this.imageHandler.isCompleted = true;
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
    BeginStateComponent.prototype.getDescriptionError = function () {
        if (this.descriptionFC.hasError('required')) {
            return 'Oops! You have to describe your item.';
        }
        if (this.descriptionFC.hasError('maxlength')) {
            return 'Oops! Max description length is 300.';
        }
    };
    BeginStateComponent.prototype.getCarryToggleImgOne = function () {
        if (this.chosenCarryItem === 'one') {
            return '/assets/imgs/icon/run-1-1.png';
        }
        return '/assets/imgs/icon/run-1-2.png';
    };
    BeginStateComponent.prototype.getCarryToggleImgTwo = function () {
        if (this.chosenCarryItem === 'two') {
            return '/assets/imgs/icon/run-2-1.png';
        }
        return '/assets/imgs/icon/run-2-2.png';
    };
    BeginStateComponent.prototype.getPhoneErrorMessage = function () {
        if (this.phoneFC.hasError('required')) {
            return 'Oops! You have to input your phone number.';
        }
        if (this.phoneFC.hasError('pattern')) {
            return 'Oops, invalid phone number.';
        }
    };
    BeginStateComponent.prototype.visible = function () {
        if (this.isBlocketWeb && this.editDesAndImgs) {
            return false;
        }
        return true;
    };
    BeginStateComponent.prototype.changeDesAndImgs = function () {
        this.editDesAndImgs = !this.editDesAndImgs;
    };
    BeginStateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 600px){\r\n    .mat-error {\r\n        font-size: 100%;\r\n        margin-left: 17.5px;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .mat-error {\r\n        font-size: 70%;\r\n        margin-left: 17.5px;\r\n    }\r\n}\r\n\r\n.imgs-container .img-input {\r\n    display: none;\r\n}\r\n\r\n.imgs-container .ad-img-container {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    -webkit-tap-highlight-color: transparent;\r\n    box-shadow: none;\r\n}\r\n\r\n.ad-img-aspect {\r\n    width: 100%;\r\n    height: 0;\r\n    position: relative;\r\n    padding-top: 100%;\r\n}\r\n\r\n.ad-img, .ad-img-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.ad-img {\r\n    border-radius: 10px;\r\n}\r\n\r\n.ad-img-overlay.visible {\r\n    visibility: visible;\r\n}\r\n\r\n.ad-img-overlay {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    z-index: 3;\r\n    border-radius: 10px;\r\n    border: 1px solid #ebebeb;\r\n    color: #fdc200;\r\n    visibility: hidden;\r\n}\r\n\r\n.imgs-container .mat-card {\r\n    background: white;\r\n    color: white;\r\n}\r\n\r\n.ad-img-spinner {\r\n    display: none;\r\n}\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n.ad-img-clear {\r\n    position: absolute;\r\n    top: 3px;\r\n    right: 3px;\r\n    z-index: 2;\r\n    visibility: hidden;\r\n}\r\n\r\n.ad-img-overlay .ad-img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.delete-img {\r\n    color: rgb(253, 17, 17);\r\n    position: absolute;\r\n    top: 3px;\r\n    right: 3px;\r\n    z-index: 1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW4tc3RhdGUvaW1hZ2UtaGFuZGxlci9pbWFnZS1oYW5kbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFFSSxhQUFhO0lBRWIsdUJBQXVCO0lBR3ZCLHNCQUFzQjtJQUV0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYmVnaW4tc3RhdGUvaW1hZ2UtaGFuZGxlci9pbWFnZS1oYW5kbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpe1xyXG4gICAgLm1hdC1lcnJvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNy41cHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgLm1hdC1lcnJvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3LjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmltZ3MtY29udGFpbmVyIC5pbWctaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltZ3MtY29udGFpbmVyIC5hZC1pbWctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5hZC1pbWctYXNwZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMCU7XHJcbn1cclxuXHJcbi5hZC1pbWcsIC5hZC1pbWctb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuLmFkLWltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYWQtaW1nLW92ZXJsYXkudmlzaWJsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uYWQtaW1nLW92ZXJsYXkge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBjb2xvcjogI2ZkYzIwMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmltZ3MtY29udGFpbmVyIC5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFkLWltZy1zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmFkLWltZy1jbGVhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIHJpZ2h0OiAzcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uYWQtaW1nLW92ZXJsYXkgLmFkLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uZGVsZXRlLWltZyB7XHJcbiAgICBjb2xvcjogcmdiKDI1MywgMTcsIDE3KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgcmlnaHQ6IDNweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn0iXX0= */");

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
        this.isCompleted = false;
    }
    ImageHandlerComponent.prototype.ngOnInit = function () {
        this.imgUrl[0] = 'https://i.blocketcdn.se/static/0/images/48/4859574879.jpg';
    };
    ImageHandlerComponent.prototype.uploadImage = function () {
        var _this = this;
        var fileUpload = this.imageUpload.nativeElement;
        fileUpload.onchange = function () {
            _this.inputImgsNum = _this.inputImgsNum + fileUpload.files.length;
            if (_this.inputImgsNum < 5) {
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
                // let imagePath = fileUpload.files;
                for (var index = 0; index < fileUpload.files.length; index++) {
                    _loop_1(index);
                }
            }
        };
        fileUpload.click();
    };
    ImageHandlerComponent.prototype.getMessage = function () {
        if (this.inputImgsNum === 0) {
            return 'Oops! Pictures of the Item must be at least one image.';
        }
        if (this.inputImgsNum > 4) {
            return 'Please keep up to 4 images that best describe your item.';
        }
    };
    ImageHandlerComponent.prototype.deleteImage = function (num) {
        this.imgUrl.splice(num, 1);
        this.inputImgsNum = this.inputImgsNum - 1;
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
            // tslint:disable-next-line:component-selector
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
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n \r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n \r\n.navigation-items{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n \r\nmat-toolbar{\r\n    border-radius: 3px;\r\n}\r\n \r\n@media (max-width: 599px){\r\n    .mat-toolbar-row, .mat-toolbar-single-row {\r\n        height: 36px;\r\n    }\r\n}\r\n \r\n@media (min-width: 600px){\r\n    mat-toolbar{\r\n        border-radius: 0px;\r\n    }\r\n\r\n    \r\n\r\n     p.tagline {\r\n        border-left: 1px solid rgb(7, 1, 1);\r\n        margin: 11px 0 11px 30px;\r\n        font-size: 18px;\r\n        color:  #000;\r\n        padding: 11px 0 11px 29px;\r\n    }\r\n}\r\n \r\n@media (max-width: 600px){\r\n    \r\n    img.mooov-logo {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    p.tagline {\r\n        margin-top: 14px;\r\n        text-align: center;\r\n        color:  #000;\r\n        font-size: 12px;\r\n\r\n   }\r\n}\r\n \r\nimg.mooov-logo {\r\n    height: 36px;\r\n    position: relative;\r\n}\r\n \r\n.center-child-vh {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n \r\ndiv.section-desc a, p {\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n \r\np {\r\n    font-family: Lato,sans-serif;\r\n    color: #000;\r\n}\r\n \r\nimg.store-badge {\r\n    height: 38px;\r\n}\r\n \r\nimg {\r\n    border-style: none;\r\n}\r\n \r\n.mooov-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCOzs7O0tBSUM7UUFDRyxtQ0FBbUM7UUFDbkMsd0JBQXdCO1FBQ3hCLGVBQWU7UUFDZixZQUFZO1FBQ1oseUJBQXlCO0lBQzdCO0FBQ0o7O0FBR0E7O0lBRUk7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixlQUFlOztHQUVwQjtBQUNIOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUVJLGFBQWE7SUFFYixtQkFBbUI7SUFFbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0FBQ2Y7O0FBSUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4gXHJcbmE6aG92ZXIsIGE6YWN0aXZle1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4gXHJcbi5uYXZpZ2F0aW9uLWl0ZW1ze1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4gXHJcbm1hdC10b29sYmFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpe1xyXG4gICAgLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAgcC50YWdsaW5lIHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYig3LCAxLCAxKTtcclxuICAgICAgICBtYXJnaW46IDExcHggMCAxMXB4IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAgIzAwMDtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4IDAgMTFweCAyOXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIFxyXG4gICAgaW1nLm1vb292LWxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcC50YWdsaW5lIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogICMwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgfVxyXG59XHJcblxyXG5pbWcubW9vb3YtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNlbnRlci1jaGlsZC12aCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5kaXYuc2VjdGlvbi1kZXNjIGEsIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogTGF0byxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuaW1nLnN0b3JlLWJhZGdlIHtcclxuICAgIGhlaWdodDogMzhweDtcclxufVxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubW9vb3Ytc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */");

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