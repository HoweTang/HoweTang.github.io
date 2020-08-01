(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-flex\">\n  <main-header></main-header>\n  <router-outlet></router-outlet>\n</div>\n\n\n\n<div class=\"container\">\n  <ng-container *ngIf=\"!otpSent; else otpContainer\">\n  <div class=\"sec-container\">\n  <input [(ngModel)]=\"phoneNumber\" class=\"get-input\" placeholder=\"Phone\" type=\"tel\">\n  <button (click)=\"sendOtp()\" class=\"button-press\">Get OTP</button>\n  </div>\n  </ng-container>\n  <ng-template #otpContainer>\n  <div class=\"sec-container\">\n  <input [(ngModel)]=\"otp\" class=\"get-input\">\n  <button (click)=\"signIn() \" class=\"button-press\">Sign In</button>\n  </div>\n  </ng-template>\n  <div id=\"sign-in-button\"></div>\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/address-handler/address-handler.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/address-handler/address-handler.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n  <mat-card>\n  <mat-card-content>\n    <div id=\"address-handler\">\n      <div id=\"address-handler-img\">\n        <img src=\"{{ imgUrl }}\" width=\"25px\" height=\"25px\">\n        <p style=\"margin: 0 2px 0 0 ;\">{{ title }}</p>\n      </div>\n      <div class=\"address-handler-info\">\n          <mat-form-field class=\"full-width\" [appearance]=\"appearance\">\n            <mat-label>{{ addressLabelText }}</mat-label>\n            <input matInput [ngStyle]=\"inputAddressStyles()\"\n                   [(ngModel)]=\"address\"\n                   (change)=\"onQuery($event)\"\n                   placeholder=\"{{placeholderText}}\"\n                   class=\"form-control\"\n                   #search\n                   MatValidateAddress\n                   required> \n                  <img src=\"/assets/imgs/icon/location.png\"  height=\"24px\" matSuffix *ngIf=\"! this.address\">\n                  <button matSuffix mat-icon-button color=\"primary\" (click)=\"resetAddress()\" *ngIf=\"this.address\">\n                    <mat-icon >cancel</mat-icon>\n                  </button>\n          </mat-form-field>\n          <mat-error *ngIf=\"getMessage() && isCompleted\" class=\"mat-error\">{{ getMessage() }}</mat-error>  \n          <div id=\"phone-info\">\n            <p>{{ phoneTitle }}</p>\n            <mat-form-field appearance=\"outline\">\n              <input\n              matInput\n              [formControl]=\"phone\"\n              >\n            </mat-form-field>\n          </div>\n          <div class=\"ad-floors-door\">\n            <div class=\"ad-floors\">\n              <p>Floors/Unit</p>\n              <mat-form-field appearance=\"outline\"> \n                <input\n                  matInput\n                  [formControl]=\"floors\"\n                  >\n              </mat-form-field>\n            </div>\n            <div class=\"ad-door\">\n              <p>Door code (optional)</p>\n              <mat-form-field appearance=\"outline\"> \n                <input\n                  matInput\n                  [formControl]=\"floors\"\n                  >\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n    </div>\n    </mat-card-content>\n   </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/begin-state.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/begin-state.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div id=\"ad-preview\" *ngIf=\"isBlocketWeb\">\n        <div id=\"ad-preview-img\" alt=\"Ad image\">\n          <img id=\"ad-preview-img\" [src]=\"imageHandler.imgUrl[0]\">\n          <div id=\"ad-preview-img-num\">{{imageHandler.imgUrl.length}}</div>\n        </div>\n        <div class=\"ad-preview-info\">\n          <p id=\"ad-preview-title\" class=\"sub-heading\">Tv bäck</p>\n          <div class=\"ad-feat-row\">\n          <img class=\"ad-checkmark\" src=\"/assets/imgs/check2.png\" alt=\"✔\">\n          <span> Home delivery today</span>\n          </div>\n          <div class=\"ad-feat-row\">\n          <img class=\"ad-checkmark\" src=\"/assets/imgs/check2.png\" alt=\"✔\">\n          <span> You set the price</span>\n          </div>\n          <div class=\"ad-feat-row\">\n          <img class=\"ad-checkmark\" src=\"/assets/imgs/check2.png\" alt=\"✔\">\n          <span> Pay after getting help</span>\n          </div>\n        </div>\n      </div>\n      <button type=\"button\" id=\"edit-title-and-images-button\" (click)=\"changeDesAndImgs()\" *ngIf=\"isBlocketWeb\">Edit description or images</button>\n    <div id=\"ad-create\">\n        <div id=\"title-and-images-create-form\" [fxShow]=\"editDesAndImgs\" >\n            <img class=\"drop-down-tip left\" [hidden]=\"visible()\" src=\"/assets/imgs/tip.svg\">\n            <div class=\"sub-item\">\n                <p class=\"item-title\">Get anything delivered home today:</p>\n                <div class=\"images-wrapper\">\n                    <image-handler\n                     #imageHandler\n                    ></image-handler>\n                </div>\n            </div>\n            <div class=\"sub-item\">\n                <div class=\"mat-input-field\">\n                    <mat-form-field  appearance=\"outline\" class=\"desc\">\n                        <mat-label  class=\"place-holder\">Enter item description</mat-label>\n                        <textarea\n                            matInput\n                            [formControl]=\"descriptionFC\"\n                            [maxLength]=300\n                            rows=\"1\"\n                        ></textarea>\n                    </mat-form-field>\n                </div>\n                <mat-error *ngIf=\"getDescriptionError() && isCompleted\" class=\"mat-error\">{{ getDescriptionError() }}</mat-error>\n            </div>\n        </div>\n        <div class=\"section-seperator-line\"></div>\n        <div class=\"sub-item\">  \n            <p>How much would you like to pay?</p>\n                <span style=\"line-height: normal;\">Mooov uses algorithm between supply and demand to \n                    recommend prices according to the item size and travel distance.\n                     Prices like below will ge you quicker response.</span>\n            <div class=\"price-container\">\n                <mat-slider\n                thumbLabel\n                [displayWith]=\"updateDisplayPoiont\"\n                tickInterval=\"1\"\n                min=\"1\"\n                max=\"50\"\n                value=\"{{ payment }}\"\n                (change)=\"updateCharge($event)\"\n                ></mat-slider>\n            </div>\n            <div class=\"ad-price-info\">\n                <mat-form-field appearance=\"outline\" class=\"ad-price-form\">\n                    <p matPrefix style=\"color: #a8a6a6; font-size: 14px;\">Set your price here: </p>\n                    <input matInput \n                    [formControl]=\"paymentFC\"\n                    (change)=\"updateSliderCharge($event)\"\n                    class=\"ad-price\"\n                    required>\n                  </mat-form-field>\n                <mat-error *ngIf=\"paymentFC.hasError('pattern')\">Oops! invalid charge.</mat-error>   \n            </div>\n            \n        </div>\n        <div class=\"section-seperator-line\"></div>\n        <div class=\"sub-item\">\n            <p class=\"ad-delivery-title\">Delivery information</p>\n            <address-handler\n                title=\"From\"\n                type=\"address\"\n                phoneTitle=\"Seller's phone number\"\n                appearance=\"outline\"\n                country=\"\"\n                addressLabelText=\"pick up address\"\n                (collectionAndDeleiveryInfo)=\"pickupAddress($event)\"\n                #PickUpAddressHandler\n            ></address-handler>\n        </div>\n        <div class=\"section-seperator-line mt-30\"></div>\n        <div class=\"sub-item\">\n            <address-handler\n                imgUrl=\"/assets/imgs/icon/drop off@3x.png\"\n                title=\"To\"\n                type=\"address\"\n                phoneTitle=\"Your phone number\"\n                appearance=\"outline\"\n                country=\"\"\n                addressLabelText=\"delivery address\"\n                #DeliveryAddressHandler\n                (collectionAndDeleiveryInfo)=\"deliveryAddress($event)\"\n            ></address-handler>\n        </div>\n        <div class=\"section-seperator-line mt-30\"></div>\n        <div class=\"sub-item\">  \n            <div class=\"ad-pickup-time\">\n                <div id=\"ad-pickup-time-title\">\n                    <mat-icon class=\"ad-pickup-time-img\">access_time</mat-icon>\n                    <p>Pickup time</p>\n                  </div>\n            </div>    \n              <mat-list-item class=\"ad-time-list\" role=\"listitem\">\n                <mat-form-field appearance=\"outline\" class=\"time-select-form\">\n                    <input\n                    matInput\n                    placeholder=\"Pickup time\" \n                    required\n                    >\n                    <button matSuffix mat-icon-button color=\"primary\">\n                        <mat-icon style=\"background: #fdc200;\n                        width: 20px;\n                        height: 20px;\n                        font-size: 16px;\n                        color: #000\">keyboard_arrow_up</mat-icon>\n                      </button>\n                  </mat-form-field>\n                  <section class=\"section-list\">\n                    <div class=\"ad-pickup-day\" *ngFor=\"let d of timeList |keyvalue\"> \n                        <div class=\"time-title\">{{ d.key }}</div>\n                        <div class=\"time-checkbox\" *ngFor=\"let sectionTime of getTimeList(d.key)\" [ngStyle]='{\"background-color\" : \n                    sectionTime.completed ? \"#fdc200\" : \"#f8f9fa\"}'>\n                      <mat-checkbox\n                      [(ngModel)]=\"sectionTime.completed\"\n                      [disabled]=\"isDisabled(sectionTime.completed)\"\n                      (change)=\"updateSelectedTimeList(sectionTime.completed, sectionTime.value)\"\n                      >{{ sectionTime.value }}</mat-checkbox>\n                    </div>\n                    <div class=\"section-seperator-line\" *ngIf=\"d.key === 'today'\"></div>\n                    </div>\n                </section>\n              </mat-list-item>\n        </div>\n        <div class=\"section-blank-line mt-30\"></div>\n        <div class=\"sub-item\">\n            <div class=\"ad-submit-button\">\n                <button mat-flat-button class=\"cta mb-30 inner\" style=\"background-color: rgb(248, 193, 42);\" (click)=\"onContiune()\">Publish</button>\n            </div>\n        </div>\n    </div>    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/image-handler/image-handler.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/begin-state/image-handler/image-handler.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"imgs-container\">\n    <div>\n        <mat-grid-list cols=\"4\" rowHeight=\"1:1\">\n            <mat-grid-tile\n                [colspan]=\"3\"\n                [rowspan]=\"3\">\n                <mat-card class=\"ad-img-container\">  \n                    <mat-card-content  class=\"ad-img-aspect\">  \n                        <div class=\"ad-img-overlay visible\">\n                            <img src=\"/assets/imgs/icon/photo.png\" *ngIf=\"imgUrl.length < 1\">\n                            <div *ngIf=\"imgUrl[0]\">\n                                <img [src]=\"imgUrl[0]\" class=\"ad-img\">\n                                <img [src]=\"imgUrl[0]\" class=\"ad-img\">\n                                <mat-icon  class=\"delete-img\" id=\"ad-img-1\" (click)=\"deleteImage(0)\">remove_circle_outline</mat-icon>\n                            </div>\n                        </div>\n                    </mat-card-content>  \n                </mat-card>\n            </mat-grid-tile>\n            <mat-grid-tile\n                [colspan]=\"1\"\n                [rowspan]=\"1\"\n                >\n                <mat-card class=\"ad-img-container\">  \n                    <mat-card-content  class=\"ad-img-aspect\">  \n                        <div class=\"ad-img-overlay visible\">\n                            <img src=\"/assets/imgs/icon/photo.png\" *ngIf=\"imgUrl.length < 2\">\n                            <div *ngIf=\"imgUrl[1]\">\n                                <img [src]=\"imgUrl[1]\" class=\"ad-img\">\n                                <mat-icon  class=\"delete-img\" id=\"ad-img-2\" (click)=\"deleteImage(1)\">remove_circle_outline</mat-icon>\n                            </div>\n                        </div>\n                    </mat-card-content>  \n                </mat-card>\n            </mat-grid-tile>\n            <mat-grid-tile\n                [colspan]=\"1\"\n                [rowspan]=\"1\">\n                <mat-card class=\"ad-img-container\">  \n                    <mat-card-content  class=\"ad-img-aspect\">  \n                        <div class=\"ad-img-overlay visible\">\n                            <img src=\"/assets/imgs/icon/photo.png\" *ngIf=\"imgUrl.length < 3\">\n                            <div *ngIf=\"imgUrl.length > 2\">\n                                <img [src]=\"imgUrl[2]\" class=\"ad-img\">\n                                <mat-icon  class=\"delete-img\" id=\"ad-img-3\" (click)=\"deleteImage(2)\">remove_circle_outline</mat-icon>\n                            </div>\n                        </div>\n                    </mat-card-content>  \n                </mat-card>\n            </mat-grid-tile>\n            <mat-grid-tile\n                [colspan]=\"1\"\n                [rowspan]=\"1\">\n                <input class=\"img-input\" #imageUpload type=\"file\" accept=\"image/*\" multiple=\"\">\n                <mat-card class=\"ad-img-container\">  \n                    <mat-card-content  class=\"ad-img-aspect\">  \n                        <div class=\"ad-img-overlay visible\"  (click)=\"uploadImage()\" *ngIf=\"imgUrl.length < 4\">\n                            <img src=\"/assets/imgs/plus.png\" alt=\"plus icon\" width=\"28\" height=\"28\" class=\"ad-img-plus\">\n                        </div>\n                        <div class=\"ad-img-overlay visible\" *ngIf=\"imgUrl.length > 3\">\n                            <img [src]=\"imgUrl[3]\" class=\"ad-img\">\n                            \n                            <mat-icon  class=\"delete-img\" id=\"ad-img-4\" (click)=\"deleteImage(3)\">remove_circle_outline</mat-icon>\n                        </div>\n                    </mat-card-content>  \n                </mat-card>\n            </mat-grid-tile>\n          </mat-grid-list>\n    </div>\n    <mat-error *ngIf=\"getMessage() && isCompleted\" class=\"mat-error\">{{ getMessage() }}</mat-error>  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-header/main-header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-header/main-header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"header-bar\">\n    <mat-toolbar-row  fxHide fxShow.gt-xs>\n        <div fxFlex fxLayout fxLayoutAlign=\"flex-head\">\n            <div class=\"center-child-vh\">\n              <img class=\"mooov-logo\" src=\"{{ mooovLogo }}\" alt=\"Mooov logo\">\n            </div>\n            <p class=\"tagline\">Speedy same day removals!</p>\n          </div>\n          <div fxFlex fxLayout fxLayoutAlign=\"flex-end\">\n            <img class=\"store-badge\" src=\"/assets/imgs/logo/appstore-badge.svg\">\n            <img class=\"store-badge\" src=\"/assets/imgs/logo/googleplaystore-badge.png\">\n          </div>\n    </mat-toolbar-row>\n    <mat-toolbar-row  fxShow fxHide.gt-xs>\n        <div fxFlex fxLayout fxLayoutAlign=\"center\">\n            <div class=\"center-child-vh\">\n              <img class=\"mooov-logo\" src=\"{{ mooovLogo }}\" alt=\"Mooov logo\">\n            </div>\n          </div>\n    </mat-toolbar-row>\n    <mat-toolbar-row  fxShow fxHide.gt-xs>\n        <div fxFlex fxLayout fxLayoutAlign=\"center\">\n            <p class=\"tagline\">Speedy same day removals!</p>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-list/order-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-list/order-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\n    <thead>\n      <tr>\n        <th>Order No.</th>\n        <th>Name</th>\n        <th>Coffee List</th>\n      </tr>\n    </thead>\n  \n    <tbody>\n      <tr *ngFor=\"let order of coffeeOrders\">\n        <td>\n          {{ order.payload.doc.data().orderNumber }}\n        </td>\n        <td>{{ order.payload.doc.data().customerName }}</td>\n        <td>\n          <span *ngFor=\"let coffee of order.payload.doc.data().coffeeOrder\">\n            {{ coffee }}\n          </span>\n        </td>\n        <td\n          [hidden]=\"order.payload.doc.data().completed\"\n          (click)=\"markCompleted(order)\"\n        >\n          <i class=\"material-icons\">check</i>\n        </td>\n        <td\n          [hidden]=\"order.payload.doc.data().completed\"\n          (click)=\"deleteOrder(order)\"\n        >\n          <i class=\"material-icons\">delete_forever</i>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  \n  <ul>\n    <li></li>\n  </ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5>Coffee Order:</h5>\n<form [formGroup]=\"this.ordersService.form\">\n  <input\n    placeholder=\"Customer Name\"\n    formControlName=\"customerName\"\n    type=\"text\"\n    class=\"input-field col s12\"\n  />\n\n  <input\n    class=\"input-field col s12\"\n    placeholder=\"Order Number\"\n    formControlName=\"orderNumber\"\n    type=\"number\"\n  />\n\n  <button\n    class=\"waves-effect waves-light btn col s4\"\n    *ngFor=\"let coffee of coffees\"\n    (click)=\"addCoffee(coffee)\"\n  >\n    {{ coffee }}\n  </button>\n\n  <ul class=\"collection\">\n    <li *ngFor=\"let coffee of coffeeOrder\">\n      <span class=\"col s11\"> {{ coffee }} </span\n      ><a class=\"col s1\" (click)=\"removeCoffee(coffee)\">x</a>\n    </li>\n  </ul>\n\n  <button class=\"waves-effect waves-light btn col s12\" (click)=\"onSubmit()\">\n    Submit\n  </button>\n</form>");

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-database.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
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





var AppComponent = /** @class */ (function () {
    function AppComponent(db, firestore, http) {
        this.db = db;
        this.firestore = firestore;
        this.http = http;
        this.title = 'mooov-ng-app';
        this.itemValue = '';
        this.otpSent = false;
        this.phoneNumber = null;
        this.otp = null;
        this.items1 = this.firestore.collection('items').valueChanges();
    }
    AppComponent.prototype.ngOnInit = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
            .set('content-type', 'application/json')
            .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjU1NGE3NTQ3Nzg1ODdjOTRjMTY3M2U4ZWEyNDQ2MTZjMGMwNDNjYmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcXVhbnR1bS1oYXNoLTI3MjIyMSIsImF1ZCI6InF1YW50dW0taGFzaC0yNzIyMjEiLCJhdXRoX3RpbWUiOjE1OTYyOTQ0MTYsInVzZXJfaWQiOiJtbG0yMjZxVDNqWkppR2RuTndOU2pHRzRoaGcxIiwic3ViIjoibWxtMjI2cVQzalpKaUdkbk53TlNqR0c0aGhnMSIsImlhdCI6MTU5NjI5NDQxNiwiZXhwIjoxNTk2Mjk4MDE2LCJlbWFpbCI6IjQ2ODg4ODg4ODg4QG1vb292LmlvIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV9udW1iZXIiOiIrNDY4ODg4ODg4ODgiLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7InBob25lIjpbIis0Njg4ODg4ODg4OCJdLCJlbWFpbCI6WyI0Njg4ODg4ODg4OEBtb29vdi5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.vhBfhEZHCy4HmCItMSbwlyBCC3M3LGYxMzq1HezJLlBDvwcJosfeswfc2Z4b7AZgXS9iriksvBdhr1f9R956luq2SfrovDk5Q3q0rKgblvhoW6TGN8bNiQ_bki158oUUTj9TVI_7Nx7l286aEcoHmMXRzUAHA5MqgokTiV5OLxSxJJ0IMkrRh1cypIvjvl6UnkntyyYlt0STs21o2RiELuHlrx509FPZhpP7-upLUO6Lz-WW6yEVxu6eaOOcsr66mNeCP4Ra4ilFB0B5YknWyRHCX_sJZ4WkFcyq8yucQqfSSUyOt2G5SbeyzlMAvdy1cfmKc0aSEzWK4XMTDorfvw');
        this.http.get('https://api.npms.io/v2/search?q=scope:angular', { 'headers': headers }).subscribe(function (data) {
            console.log(data.total);
        });
    };
    AppComponent.prototype.onSubmit = function () {
        this.db.list('items').push({ content: this.itemValue });
        this.itemValue = '';
    };
    AppComponent.prototype.sendOtp = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPhoneNumber('+46 8 888 888 88', this.recaptchaVerifier)
            .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            _this.confirmationResult = confirmationResult;
            _this.otpSent = true;
        }).catch(function (err) {
            console.log(err);
        });
    };
    AppComponent.prototype.signIn = function () {
        var _this = this;
        console.log("otp : ", this.otp);
        var credential = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].PhoneAuthProvider.credential(this.confirmationResult.verificationId, this.otp);
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithCredential(credential).then(function (credential1) {
            credential1.user.getIdToken().then(function (token) {
                console.log('token id :', token);
                var headers = { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' };
                _this.http.get('https://api.npms.io/v2/search?q=scope:angular', { headers: headers }).subscribe(function (data) {
                    console.log(data.total);
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
        // this.confirmationResult.confirm(this.otp).then( user => {
        //   console.log(user);
        //  });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
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
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-database.js");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/order-list/order-list.component.ts");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./service/orders.service */ "./src/app/service/orders.service.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
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
                _begin_state_address_handler_address_handler_component__WEBPACK_IMPORTED_MODULE_26__["AddressHandlerComponent"],
                _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_36__["OrderListComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_38__["OrdersComponent"]
            ],
            imports: [
                ngx_markdown__WEBPACK_IMPORTED_MODULE_25__["MarkdownModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_23__["AgmCoreModule"].forRoot(googleMapsParams),
                _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_35__["AngularFireDatabaseModule"],
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
                _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
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
            providers: [_service_orders_service__WEBPACK_IMPORTED_MODULE_37__["OrdersService"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 600px) {\n  .container .mat-card .mat-card-title {\n    box-shadow: none;\n    font-size: 18px;\n    color: #000;\n  }\n  #address-handler-img {\n    display: flex;\n    position: relative;\n    border-radius: 10px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 10%;\n    align-items: center;\n    margin-left: -30px;\n  }\n  #address-handler-img p {\n    font-size: 20px;\n    padding-left: 5px;\n  }\n  ::ng-deep .mat-button-toggle {\n    width: 87px;\n    background-color: #8d8a8a;\n  }\n  .mat-error {\n    font-size: 100%;\n    margin-left: 17.5px;\n  }\n  .address-handler-info {\n    overflow: hidden;\n    width: 100%;\n    font-size: 13px;\n  }\n  #phone-info {\n    overflow: hidden;\n    width: 100%;\n    font-size: 13px;\n  }\n  .ad-floors {\n    overflow: hidden;\n    width: 30%;\n    font-size: 13px;\n  }\n  .ad-door {\n    overflow: hidden;\n    padding-left: 5px;\n    width: 40%;\n    font-size: 13px;\n  }\n  .stair-img {\n    width: 100%;\n    height: 32px;\n  }\n}\n\n@media (max-width: 600px) {\n  .container .mat-card .mat-card-title {\n    box-shadow: none;\n    font-weight: 600;\n    font-size: 10px;\n    color: #000;\n  }\n  .mat-error {\n    font-size: 70%;\n    margin-left: 17.5px;\n  }\n  .address-handler-info {\n    overflow: hidden;\n    width: 100%;\n    font-size: 8px;\n  }\n  #phone-info {\n    overflow: hidden;\n    width: 100%;\n    font-size: 8px;\n  }\n  .ad-floors {\n    overflow: hidden;\n    width: 30%;\n    font-size: 8px;\n  }\n  .ad-door {\n    overflow: hidden;\n    padding-left: 5px;\n    width: 40%;\n    font-size: 8px;\n  }\n  #address-handler-img {\n    display: flex;\n    position: relative;\n    border-radius: 10px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 10%;\n    align-items: center;\n    margin-left: -25px;\n  }\n  .address-handler-info img {\n    height: 18px;\n  }\n  #address-handler-img img {\n    width: 20px;\n    height: 20px;\n  }\n  #address-handler-img p {\n    padding-left: 5px;\n  }\n  ::ng-deep .mat-button-toggle-button {\n    height: 25px !important;\n    width: 70px !important;\n  }\n  .stair-img {\n    width: 100%;\n    height: 25px;\n  }\n}\n\n.mat-card {\n  color: #080202;\n  box-shadow: none;\n  background-color: rgba(250, 250, 250, 0.596) !important;\n  padding: 0;\n}\n\n.container .mat-card mat-icon {\n  color: #8d8a8a;\n}\n\n.full-width {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-label {\n  color: #8d8a8a !important;\n}\n\n::ng-deep .mat-button-toggle-checked {\n  background-color: #fff;\n}\n\n::ng-deep .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 0px !important;\n}\n\n.mat-button-toggle-appearance-standard {\n  color: black;\n  background-color: #ebebeb;\n}\n\n#phone-info p {\n  margin: 0 0 0 0;\n  color: #8d8a8a;\n}\n\n.ad-floors-door .ad-floors p {\n  margin: 0 0 0 0;\n  color: #8d8a8a;\n}\n\n.ad-floors-door .ad-door p {\n  margin: 0 0 0 0;\n  color: #8d8a8a;\n}\n\n.ad-floors-door {\n  display: flex;\n}\n\n.stair-section p {\n  margin: 0 0 0px !important;\n  font-size: 10px;\n  color: #a8a6a6;\n}\n\n#phone-info mat-form-field {\n  width: 61% !important;\n}\n\n.ad-floors-door mat-form-field {\n  width: 98% !important;\n}\n\n.ad-floors-door .ad-door mat-form-field {\n  width: 75% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW4tc3RhdGUvYWRkcmVzcy1oYW5kbGVyL0M6XFxVc2Vyc1xcZWd1aWh0YVxcTGVhcm5pbmdcXG1vb292XFxtb29vdi1uZy1hcHAvc3JjXFxhcHBcXGJlZ2luLXN0YXRlXFxhZGRyZXNzLWhhbmRsZXJcXGFkZHJlc3MtaGFuZGxlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmVnaW4tc3RhdGUvYWRkcmVzcy1oYW5kbGVyL2FkZHJlc3MtaGFuZGxlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0VDQ2pCO0VERUU7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsa0JBQWtCO0VDQXhCO0VER0U7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0VDRHZCO0VESUU7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0VDRi9CO0VES0U7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0VDSHpCO0VETUU7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7RUNKckI7RURPRTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtFQ0xyQjtFRFFFO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixlQUFlO0VDTnJCO0VEU0U7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixlQUFlO0VDUHJCO0VEVUU7SUFDSSxXQUFXO0lBQ1gsWUFBWTtFQ1JsQjtBQUNGOztBRFdBO0VBQ0k7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0VDUmpCO0VEVUU7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0VDUnpCO0VEV0U7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7RUNUcEI7RURZRTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztFQ1ZwQjtFRGFFO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjO0VDWHBCO0VEY0U7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixjQUFjO0VDWnBCO0VEZUU7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsa0JBQWtCO0VDYnhCO0VEaUJFO0lBQ0ksWUFBWTtFQ2ZsQjtFRGtCRTtJQUNJLFdBQVc7SUFDWCxZQUFZO0VDaEJsQjtFRG1CRTtJQUNJLGlCQUFpQjtFQ2pCdkI7RURvQkU7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0VDbEI1QjtFRHFCRTtJQUNJLFdBQVc7SUFDWCxZQUFZO0VDbkJsQjtBQUNGOztBRHNCQTtFQUNJLGNBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1REFBdUQ7RUFDdkQsVUFBVTtBQ25CZDs7QURzQkE7RUFDSSxjQUFjO0FDbkJsQjs7QUR1QkE7RUFDSSxXQUFXO0FDcEJmOztBRHVCQTtFQUNJLHlCQUF5QjtBQ3BCN0I7O0FEdUJBO0VBQ0ksc0JBQXNCO0FDcEIxQjs7QUR1QkE7RUFDSSwyQkFBMkI7QUNwQi9COztBRHdCQTtFQUNJLFlBQVk7RUFDWix5QkFBeUI7QUNyQjdCOztBRHdCQTtFQUNJLGVBQWU7RUFDZixjQUFjO0FDckJsQjs7QUR3QkE7RUFDSSxlQUFlO0VBQ2YsY0FBYztBQ3JCbEI7O0FEd0JBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7QUNyQmxCOztBRHdCQTtFQUNJLGFBQWE7QUNyQmpCOztBRDJCQTtFQUNJLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsY0FBYztBQ3hCbEI7O0FENkJBO0VBQ0kscUJBQXFCO0FDMUJ6Qjs7QUQ2QkE7RUFDSSxxQkFBcUI7QUMxQnpCOztBRDZCQTtFQUNJLHFCQUFxQjtBQzFCekIiLCJmaWxlIjoic3JjL2FwcC9iZWdpbi1zdGF0ZS9hZGRyZXNzLWhhbmRsZXIvYWRkcmVzcy1oYW5kbGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAgIC5jb250YWluZXIgLm1hdC1jYXJkIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkZHJlc3MtaGFuZGxlci1pbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWRkcmVzcy1oYW5kbGVyLWltZyBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XHJcbiAgICAgICAgd2lkdGg6IDg3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhkOGE4YTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWVycm9yIHtcclxuICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3LjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkcmVzcy1oYW5kbGVyLWluZm8ge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgICNwaG9uZS1pbmZvIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWQtZmxvb3JzIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZC1kb29yIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFpci1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIC5jb250YWluZXIgLm1hdC1jYXJkIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC5tYXQtZXJyb3Ige1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNy41cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZHJlc3MtaGFuZGxlci1pbmZvIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwaG9uZS1pbmZvIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZC1mbG9vcnMge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWQtZG9vciB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZGRyZXNzLWhhbmRsZXItaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5hZGRyZXNzLWhhbmRsZXItaW5mbyBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWRkcmVzcy1oYW5kbGVyLWltZyBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWRkcmVzcy1oYW5kbGVyLWltZyBwIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhaXItaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgICBjb2xvcjogcmdiKDgsIDIsIDIpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41OTYpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5tYXQtY2FyZCBtYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogIzhkOGE4YTtcclxufVxyXG5cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjOGQ4YThhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG5cclxuI3Bob25lLWluZm8gcCB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBjb2xvcjogIzhkOGE4YTtcclxufVxyXG5cclxuLmFkLWZsb29ycy1kb29yIC5hZC1mbG9vcnMgcCB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBjb2xvcjogIzhkOGE4YTtcclxufVxyXG5cclxuLmFkLWZsb29ycy1kb29yIC5hZC1kb29yIHAge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgY29sb3I6ICM4ZDhhOGE7XHJcbn1cclxuXHJcbi5hZC1mbG9vcnMtZG9vciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc3RhaXItc2VjdGlvbiBwIHtcclxuICAgIG1hcmdpbjogMCAwIDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNhOGE2YTY7XHJcbn1cclxuXHJcblxyXG5cclxuI3Bob25lLWluZm8gbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDYxJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWQtZmxvb3JzLWRvb3IgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWQtZmxvb3JzLWRvb3IgLmFkLWRvb3IgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIgLm1hdC1jYXJkIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgI2FkZHJlc3MtaGFuZGxlci1pbWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgfVxuICAjYWRkcmVzcy1oYW5kbGVyLWltZyBwIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgd2lkdGg6IDg3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhkOGE4YTtcbiAgfVxuICAubWF0LWVycm9yIHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE3LjVweDtcbiAgfVxuICAuYWRkcmVzcy1oYW5kbGVyLWluZm8ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gICNwaG9uZS1pbmZvIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuYWQtZmxvb3JzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5hZC1kb29yIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5zdGFpci1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciAubWF0LWNhcmQgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIC5tYXQtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNy41cHg7XG4gIH1cbiAgLmFkZHJlc3MtaGFuZGxlci1pbmZvIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gICNwaG9uZS1pbmZvIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gIC5hZC1mbG9vcnMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDMwJTtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAuYWQtZG9vciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG4gICNhZGRyZXNzLWhhbmRsZXItaW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIH1cbiAgLmFkZHJlc3MtaGFuZGxlci1pbmZvIGltZyB7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG4gICNhZGRyZXNzLWhhbmRsZXItaW1nIGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gICNhZGRyZXNzLWhhbmRsZXItaW1nIHAge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zdGFpci1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxufVxuXG4ubWF0LWNhcmQge1xuICBjb2xvcjogIzA4MDIwMjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjU5NikgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhaW5lciAubWF0LWNhcmQgbWF0LWljb24ge1xuICBjb2xvcjogIzhkOGE4YTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjOGQ4YThhICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG5cbiNwaG9uZS1pbmZvIHAge1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIGNvbG9yOiAjOGQ4YThhO1xufVxuXG4uYWQtZmxvb3JzLWRvb3IgLmFkLWZsb29ycyBwIHtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBjb2xvcjogIzhkOGE4YTtcbn1cblxuLmFkLWZsb29ycy1kb29yIC5hZC1kb29yIHAge1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIGNvbG9yOiAjOGQ4YThhO1xufVxuXG4uYWQtZmxvb3JzLWRvb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RhaXItc2VjdGlvbiBwIHtcbiAgbWFyZ2luOiAwIDAgMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNhOGE2YTY7XG59XG5cbiNwaG9uZS1pbmZvIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDYxJSAhaW1wb3J0YW50O1xufVxuXG4uYWQtZmxvb3JzLWRvb3IgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogOTglICFpbXBvcnRhbnQ7XG59XG5cbi5hZC1mbG9vcnMtZG9vciAuYWQtZG9vciBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

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
        this.phoneTitle = '';
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
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
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
        __metadata("design:type", Object)
    ], AddressHandlerComponent.prototype, "phoneTitle", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 600px){\r\n    .container {\r\n        max-width: 495px;\r\n        width: 495px;\r\n        margin: 30px auto 50px;\r\n        border-radius:20px;\r\n        box-shadow: 0 2px 28px 0 rgb(168, 166, 166);\r\n        background-color: #f8f9fa;\r\n    }\r\n\r\n    #ad-create div.sub-item {\r\n        padding-top: 5px;\r\n        margin-left: 30px;\r\n        margin-right: 30px;\r\n    }\r\n\r\n    #ad-create div.sub-item p {\r\n        font-family: Lato,sans-serif;\r\n        font-size: 25px;\r\n        color: #000;\r\n        margin: 0 0 1px;\r\n    }\r\n\r\n    #ad-create div.sub-item p.item-title {\r\n        color: rgb(0, 0, 0);\r\n        font-weight: 500;\r\n        font-size: 25px;\r\n        padding: 0px 0px 20px;\r\n    }\r\n\r\n    .mat-error {\r\n        font-size: 100%;\r\n        margin-left: 17.5px;\r\n    }\r\n\r\n    #ad-preview {\r\n        display: -ms-flexbox;\r\n        padding-top: 20px;\r\n        padding-left: 30px;\r\n        display: flex;\r\n    }\r\n\r\n    #ad-create div.sub-item .mat-input-field {\r\n        font-size: 13px;\r\n    } \r\n\r\n    #ad-create div.sub-item .carry-title {\r\n        font-size: 14px;\r\n    }\r\n\r\n    ::ng-deep .mat-button-toggle-button {\r\n        height: 32px !important;\r\n    }\r\n\r\n    .collection-time-title ::ng-deep .mat-button-toggle-button {\r\n        height: 40px !important;\r\n        width: 100% !important;\r\n    }\r\n\r\n    .ad-price-info {\r\n        overflow: hidden;\r\n        width: 100%;\r\n        font-size: 13px;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .sub-item .ad-time-list .time-select-form {\r\n        width: 100%;\r\n        background: #eaeff2;\r\n        border-radius: 8px;\r\n        font-size: 13px;\r\n    }\r\n\r\n    #ad-pickup-time-title .mat-icon {\r\n        width: 24px;\r\n        height: 24px;\r\n        padding-right: 6px;\r\n        color: #fa8925\r\n    }\r\n\r\n    #ad-pickup-time-title {\r\n        display: flex;\r\n        font-family: Lato,sans-serif;\r\n        font-size: 18px;\r\n        color: rgb(49, 48, 48);\r\n        margin: 0 -30px 1px;\r\n    }\r\n    \r\n}\r\n\r\n@media (max-width: 600px){\r\n\r\n    .container {\r\n        border-radius:20px;\r\n        box-shadow: 0 2px 2px 0 rgb(168, 166, 166);\r\n        background-color: #f8f9fa;\r\n    }\r\n\r\n\r\n    #ad-create div.sub-item p {\r\n        font-family: Lato,sans-serif;\r\n        font-size: 18px;\r\n        color: rgb(49, 48, 48);\r\n        margin: 0 0 1px;\r\n    }\r\n\r\n    #ad-create div.sub-item {\r\n        padding-top: 5px;\r\n        margin-left: 25px;\r\n        margin-right: 25px;\r\n    }\r\n\r\n    #ad-create div.sub-item p.item-title {\r\n        color: rgb(0, 0, 0);\r\n        font-weight: 500;\r\n        font-size: 18px;\r\n    }\r\n   \r\n    .mat-error {\r\n        font-size: 70%;\r\n        margin-left: 17.5px;\r\n    }\r\n\r\n    #ad-pickup-time-title {\r\n        display: flex;\r\n        font-family: Lato,sans-serif;\r\n        font-size: 18px;\r\n        color: rgb(49, 48, 48);\r\n        margin: 0 -25px 1px;\r\n    }\r\n\r\n    #ad-preview {\r\n        display: flex;\r\n        padding-left: 20px;\r\n        padding-top: 20px;\r\n    }\r\n\r\n    #ad-create div.sub-item .mat-input-field {\r\n        font-size: 8px;\r\n    } \r\n\r\n    #ad-create div.sub-item .carry-title {\r\n        font-size: 8px;\r\n    }\r\n\r\n    ::ng-deep .mat-button-toggle-button {\r\n        height: 25px !important;\r\n        width: 70px !important;\r\n    }\r\n\r\n    .collection-time-title ::ng-deep .mat-button-toggle-button {\r\n        height: 30px !important;\r\n        width: 100% !important;\r\n    }\r\n    .carry-toggle img {\r\n        width: 70px;\r\n        position: relative;\r\n    }\r\n\r\n    .ad-price-info {\r\n        overflow: hidden;\r\n        padding-left: 5px;\r\n        width: 100%;\r\n        font-size: 6px;\r\n        margin-top: 11px;\r\n    }\r\n\r\n    .sub-item .ad-time-list .time-select-form {\r\n        width: 100%;\r\n        background: #eaeff2;\r\n        border-radius: 5px;\r\n        font-size: 8px;\r\n    }\r\n\r\n    #ad-pickup-time-title .mat-icon {\r\n        font-size: 20px;\r\n        color: #fa8925\r\n    }\r\n}\r\n\r\n.ad-price-info .ad-price-form {\r\n    width: 100%;\r\n}\r\n\r\n.ad-price-info .ad-price-form .ad-price {\r\n   font-size: 18px;\r\n   color: #fdc200;\r\n}\r\n\r\n::ng-deep .mat-form-field-prefix {\r\n    width: 70% !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-prefix {\r\n    top: -4px !important;\r\n}\r\n\r\n#ad-create {\r\n    display: block;\r\n}\r\n\r\n#ad-preview-img {\r\n    position: relative;\r\n    min-width: 100px;\r\n    width: 100px;\r\n    min-height: 100px;\r\n    height: 100px;\r\n    border-radius: 10px;\r\n    background-color: silver;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 50%;\r\n}\r\n\r\n.ad-preview-info {\r\n    overflow: hidden;\r\n    padding-left: 5%;\r\n}\r\n\r\n#ad-preview-title {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.sub-heading {\r\n    font-weight: 700;\r\n}\r\n\r\n.ad-feat-row {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 15px;\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.ad-checkmark {\r\n    height: 16px;\r\n    margin-right: 8px;\r\n}\r\n\r\n#edit-title-and-images-button {\r\n    margin-left: 30px;\r\n    padding: 15px 0;\r\n    -webkit-appearance: none;\r\n    background: none;\r\n    border: none;\r\n    font-size: 16px;\r\n    color: #42a5f5;\r\n    outline: none;\r\n}\r\n\r\n#title-and-images-create-form {\r\n    position: relative;\r\n    padding: 20px 0 0px;\r\n    background: #f8f9fa;\r\n    border-radius: 15px;\r\n}\r\n\r\n.sub-item .ad-delivery-title {\r\n    padding-bottom: 10px;\r\n}\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n#ad-preview-img-num {\r\n    font-size: 12px;\r\n    padding: 2px;\r\n    position: absolute;\r\n    bottom: 3px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    border: none;\r\n    width: 16px;\r\n    height: 16px;\r\n    right: 3px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#ad-create div.sub-item span{\r\n    font-size: 12px;\r\n    color: #8d8a8a;\r\n    margin-top: -10px;\r\n}\r\n\r\n#ad-create div.sub-item .carry-section-group{\r\n    width: 50%;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\r\n    line-height: 0px !important;\r\n}\r\n\r\n::ng-deep .mat-button-toggle{\r\n    background-color: #8d8a8a;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-checked {\r\n    background-color: #fff;\r\n}\r\n\r\n.place-holder {\r\n    font-family: Lato,sans-serif;\r\n    font-size: 12px;\r\n    color: #a8a6a6;\r\n}\r\n\r\n.desc {\r\n    width: 100%;\r\n}\r\n\r\n.section-blank-line {\r\n    width: 100%;\r\n    height: 1px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.mat-slide-toggle-label {\r\n    width: 50%;\r\n}\r\n\r\n#ad-create div.sub-item span {\r\n    font-size: 10px;\r\n}\r\n\r\n.mat-grid-list {\r\n    margin-top: 5px;\r\n}\r\n\r\n.mat-grid-tile {\r\n    font-weight: 300;\r\n    font-size: 12px;\r\n    color: #464545;\r\n}\r\n\r\n.mat-grid-tile >::ng-deep .mat-figure{\r\n    justify-content: flex-start;\r\n    margin-left: 5px;\r\n}\r\n\r\n.drop-down-tip.left {\r\n    left: 36px;\r\n}\r\n\r\n.drop-down-tip {\r\n    height: 8px;\r\n    position: absolute;\r\n    top: -8px;\r\n}\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\r\n    background-color: #eaeff2 !important;\r\n    border-radius: 5px;\r\n}\r\n\r\n::ng-deep .mat-form-field-wrapper {\r\n    padding-bottom: 0px;\r\n}\r\n\r\n::ng-deep .mat-button-toggle-label-content {\r\n    padding: 0 0 0 0 !important;\r\n}\r\n\r\n.sub-item .mat-card {\r\n    background: #ffffff;\r\n    color: #000;\r\n    box-shadow: none;\r\n    padding: 0px;\r\n}\r\n\r\n::ng-deep  .mat-radio-outer-circle {\r\n    border-color: rgba(145, 144, 144, 0.54);\r\n}\r\n\r\n.carry-section .carry-help {\r\n    color: #fdc200;\r\n    width: 50%;\r\n}\r\n\r\n@media (min-width: 375px) {\r\n    .cta {\r\n        width: 80%;\r\n        height: 60px;\r\n        border-radius: 30px;\r\n        font-size: 22px;\r\n        font-weight: 900;\r\n    }\r\n}\r\n\r\n.cta {\r\n    width: 80%;\r\n    display: block;\r\n    height: 48px;\r\n    margin: 16px auto 30px;\r\n    border-radius: 30px;\r\n    border: none;\r\n    background-color: #2a91f5;\r\n    cursor: pointer;\r\n    outline: none;\r\n    -webkit-appearance: none;\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.section-seperator-line {\r\n    width: 89%;\r\n    height: 1px;\r\n    background-color: #dde0f3;\r\n    margin: 20px 20px 20px;\r\n}\r\n\r\nagm-map {\r\n    height: 400px;\r\n  }\r\n\r\n.autocomplete-container {\r\n    padding: 1rem 0 1rem 0;\r\n    width: 50%;\r\n}\r\n\r\n.sub-item .container {\r\n    width: 98%;\r\n}\r\n\r\n::ng-deep .mat-tab-label .mat-tab-label-content {\r\n    color: #000;\r\n    font-size: 12px;\r\n}\r\n\r\n::ng-deep mat-ink-bar {\r\n    border-bottom: 0;\r\n}\r\n\r\n::ng-deep mat-tab {\r\n    width: 50%;\r\n}\r\n\r\n.mat-button-toggle-appearance-standard {\r\n    color: black;\r\n    background-color: #ebebeb;\r\n}\r\n\r\n.light-button {\r\n    font-size: 110%;\r\n    border: 2px solid #fdc200 !important;\r\n    margin: 1px 1px 1px 1px;\r\n    border-radius: 4px;\r\n}\r\n\r\n::ng-deep .sub-item .section-list .time-checkbox .mat-checkbox-inner-container {\r\n    display: none!important; \r\n}\r\n\r\n.sub-item .section-list .time-checkbox {\r\n    width: 24.3% !important;\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin: 5px 10px 5px 10px;\r\n    background-color: #f8f9fa;\r\n    border-radius: 5px;\r\n    color: #8d8a8a;\r\n}\r\n\r\n.sub-item .section-list {\r\n\r\n    background-color: #fff;\r\n}\r\n\r\n#time-slot-text {\r\n    margin-top: 10px;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    line-height: 1.38;\r\n    text-align: center;\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n.delivery-note {\r\n    line-height: 1.69;\r\n    text-align: center;\r\n}\r\n\r\n.phone-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.item-statement-section {\r\n    background-color: rgb(245, 241, 179);\r\n    border-radius: 5px;\r\n}\r\n\r\n.item-statement-section .item-statement {\r\n    margin-left: 5px;\r\n    font-size: 10px;\r\n    color: #504f4f;\r\n}\r\n\r\n::ng-deep .sub-item .item-statement-section .item-statement .mat-checkbox-layout {\r\n    white-space: normal;\r\n    width: 98%;\r\n}\r\n\r\n::ng-deep .sub-item .item-statement-section .item-statement .mat-checkbox-inner-container {\r\n    background-color: #fdc200;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-label {\r\n    margin-left: 5px;\r\n    color: black;\r\n}\r\n\r\n.phone-container {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    border: 1px solid #a8a6a6;\r\n    border-radius: 4px;\r\n}\r\n\r\n.country-code {\r\n    margin: 0 0 0 16px;\r\n    font-size: 18px;\r\n}\r\n\r\n.input-seperator {\r\n    font-size: 28px;\r\n    padding: 0;\r\n    font-weight: 300;\r\n    color: #cecece;\r\n    margin: -5px 8px 0 12px;\r\n}\r\n\r\n#resend-phone, .phone {\r\n    border: none;\r\n    outline: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n::ng-deep .mat-form-field-underline {\r\n /*change color of underline*/\r\n  background-color:  rgb(255, 255, 255) !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-ripple {\r\n /*change color of underline when focused*/\r\n background-color: rgb(255, 255, 255) !important;;\r\n}\r\n\r\n::-moz-placeholder {\r\n    color: rgb(10, 10, 10);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n::-ms-input-placeholder {\r\n    color: rgb(10, 10, 10);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n::placeholder {\r\n    color: rgb(10, 10, 10);\r\n    opacity: 1; /* Firefox */\r\n  }\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n   color: rgb(10, 10, 10);\r\n  }\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n   color: rgb(10, 10, 10);\r\n  }\r\n\r\n.price-container {\r\n      width: 100%;\r\n      margin-top: 10px;\r\n  }\r\n\r\n.mat-slider-horizontal {\r\n      width: 100%;\r\n  }\r\n\r\n::ng-deep .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb, .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\r\n      background-color: #fdc200;\r\n  }\r\n\r\n::ng-deep .mat-slider-thumb {\r\n      width: 25px !important;\r\n      height: 25px !important;\r\n      bottom: -48px !important;\r\n  }\r\n\r\n::ng-deep .mat-slider-thumb-label-text {\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n::ng-deep .mat-slider-horizontal .mat-slider-thumb-label {\r\n    top: 0px !important;\r\n}\r\n\r\nmat-slider ::ng-deep .mat-slider-wrapper ::ng-deep .mat-slider-track-wrapper ::ng-deep .mat-slider-track-background{\r\n    background-color: transparent; \r\n}\r\n\r\nmat-slider ::ng-deep .mat-slider-wrapper ::ng-deep .mat-slider-track-wrapper ::ng-deep .mat-slider-track-fill{\r\n    background-color: transparent; \r\n}\r\n\r\nmat-slider {\r\n    background-image: url(/assets/imgs/icon/furnitures.png);\r\n    background-size: 100% 118px;\r\n    height: 118px;\r\n    position: relative;\r\n}\r\n\r\n.sub-item p .total-amount {\r\n    font-weight: 200;\r\n}\r\n\r\n.sub-item .ad-submit-button {\r\n    padding-bottom: 2px;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\r\n     height: 0px !important; \r\n}\r\n\r\n.ad-pickup-day {\r\n    padding: 0px 10px 0px 10px;\r\n}\r\n\r\n.ad-pickup-day  .time-title {\r\n    padding: 10px 10px 10px 10px;\r\n    color: #8d8a8a;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW4tc3RhdGUvYmVnaW4tc3RhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLDJDQUEyQztRQUMzQyx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2YsV0FBVztRQUNYLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBRUksb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQjtJQUNKOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2Qjs7QUFFSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQiwwQ0FBMEM7UUFDMUMseUJBQXlCO0lBQzdCOzs7SUFHQTtRQUNJLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBR0ksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsY0FBYztRQUNkLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Y7SUFDSjtBQUNKOztBQUdBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0dBQ0csZUFBZTtHQUNmLGNBQWM7QUFDakI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBRUksYUFBYTtJQUViLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUVWLGFBQWE7SUFFYixtQkFBbUI7SUFFbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUVGO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFJQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUVJLGFBQWE7SUFFYiwyQkFBMkI7SUFFM0IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBR0E7Q0FDQyw0QkFBNEI7RUFDM0IsZ0RBQWdEO0FBQ2xEOztBQUVBO0NBQ0MseUNBQXlDO0NBQ3pDLCtDQUErQztBQUNoRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsWUFBWTtFQUMxQjs7QUFIRjtJQUNJLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsWUFBWTtFQUMxQjs7QUFIRjtJQUNJLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsWUFBWTtFQUMxQjs7QUFFRix5QkFBeUIsNEJBQTRCO0dBQ2xELHNCQUFzQjtFQUN2Qjs7QUFFRiwwQkFBMEIsbUJBQW1CO0dBQzFDLHNCQUFzQjtFQUN2Qjs7QUFFRjtNQUNNLFdBQVc7TUFDWCxnQkFBZ0I7RUFDcEI7O0FBQ0Y7TUFDTSxXQUFXO0VBQ2Y7O0FBR0Y7TUFDTSx5QkFBeUI7RUFDN0I7O0FBRUY7TUFDTSxzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHdCQUF3QjtFQUM1Qjs7QUFFRjtJQUNJLGlEQUFpRDtJQUNqRCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUdBO0lBQ0ksdURBQXVEO0lBQ3ZELDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0tBQ0ssc0JBQXNCO0FBQzNCOztBQUdBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9iZWdpbi1zdGF0ZS9iZWdpbi1zdGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogNDk1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ5NXB4O1xyXG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDI4cHggMCByZ2IoMTY4LCAxNjYsIDE2Nik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIH1cclxuXHJcbiAgICAjYWQtY3JlYXRlIGRpdi5zdWItaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkLWNyZWF0ZSBkaXYuc3ViLWl0ZW0gcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHAuaXRlbS10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1lcnJvciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNy41cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkLXByZXZpZXcge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIC5tYXQtaW5wdXQtZmllbGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH0gXHJcblxyXG4gICAgI2FkLWNyZWF0ZSBkaXYuc3ViLWl0ZW0gLmNhcnJ5LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2xsZWN0aW9uLXRpbWUtdGl0bGUgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkLXByaWNlLWluZm8ge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1pdGVtIC5hZC10aW1lLWxpc3QgLnRpbWUtc2VsZWN0LWZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYWVmZjI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWQtcGlja3VwLXRpbWUtdGl0bGUgLm1hdC1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmE4OTI1XHJcbiAgICB9XHJcblxyXG4gICAgI2FkLXBpY2t1cC10aW1lLXRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNDksIDQ4LCA0OCk7XHJcbiAgICAgICAgbWFyZ2luOiAwIC0zMHB4IDFweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2IoMTY4LCAxNjYsIDE2Nik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgI2FkLWNyZWF0ZSBkaXYuc3ViLWl0ZW0gcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig0OSwgNDgsIDQ4KTtcclxuICAgICAgICBtYXJnaW46IDAgMCAxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkLWNyZWF0ZSBkaXYuc3ViLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHAuaXRlbS10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgXHJcbiAgICAubWF0LWVycm9yIHtcclxuICAgICAgICBmb250LXNpemU6IDcwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTcuNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1waWNrdXAtdGltZS10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmb250LWZhbWlseTogTGF0byxzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogcmdiKDQ5LCA0OCwgNDgpO1xyXG4gICAgICAgIG1hcmdpbjogMCAtMjVweCAxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkLXByZXZpZXcge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIC5tYXQtaW5wdXQtZmllbGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfSBcclxuXHJcbiAgICAjYWQtY3JlYXRlIGRpdi5zdWItaXRlbSAuY2FycnktdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2xsZWN0aW9uLXRpbWUtdGl0bGUgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2FycnktdG9nZ2xlIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZC1wcmljZS1pbmZvIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1pdGVtIC5hZC10aW1lLWxpc3QgLnRpbWUtc2VsZWN0LWZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYWVmZjI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZC1waWNrdXAtdGltZS10aXRsZSAubWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogI2ZhODkyNVxyXG4gICAgfVxyXG59XHJcblxyXG4gIFxyXG4uYWQtcHJpY2UtaW5mbyAuYWQtcHJpY2UtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYWQtcHJpY2UtaW5mbyAuYWQtcHJpY2UtZm9ybSAuYWQtcHJpY2Uge1xyXG4gICBmb250LXNpemU6IDE4cHg7XHJcbiAgIGNvbG9yOiAjZmRjMjAwO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcHJlZml4IHtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCB7XHJcbiAgICB0b3A6IC00cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2FkLWNyZWF0ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbiNhZC1wcmV2aWV3LWltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG59XHJcblxyXG4uYWQtcHJldmlldy1pbmZvIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4jYWQtcHJldmlldy10aXRsZSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5zdWItaGVhZGluZyB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYWQtZmVhdC1yb3cge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5hZC1jaGVja21hcmsge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbiNlZGl0LXRpdGxlLWFuZC1pbWFnZXMtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNDJhNWY1O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3RpdGxlLWFuZC1pbWFnZXMtY3JlYXRlLWZvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc3ViLWl0ZW0gLmFkLWRlbGl2ZXJ5LXRpdGxlIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4jYWQtcHJldmlldy1pbWctbnVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgcmlnaHQ6IDNweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzhkOGE4YTtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG4jYWQtY3JlYXRlIGRpdi5zdWItaXRlbSAuY2Fycnktc2VjdGlvbi1ncm91cHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDhhOGE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucGxhY2UtaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2E4YTZhNjtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWJsYW5rLWxpbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2xpZGUtdG9nZ2xlLWxhYmVsIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNhZC1jcmVhdGUgZGl2LnN1Yi1pdGVtIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWdyaWQtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5tYXQtZ3JpZC10aWxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzQ2NDU0NTtcclxufVxyXG5cclxuLm1hdC1ncmlkLXRpbGUgPjo6bmctZGVlcCAubWF0LWZpZ3VyZXtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5kcm9wLWRvd24tdGlwLmxlZnQge1xyXG4gICAgbGVmdDogMzZweDtcclxufVxyXG5cclxuLmRyb3AtZG93bi10aXAge1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC04cHg7XHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVmZjIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWItaXRlbSAubWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG46Om5nLWRlZXAgIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNDUsIDE0NCwgMTQ0LCAwLjU0KTtcclxufVxyXG5cclxuLmNhcnJ5LXNlY3Rpb24gLmNhcnJ5LWhlbHAge1xyXG4gICAgY29sb3I6ICNmZGMyMDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIHtcclxuICAgIC5jdGEge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdGEge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IGF1dG8gMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5MWY1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNlY3Rpb24tc2VwZXJhdG9yLWxpbmUge1xyXG4gICAgd2lkdGg6IDg5JTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTBmMztcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbiAgXHJcbi5hdXRvY29tcGxldGUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uc3ViLWl0ZW0gLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTglO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBtYXQtaW5rLWJhciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgbWF0LXRhYiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5saWdodC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZkYzIwMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxcHggMXB4IDFweCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3ViLWl0ZW0gLnNlY3Rpb24tbGlzdCAudGltZS1jaGVja2JveCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG5cclxuLnN1Yi1pdGVtIC5zZWN0aW9uLWxpc3QgLnRpbWUtY2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDI0LjMlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjOGQ4YThhO1xyXG59XHJcblxyXG4uc3ViLWl0ZW0gLnNlY3Rpb24tbGlzdCB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI3RpbWUtc2xvdC10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4uZGVsaXZlcnktbm90ZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS42OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBob25lLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtLXN0YXRlbWVudC1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0MSwgMTc5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLml0ZW0tc3RhdGVtZW50LXNlY3Rpb24gLml0ZW0tc3RhdGVtZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzUwNGY0ZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zdWItaXRlbSAuaXRlbS1zdGF0ZW1lbnQtc2VjdGlvbiAuaXRlbS1zdGF0ZW1lbnQgLm1hdC1jaGVja2JveC1sYXlvdXQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3ViLWl0ZW0gLml0ZW0tc3RhdGVtZW50LXNlY3Rpb24gLml0ZW0tc3RhdGVtZW50IC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGMyMDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5waG9uZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOGE2YTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWNvZGUge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaW5wdXQtc2VwZXJhdG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNjZWNlY2U7XHJcbiAgICBtYXJnaW46IC01cHggOHB4IDAgMTJweDtcclxufVxyXG5cclxuI3Jlc2VuZC1waG9uZSwgLnBob25lIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50OztcclxufSBcclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gIH1cclxuICBcclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xyXG4gIH1cclxuXHJcbi5wcmljZS1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbi5tYXQtc2xpZGVyLWhvcml6b250YWwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRjMjAwO1xyXG4gIH1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci10aHVtYiB7XHJcbiAgICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3R0b206IC00OHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXNsaWRlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItd3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciA6Om5nLWRlZXAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBcclxufVxyXG5tYXQtc2xpZGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci10cmFjay13cmFwcGVyIDo6bmctZGVlcCAubWF0LXNsaWRlci10cmFjay1maWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxyXG59XHJcblxyXG5cclxubWF0LXNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWdzL2ljb24vZnVybml0dXJlcy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDExOHB4O1xyXG4gICAgaGVpZ2h0OiAxMThweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN1Yi1pdGVtIHAgLnRvdGFsLWFtb3VudCB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4uc3ViLWl0ZW0gLmFkLXN1Ym1pdC1idXR0b24ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuXHJcbi5hZC1waWNrdXAtZGF5IHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4uYWQtcGlja3VwLWRheSAgLnRpbWUtdGl0bGUge1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGNvbG9yOiAjOGQ4YThhO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

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
/* harmony import */ var _service_header_logo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/header-logo.service */ "./src/app/service/header-logo.service.ts");
/* harmony import */ var _service_ad_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/ad-image.service */ "./src/app/service/ad-image.service.ts");
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
    function BeginStateComponent(route, headerLogo, adImage) {
        this.route = route;
        this.headerLogo = headerLogo;
        this.adImage = adImage;
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
        this.timeList = { 'Today': JSON.parse(JSON.stringify(this.collectionTimes)), 'Tomorrow': JSON.parse(JSON.stringify(this.collectionTimes)) };
        this.selectedTimeListForToday = true;
        this.selectedTimes = new Map();
        this.selectedTimeSlotNumber = 0;
        this.payment = 25;
        this.isCompleted = false;
        this.isBlocketWeb = false;
        this.editDesAndImgs = true;
    }
    BeginStateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerLogo.changeHeaderLogo('/assets/imgs/logo/whim_mooov.png');
        this.route.queryParams.subscribe(function (params) {
            if (params['ref'] && params['ref'] === 'blocketweb') {
                _this.headerLogo.changeHeaderLogo('/assets/imgs/logo/tori-mooov-trans.png');
                _this.adImage.changeImgs(['https://i.blocketcdn.se/static/0/images/48/4859574879.jpg']);
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
        this.paymentFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Math.round(this.payment / 1) + ' EUR', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/(^[1-4][0-9])|(^[5][0])|(^[0-9])[ ]*EUR$/)
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
    BeginStateComponent.prototype.getTimeList = function (day) {
        if (day === 'Today') {
            var currentHour_1 = new Date().getHours();
            return this.timeList[day].filter(function (v) { return v.id >= currentHour_1; });
        }
        else {
            return this.timeList[day];
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
        if (value >= 1) {
            return Math.round(value / 1) + 'EUR';
        }
        return value;
    };
    BeginStateComponent.prototype.updateCharge = function (event) {
        this.paymentFC.setValue(Math.round(event.value / 1) + ' EUR');
        this.payment = event.value;
    };
    BeginStateComponent.prototype.updateSliderCharge = function (event) {
        if (!this.paymentFC.hasError('pattern')) {
            this.payment = event.target.value.replace('EUR', '') * 1;
        }
    };
    BeginStateComponent.prototype.getCharge = function () {
        return this.payment;
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
    BeginStateComponent.prototype.equals = function (objOne, objTwo) {
        if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
            return objOne.id === objTwo.id;
        }
    };
    BeginStateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_header_logo_service__WEBPACK_IMPORTED_MODULE_5__["HeaderLogoService"] },
        { type: _service_ad_image_service__WEBPACK_IMPORTED_MODULE_6__["AdImageService"] }
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_header_logo_service__WEBPACK_IMPORTED_MODULE_5__["HeaderLogoService"],
            _service_ad_image_service__WEBPACK_IMPORTED_MODULE_6__["AdImageService"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 600px){\r\n    .mat-error {\r\n        font-size: 100%;\r\n        margin-left: 17.5px;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .mat-error {\r\n        font-size: 70%;\r\n        margin-left: 17.5px;\r\n    }\r\n\r\n    .imgs-container  {\r\n        width: 85%;\r\n    }\r\n}\r\n\r\n.mat-grid-tile >::ng-deep .mat-figure{\r\n    padding: 4px;\r\n}\r\n\r\n.imgs-container .img-input {\r\n    display: none;\r\n}\r\n\r\n.imgs-container .ad-img-container {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n    -webkit-tap-highlight-color: transparent;\r\n    box-shadow: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n.ad-img-aspect {\r\n    width: 100%;\r\n    height: 0;\r\n    position: relative;\r\n    padding-top: 100%;\r\n}\r\n\r\n.ad-img, .ad-img-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.ad-img-overlay.visible {\r\n    visibility: visible;\r\n}\r\n\r\n.ad-img-overlay {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    z-index: 3;\r\n    border-radius: 10px;\r\n    border: 1px solid #eaeff2;\r\n    color: #fdc200;\r\n    visibility: hidden;\r\n    background-color: #eaeff2;\r\n}\r\n\r\n.imgs-container .mat-card {\r\n    background: white;\r\n    color: white;\r\n}\r\n\r\n.ad-img-spinner {\r\n    display: none;\r\n}\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n.ad-img-clear {\r\n    position: absolute;\r\n    top: 3px;\r\n    right: 3px;\r\n    z-index: 2;\r\n    visibility: hidden;\r\n}\r\n\r\n.ad-img-overlay .ad-img {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n}\r\n\r\n.delete-img {\r\n    color: #ee1e0f;\r\n    position: absolute;\r\n    top: 2px;\r\n    right: -1px;\r\n    z-index: 1;\r\n    font-size: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVnaW4tc3RhdGUvaW1hZ2UtaGFuZGxlci9pbWFnZS1oYW5kbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUVJLGFBQWE7SUFFYix1QkFBdUI7SUFHdkIsc0JBQXNCO0lBRXRCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9iZWdpbi1zdGF0ZS9pbWFnZS1oYW5kbGVyL2ltYWdlLWhhbmRsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgICAubWF0LWVycm9yIHtcclxuICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3LjVweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAubWF0LWVycm9yIHtcclxuICAgICAgICBmb250LXNpemU6IDcwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTcuNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWdzLWNvbnRhaW5lciAge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtZ3JpZC10aWxlID46Om5nLWRlZXAgLm1hdC1maWd1cmV7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5pbWdzLWNvbnRhaW5lciAuaW1nLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pbWdzLWNvbnRhaW5lciAuYWQtaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmFkLWltZy1hc3BlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwJTtcclxufVxyXG5cclxuLmFkLWltZywgLmFkLWltZy1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmFkLWltZy1vdmVybGF5LnZpc2libGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmFkLWltZy1vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlZmYyO1xyXG4gICAgY29sb3I6ICNmZGMyMDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlZmYyO1xyXG59XHJcblxyXG4uaW1ncy1jb250YWluZXIgLm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWQtaW1nLXNwaW5uZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uYWQtaW1nLWNsZWFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgcmlnaHQ6IDNweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hZC1pbWctb3ZlcmxheSAuYWQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbi5kZWxldGUtaW1nIHtcclxuICAgIGNvbG9yOiAjZWUxZTBmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICByaWdodDogLTFweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbn0iXX0= */");

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
/* harmony import */ var src_app_service_ad_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/ad-image.service */ "./src/app/service/ad-image.service.ts");
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
    function ImageHandlerComponent(uploadService, adImage) {
        this.uploadService = uploadService;
        this.adImage = adImage;
        this.imgUrl = new Array();
        this.inputImgsNum = 0;
        this.isCompleted = false;
    }
    ImageHandlerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adImage.imgs.subscribe(function (imags) { return _this.imgUrl = imags; });
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
        { type: src_app_service_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"] },
        { type: src_app_service_ad_image_service__WEBPACK_IMPORTED_MODULE_2__["AdImageService"] }
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
        __metadata("design:paramtypes", [src_app_service_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"],
            src_app_service_ad_image_service__WEBPACK_IMPORTED_MODULE_2__["AdImageService"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n \r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n \r\n.navigation-items{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n \r\nmat-toolbar{\r\n    border-radius: 3px;\r\n}\r\n \r\n@media (max-width: 599px){\r\n    .mat-toolbar-row, .mat-toolbar-single-row {\r\n        height: 36px;\r\n    }\r\n}\r\n \r\n@media (min-width: 600px){\r\n    mat-toolbar{\r\n        border-radius: 0px;\r\n    }\r\n\r\n    img.mooov-logo {\r\n        height: 60px;\r\n        position: relative;\r\n    }\r\n\r\n    .header-bar {\r\n        border: 1px solid #fdc200;\r\n    }\r\n\r\n     p.tagline {\r\n        border-left: 1px solid rgb(7, 1, 1);\r\n        margin: 30px 0 20px 30px;\r\n        font-size: 18px;\r\n        color: #000;\r\n        padding: 5px 0 15px 29px;\r\n    }\r\n}\r\n \r\n@media (max-width: 600px){\r\n    \r\n    .header-bar {\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    img.mooov-logo {\r\n        margin-top: 10px;\r\n        height: 90px;\r\n        position: relative;\r\n        margin-top: 34px;\r\n    }\r\n\r\n\r\n    p.tagline {\r\n        display: none;\r\n        margin-top: 14px;\r\n        text-align: center;\r\n        color:  #000;\r\n        font-size: 12px;\r\n\r\n   }\r\n}\r\n \r\n.header-bar {\r\n    background-color: #fff;\r\n}\r\n \r\n.center-child-vh {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n \r\ndiv.section-desc a, p {\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n \r\np {\r\n    font-family: Lato,sans-serif;\r\n    color: #000;\r\n}\r\n \r\nimg.store-badge {\r\n    height: 38px;\r\n}\r\n \r\nimg {\r\n    border-style: none;\r\n}\r\n \r\n.mooov-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7S0FFQztRQUNHLG1DQUFtQztRQUNuQyx3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLFdBQVc7UUFDWCx3QkFBd0I7SUFDNUI7QUFDSjs7QUFHQTs7SUFFSTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7OztJQUdBO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGVBQWU7O0dBRXBCO0FBQ0g7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFFSSxhQUFhO0lBRWIsbUJBQW1CO0lBRW5CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztBQUNmOztBQUlBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIFxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuIFxyXG4ubmF2aWdhdGlvbi1pdGVtc3tcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuIFxyXG5tYXQtdG9vbGJhcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KXtcclxuICAgIC5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgICBtYXQtdG9vbGJhcntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nLm1vb292LWxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlci1iYXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZGMyMDA7XHJcbiAgICB9XHJcblxyXG4gICAgIHAudGFnbGluZSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoNywgMSwgMSk7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMjBweCAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMCAxNXB4IDI5cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgXHJcbiAgICAuaGVhZGVyLWJhciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZy5tb29vdi1sb2dvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzRweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcC50YWdsaW5lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAgIzAwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICB9XHJcbn1cclxuXHJcbi5oZWFkZXItYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jZW50ZXItY2hpbGQtdmgge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZGl2LnNlY3Rpb24tZGVzYyBhLCBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG8sc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5cclxuXHJcbmltZy5zdG9yZS1iYWRnZSB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm1vb292LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _service_header_logo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/header-logo.service */ "./src/app/service/header-logo.service.ts");
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
    function MainHeaderComponent(headerLogo) {
        this.headerLogo = headerLogo;
        this.mooovLogo = '';
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerLogo.logo.subscribe(function (logo) { return _this.mooovLogo = logo; });
    };
    MainHeaderComponent.ctorParameters = function () { return [
        { type: _service_header_logo_service__WEBPACK_IMPORTED_MODULE_1__["HeaderLogoService"] }
    ]; };
    MainHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'main-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-header/main-header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./main-header.component.css */ "./src/app/main-header/main-header.component.css")).default]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_header_logo_service__WEBPACK_IMPORTED_MODULE_1__["HeaderLogoService"]])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/order-list/order-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/order-list/order-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/order-list/order-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-list/order-list.component.ts ***!
  \****************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/orders.service */ "./src/app/service/orders.service.ts");
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


var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(ordersService) {
        var _this = this;
        this.ordersService = ordersService;
        this.deleteOrder = function (data) { return _this.ordersService.deleteCoffeeOrder(data); };
        this.markCompleted = function (data) { return _this.ordersService.updateCoffeeOrder(data); };
    }
    OrderListComponent.prototype.ngOnInit = function () {
        this.getCoffeeOrders();
    };
    OrderListComponent.prototype.getCoffeeOrders = function () {
        var _this = this;
        console.log('dddddddddeee');
        this.ordersService
            .getCoffeeOrders()
            .subscribe(function (res) {
            _this.coffeeOrders = res;
            console.log('ddddd');
        });
    };
    OrderListComponent.ctorParameters = function () { return [
        { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"] }
    ]; };
    OrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./order-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-list/order-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./order-list.component.css */ "./src/app/order-list/order-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/orders.service */ "./src/app/service/orders.service.ts");
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


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ordersService) {
        var _this = this;
        this.ordersService = ordersService;
        this.coffees = [
            'Americano',
            'Flat White',
            'Cappuccino',
            'Latte',
            'Espresso',
            'Machiato',
            'Mocha',
            'Hot Chocolate',
            'Tea'
        ];
        this.coffeeOrder = [];
        this.addCoffee = function (coffee) { return _this.coffeeOrder.push(coffee); };
        this.removeCoffee = function (coffee) {
            var index = _this.coffeeOrder.indexOf(coffee);
            if (index > -1) {
                _this.coffeeOrder.splice(index, 1);
            }
        };
    }
    OrdersComponent.prototype.ngOnInit = function () { };
    OrdersComponent.prototype.onSubmit = function () {
        this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
        var data = this.ordersService.form.value;
        this.ordersService.createCoffeeOrder(data).then(function (res) {
            /*do something here....maybe clear the form or give a success message*/
        });
    };
    OrdersComponent.ctorParameters = function () { return [
        { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"] }
    ]; };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __importDefault(__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/service/ad-image.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/ad-image.service.ts ***!
  \*********************************************/
/*! exports provided: AdImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdImageService", function() { return AdImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AdImageService = /** @class */ (function () {
    function AdImageService() {
        this.imgs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    AdImageService.prototype.changeImgs = function (imgs) {
        this.imgs.next(imgs);
    };
    AdImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AdImageService);
    return AdImageService;
}());



/***/ }),

/***/ "./src/app/service/header-logo.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/header-logo.service.ts ***!
  \************************************************/
/*! exports provided: HeaderLogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLogoService", function() { return HeaderLogoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeaderLogoService = /** @class */ (function () {
    function HeaderLogoService() {
        this.logo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('/assets/imgs/logo/tori-mooov-trans.png');
    }
    HeaderLogoService.prototype.changeHeaderLogo = function (logo) {
        this.logo.next(logo);
    };
    HeaderLogoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], HeaderLogoService);
    return HeaderLogoService;
}());



/***/ }),

/***/ "./src/app/service/orders.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/orders.service.ts ***!
  \*******************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm5/angular-fire-firestore.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersService = /** @class */ (function () {
    function OrdersService(firestore) {
        this.firestore = firestore;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            orderNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            coffeeOrder: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            completed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
    }
    // irestore CRUD actions example
    OrdersService.prototype.createCoffeeOrder = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.firestore
                .collection('coffeeOrders')
                .add(data)
                .then(function (res) { }, function (err) { return reject(err); });
        });
    };
    OrdersService.prototype.updateCoffeeOrder = function (data) {
        return this.firestore
            .collection('coffeeOrders')
            .doc(data.payload.doc.id)
            .set({ completed: true }, { merge: true });
    };
    OrdersService.prototype.getCoffeeOrders = function () {
        return this.firestore.collection('coffeeOrders').snapshotChanges();
    };
    OrdersService.prototype.deleteCoffeeOrder = function (data) {
        return this.firestore
            .collection('coffeeOrders')
            .doc(data.payload.doc.id)
            .delete();
    };
    OrdersService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], OrdersService);
    return OrdersService;
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
    GOOGLE_MAPS_API_KEY: 'AIzaSyDYKmJ94HSxRolBxEcmPs6zC5m09jzkvgM',
    firebase: {}
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