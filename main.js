(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _smart_parking_smart_parking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smart-parking/smart-parking.component */ "./src/app/smart-parking/smart-parking.component.ts");
/* harmony import */ var _lessons_list_lessons_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lessons-list/lessons-list.component */ "./src/app/lessons-list/lessons-list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register2_register2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register2/register2.component */ "./src/app/register2/register2.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_services_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/selective-preloading-strategy.service */ "./src/app/shared/services/selective-preloading-strategy.service.ts");
/* harmony import */ var _mind_map_mind_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mind-map/mind-map.component */ "./src/app/mind-map/mind-map.component.ts");












var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    },
    {
        path: 'mindmap',
        component: _mind_map_mind_map_component__WEBPACK_IMPORTED_MODULE_11__["MindMapComponent"]
    },
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'smartparking',
        component: _smart_parking_smart_parking_component__WEBPACK_IMPORTED_MODULE_4__["SmartParkingComponent"]
    },
    {
        path: 'lessons',
        component: _lessons_list_lessons_list_component__WEBPACK_IMPORTED_MODULE_5__["LessonsListComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    },
    {
        path: 'register2',
        component: _register2_register2_component__WEBPACK_IMPORTED_MODULE_8__["Register2Component"]
    },
    //   { path: 'signin', component: SigninComponent },
    //   { path: 'register', component: RegisterUserComponent },
    //   { path: 'authenticated', component: AuthenticatedUserComponent,
    //    canActivate: [AuthGuard]
    // },
    //   //   children: [
    //   //     { path: '', canActivateChild: [AuthGuard],
    //   //       children: [
    //   //         { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //   //       ] }
    //   //     ] },
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'school-list',
    //     component: SchoolListComponent
    //   },
    //   {
    //     path: 'school-maintenance',
    //     component: SchoolMaintenanceComponent
    //   },
    //   {
    //     path: 'mess-facilities',
    //     component: MenuComponent
    //   },
    //   {
    //     path: 'about-us',
    //     component: AboutUsComponent
    //   },
    //   {
    //     path: 'enquiry',
    //     component: EnquiryComponent
    //   },
    //   //{path: 'post-detail/:userId', component : PostDetailComponent }
    //   {
    //     path: 'school-detail/:schoolId',
    //     component: SchoolDetailComponent,
    //     canActivate: [AuthGuard],
    //   },
    //   {
    //     path: 'school-detail',
    //     component: SchoolDetailComponent,
    //     canActivate: [AuthGuard],
    //   },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // imports: [RouterModule.forRoot(routes)],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    enableTracing: false,
                    useHash: true,
                    preloadingStrategy: _shared_services_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_10__["SelectivePreloadingStrategyService"]
                })],
            providers: [_shared_services_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_10__["SelectivePreloadingStrategyService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n    <mat-toolbar color=\"primary\" class=\"example-toolbar\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\n          <button mat-icon-button (click)=\"snav.toggle()\">\n            <mat-icon>menu</mat-icon>\n          </button>\n\n          <button mat-button [matMenuTriggerFor]=\"menu\">Go Home  <mat-icon>home</mat-icon></button>\n          <mat-menu #menu=\"matMenu\">\n            <a href=\"https://discoveryspot.com/\" mat-menu-item>Discovery Spot</a>\n            <a href=\"http://ispaceinc.net/\" mat-menu-item>iSpace</a>\n            <button mat-menu-item>UWF</button>\n          </mat-menu>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"20px\">\n          <button mat-raised-button color=\"primary\" routerLink=\"/\">About</button>\n          <button mat-raised-button color=\"accent\" routerLink=\"/enquiry\">Help</button>\n          <button mat-raised-button routerLink=\"/login\">Login</button>\n          <button mat-raised-button routerLink=\"/register\">Register</button>\n          <button mat-raised-button routerLink=\"/register2\">Register2</button>\n      </div>\n    </mat-toolbar>\n\n    <mat-sidenav-container\n      class=\"example-sidenav-container\"\n      [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\"\n    >\n      <mat-sidenav\n        #snav\n        [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n        [fixedInViewport]=\"mobileQuery.matches\"\n        fixedTopGap=\"56\"\n      >\n        <mat-nav-list>\n          <a mat-list-item routerLink=\"/dashboard\">dashboard</a>\n          <a mat-list-item routerLink=\"/mindmap\">mindmap</a>\n          <a mat-list-item routerLink=\"/smartparking\">smartparking</a>\n          <a mat-list-item routerLink=\"/lessons\">lessons</a>\n          <a mat-list-item routerLink=\"/register\">Registration Menu1</a>\n          <a mat-list-item routerLink=\"/register2\">Registration Menu2</a>\n          <a mat-list-item routerLink=\"/smartparking\">Menu5</a>\n          <a mat-list-item routerLink=\"/smartparking\">Menu6</a>\n          <!-- <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{\n            nav\n          }}</a> -->\n        </mat-nav-list>\n      </mat-sidenav>\n\n      <mat-sidenav-content>\n          <router-outlet></router-outlet>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n\n  <!-- Copyright 2018 Google Inc. All Rights Reserved.\n      Use of this source code is governed by an MIT-style license that\n      can be found in the LICENSE file at http://angular.io/license -->\n\n\n<!--Scroll to top-->\n<!-- <button [ngClass]=\"{'show-scroll': showScroll}\" (click)=\"scrollToTop()\" class=\"scroll-to-top\">\n  Scroll To Top\n</button> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-to-top {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all .2s ease-in-out; }\n\n.show-scroll {\n  opacity: 1; }\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\np {\n  padding: 15px; }\n\n.md-card-image {\n  padding: 5px;\n  height: 550px;\n  width: 800px; }\n\n.mat-toolbar-single-row {\n  height: 72px; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  width: 100%;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\n\nh1.example-app-name {\n  margin-left: 8px; }\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n  background: #e6e6e6; }\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto; }\n\n.bagyaa-style-bottom-banner {\n  width: 100%;\n  margin-top: 20px;\n  background: url('logo.png') repeat-x bottom left !important;\n  height: 645px;\n  padding: 20px; }\n\n.banners {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  border-radius: 10px;\n  background-color: #f0eef4; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXE5vZGVQcm9qZWN0c1xcaVNwYWNlLW1hdGVyaWFsL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDViwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRLEVBQUE7O0FBRVY7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsOEVBQUE7RUFDQSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRTs0RkNKd0Y7RURNeEYsT0FBTztFQUNQLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFO2lFQ0w2RDtFRE83RCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUVYLGdCQUFnQjtFQUNoQiwyREFBMEU7RUFDMUUsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLXRvLXRvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2hvdy1zY3JvbGwge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5tZC1jYXJkLWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICB3aWR0aDo4MDBweDtcclxuICB9XHJcblxyXG4gIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcclxuICAgIGhlaWdodDogNzJweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgaDEuZXhhbXBsZS1hcHAtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuYmFneWFhLXN0eWxlLWJvdHRvbS1iYW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nKSByZXBlYXQteCBib3R0b20gbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2NDVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5iYW5uZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWVmNDtcclxufVxyXG4iLCIuc2Nyb2xsLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDsgfVxuXG4uc2hvdy1zY3JvbGwge1xuICBvcGFjaXR5OiAxOyB9XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwOyB9XG5cbnAge1xuICBwYWRkaW5nOiAxNXB4OyB9XG5cbi5tZC1jYXJkLWltYWdlIHtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDU1MHB4O1xuICB3aWR0aDogODAwcHg7IH1cblxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6IDcycHg7IH1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7IH1cblxuaDEuZXhhbXBsZS1hcHAtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7IH1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2OyB9XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xuICBmbGV4OiAxIDAgYXV0bzsgfVxuXG4uYmFneWFhLXN0eWxlLWJvdHRvbS1iYW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcpIHJlcGVhdC14IGJvdHRvbSBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjQ1cHg7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLmJhbm5lcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWVmNDsgfVxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/** @title Responsive sidenav */
var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media) {
        this.title = 'iSpace-material';
        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
        this.fillerNav = Array.from({ length: 4 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 4 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        console.log(this.mobileQuery);
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent.prototype.onWindowScroll = function () {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
        }
    };
    AppComponent.prototype.scrollToTop = function () {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:scroll', []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _mind_map_mind_map_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mind-map/mind-map.module */ "./src/app/mind-map/mind-map.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _smart_parking_smart_parking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./smart-parking/smart-parking.component */ "./src/app/smart-parking/smart-parking.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _voter_voter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./voter/voter.component */ "./src/app/voter/voter.component.ts");
/* harmony import */ var _enquiry_dialog_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./enquiry-dialog/enquiry-dialog.component */ "./src/app/enquiry-dialog/enquiry-dialog.component.ts");
/* harmony import */ var _lessons_list_lessons_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lessons-list/lessons-list.component */ "./src/app/lessons-list/lessons-list.component.ts");
/* harmony import */ var _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lesson/lesson.component */ "./src/app/lesson/lesson.component.ts");
/* harmony import */ var _more_links_more_links_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./more-links/more-links.component */ "./src/app/more-links/more-links.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register2_register2_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./register2/register2.component */ "./src/app/register2/register2.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./video-dialog/video-dialog.component */ "./src/app/video-dialog/video-dialog.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _svg_svg_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./svg/svg.component */ "./src/app/svg/svg.component.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_14__["VideoComponent"],
                _smart_parking_smart_parking_component__WEBPACK_IMPORTED_MODULE_15__["SmartParkingComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_16__["CardComponent"],
                _voter_voter_component__WEBPACK_IMPORTED_MODULE_17__["VoterComponent"],
                _enquiry_dialog_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_18__["EnquiryDialogComponent"],
                _lessons_list_lessons_list_component__WEBPACK_IMPORTED_MODULE_19__["LessonsListComponent"],
                _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_20__["LessonComponent"],
                _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_20__["DialogOverviewExampleDialog"],
                _more_links_more_links_component__WEBPACK_IMPORTED_MODULE_21__["MoreLinksComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_22__["RegisterComponent"],
                _register2_register2_component__WEBPACK_IMPORTED_MODULE_23__["Register2Component"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_26__["AboutComponent"],
                _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_25__["VideoDialogComponent"],
                _svg_svg_component__WEBPACK_IMPORTED_MODULE_28__["SvgComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["BottomSheetOverviewExampleSheet"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            entryComponents: [
                _lesson_lesson_component__WEBPACK_IMPORTED_MODULE_20__["DialogOverviewExampleDialog"],
                _enquiry_dialog_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_18__["EnquiryDialogComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["BottomSheetOverviewExampleSheet"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                _mind_map_mind_map_module__WEBPACK_IMPORTED_MODULE_10__["MindMapModule"],
                ngx_embed_video__WEBPACK_IMPORTED_MODULE_8__["EmbedVideo"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/smartparking\" class=\"card-link\">\n  <div class=\"card-background\">\n    <div class=\"card\" fxLayout=\"column\" fxLayoutWrap fxLayoutGap=\"0.5\" fxLayoutAlign=\"center center\">\n      <div>\n          <button mat-fab [color]=\"bulletColor\" class=\"enquire2\" (click)=\"openDialog()\">{{bulletHead}}</button>\n      </div>\n      <ul>\n        <li *ngFor=\"let row of bulletPoints\">{{row}}</li>\n      </ul>\n    </div>\n  </div>\n</a>\n\n"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  margin: 20px; }\n\na:hover {\n  text-decoration: none; }\n\n.card-background {\n  width: 360px;\n  background-color: #f0eef4;\n  padding: 30px; }\n\n.card {\n  display: flex;\n  background-color: #fff;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  width: 300px;\n  padding-bottom: 15px;\n  padding-top: 15px; }\n\n.card-img {\n  height: 300px;\n  width: 100%;\n  margin-top: 10px;\n  border-radius: 50px;\n  border: 1px solid orange; }\n\n.card-avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.card > ul {\n  padding-top: 15px;\n  padding-top: 15px;\n  list-style-type: square;\n  list-style-position: outside;\n  margin: 0; }\n\n.highlights {\n  font-size: 20px;\n  font-style: bold;\n  color: blue;\n  padding: 10px 10px 0px 20px; }\n\n.enquire2 {\n  width: 170px;\n  height: 170px;\n  font-size: 25px; }\n\n.example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9DOlxcTm9kZVByb2plY3RzXFxpU3BhY2UtbWF0ZXJpYWwvc3JjXFxhcHBcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseURBQW9EO0VBQ3BELCtHQUFtRztFQUNuRyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsU0FBUyxFQUFBOztBQUdiO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbi5jYXJkLWJhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWVmNDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5jYXJkLWltZyB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcclxufVxyXG5cclxuLmNhcmQtYXZhdGFyIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmQ+IHVsIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcclxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMjBweDtcclxufVxyXG5cclxuLmVucXVpcmUyIHsgXHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_ispace_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/services/ispace-data.service */ "./src/app/shared/services/ispace-data.service.ts");



var CardComponent = /** @class */ (function () {
    function CardComponent(_appService) {
        this._appService = _appService;
    }
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._appService.getBullets().subscribe(function (data) {
            switch (_this.cardInput) {
                case 'features':
                    _this.bullet = data[0];
                    break;
                case 'highlights':
                    _this.bullet = data[1];
                    break;
                case 'rules':
                    _this.bullet = data[2];
                    break;
            }
            console.log(_this.cardInput);
            _this.bulletHead = _this.bullet.bulletHead;
            // this.bulletImage = this.bullet.bulletImage;
            console.log(_this.bullet);
            _this.bulletPoints = _this.bullet.bulletPoints;
            _this.bulletColor = _this.bullet.bulletColor;
        });
    };
    CardComponent.prototype.openDialog = function () {
        console.log('openDialog');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "cardInput", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_ispace_data_service__WEBPACK_IMPORTED_MODULE_2__["IspaceDataService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-card-header>\n      <mat-card-title>Dashboard</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <!-- put the form here -->\n      <ispace-svg></ispace-svg>\n    </mat-card-content>\n    <mat-card-actions>\n      <!-- put buttons here -->\n      <button mat-raised-button color=\"primary\" (click)=\"openBottomSheet()\">\n        Take me a Tour\n      </button>\n    </mat-card-actions>\n  </mat-card>\n  <!--\n<div fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <ispace-more-links></ispace-more-links>\n  <section\n    fxLayout=\"row\"\n    fxLayout.xs=\"column\"\n    fxLayoutWrap\n    fxLayoutGap=\"0.1\"\n    fxLayoutAlign=\"center center\"\n  >\n    <ispace-card [cardInput]=\"'features'\"></ispace-card>\n    <ispace-card [cardInput]=\"'highlights'\"></ispace-card>\n    <ispace-card [cardInput]=\"'rules'\"></ispace-card>\n  </section>\n <section fxLayout=\"row\" fxLayoutGap=\"0.1\" fxLayoutAlign=\" center\">\n        <p *ngFor=\"let content of fillerContent\">{{ content }}</p>\n      </section>\n      <!--\n</div>\n-->\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 90vW; }\n\np {\n  padding: 15px; }\n\n.mat-card-content {\n  width: 70vw; }\n\n.md-card-image {\n  padding: 5px;\n  height: 550px;\n  width: 800px; }\n\n.mat-toolbar-single-row {\n  height: 72px; }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  width: 100%;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\n\nh1.example-app-name {\n  margin-left: 8px; }\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto; }\n\n.bagyaa-style-bottom-banner {\n  width: 100%;\n  margin-top: 20px;\n  background: url('logo.png') repeat-x bottom left !important;\n  height: 645px;\n  padding: 20px; }\n\n.banners {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  border-radius: 10px;\n  background-color: #f0eef4; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxOb2RlUHJvamVjdHNcXGlTcGFjZS1tYXRlcmlhbC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLDhFQUFBO0VBQ0EsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0U7NEZDSndGO0VETXhGLE9BQU8sRUFBQTs7QUFHVDtFQUNFO2lFQ0w2RDtFRE83RCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUVYLGdCQUFnQjtFQUNoQiwyREFBNkU7RUFDN0UsYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDkwdlc7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICB9XHJcbiAgLm1kLWNhcmQtaW1hZ2Uge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIHdpZHRoOjgwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gIH1cclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmJhZ3lhYS1zdHlsZS1ib3R0b20tYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZykgcmVwZWF0LXggYm90dG9tIGxlZnQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjQ1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uYmFubmVycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGVlZjQ7XHJcbn1cclxuIiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA5MHZXOyB9XG5cbnAge1xuICBwYWRkaW5nOiAxNXB4OyB9XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgd2lkdGg6IDcwdnc7IH1cblxuLm1kLWNhcmQtaW1hZ2Uge1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogNTUwcHg7XG4gIHdpZHRoOiA4MDBweDsgfVxuXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogNzJweDsgfVxuXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cbiAgei1pbmRleDogMjsgfVxuXG5oMS5leGFtcGxlLWFwcC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gIGZsZXg6IDE7IH1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gIGZsZXg6IDEgMCBhdXRvOyB9XG5cbi5iYWd5YWEtc3R5bGUtYm90dG9tLWJhbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZykgcmVwZWF0LXggYm90dG9tIGxlZnQgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2NDVweDtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4uYmFubmVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZWY0OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent, BottomSheetOverviewExampleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function() { return BottomSheetOverviewExampleSheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




/** @title Responsive sidenav */
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(changeDetectorRef, media, bottomSheet) {
        this.bottomSheet = bottomSheet;
        this.fillerNav = Array.from({ length: 4 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 4 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) {
            return h.test(window.location.host);
        });
        this.mobileQuery = media.matchMedia("(max-width: 600px)");
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        console.log(this.mobileQuery);
    }
    DashboardComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "ispace-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "bottom-sheet-overview-example-sheet",
            template: "\n  <mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetRef"]])
    ], BottomSheetOverviewExampleSheet);
    return BottomSheetOverviewExampleSheet;
}());



/***/ }),

/***/ "./src/app/enquiry-dialog/enquiry-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/enquiry-dialog/enquiry-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name { \r\n    width: 300px;\r\n}\r\n\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5xdWlyeS1kaWFsb2cvZW5xdWlyeS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2VucXVpcnktZGlhbG9nL2VucXVpcnktZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZSB7IFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/enquiry-dialog/enquiry-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/enquiry-dialog/enquiry-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/enquiry-dialog/enquiry-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/enquiry-dialog/enquiry-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: EnquiryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryDialogComponent", function() { return EnquiryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var EnquiryDialogComponent = /** @class */ (function () {
    function EnquiryDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
    }
    EnquiryDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EnquiryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-enquiry-dialog',
            template: __webpack_require__(/*! ./enquiry-dialog.component.html */ "./src/app/enquiry-dialog/enquiry-dialog.component.html"),
            styles: [__webpack_require__(/*! ./enquiry-dialog.component.css */ "./src/app/enquiry-dialog/enquiry-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EnquiryDialogComponent);
    return EnquiryDialogComponent;
}());



/***/ }),

/***/ "./src/app/lesson/dialog-overview-example-dialog.html":
/*!************************************************************!*\
  !*** ./src/app/lesson/dialog-overview-example-dialog.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n    <button mat-icon-button (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <ispace-video [url]=\"lesson.url\"></ispace-video>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button cdkFocusInitial>Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/lesson/lesson.component.html":
/*!**********************************************!*\
  !*** ./src/app/lesson/lesson.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>{{ lesson.lessonId }}</mat-card-title>\n    <mat-card-subtitle>{{ lesson.title }}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      {{ lesson.title | slice: 0:20 }}\n    </p>\n    <p>\n      {{ lesson.title | slice: 0:20 }}\n    </p>\n    <p>\n      {{ lesson.views}}views. Duration:{{lesson.duration | slice: 0:5}} Hrs\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n      <button mat-button color=\"primary\" (click)=\"openDialog(lesson)\">Watch video</button>\n    <button mat-button>Share</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/lesson/lesson.component.scss":
/*!**********************************************!*\
  !*** ./src/app/lesson/lesson.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 500px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29uL0M6XFxOb2RlUHJvamVjdHNcXGlTcGFjZS1tYXRlcmlhbC9zcmNcXGFwcFxcbGVzc29uXFxsZXNzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sZXNzb24vbGVzc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/lesson/lesson.component.ts":
/*!********************************************!*\
  !*** ./src/app/lesson/lesson.component.ts ***!
  \********************************************/
/*! exports provided: LessonComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonComponent", function() { return LessonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var LessonComponent = /** @class */ (function () {
    function LessonComponent(dialog) {
        this.dialog = dialog;
        this.title = 'test'; //this.lesson.title ? this.lesson.title : '';
        this.lessonId = 'test'; //this.lesson.lessonId ? this.lesson.lessonId : '';
        this.url = 'test'; //this.lesson.url ? this.lesson.url : '';
    }
    LessonComponent.prototype.ngOnInit = function () {
        console.log('lession', this.lesson);
    };
    LessonComponent.prototype.openDialog = function (lesson) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            height: '50hw',
            width: '60vw',
            data: { name: this.lessonId, title: this.title, url: this.url }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.title = result;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LessonComponent.prototype, "lesson", void 0);
    LessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-lesson',
            template: __webpack_require__(/*! ./lesson.component.html */ "./src/app/lesson/lesson.component.html"),
            styles: [__webpack_require__(/*! ./lesson.component.scss */ "./src/app/lesson/lesson.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LessonComponent);
    return LessonComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogOverviewExampleDialog.prototype, "lesson", void 0);
    DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/lesson/dialog-overview-example-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/lessons-list/lessons-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/lessons-list/lessons-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"lessons\">\n  <div\n    fxLayout=\"row wrap\"\n    fxLayoutAlign=\"center center\"\n    fxLayoutGap=\"32px grid\"\n    style=\"width: 70vw;\"\n  >\n    <ispace-lesson\n      [lesson]=\"lesson\"\n      *ngFor=\"let lesson of lessonsArray\"\n    ></ispace-lesson>\n  </div>\n  <mat-divider></mat-divider>\n    <button mat-raised-button>Show more</button>\n</section>\n"

/***/ }),

/***/ "./src/app/lessons-list/lessons-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/lessons-list/lessons-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lessons {\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy1saXN0L0M6XFxOb2RlUHJvamVjdHNcXGlTcGFjZS1tYXRlcmlhbC9zcmNcXGFwcFxcbGVzc29ucy1saXN0XFxsZXNzb25zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xlc3NvbnMtbGlzdC9sZXNzb25zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVzc29ucyB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/lessons-list/lessons-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/lessons-list/lessons-list.component.ts ***!
  \********************************************************/
/*! exports provided: LessonsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsListComponent", function() { return LessonsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_ispace_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/services/ispace-data.service */ "./src/app/shared/services/ispace-data.service.ts");



var LessonsListComponent = /** @class */ (function () {
    function LessonsListComponent(_ispaceDataService) {
        this._ispaceDataService = _ispaceDataService;
    }
    LessonsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ispaceDataService
            .getLessons()
            .subscribe(function (data) {
            console.log(data.lessions.length);
            _this.lessonsArray = data.lessions;
        });
        this.lessons123 = [
            { id: 'M01',
                dayofweek: 'Sunday',
                menu: {
                    breakfast: 'Idly or Pongal + vadai',
                    lunch: 'Unlimited South Indian Thali, Rice or Chappati',
                    dinner: 'Dosai, Sambar'
                }
            },
            { id: 'M01',
                dayofweek: 'Monday',
                menu: {
                    breakfast: 'Idly or Pongal + vadai',
                    lunch: 'Unlimited South Indian Thali, Rice or Chappati',
                    dinner: 'Dosai, Sambar'
                }
            },
            { id: 'M01',
                dayofweek: 'Tuesday',
                menu: {
                    breakfast: 'Idly or Pongal + vadai',
                    lunch: 'Unlimited South Indian Thali, Rice or Chappati',
                    dinner: 'Dosai, Sambar'
                }
            },
            { id: 'M01',
                dayofweek: 'Wednesday',
                menu: {
                    breakfast: 'Idly or Pongal + vadai',
                    lunch: 'Unlimited South Indian Thali, Rice or Chappati',
                    dinner: 'Dosai, Sambar'
                }
            },
            { id: 'M01',
                dayofweek: 'Thursday',
                menu: {
                    breakfast: 'Idly or Pongal + vadai',
                    lunch: 'Unlimited South Indian Thali, Rice or Chappati',
                    dinner: 'Dosai, Sambar'
                }
            },
            { id: 'M01',
                dayofweek: 'Friday',
                menu: {
                    breakfast: 'Idly or Pongal + vadai',
                    lunch: 'Unlimited South Indian Thali, Rice or Chappati',
                    dinner: 'Dosai, Sambar'
                }
            },
            { id: 'M01',
                dayofweek: 'Saturday',
                menu: {
                    breakfast: 'Idly or Pongal + vadai',
                    lunch: 'Unlimited South Indian Thali, Rice or Chappati',
                    dinner: 'Dosai, Sambar'
                }
            }
        ];
    };
    LessonsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-lessons-list',
            template: __webpack_require__(/*! ./lessons-list.component.html */ "./src/app/lessons-list/lessons-list.component.html"),
            styles: [__webpack_require__(/*! ./lessons-list.component.scss */ "./src/app/lessons-list/lessons-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_ispace_data_service__WEBPACK_IMPORTED_MODULE_2__["IspaceDataService"]])
    ], LessonsListComponent);
    return LessonsListComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <!-- put the form here -->\n    <div class=\"example-container\">\n      <mat-divider></mat-divider>\n      <form class=\"example-container\" [formGroup]=\"form\">\n        <mat-form-field [floatLabel]=\"form.value.studentname\">\n          <mat-label>Student Name</mat-label>\n          <input\n            matInput\n            placeholder=\"Enter your name*\"\n            formControlName=\"studentname\"\n          />\n        </mat-form-field>\n        <mat-form-field>\n          <input\n            matInput\n            placeholder=\"your email\"\n            type=\"email\"\n            formControlName=\"email\"\n            required\n          />\n        </mat-form-field>\n        <mat-form-field>\n          <input\n            matInput\n            placeholder=\"your password\"\n            type=\"password\"\n            formControlName=\"password\"\n            required\n          />\n        </mat-form-field>\n      </form>\n    </div>\n    <mat-divider></mat-divider>\n  </mat-card-content>\n  <mat-card-actions>\n    <!-- put buttons here -->\n    <button mat-raised-button color=\"primary\" (click)=\"login()\">\n      Login\n    </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  width: 25vW; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-container form {\n  margin-bottom: 20px;\n  margin-top: 40px; }\n\n.example-container form > * {\n  margin: 15px 0; }\n\n.mat-card-content {\n  padding: 0px 25px; }\n\n.example-container .mat-radio-button {\n  margin: 0 12px; }\n\n.example-container .mat-checkbox {\n  margin: 0 12px; }\n\n.example-container .mat-card-actions {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXE5vZGVQcm9qZWN0c1xcaVNwYWNlLW1hdGVyaWFsL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAyNXZXO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIGZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIGZvcm0gPiAqIHtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWNoZWNrYm94IHtcclxuICBtYXJnaW46IDAgMTJweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, dialog, router) {
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.email = '';
        this.password = '';
        this.form = fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            studentname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    LoginComponent.prototype.login = function () {
        if (this.email === 'email@email.com' && this.password === 'p@ssw0rd') {
            this.router.navigate(['success']);
        }
        else {
            // this.dialog.open(MessageComponent,{ data: {
            // message:  'Error!!!'
            // }});
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ "./src/app/mind-map/d3/d3.service.ts":
/*!*******************************************!*\
  !*** ./src/app/mind-map/d3/d3.service.ts ***!
  \*******************************************/
/*! exports provided: D3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return D3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./src/app/mind-map/d3/models/index.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




var D3Service = /** @class */ (function () {
    /** This service will provide methods to enable user interaction with elements
      * while maintaining the d3 simulations physics
      */
    function D3Service() {
    }
    /** A method to bind a pan and zoom behaviour to an svg element */
    D3Service.prototype.applyZoomableBehaviour = function (svgElement, containerElement) {
        var svg, container, zoomed, zoom;
        svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"](svgElement);
        container = d3__WEBPACK_IMPORTED_MODULE_3__["select"](containerElement);
        zoomed = function () {
            var transform = d3__WEBPACK_IMPORTED_MODULE_3__["event"].transform;
            container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
        };
        zoom = d3__WEBPACK_IMPORTED_MODULE_3__["zoom"]().on('zoom', zoomed);
        svg.call(zoom);
    };
    /** A method to bind a draggable behaviour to an svg element */
    D3Service.prototype.applyDraggableBehaviour = function (element, node, graph) {
        var d3element = d3__WEBPACK_IMPORTED_MODULE_3__["select"](element);
        function started() {
            /** Preventing propagation of dragstart to parent elements */
            d3__WEBPACK_IMPORTED_MODULE_3__["event"].sourceEvent.stopPropagation();
            if (!d3__WEBPACK_IMPORTED_MODULE_3__["event"].active) {
                graph.simulation.alphaTarget(0.3).restart();
            }
            d3__WEBPACK_IMPORTED_MODULE_3__["event"].on('drag', dragged).on('end', ended);
            function dragged() {
                node.fx = d3__WEBPACK_IMPORTED_MODULE_3__["event"].x;
                node.fy = d3__WEBPACK_IMPORTED_MODULE_3__["event"].y;
            }
            function ended() {
                if (!d3__WEBPACK_IMPORTED_MODULE_3__["event"].active) {
                    graph.simulation.alphaTarget(0);
                }
                node.fx = null;
                node.fy = null;
            }
        }
        d3element.call(d3__WEBPACK_IMPORTED_MODULE_3__["drag"]()
            .on('start', started));
    };
    /** The interactable graph we will simulate in this article
    * This method does not interact with the document, purely physical calculations with d3
    */
    D3Service.prototype.getForceDirectedGraph = function (nodes, links, options) {
        var sg = new _models__WEBPACK_IMPORTED_MODULE_2__["ForceDirectedGraph"](nodes, links, options);
        return sg;
    };
    D3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], D3Service);
    return D3Service;
}());



/***/ }),

/***/ "./src/app/mind-map/d3/directives/draggable.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/mind-map/d3/directives/draggable.directive.ts ***!
  \***************************************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "./src/app/mind-map/d3/models/index.ts");
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../d3.service */ "./src/app/mind-map/d3/d3.service.ts");




var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    DraggableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('draggableNode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["Node"])
    ], DraggableDirective.prototype, "draggableNode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('draggableInGraph'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["ForceDirectedGraph"])
    ], DraggableDirective.prototype, "draggableInGraph", void 0);
    DraggableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[draggableNode]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_d3_service__WEBPACK_IMPORTED_MODULE_3__["D3Service"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/mind-map/d3/directives/index.ts":
/*!*************************************************!*\
  !*** ./src/app/mind-map/d3/directives/index.ts ***!
  \*************************************************/
/*! exports provided: D3_DIRECTIVES, ZoomableDirective, DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3_DIRECTIVES", function() { return D3_DIRECTIVES; });
/* harmony import */ var _zoomable_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoomable.directive */ "./src/app/mind-map/d3/directives/zoomable.directive.ts");
/* harmony import */ var _draggable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggable.directive */ "./src/app/mind-map/d3/directives/draggable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return _zoomable_directive__WEBPACK_IMPORTED_MODULE_0__["ZoomableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return _draggable_directive__WEBPACK_IMPORTED_MODULE_1__["DraggableDirective"]; });





var D3_DIRECTIVES = [
    _zoomable_directive__WEBPACK_IMPORTED_MODULE_0__["ZoomableDirective"],
    _draggable_directive__WEBPACK_IMPORTED_MODULE_1__["DraggableDirective"]
];


/***/ }),

/***/ "./src/app/mind-map/d3/directives/zoomable.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/mind-map/d3/directives/zoomable.directive.ts ***!
  \**************************************************************/
/*! exports provided: ZoomableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return ZoomableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../d3.service */ "./src/app/mind-map/d3/d3.service.ts");



var ZoomableDirective = /** @class */ (function () {
    function ZoomableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ZoomableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('zoomableOf'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ZoomableDirective.prototype, "zoomableOf", void 0);
    ZoomableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[zoomableOf]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_d3_service__WEBPACK_IMPORTED_MODULE_2__["D3Service"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ZoomableDirective);
    return ZoomableDirective;
}());



/***/ }),

/***/ "./src/app/mind-map/d3/index.ts":
/*!**************************************!*\
  !*** ./src/app/mind-map/d3/index.ts ***!
  \**************************************/
/*! exports provided: D3Service, D3_DIRECTIVES, Node, Link, ForceDirectedGraph, ZoomableDirective, DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d3.service */ "./src/app/mind-map/d3/d3.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return _d3_service__WEBPACK_IMPORTED_MODULE_0__["D3Service"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/app/mind-map/d3/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Node"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return _models__WEBPACK_IMPORTED_MODULE_1__["ForceDirectedGraph"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives */ "./src/app/mind-map/d3/directives/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "D3_DIRECTIVES", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["D3_DIRECTIVES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["ZoomableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_2__["DraggableDirective"]; });






/***/ }),

/***/ "./src/app/mind-map/d3/models/force-directed-graph.ts":
/*!************************************************************!*\
  !*** ./src/app/mind-map/d3/models/force-directed-graph.ts ***!
  \************************************************************/
/*! exports provided: ForceDirectedGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return ForceDirectedGraph; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./src/app/mind-map/d3/models/link.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



var FORCES = {
    LINKS: 1 / 50,
    COLLISION: 1,
    CHARGE: -1
};
var ForceDirectedGraph = /** @class */ (function () {
    function ForceDirectedGraph(nodes, links, options) {
        this.ticker = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodes = [];
        this.links = [];
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
    }
    ForceDirectedGraph.prototype.connectNodes = function (source, target) {
        var link;
        if (!this.nodes[source] || !this.nodes[target]) {
            throw new Error('One of the nodes does not exist');
        }
        link = new _link__WEBPACK_IMPORTED_MODULE_1__["Link"](source, target);
        this.simulation.stop();
        this.links.push(link);
        this.simulation.alphaTarget(0.3).restart();
        this.initLinks();
    };
    ForceDirectedGraph.prototype.initNodes = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.nodes(this.nodes);
    };
    ForceDirectedGraph.prototype.initLinks = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.force('links', d3__WEBPACK_IMPORTED_MODULE_2__["forceLink"](this.links)
            .id(function (d) { return d['id']; })
            .strength(FORCES.LINKS));
    };
    ForceDirectedGraph.prototype.initSimulation = function (options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }
        /** Creating the simulation */
        if (!this.simulation) {
            var ticker_1 = this.ticker;
            this.simulation = d3__WEBPACK_IMPORTED_MODULE_2__["forceSimulation"]()
                .force('charge', d3__WEBPACK_IMPORTED_MODULE_2__["forceManyBody"]()
                .strength(function (d) { return FORCES.CHARGE * d['r']; }))
                .force('collide', d3__WEBPACK_IMPORTED_MODULE_2__["forceCollide"]()
                .strength(FORCES.COLLISION)
                .radius(function (d) { return d['r'] + 5; }).iterations(2));
            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function () {
                ticker_1.emit(this);
            });
            this.initNodes();
            this.initLinks();
        }
        /** Updating the central force of the simulation */
        this.simulation.force('centers', d3__WEBPACK_IMPORTED_MODULE_2__["forceCenter"](options.width / 2, options.height / 2));
        /** Restarting the simulation internal timer */
        this.simulation.restart();
    };
    return ForceDirectedGraph;
}());



/***/ }),

/***/ "./src/app/mind-map/d3/models/index.ts":
/*!*********************************************!*\
  !*** ./src/app/mind-map/d3/models/index.ts ***!
  \*********************************************/
/*! exports provided: Node, Link, ForceDirectedGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/app/mind-map/d3/models/node.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _node__WEBPACK_IMPORTED_MODULE_0__["Node"]; });

/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./src/app/mind-map/d3/models/link.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link__WEBPACK_IMPORTED_MODULE_1__["Link"]; });

/* harmony import */ var _force_directed_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./force-directed-graph */ "./src/app/mind-map/d3/models/force-directed-graph.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function() { return _force_directed_graph__WEBPACK_IMPORTED_MODULE_2__["ForceDirectedGraph"]; });






/***/ }),

/***/ "./src/app/mind-map/d3/models/link.ts":
/*!********************************************!*\
  !*** ./src/app/mind-map/d3/models/link.ts ***!
  \********************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
var Link = /** @class */ (function () {
    function Link(source, target) {
        this.source = source;
        this.target = target;
    }
    return Link;
}());



/***/ }),

/***/ "./src/app/mind-map/d3/models/node.ts":
/*!********************************************!*\
  !*** ./src/app/mind-map/d3/models/node.ts ***!
  \********************************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _mind_map_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mind-map.config */ "./src/app/mind-map/mind-map.config.ts");

var Node = /** @class */ (function () {
    // 663399,CEB995,035E6D,D1652F,C5023C,E5E4E3
    function Node(id) {
        var _this = this;
        this.linkCount = 0;
        this.normal = function () {
            return Math.sqrt(_this.linkCount / _mind_map_config__WEBPACK_IMPORTED_MODULE_0__["default"].N);
        };
        this.id = id;
        switch (id) {
            case 1: {
                this.title = 'Smart City';
                this.bgcolor = '#663399';
                // tslint:disable-next-line: max-line-length
                this.desc =
                    'What is a smart city? Typically a smart city is one where resources are used in a smart way to increase efficiency and improve daily life of the citizens living in that city. So, as an example think of :\na. using your cell phone to switch on and off lights in your house, \nb. or locking your bike if you forget to lock it in the parking lot, \nc. monitor and water your plants, and so on. \nAll these tasks ensure that resources are used efficiently when needed and not used when not necessary. In this semester you will build a smart city by installing \nsmart parking lots\nsmart farms\nsmart inventory systems\nsmart parks\nsmart Traffic lights\netc. Each one of these installations require skills from multiple disciplines such as math, science, programming and above all analytical and critical thinking. We hope that you will enjoy this activity, learn new technologies and skills and have fun completing the activities.';
                break;
            }
            case 2: {
                this.title = 'Smart Parking Lot';
                this.bgcolor = '#CEB995';
                // tslint:disable-next-line: max-line-length
                this.desc =
                    'A smart parking lot is one that uses sensors and techniques to keep track of which slots have been occupied and which slots remain open. Such a system lets the driver know were he or she may find a spot to park without having to search for open slots. Use of cameras in parking lots can also capture information about cars parked and in case of criminal activities detect the owner of the car using the camera feed. \n\nAdditionally, since this information can be connected to the Internet, the owner will also be able to know which time slots tend to be busy and require more monitoring. \n\nUpon completing this project the student will be able to\nDescribe what a smart parking lot is\nIdentify the significant components required to design a smart parking lot\nAnalyze requirements to construct each component of the smart parking lot\nImplement the requirements and build the smart parking lot';
                break;
            }
            case 3: {
                this.title = 'Smart Traffic Lights';
                this.bgcolor = '#035E6D';
                this.desc =
                    'Smart Traffic Lights are able to monitor traffic flow through a junction using infrared sensors and proximity sensors. Depending on the traffic flow, the lights can adapt and change their state to allow smoother and more efficient flow of traffic, and reduce traffic blocks.\r\n\r\nUpon completing this project the student will be able to\r\nDescribe what a smart traffic light system is\r\nIdentify the significant components required to design a smart traffic light system\r\nAnalyze requirements to construct each component of a smart traffic light system\r\nImplement the requirements and build a smart traffic light system';
                break;
            }
            case 4: {
                this.title = 'Smart Parks';
                this.bgcolor = '#D1652F';
                this.desc =
                    'A smart park has several sensors as well. These sensors such as proximity sensors and motion activated sensors can track how many cars, trucks and visitors have come to the park. Such information collected on the cloud via the Internet can be invaluable to park owners who can again monitor the usage of their parks from anywhere at any time. This will also allow park owners and city officials to allocate their resources efficiently.\n\n\nUpon completing this project the student will be able to\nDescribe what a smart park is\nIdentify the significant components required to design a smart parks\nAnalyze requirements to construct each component of the smart parks\nImplement the requirements and build the smart parks';
                break;
            }
            case 5: {
                this.title = 'Smart  Farm';
                this.bgcolor = '#00FF00';
                this.desc = 'A smart inventory system manages the levels of';
                break;
            }
            case 6: {
                this.title = 'Smart Inventory System';
                this.bgcolor = '#C5023C';
                this.desc = 'A smart inventory system manages the levels of';
                break;
            }
            case 7: {
                this.title = 'Smart Hospitals';
                this.bgcolor = '#FFCC99';
                this.desc =
                    'Smart hospitals use sensors, hardware and software to ensure that patients, and staff are monitored for their security. Sensors and hardware will be used to tag patients with id tags, monitor patient vitals, provide a controlled environment,  track usage of medication etc. Smart software will be used to offer intra communication among patients, physicians, and family members. and administration.  A smart hospital reduces duplication of information. Such an infra structure will allow the hospitals to function efficiently and effectively.\n\n\nUpon completing this project the student will be able to\nDescribe what a smart hospital is\nIdentify the significant components such as temperature sensors, light sensors, rfid tags,  etc. required to design a smart hospital\nAnalyze requirements to construct each component of the smart farm\nDescribe what you want the software to do\nImplement the requirements and build the smart smart hospital';
                break;
            }
            case 8: {
                this.title = 'Smart Power';
                this.bgcolor = '#E5E4E3';
                this.desc =
                    'A smart power system is able to get data from various power installations, such as Hospitals, Residential areas, Markets, etc., and monitor the power consumption at each installation. In case of an emergency caused by a power loss at any one installation, the system is able to reroute power from other installations, depending on priorities.\r\n\r\nUpon completing this project the student will be able to:\r\nDescribe what a smart power system is and its capabilities\r\nIdentify the significant components required to design a smart power system\r\nAnalyze requirements to construct each component of the smart power system\r\nImplement the requirements and build the smart power system';
                break;
            }
        }
    }
    Object.defineProperty(Node.prototype, "r", {
        get: function () {
            return 50 * this.normal() + 40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "fontSize", {
        get: function () {
            return this.normal() + 14 + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "color", {
        get: function () {
            var index = Math.floor(_mind_map_config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM.length * this.normal());
            return _mind_map_config__WEBPACK_IMPORTED_MODULE_0__["default"].SPECTRUM[index];
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());



/***/ }),

/***/ "./src/app/mind-map/mind-map.component.html":
/*!**************************************************!*\
  !*** ./src/app/mind-map/mind-map.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ispace-graph [nodes]=\"nodes\" [links]=\"links\"></ispace-graph>\n"

/***/ }),

/***/ "./src/app/mind-map/mind-map.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mind-map/mind-map.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes slideDown {\n  0% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  100% {\n    -webkit-transform: translate(0px, 75px);\n            transform: translate(0px, 75px); } }\n\n@keyframes slideDown {\n  0% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  100% {\n    -webkit-transform: translate(0px, 75px);\n            transform: translate(0px, 75px); } }\n\n@-webkit-keyframes slideUp {\n  0% {\n    -webkit-transform: translate(0px, 75px);\n            transform: translate(0px, 75px); }\n  100% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); } }\n\n@keyframes slideUp {\n  0% {\n    -webkit-transform: translate(0px, 75px);\n            transform: translate(0px, 75px); }\n  100% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); } }\n\n/*\r\nstuff here\r\n*/\n\nbody {\n  font-family: cabin, Arial, sans-serif;\n  background: #f9f9f9;\n  font-weight: 300;\n  font-size: 15px;\n  color: #333;\n  overflow: scroll;\n  overflow-x: hidden;\n  padding: 0;\n  margin: 0; }\n\n.st0 {\n  fill: #BBB8BF; }\n\n.st1 {\n  fill: #663399; }\n\n.st2 {\n  fill: #FFFFFF; }\n\n.st3 {\n  fill: #898989;\n  stroke: #898989;\n  stroke-miterlimit: 10; }\n\n.st4 {\n  font-family: 'Courier', Arial; }\n\n.st5 {\n  font-size: 55px; }\n\n.st6 {\n  fill: #F7F6F5;\n  stroke: #F7F6F5;\n  stroke-width: 0.25;\n  stroke-miterlimit: 10; }\n\n.st7 {\n  font-family: kelly-slab, Arial; }\n\n.st8 {\n  font-size: 45px; }\n\n.st9 {\n  letter-spacing: 2.6; }\n\n.st10 {\n  font-family: dancing-script, Arial; }\n\n.st11 {\n  font-family: lobster, Arial; }\n\n.st12 {\n  font-size: 75.4598px; }\n\n.st13 {\n  fill: #353659; }\n\n.st14 {\n  font-family: cabin, Arial; }\n\n.st15 {\n  font-size: 28.2251px; }\n\n.st16 {\n  font-family: cabin, Arial; }\n\n.st17 {\n  fill: none; }\n\n.st18 {\n  fill: #CEB995; }\n\n.st19 {\n  font-size: 18px; }\n\n.st20 {\n  fill: #035E6D; }\n\n.st21 {\n  enable-background: new; }\n\n.st22 {\n  fill: #FCDAA9; }\n\n.st24 {\n  fill: #EAE9E8; }\n\n.st25 {\n  fill: #D1652F; }\n\n.st26 {\n  fill: #C5023C; }\n\n.st27 {\n  fill: #E5E4E3; }\n\nul {\n  list-style: none; }\n\n[class$=\"title\"] text {\n  font-size: 20px;\n  font-family: cabin-condensed, Arial, sans-serif; }\n\n@supports ((-webkit-animation: slideDown) or (animation: slideDown)) {\n  [class$=\"title\"] {\n    -webkit-animation: slideDown ease-in-out .5s forwards;\n            animation: slideDown ease-in-out .5s forwards;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transform-origin: center;\n            transform-origin: center; } }\n\n[id$=\"activity\"] {\n  opacity: 0;\n  visibility: hidden; }\n\n@supports ((-webkit-animation: slideUp) or (animation: slideUp)) {\n  a:hover [class$=\"title\"], a:focus [class$=\"title\"] {\n    -webkit-animation: slideUp ease-in-out .5s forwards;\n            animation: slideUp ease-in-out .5s forwards;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transform-origin: center;\n            transform-origin: center; } }\n\na:hover [id$=\"activity\"], a:focus [id$=\"activity\"] {\n  opacity: 1;\n  visibility: visible; }\n\na:focus [class*=\"time-circle\"], a:hover [class*=\"time-circle\"] {\n  stroke: black;\n  stroke-width: 5;\n  paint-order: stroke; }\n\n.offscreen {\n  position: absolute !important;\n  font-size: 0px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\n          clip-path: polygon(0 0, 0 0, 0 0, 0 0); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZC1tYXAvQzpcXE5vZGVQcm9qZWN0c1xcaVNwYWNlLW1hdGVyaWFsL3NyY1xcYXBwXFxtaW5kLW1hcFxcbWluZC1tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21pbmQtbWFwL21pbmQtbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxzQ0FBNkI7WUFBN0IsOEJBQTZCLEVBQUE7RUFFL0I7SUFDRSx1Q0FBOEI7WUFBOUIsK0JBQThCLEVBQUEsRUFBQTs7QUFMbEM7RUFDRTtJQUNFLHNDQUE2QjtZQUE3Qiw4QkFBNkIsRUFBQTtFQUUvQjtJQUNFLHVDQUE4QjtZQUE5QiwrQkFBOEIsRUFBQSxFQUFBOztBQUtsQztFQUNFO0lBQ0UsdUNBQThCO1lBQTlCLCtCQUE4QixFQUFBO0VBRWhDO0lBQ0Usc0NBQThCO1lBQTlCLDhCQUE4QixFQUFBLEVBQUE7O0FBTGxDO0VBQ0U7SUFDRSx1Q0FBOEI7WUFBOUIsK0JBQThCLEVBQUE7RUFFaEM7SUFDRSxzQ0FBOEI7WUFBOUIsOEJBQThCLEVBQUEsRUFBQTs7QUFLbEM7O0NDTkM7O0FEV0Q7RUFDSSxxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNaLFNBQVMsRUFBQTs7QUFJWDtFQUFLLGFBQVksRUFBQTs7QUFDZjtFQUFLLGFBQVksRUFBQTs7QUFDakI7RUFBSyxhQUFZLEVBQUE7O0FBQ2pCO0VBQUssYUFBWTtFQUFDLGVBQWM7RUFBQyxxQkFBb0IsRUFBQTs7QUFDckQ7RUFBSyw2QkFBNEIsRUFBQTs7QUFDakM7RUFBSyxlQUFjLEVBQUE7O0FBQ25CO0VBQUssYUFBWTtFQUFDLGVBQWM7RUFBQyxrQkFBaUI7RUFBQyxxQkFBb0IsRUFBQTs7QUFDdkU7RUFBSyw4QkFBOEIsRUFBQTs7QUFDbkM7RUFBSyxlQUFjLEVBQUE7O0FBQ25CO0VBQUssbUJBQWtCLEVBQUE7O0FBQ3ZCO0VBQU0sa0NBQWtDLEVBQUE7O0FBQ3hDO0VBQU0sMkJBQTJCLEVBQUE7O0FBQ2pDO0VBQU0sb0JBQW1CLEVBQUE7O0FBQ3pCO0VBQU0sYUFBWSxFQUFBOztBQUNsQjtFQUFNLHlCQUF3QixFQUFBOztBQUM5QjtFQUFNLG9CQUFtQixFQUFBOztBQUN6QjtFQUFNLHlCQUF3QixFQUFBOztBQUM5QjtFQUFNLFVBQVMsRUFBQTs7QUFDZjtFQUFNLGFBQVksRUFBQTs7QUFDbEI7RUFBTSxlQUFjLEVBQUE7O0FBQ3BCO0VBQU0sYUFBWSxFQUFBOztBQUNsQjtFQUFNLHNCQUFxQixFQUFBOztBQUMzQjtFQUFNLGFBQVksRUFBQTs7QUFDbEI7RUFBTSxhQUFZLEVBQUE7O0FBQ2xCO0VBQU0sYUFBWSxFQUFBOztBQUNsQjtFQUFNLGFBQVksRUFBQTs7QUFDbEI7RUFBTSxhQUFZLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FDZ0RsQjtFRDVDSSxlQUFlO0VBQ2pCLCtDQUErQyxFQUFBOztBQUdsQjtFQzZDN0I7SUQzQ0UscURBQTZDO1lBQTdDLDZDQUE2QztJQUM3QyxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUN6Qjs7QUM2Q0g7RUR6Q0UsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUdTO0VBQzFCO0lBQ0MsbURBQTJDO1lBQTNDLDJDQUEyQztJQUMzQyxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUN6Qjs7QUFHSDtFQUNJLFVBQVU7RUFDWixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxhQUFZO0VBQ1osZUFBYztFQUNkLG1CQUFrQixFQUFBOztBQUdwQjtFQUNJLDZCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDhCQUEyQjtFQUMzQiw4Q0FBbUM7VUFBbkMsc0NBQW1DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9taW5kLW1hcC9taW5kLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc2xpZGVEb3due1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpIDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsNzVweCkgO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsNzVweCkgO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZSgwcHgsMHB4KSA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLypcclxuc3R1ZmYgaGVyZVxyXG4qL1xyXG5cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IGNhYmluLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4uc3Qwe2ZpbGw6I0JCQjhCRjt9XHJcbiAgLnN0MXtmaWxsOiM2NjMzOTk7fVxyXG4gIC5zdDJ7ZmlsbDojRkZGRkZGO31cclxuICAuc3Qze2ZpbGw6Izg5ODk4OTtzdHJva2U6Izg5ODk4OTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XHJcbiAgLnN0NHtmb250LWZhbWlseTonQ291cmllcicsIEFyaWFsO31cclxuICAuc3Q1e2ZvbnQtc2l6ZTo1NXB4O31cclxuICAuc3Q2e2ZpbGw6I0Y3RjZGNTtzdHJva2U6I0Y3RjZGNTtzdHJva2Utd2lkdGg6MC4yNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XHJcbiAgLnN0N3tmb250LWZhbWlseToga2VsbHktc2xhYiwgQXJpYWw7fVxyXG4gIC5zdDh7Zm9udC1zaXplOjQ1cHg7fVxyXG4gIC5zdDl7bGV0dGVyLXNwYWNpbmc6Mi42O31cclxuICAuc3QxMHtmb250LWZhbWlseTogZGFuY2luZy1zY3JpcHQsIEFyaWFsO31cclxuICAuc3QxMXtmb250LWZhbWlseTogbG9ic3RlciwgQXJpYWw7fVxyXG4gIC5zdDEye2ZvbnQtc2l6ZTo3NS40NTk4cHg7fVxyXG4gIC5zdDEze2ZpbGw6IzM1MzY1OTt9XHJcbiAgLnN0MTR7Zm9udC1mYW1pbHk6Y2FiaW4sIEFyaWFsO31cclxuICAuc3QxNXtmb250LXNpemU6MjguMjI1MXB4O31cclxuICAuc3QxNntmb250LWZhbWlseTpjYWJpbiwgQXJpYWw7fVxyXG4gIC5zdDE3e2ZpbGw6bm9uZTt9XHJcbiAgLnN0MTh7ZmlsbDojQ0VCOTk1O31cclxuICAuc3QxOXtmb250LXNpemU6MThweDt9XHJcbiAgLnN0MjB7ZmlsbDojMDM1RTZEO31cclxuICAuc3QyMXtlbmFibGUtYmFja2dyb3VuZDpuZXc7fVxyXG4gIC5zdDIye2ZpbGw6I0ZDREFBOTt9XHJcbiAgLnN0MjR7ZmlsbDojRUFFOUU4O31cclxuICAuc3QyNXtmaWxsOiNEMTY1MkY7fVxyXG4gIC5zdDI2e2ZpbGw6I0M1MDIzQzt9XHJcbiAgLnN0Mjd7ZmlsbDojRTVFNEUzO31cclxuXHJcbnVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbltjbGFzcyQ9XCJ0aXRsZVwiXSB0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogY2FiaW4tY29uZGVuc2VkLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQHN1cHBvcnRzKGFuaW1hdGlvbjogc2xpZGVEb3duKSB7XHJcbiAgW2NsYXNzJD1cInRpdGxlXCJdIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIGVhc2UtaW4tb3V0IC41cyBmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5baWQkPVwiYWN0aXZpdHlcIl17XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbkBzdXBwb3J0cyhhbmltYXRpb246IHNsaWRlVXApIHtcclxuICAgYTpob3ZlciBbY2xhc3MkPVwidGl0bGVcIl0gLCBhOmZvY3VzIFtjbGFzcyQ9XCJ0aXRsZVwiXSB7XHJcbiAgICBhbmltYXRpb246IHNsaWRlVXAgZWFzZS1pbi1vdXQgLjVzIGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbmE6aG92ZXIgW2lkJD1cImFjdGl2aXR5XCJdLCAgYTpmb2N1cyBbaWQkPVwiYWN0aXZpdHlcIl17XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbmE6Zm9jdXMgW2NsYXNzKj1cInRpbWUtY2lyY2xlXCJdLCBhOmhvdmVyIFtjbGFzcyo9XCJ0aW1lLWNpcmNsZVwiXXtcclxuICBzdHJva2U6YmxhY2s7XHJcbiAgc3Ryb2tlLXdpZHRoOjU7XHJcbiAgcGFpbnQtb3JkZXI6c3Ryb2tlO1xyXG59XHJcblxyXG4ub2Zmc2NyZWVue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNsaXA6IHJlY3QoMXB4LDFweCwxcHgsMXB4KTtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsMCAwLDAgMCwwIDApO1xyXG59XHJcbiIsIkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDc1cHgpOyB9IH1cblxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNzVweCk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOyB9IH1cblxuLypcclxuc3R1ZmYgaGVyZVxyXG4qL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBjYWJpbiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMzMzM7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwOyB9XG5cbi5zdDAge1xuICBmaWxsOiAjQkJCOEJGOyB9XG5cbi5zdDEge1xuICBmaWxsOiAjNjYzMzk5OyB9XG5cbi5zdDIge1xuICBmaWxsOiAjRkZGRkZGOyB9XG5cbi5zdDMge1xuICBmaWxsOiAjODk4OTg5O1xuICBzdHJva2U6ICM4OTg5ODk7XG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgfVxuXG4uc3Q0IHtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyJywgQXJpYWw7IH1cblxuLnN0NSB7XG4gIGZvbnQtc2l6ZTogNTVweDsgfVxuXG4uc3Q2IHtcbiAgZmlsbDogI0Y3RjZGNTtcbiAgc3Ryb2tlOiAjRjdGNkY1O1xuICBzdHJva2Utd2lkdGg6IDAuMjU7XG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgfVxuXG4uc3Q3IHtcbiAgZm9udC1mYW1pbHk6IGtlbGx5LXNsYWIsIEFyaWFsOyB9XG5cbi5zdDgge1xuICBmb250LXNpemU6IDQ1cHg7IH1cblxuLnN0OSB7XG4gIGxldHRlci1zcGFjaW5nOiAyLjY7IH1cblxuLnN0MTAge1xuICBmb250LWZhbWlseTogZGFuY2luZy1zY3JpcHQsIEFyaWFsOyB9XG5cbi5zdDExIHtcbiAgZm9udC1mYW1pbHk6IGxvYnN0ZXIsIEFyaWFsOyB9XG5cbi5zdDEyIHtcbiAgZm9udC1zaXplOiA3NS40NTk4cHg7IH1cblxuLnN0MTMge1xuICBmaWxsOiAjMzUzNjU5OyB9XG5cbi5zdDE0IHtcbiAgZm9udC1mYW1pbHk6IGNhYmluLCBBcmlhbDsgfVxuXG4uc3QxNSB7XG4gIGZvbnQtc2l6ZTogMjguMjI1MXB4OyB9XG5cbi5zdDE2IHtcbiAgZm9udC1mYW1pbHk6IGNhYmluLCBBcmlhbDsgfVxuXG4uc3QxNyB7XG4gIGZpbGw6IG5vbmU7IH1cblxuLnN0MTgge1xuICBmaWxsOiAjQ0VCOTk1OyB9XG5cbi5zdDE5IHtcbiAgZm9udC1zaXplOiAxOHB4OyB9XG5cbi5zdDIwIHtcbiAgZmlsbDogIzAzNUU2RDsgfVxuXG4uc3QyMSB7XG4gIGVuYWJsZS1iYWNrZ3JvdW5kOiBuZXc7IH1cblxuLnN0MjIge1xuICBmaWxsOiAjRkNEQUE5OyB9XG5cbi5zdDI0IHtcbiAgZmlsbDogI0VBRTlFODsgfVxuXG4uc3QyNSB7XG4gIGZpbGw6ICNEMTY1MkY7IH1cblxuLnN0MjYge1xuICBmaWxsOiAjQzUwMjNDOyB9XG5cbi5zdDI3IHtcbiAgZmlsbDogI0U1RTRFMzsgfVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuW2NsYXNzJD1cInRpdGxlXCJdIHRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBjYWJpbi1jb25kZW5zZWQsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XG5cbkBzdXBwb3J0cyAoYW5pbWF0aW9uOiBzbGlkZURvd24pIHtcbiAgW2NsYXNzJD1cInRpdGxlXCJdIHtcbiAgICBhbmltYXRpb246IHNsaWRlRG93biBlYXNlLWluLW91dCAuNXMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7IH0gfVxuXG5baWQkPVwiYWN0aXZpdHlcIl0ge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cblxuQHN1cHBvcnRzIChhbmltYXRpb246IHNsaWRlVXApIHtcbiAgYTpob3ZlciBbY2xhc3MkPVwidGl0bGVcIl0sIGE6Zm9jdXMgW2NsYXNzJD1cInRpdGxlXCJdIHtcbiAgICBhbmltYXRpb246IHNsaWRlVXAgZWFzZS1pbi1vdXQgLjVzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyOyB9IH1cblxuYTpob3ZlciBbaWQkPVwiYWN0aXZpdHlcIl0sIGE6Zm9jdXMgW2lkJD1cImFjdGl2aXR5XCJdIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG5hOmZvY3VzIFtjbGFzcyo9XCJ0aW1lLWNpcmNsZVwiXSwgYTpob3ZlciBbY2xhc3MqPVwidGltZS1jaXJjbGVcIl0ge1xuICBzdHJva2U6IGJsYWNrO1xuICBzdHJva2Utd2lkdGg6IDU7XG4gIHBhaW50LW9yZGVyOiBzdHJva2U7IH1cblxuLm9mZnNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAgMCwgMCAwKTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/mind-map/mind-map.component.ts":
/*!************************************************!*\
  !*** ./src/app/mind-map/mind-map.component.ts ***!
  \************************************************/
/*! exports provided: MindMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MindMapComponent", function() { return MindMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mind_map_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mind-map.config */ "./src/app/mind-map/mind-map.config.ts");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d3 */ "./src/app/mind-map/d3/index.ts");




var MindMapComponent = /** @class */ (function () {
    function MindMapComponent() {
        this.nodes = [];
        this.links = [];
        var N = _mind_map_config__WEBPACK_IMPORTED_MODULE_2__["default"].N, getIndex = function (number) { return number - 1; };
        /** constructing the nodes array */
        for (var i = 1; i <= N; i++) {
            this.nodes.push(new _d3__WEBPACK_IMPORTED_MODULE_3__["Node"](i));
        }
        for (var i = 1; i <= N; i++) {
            for (var m = 2; i * m <= N; m++) {
                /** increasing connections toll on connecting nodes */
                this.nodes[getIndex(i)].linkCount++;
                this.nodes[getIndex(i * m)].linkCount++;
                /** connecting the nodes before starting the simulation */
                this.links.push(new _d3__WEBPACK_IMPORTED_MODULE_3__["Link"](i, i * m));
            }
        }
    }
    MindMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-mind-map',
            template: __webpack_require__(/*! ./mind-map.component.html */ "./src/app/mind-map/mind-map.component.html"),
            styles: [__webpack_require__(/*! ./mind-map.component.scss */ "./src/app/mind-map/mind-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MindMapComponent);
    return MindMapComponent;
}());



/***/ }),

/***/ "./src/app/mind-map/mind-map.config.ts":
/*!*********************************************!*\
  !*** ./src/app/mind-map/mind-map.config.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CONFIG = {
    N: 6,
    SPECTRUM: [
        // "rgb(222,237,250)"
        "rgb(176,212,243)",
        "rgb(128,186,236)",
        "rgb(77,158,228)",
        "rgb(38,137,223)",
        "rgb(0,116,217)",
        "rgb(0,106,197)"
        // "rgb(0,94,176)"
        // "rgb(0,82,154)"
        // "rgb(0,60,113)"
    ]
};
/* harmony default export */ __webpack_exports__["default"] = (CONFIG);


/***/ }),

/***/ "./src/app/mind-map/mind-map.module.ts":
/*!*********************************************!*\
  !*** ./src/app/mind-map/mind-map.module.ts ***!
  \*********************************************/
/*! exports provided: MindMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MindMapModule", function() { return MindMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _mind_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mind-map.component */ "./src/app/mind-map/mind-map.component.ts");
/* harmony import */ var _d3_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./d3/index */ "./src/app/mind-map/d3/index.ts");
/* harmony import */ var _visuals_graph_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visuals/graph/graph.component */ "./src/app/mind-map/visuals/graph/graph.component.ts");
/* harmony import */ var _visuals_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visuals/shared */ "./src/app/mind-map/visuals/shared/index.ts");








var MindMapModule = /** @class */ (function () {
    function MindMapModule() {
    }
    MindMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _mind_map_component__WEBPACK_IMPORTED_MODULE_4__["MindMapComponent"],
                _visuals_graph_graph_component__WEBPACK_IMPORTED_MODULE_6__["GraphComponent"]
            ].concat(_visuals_shared__WEBPACK_IMPORTED_MODULE_7__["SHARED_VISUALS"], _d3_index__WEBPACK_IMPORTED_MODULE_5__["D3_DIRECTIVES"], [
                _visuals_shared__WEBPACK_IMPORTED_MODULE_7__["BottomSheetOverviewExampleSheet"]
            ]),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            exports: [
                _mind_map_component__WEBPACK_IMPORTED_MODULE_4__["MindMapComponent"]
            ],
            entryComponents: [
                _visuals_shared__WEBPACK_IMPORTED_MODULE_7__["BottomSheetOverviewExampleSheet"]
            ],
            providers: [_d3_index__WEBPACK_IMPORTED_MODULE_5__["D3Service"]]
        })
    ], MindMapModule);
    return MindMapModule;
}());



/***/ }),

/***/ "./src/app/mind-map/visuals/graph/graph.component.css":
/*!************************************************************!*\
  !*** ./src/app/mind-map/visuals/graph/graph.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbmQtbWFwL3Zpc3VhbHMvZ3JhcGgvZ3JhcGguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mind-map/visuals/graph/graph.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/mind-map/visuals/graph/graph.component.ts ***!
  \***********************************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../d3 */ "./src/app/mind-map/d3/index.ts");



var GraphComponent = /** @class */ (function () {
    function GraphComponent(d3Service, ref) {
        this.d3Service = d3Service;
        this.ref = ref;
        this._options = { width: 800, height: 600 };
    }
    GraphComponent.prototype.onResize = function (event) {
        this.graph.initSimulation(this.options);
    };
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** Receiving an initialized simulated graph from our custom d3 service */
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
        /** Binding change detection check on each tick
         * This along with an onPush change detection strategy should enforce checking only when relevant!
         * This improves scripting computation duration in a couple of tests I've made, consistently.
         * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
         */
        this.graph.ticker.subscribe(function (d) {
            _this.ref.markForCheck();
        });
        console.log('this.nodes', this.nodes);
        console.log('this.links', this.links);
    };
    GraphComponent.prototype.ngAfterViewInit = function () {
        this.graph.initSimulation(this.options);
    };
    Object.defineProperty(GraphComponent.prototype, "options", {
        get: function () {
            return this._options = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphComponent.prototype, "nodes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraphComponent.prototype, "links", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GraphComponent.prototype, "onResize", null);
    GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-graph',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <svg #svg [attr.width]=\"_options.width\" [attr.height]=\"_options.height\">\n      <g [zoomableOf]=\"svg\">\n        <g [linkVisual]=\"link\" *ngFor=\"let link of links\"></g>\n        <g [nodeVisual]=\"node\" *ngFor=\"let node of nodes\"\n            [draggableNode]=\"node\" [draggableInGraph]=\"graph\"></g>\n      </g>\n    </svg>\n  ",
            styles: [__webpack_require__(/*! ./graph.component.css */ "./src/app/mind-map/visuals/graph/graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_d3__WEBPACK_IMPORTED_MODULE_2__["D3Service"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/mind-map/visuals/shared/index.ts":
/*!**************************************************!*\
  !*** ./src/app/mind-map/visuals/shared/index.ts ***!
  \**************************************************/
/*! exports provided: SHARED_VISUALS, NodeVisualComponent, BottomSheetOverviewExampleSheet, LinkVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARED_VISUALS", function() { return SHARED_VISUALS; });
/* harmony import */ var _node_visual_node_visual_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-visual/node-visual.component */ "./src/app/mind-map/visuals/shared/node-visual/node-visual.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeVisualComponent", function() { return _node_visual_node_visual_component__WEBPACK_IMPORTED_MODULE_0__["NodeVisualComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function() { return _node_visual_node_visual_component__WEBPACK_IMPORTED_MODULE_0__["BottomSheetOverviewExampleSheet"]; });

/* harmony import */ var _link_visual_link_visual_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-visual/link-visual.component */ "./src/app/mind-map/visuals/shared/link-visual/link-visual.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkVisualComponent", function() { return _link_visual_link_visual_component__WEBPACK_IMPORTED_MODULE_1__["LinkVisualComponent"]; });





var SHARED_VISUALS = [
    _node_visual_node_visual_component__WEBPACK_IMPORTED_MODULE_0__["NodeVisualComponent"],
    _link_visual_link_visual_component__WEBPACK_IMPORTED_MODULE_1__["LinkVisualComponent"],
    _node_visual_node_visual_component__WEBPACK_IMPORTED_MODULE_0__["BottomSheetOverviewExampleSheet"]
];


/***/ }),

/***/ "./src/app/mind-map/visuals/shared/link-visual/link-visual.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/mind-map/visuals/shared/link-visual/link-visual.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link {\r\n    stroke-width: 1;\r\n     stroke: red;\r\n    /* rgb(222,237,250); */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZC1tYXAvdmlzdWFscy9zaGFyZWQvbGluay12aXN1YWwvbGluay12aXN1YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7S0FDZCxXQUFXO0lBQ1osc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbWluZC1tYXAvdmlzdWFscy9zaGFyZWQvbGluay12aXN1YWwvbGluay12aXN1YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rIHtcclxuICAgIHN0cm9rZS13aWR0aDogMTtcclxuICAgICBzdHJva2U6IHJlZDtcclxuICAgIC8qIHJnYigyMjIsMjM3LDI1MCk7ICovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/mind-map/visuals/shared/link-visual/link-visual.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/mind-map/visuals/shared/link-visual/link-visual.component.ts ***!
  \******************************************************************************/
/*! exports provided: LinkVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVisualComponent", function() { return LinkVisualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../d3 */ "./src/app/mind-map/d3/index.ts");



var LinkVisualComponent = /** @class */ (function () {
    function LinkVisualComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('linkVisual'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _d3__WEBPACK_IMPORTED_MODULE_2__["Link"])
    ], LinkVisualComponent.prototype, "link", void 0);
    LinkVisualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[linkVisual]',
            template: "\n    <svg:line\n        class=\"link\"\n        [attr.x1]=\"link.source.x\"\n        [attr.y1]=\"link.source.y\"\n        [attr.x2]=\"link.target.x\"\n        [attr.y2]=\"link.target.y\"\n    ></svg:line>\n  ",
            styles: [__webpack_require__(/*! ./link-visual.component.css */ "./src/app/mind-map/visuals/shared/link-visual/link-visual.component.css")]
        })
    ], LinkVisualComponent);
    return LinkVisualComponent;
}());



/***/ }),

/***/ "./src/app/mind-map/visuals/shared/node-visual/node-visual.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/mind-map/visuals/shared/node-visual/node-visual.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".node {\r\n    cursor: pointer;\r\n    transition: stroke-width 0.1s ease-out,\r\n        fill 0.1s ease-out,\r\n        stroke 0.1s ease-out;\r\n\r\n    stroke: white;\r\n    stroke-width: 0.55;\r\n}\r\n.node-name {\r\n  word-wrap: break-word;\r\n  flex-wrap: wrap;\r\n}\r\n.node:hover {\r\n  fill: royalblue;\r\n  stroke: red;\r\n  stroke-width: 3;\r\n}\r\n.node:focus {\r\n  fill: royalblue;\r\n  stroke: red;\r\n  stroke-width: 3;\r\n}\r\nimg {\r\n  max-height: 100vh;\r\n  max-width: 300px;\r\n  }\r\n.node-name {\r\n  font-family: 'Lato';\r\n  text-anchor: middle;\r\n  alignment-baseline: central;\r\n  font-weight: 300;\r\n  fill: white;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluZC1tYXAvdmlzdWFscy9zaGFyZWQvbm9kZS12aXN1YWwvbm9kZS12aXN1YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZjs7NEJBRXdCOztJQUV4QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEI7QUFHRjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9taW5kLW1hcC92aXN1YWxzL3NoYXJlZC9ub2RlLXZpc3VhbC9ub2RlLXZpc3VhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogc3Ryb2tlLXdpZHRoIDAuMXMgZWFzZS1vdXQsXHJcbiAgICAgICAgZmlsbCAwLjFzIGVhc2Utb3V0LFxyXG4gICAgICAgIHN0cm9rZSAwLjFzIGVhc2Utb3V0O1xyXG5cclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDAuNTU7XHJcbn1cclxuLm5vZGUtbmFtZSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ubm9kZTpob3ZlciB7XHJcbiAgZmlsbDogcm95YWxibHVlO1xyXG4gIHN0cm9rZTogcmVkO1xyXG4gIHN0cm9rZS13aWR0aDogMztcclxufVxyXG5cclxuLm5vZGU6Zm9jdXMge1xyXG4gIGZpbGw6IHJveWFsYmx1ZTtcclxuICBzdHJva2U6IHJlZDtcclxuICBzdHJva2Utd2lkdGg6IDM7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG5cclxuLm5vZGUtbmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gIGFsaWdubWVudC1iYXNlbGluZTogY2VudHJhbDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/mind-map/visuals/shared/node-visual/node-visual.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/mind-map/visuals/shared/node-visual/node-visual.component.ts ***!
  \******************************************************************************/
/*! exports provided: NodeVisualComponent, BottomSheetOverviewExampleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeVisualComponent", function() { return NodeVisualComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function() { return BottomSheetOverviewExampleSheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../d3 */ "./src/app/mind-map/d3/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var NodeVisualComponent = /** @class */ (function () {
    function NodeVisualComponent(bottomSheet) {
        this.bottomSheet = bottomSheet;
        this.showDiv = false;
        this.showDivStyle = 'visibility: hidden';
        this.testText = 'Test text on hover';
    }
    NodeVisualComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('nodeVisual'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _d3__WEBPACK_IMPORTED_MODULE_2__["Node"])
    ], NodeVisualComponent.prototype, "node", void 0);
    NodeVisualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[nodeVisual]',
            template: "\n  <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/pixels-2.svg\" alt=\"Pixels, my super cute cat\">\n  <svg:g [attr.transform]=\"'translate(' + node.x + ',' + node.y + ')'\">\n      <svg:circle\n          (click)=\"openBottomSheet(node.id)\"\n          class=\"node\"\n          [attr.fill]=\"node.bgcolor\"\n          cx=\"0\"\n          cy=\"0\"\n          [attr.r]=\"node.r + 5\">\n      </svg:circle>\n      <svg:text\n          class=\"node-name\"\n          [attr.font-size]=\"node.fontSize\">\n        {{node.id}}.{{node.title}}\n      </svg:text>\n      </svg:g>\n      <svg:g [attr.transform]=\"'translate(' + 200 + ',' + 200 + ')'\">\n      <svg:circle\n          (click)=\"openBottomSheet()\"\n          class=\"node\"\n          [attr.fill]=\"node.bgcolor\"\n          cx=\"0\"\n          cy=\"0\"\n          [attr.r]=\"node.r\">\n      </svg:circle>\n      <svg:text\n          class=\"node-name\"\n          [attr.font-size]=\"node.fontSize\">\n        {{node.desc}}\n      </svg:text>\n      <g id=\"play-activity\">\n\t\t\t\t\t<rect x=\"752.3\" y=\"277.3\" class=\"st17\" width=\"201.3\" height=\"680\"/>\n\t\t\t\t\t<text id=\"play-description\" transform=\"matrix(1 0 0 1 260.9023 490.2235)\">\n\t\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st18 st14 st19\">MAKES YOUR CITY</tspan>\n\t\t\t\t\t\t<tspan x=\"21\" y=\"21.6\" class=\"st18 st14 st19\">INTO SMART</tspan><tspan x=\"61.5\" y=\"43.2\" class=\"st18 st14 st19\">CITY.</tspan>\n\t\t\t\t\t\t<tspan class=\"offscreen\">A gray kitten tangled in a ball of yarn.</tspan>\n\t\t\t\t\t</text>\n\t\t\t\t\t<image style=\"overflow:visible;enable-background:new;\" width=\"259\" height=\"259\" xlink:href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/cat_tied.png\" transform=\"matrix(0.3707 0 0 0.3707 304.9196 361.7916)\">\n\t\t\t\t\t</image>\n        </g>\n      </svg:g>\n  ",
            styles: [__webpack_require__(/*! ./node-visual.component.css */ "./src/app/mind-map/visuals/shared/node-visual/node-visual.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]])
    ], NodeVisualComponent);
    return NodeVisualComponent;
}());

var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bottom-sheet-overview-example-sheet',
            template: "\n  <mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetRef"]])
    ], BottomSheetOverviewExampleSheet);
    return BottomSheetOverviewExampleSheet;
}());



/***/ }),

/***/ "./src/app/more-links/more-links.component.html":
/*!******************************************************!*\
  !*** ./src/app/more-links/more-links.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header fxLayout=\"column\">\n      <mat-panel-title class=\"panel-header\">\n        Scroll to learn more\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <section fxLayout=\"column\" fxLayoutGap=\"0.1\" fxLayoutAlign=\"center center\">\n        <mat-card class=\"example-card\">\n            <mat-card-content>\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n              <div class=\"smart-city\">\n                  <img src='./../../assets/images/smart-city.png' class=\"md-card-image\" alt=\"image caption\"/>\n              </div>\n              <div class=\"smart-city-desc\">\n                <p *ngFor=\"let content of fillerContent\">{{ content }}</p>\n              </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n      </section>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/more-links/more-links.component.scss":
/*!******************************************************!*\
  !*** ./src/app/more-links/more-links.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-expansion-panel {\n  padding: 15px; }\n\n.panel-header {\n  font-size: 18px; }\n\n.mat-card {\n  width: 80%; }\n\n.mat-icon {\n  font-size: 70px; }\n\n.smart-city {\n  background-image: url(\"/src/assets/images/logo.png\");\n  background-repeat: no-repeat;\n  width: 50%; }\n\n.smart-city-desc {\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZS1saW5rcy9DOlxcTm9kZVByb2plY3RzXFxpU3BhY2UtbWF0ZXJpYWwvc3JjXFxhcHBcXG1vcmUtbGlua3NcXG1vcmUtbGlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsVUFSZ0IsRUFBQTs7QUFVbEI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usb0RBQW9EO0VBQ3BELDRCQUE0QjtFQUM1QixVQUNGLEVBQUE7O0FBRUE7RUFDRSxVQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb3JlLWxpbmtzL21vcmUtbGlua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29udGVudFdpZHRoOiA4MCU7XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5wYW5lbC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ubWF0LWNhcmQge1xyXG4gIHdpZHRoIDogJGNvbnRlbnRXaWR0aDtcclxufVxyXG4ubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG4uc21hcnQtY2l0eSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiA1MCVcclxufVxyXG5cclxuLnNtYXJ0LWNpdHktZGVzYyB7XHJcbiAgd2lkdGg6IDUwJVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/more-links/more-links.component.ts":
/*!****************************************************!*\
  !*** ./src/app/more-links/more-links.component.ts ***!
  \****************************************************/
/*! exports provided: MoreLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreLinksComponent", function() { return MoreLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoreLinksComponent = /** @class */ (function () {
    function MoreLinksComponent() {
        this.panelOpenState = false;
        this.fillerContent = Array.from({ length: 4 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
    }
    MoreLinksComponent.prototype.ngOnInit = function () {
    };
    MoreLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-more-links',
            template: __webpack_require__(/*! ./more-links.component.html */ "./src/app/more-links/more-links.component.html"),
            styles: [__webpack_require__(/*! ./more-links.component.scss */ "./src/app/more-links/more-links.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoreLinksComponent);
    return MoreLinksComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"lessons\">\n<div class=\"message\">\n    Oops! Something wrong!\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  color: #1976d2;\n  font-size: 60px;\n  position: static;\n  display: flex;\n  align-items: center;\n  margin: 80px; }\n\n.message::before {\n  content: url('404.jpg');\n  margin-right: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvQzpcXE5vZGVQcm9qZWN0c1xcaVNwYWNlLW1hdGVyaWFsL3NyY1xcYXBwXFxwYWdlLW5vdC1mb3VuZFxccGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFJaEI7RUFFSSx1QkFBMkM7RUFDM0Msa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA4MHB4O1xyXG5cclxufVxyXG5cclxuLm1lc3NhZ2U6OmJlZm9yZVxyXG57XHJcbiAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvNDA0LmpwZycpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"matcard\">\n    <mat-card-header>\n        <mat-card-title>Student Registration Form</mat-card-title>\n    </mat-card-header>\n        <mat-card-content>\n        <!-- put the form here -->\n        <div class=\"example-container\">\n            <mat-divider></mat-divider>\n            <form class=\"example-container\" [formGroup]=\"form\">\n              <div class=\"field\">\n                    <label>Student from: </label>\n                      <mat-checkbox formControlName=\"uwf\">UWF</mat-checkbox>\n                      <mat-checkbox formControlName=\"other\">Outside</mat-checkbox>\n              </div>\n              <div class=\"field\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <mat-radio-group formControlName=\"gendre\">\n                  <mat-label>Gendre:</mat-label>\n                  <mat-radio-button value=\"male\">Male</mat-radio-button>\n                  <mat-radio-button value=\"female\">Female</mat-radio-button>\n                </mat-radio-group>\n                <mat-form-field>\n                    <mat-select required formControlName=\"school\">\n                      <mat-option>-- NA --</mat-option>\n                      <mat-option value=\"3\">1-Franklin Park School</mat-option>\n                      <mat-option value=\"4\">2-Franklin Park School</mat-option>\n                      <mat-option value=\"5\">3-Franklin Park School</mat-option>\n                      <mat-option value=\"6\">4-Franklin Park School</mat-option>\n                    </mat-select>\n                    <mat-label>Select School</mat-label>\n                  </mat-form-field>\n                <mat-form-field>\n                    <mat-select required formControlName=\"grade\">\n                      <mat-option>-- NA --</mat-option>\n                      <mat-option value=\"3\">3rd Grade</mat-option>\n                      <mat-option value=\"4\">4th Grade</mat-option>\n                      <mat-option value=\"5\">5th Grade</mat-option>\n                      <mat-option value=\"6\">6th Grade</mat-option>\n                    </mat-select>\n                    <mat-label>Select Grade</mat-label>\n                  </mat-form-field>\n              </div>\n\n            <mat-form-field [floatLabel]=\"form.value.studentname\">\n              <mat-label>Student Name</mat-label>\n              <input matInput placeholder=\"Enter your name*\" formControlName=\"studentname\">\n            </mat-form-field>\n            <div class=\"field\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <mat-form-field [floatLabel]=\"form.value.course\">\n                <mat-label>Course Name</mat-label>\n                <input matInput placeholder=\"Enter your course\" formControlName=\"coursename\">\n              </mat-form-field>\n              <mat-form-field>\n                  <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n                </mat-form-field>\n              </div>\n\n            <mat-form-field>\n              <mat-select required formControlName=\"interested\">\n                <mat-option>-- NA --</mat-option>\n                <mat-option value=\"yes\">Yes</mat-option>\n                <mat-option value=\"no\">No</mat-option>\n              </mat-select>\n              <mat-label>I am interested in <b>IOT Programming & Coding</b></mat-label>\n            </mat-form-field>\n            </form>\n          </div>\n          <mat-divider></mat-divider>\n        </mat-card-content>\n        <mat-card-actions>\n        <!-- put buttons here -->\n        <button mat-raised-button color=\"primary\" (click)=\"submitRegistrationClick(form.value)\">Register</button>\n        </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  width: 50vW; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-container form {\n  margin-bottom: 20px;\n  margin-top: 40px; }\n\n.example-container form > * {\n  margin: 15px 0; }\n\n.mat-card {\n  background: e6e6e6; }\n\n.mat-card-content {\n  padding: 25px; }\n\n.example-container .mat-radio-button {\n  margin: 0 12px; }\n\n.example-container .mat-checkbox {\n  margin: 0 12px; }\n\n.example-container .mat-card-actions {\n  margin: 20px 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXE5vZGVQcm9qZWN0c1xcaVNwYWNlLW1hdGVyaWFsL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDUwdlc7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgZm9ybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgZm9ybSA+ICoge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGU2ZTZlNjtcclxufVxyXG4ubWF0LWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1jaGVja2JveCB7XHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgbWFyZ2luOiAyMHB4IDEycHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, snackBar) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.form = fb.group({
            'gendre': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'uwf': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'other': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            school: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            studentname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            coursename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            interested: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.contactName = 'Contact Us';
    };
    RegisterComponent.prototype.submitRegistrationClick = function (registration) {
        var submitted = {
            uwf: this.form.value.uwf,
            other: this.form.value.other,
            gendre: this.form.value.gendre,
            grade: this.form.value.grade,
            studentname: this.form.value.studentname,
            school: this.form.value.school
        };
        this.openSnackBar('Successfully Submitted', 'submitted');
    };
    RegisterComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register2/register2.component.html":
/*!****************************************************!*\
  !*** ./src/app/register2/register2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"horizontal\">\n    <mat-card-header>\n        <mat-card-title>Student Registration Form</mat-card-title>\n    </mat-card-header>\n        <mat-card-content>\n        <!-- put the form here -->\n<mat-horizontal-stepper linear #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>Fill out your name</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>Fill out your address</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      You are now done.\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\n      </div>\n    </mat-step>\n  </mat-horizontal-stepper>\n\n\n</mat-card-content>\n<mat-card-actions>\n<!-- put buttons here -->\n<button mat-raised-button color=\"primary\" (click)=\"submitRegistrationClick()\">Register</button>\n</mat-card-actions>\n</mat-card>\n\n<mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-card-header>\n        <mat-card-title>Student Registration Form</mat-card-title>\n    </mat-card-header>\n        <mat-card-content>\n        <!-- put the form here -->\n  <mat-vertical-stepper linear #stepper1>\n    <mat-step [stepControl]=\"firstFormGroup\" editable=\"true\">\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>Fill out your name</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\" editable=\"true\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>Fill out your address</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      You are now done.\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\n      </div>\n    </mat-step>\n  </mat-vertical-stepper>\n\n</mat-card-content>\n<mat-card-actions>\n<!-- put buttons here -->\n<button mat-raised-button color=\"primary\" (click)=\"submitRegistrationClick()\">Register</button>\n</mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/register2/register2.component.scss":
/*!****************************************************!*\
  !*** ./src/app/register2/register2.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal {\n  background: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIyL0M6XFxOb2RlUHJvamVjdHNcXGlTcGFjZS1tYXRlcmlhbC9zcmNcXGFwcFxccmVnaXN0ZXIyXFxyZWdpc3RlcjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyMi9yZWdpc3RlcjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9yaXpvbnRhbCB7XHJcbiAgYmFja2dyb3VuZDogZ3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register2/register2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/register2/register2.component.ts ***!
  \**************************************************/
/*! exports provided: Register2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register2Component", function() { return Register2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




/**
 * @title Stepper with editable steps
 */
var Register2Component = /** @class */ (function () {
    function Register2Component(_formBuilder, snackBar) {
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.isEditable = false;
    }
    Register2Component.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Register2Component.prototype.submitRegistrationClick = function () {
        // const submitted = {
        //   uwf: this.form.value.uwf,
        //   other: this.form.value.other,
        //   gendre : this.form.value.gendre,
        //   grade : this.form.value.grade,
        //   studentname: this.form.value.studentname,
        //   school: this.form.value.school
        // };
        this.openSnackBar('Successfully Submitted', 'submitted');
    };
    Register2Component.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    Register2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-register2',
            template: __webpack_require__(/*! ./register2.component.html */ "./src/app/register2/register2.component.html"),
            styles: [__webpack_require__(/*! ./register2.component.scss */ "./src/app/register2/register2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], Register2Component);
    return Register2Component;
}());



/***/ }),

/***/ "./src/app/shared/services/ispace-data.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/ispace-data.service.ts ***!
  \********************************************************/
/*! exports provided: IspaceDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IspaceDataService", function() { return IspaceDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var IspaceDataService = /** @class */ (function () {
    function IspaceDataService(_httpClient) {
        this._httpClient = _httpClient;
    }
    IspaceDataService.prototype.getApp = function () {
        return "Hello world";
    };
    IspaceDataService.prototype.getLessons = function () {
        return this._httpClient.get('./assets/json/ispace-lessons.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    IspaceDataService.prototype.getParking = function () {
        return this._httpClient.get('./assets/json/ispace-parking.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    IspaceDataService.prototype.getSchools = function () {
        return this._httpClient.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    IspaceDataService.prototype.getBullets = function () {
        return this._httpClient.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return [
                {
                    bulletHead: 'Parking',
                    bulletColor: 'accent',
                    bulletPoints: [
                        '24 hours Security',
                        '24 hours Reception',
                        '24 hours Wireless Internet',
                        'Elevator',
                        'Mobile alert',
                        'Wallet Parking'
                    ]
                },
                {
                    bulletHead: 'Parking',
                    bulletColor: 'warn',
                    bulletPoints: [
                        '24 hours Security',
                        '24 hours Reception',
                        '24 hours Wireless Internet',
                        'Elevator',
                        'Mobile alert',
                        'Wallet Parking'
                    ]
                },
                {
                    bulletHead: 'Parking',
                    bulletColor: 'primary',
                    bulletPoints: [
                        '24 hours Security',
                        '24 hours Reception',
                        '24 hours Wireless Internet',
                        'Elevator',
                        'Mobile alert',
                        'Wallet Parking'
                    ]
                }
            ];
        }));
    };
    IspaceDataService.prototype.getLessons1 = function () {
        return this._httpClient.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    IspaceDataService.prototype.getSchoolWithId = function (params) {
        var userId = params['userId'];
        var id = params['schoolId'];
        console.log(id);
        return this._httpClient.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    // deleteSchool(id: number) : Observable<any> {
    //   //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
    //   return Observable.of({}).delay(2000)
    //    .do(e => this.countries.splice(this.countries.findIndex(c => c.id == id), 1));
    // }
    IspaceDataService.prototype.getCommentsByPostId = function (postId) {
        console.log(postId);
        return this._httpClient.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    IspaceDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IspaceDataService);
    return IspaceDataService;
}());



/***/ }),

/***/ "./src/app/shared/services/selective-preloading-strategy.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/selective-preloading-strategy.service.ts ***!
  \**************************************************************************/
/*! exports provided: SelectivePreloadingStrategyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyService", function() { return SelectivePreloadingStrategyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SelectivePreloadingStrategyService = /** @class */ (function () {
    function SelectivePreloadingStrategyService() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategyService.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the path to the console
            console.log('Preloaded :', route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
    };
    SelectivePreloadingStrategyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectivePreloadingStrategyService);
    return SelectivePreloadingStrategyService;
}());



/***/ }),

/***/ "./src/app/smart-parking/smart-parking.component.html":
/*!************************************************************!*\
  !*** ./src/app/smart-parking/smart-parking.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"32px\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"32px\">\n    <h2>Parking Zone: A ({{ total }})</h2>\n    <h1>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        [matBadge]=\"agreed\"\n        matBadgePosition=\"before\"\n        matBadgeColor=\"accent\"\n      >\n        Occupied\n      </button>\n    </h1>\n    <h1>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        [matBadge]=\"total - agreed\"\n        matBadgePosition=\"before\"\n        matBadgeColor=\"accent\"\n      >\n        Available\n      </button>\n    </h1>\n    <mat-slide-toggle>Slide me!</mat-slide-toggle>\n    <div>\n      <button mat-raised-button (click)=\"openDialog()\">Parking History</button>\n    </div>\n  </div>\n\n  <div\n    fxLayout=\"row wrap\"\n    fxLayoutAlign=\"center center\"\n    fxLayoutGap=\"32px grid\"\n    style=\"width: 70vw;\"\n  >\n    <ispace-voter\n      *ngFor=\"let spot of parkingSpots\"\n      [total]=\"total\"\n      [agreed]=\"agreed\"\n      [spot]=\"spot\"\n      (voted)=\"onVoted($event)\"\n    >\n    </ispace-voter>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/smart-parking/smart-parking.component.scss":
/*!************************************************************!*\
  !*** ./src/app/smart-parking/smart-parking.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner-wrapper {\n  display: flex;\n  align-items: center;\n  height: 100%; }\n\ntable {\n  font-family: arial, sans-serif;\n  border: 1px solid #efefef;\n  border-radius: 8px;\n  color: #000;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\nth {\n  border: 1px solid #e2e2e2;\n  text-align: center;\n  padding: 8px; }\n\ntr:nth-child(even) {\n  background-color: #efefef; }\n\ntd {\n  border: 1px solid #e2e2e2;\n  text-align: left;\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc21hcnQtcGFya2luZy9DOlxcTm9kZVByb2plY3RzXFxpU3BhY2UtbWF0ZXJpYWwvc3JjXFxhcHBcXHNtYXJ0LXBhcmtpbmdcXHNtYXJ0LXBhcmtpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHaEI7RUFDSSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQUUsbUJBQW1CLEVBQUE7O0FBSXpDO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zbWFydC1wYXJraW5nL3NtYXJ0LXBhcmtpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDsgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgXHJcbn1cclxuXHJcbnRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbn1cclxudGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgIFxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/smart-parking/smart-parking.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/smart-parking/smart-parking.component.ts ***!
  \**********************************************************/
/*! exports provided: SmartParkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartParkingComponent", function() { return SmartParkingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_ispace_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/services/ispace-data.service */ "./src/app/shared/services/ispace-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _enquiry_dialog_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enquiry-dialog/enquiry-dialog.component */ "./src/app/enquiry-dialog/enquiry-dialog.component.ts");






var SmartParkingComponent = /** @class */ (function () {
    function SmartParkingComponent(_ispaceDataService, dialog, snackBar) {
        var _this = this;
        this._ispaceDataService = _ispaceDataService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.total = 15;
        this.agreed = 0;
        this.disagreed = 0;
        this.voters = ['Park-1', 'Park-2', 'Park-3', 'Park-4', 'Park-5', 'Park-6', 'Park-7', 'Park-8', 'Park-9', 'Park-10', 'Park-11', 'Park-12'];
        this._ispaceDataService
            .getParking()
            .subscribe(function (data) {
            _this.parking = data;
            console.log('parking', _this.parking.smartParking.length);
            _this.parkingSpots = _this.parking.smartParking[0].Spots;
            console.log('parkingSpots', _this.parkingSpots);
        });
    }
    SmartParkingComponent.prototype.onVoted = function (agreed) {
        this.openSnackBar(agreed ? 'Successfully added' : 'Successfully removed', 'Parking');
        if (agreed) {
            this.agreed++;
            this.disagreed--;
        }
        else {
            this.disagreed++;
            this.agreed--;
        }
    };
    SmartParkingComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SmartParkingComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_enquiry_dialog_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EnquiryDialogComponent"], {
            width: '400px',
            height: '400px',
            data: { name: 'this.name' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result.name);
            console.log(result === undefined ? 'und' : result);
            // this.name = result.name;
            // this.phone = result.phone;
        });
    };
    SmartParkingComponent.prototype.ngOnInit = function () {
    };
    SmartParkingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-smart-parking',
            template: __webpack_require__(/*! ./smart-parking.component.html */ "./src/app/smart-parking/smart-parking.component.html"),
            styles: [__webpack_require__(/*! ./smart-parking.component.scss */ "./src/app/smart-parking/smart-parking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_ispace_data_service__WEBPACK_IMPORTED_MODULE_2__["IspaceDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SmartParkingComponent);
    return SmartParkingComponent;
}());



/***/ }),

/***/ "./src/app/svg/svg.component.html":
/*!****************************************!*\
  !*** ./src/app/svg/svg.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg id=\"InteractiveSVG\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n\t y=\"0px\" viewBox=\"0 0 1024 1388\" style=\"enable-background:new 0 0 1024 1388;\" preserveAspectRatio=\"xMinYMin slice\" aria-labelledby=\"timeline-title\" aria-describedby=\"timeline-desc\" role=\"group\">\n\t <desc id=\"timeline-desc\">An Interactive Timeline</desc>\n\t <g id=\"background\">\n \t\t<rect y=\"259.5\" class=\"st0\" width=\"1023.9\" height=\"1128.5\"/>\n\t </g>\n    <g id=\"ribbon\">\n      <polygon class=\"st1\" points=\"720.4,57.5 455.3,57.5 440.7,57.5 297.5,57.5 314,88.4 297.5,119.2 440.7,119.2 455.3,119.2\n                                   720.4,119.2 703.9,88.4 \t\t\"/>\n      <polygon class=\"st1\" points=\"696.4,88.3 698.1,85.4 709.4,64.3 447.2,64.3 439.9,64.3 308.5,64.3 319.8,85.4 321.5,88.3\n                                   319.8,92.2 308.5,114.4 439.9,114.4 447.2,114.4 709.4,114.4 698.1,92.2 \t\t\"/>\n      <path class=\"st2\" d=\"M710.9,115.4h-404l12-23.6l1.4-3.4l-1.3-2.5l-12.1-22.5H711l-13.5,25l1.5,3.4L710.9,115.4z M310.1,113.4\n                           h397.7l-10.6-20.8l-1.8-4.4l1.9-3.3l10.5-19.7H310.1l12.4,23l-1.8,4.3L310.1,113.4z\"/>\n    </g>\n    <g id=\"timeline-title\">\n     <text transform=\"matrix(1.14 0 0 1 415 105.8574)\" class=\"st6 st7 st8 st9\">A Course</text>\n      <text transform=\"matrix(1.14 0 0 1 469.0869 161.1821)\" class=\"st3 st10 st8 st9\">on</text>\n      <text transform=\"matrix(1 0 0 1 275.516 237.4282)\" class=\"st1 st11 st12\">Smart Systems</text>\n  </g>\n<g id=\"timeline\" role=\"list\" aria-label=\"the timeline, from morning to night\">\n\t<g id=\"play\" role=\"listitem\">\n\t\t\t<a xlink:href=\"#play-group\" role=\"img\" aria-labelledby=\"play-time play-text play-description\" tabindex=\"0\" id=\"play-group\">\n\t\t\t\t<text id=\"play-time\" transform=\"matrix(1 0 0 1 533.1505 485.1465)\" class=\"st13 st14 st15\">3-5Hrs</text>\n\t\t\t\t<rect id=\"line\" x=\"510.2\" y=\"419.9\" class=\"st13\" width=\"17\" height=\"153.6\"/>\n\t\t\t\t<polyline id=\"arrow\" class=\"st13\" points=\"513.9,465 501.6,474.4 519.2,485.3\"/>\n\t\t\t\t<circle class=\"st13 time-circle\" cx=\"352.9\" cy=\"419.9\" r=\"130.5\" />\n\t\t\t\t<g class=\"play-title\">\n\t\t\t\t\t<text id=\"play-text\" transform=\"matrix(1 0 0 1 288.1175 338.939)\" class=\"st2 st16\">SMART CITY!</text>\n\t\t\t\t</g>\n\t\t\t\t<g id=\"play-activity\">\n\t\t\t\t\t<rect x=\"252.3\" y=\"477.3\" class=\"st17\" width=\"201.3\" height=\"68\"/>\n\t\t\t\t\t<text id=\"play-description\" transform=\"matrix(1 0 0 1 260.9023 490.2235)\">\n\t\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st18 st14 st19\">MAKES YOUR CITY</tspan>\n\t\t\t\t\t\t<tspan x=\"21\" y=\"21.6\" class=\"st18 st14 st19\">INTO SMART</tspan><tspan x=\"61.5\" y=\"43.2\" class=\"st18 st14 st19\">CITY.</tspan>\n\t\t\t\t\t\t<tspan class=\"offscreen\">A gray kitten tangled in a ball of yarn.</tspan>\n\t\t\t\t\t</text>\n\t\t\t\t\t<image style=\"overflow:visible;enable-background:new    ;\" width=\"259\" height=\"259\" xlink:href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/cat_tied.png\" transform=\"matrix(0.3707 0 0 0.3707 304.9196 361.7916)\">\n\t\t\t\t\t</image>\n\t\t\t\t</g>\n\t\t\t</a>\n\t</g>\n\t<g id=\"wakeup\" role=\"listitem\">\n\t\t\t<a xlink:href=\"#wakeup-group\" role=\"img\" aria-labelledby=\"wakeup-time wakeup-text wakeup-description\" tabindex=\"0\" id=\"wakeup-group\">\n\t\t\t\t<text id=\"wakeup-time\" transform=\"matrix(1 0 0 1 211.8302 598.4327)\" class=\"st21\">\n\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st20 st14 st15\">TAKES YOUR KIDS</tspan>\n          <tspan x=\"0\" y=\"33.9\" class=\"st20 st14 st15\">TO NEXT LEVEL</tspan>\n          <tspan x=\"0\" y=\"63.9\" class=\"st20 st14 st15\">OF THINKING</tspan>\n\t\t\t\t</text>\n\t\t\t\t<rect x=\"510.2\" y=\"573.5\" class=\"st20\" width=\"17\" height=\"47.7\"/>\n\t\t\t\t<polyline class=\"st20\" points=\"524.9,605.3 537.2,596 519.6,585\"/>\n\t\t\t\t<circle class=\"st20 time-circle\" cx=\"713.6\" cy=\"616.5\" r=\"143.1\"/>\n\t\t\t\t<g class=\"wakeup-title\">\n\t\t\t\t\t<text id=\"wakeup-text\" transform=\"matrix(1 0 0 1 629.1059 546.348)\" class=\"st2 st16\">SMART PARKING!</text>\n\t\t\t\t</g>\n\t\t\t\t<g id=\"wakeup-activity\">\n\t\t\t\t\t<rect x=\"614.5\" y=\"670.3\" class=\"st17\" width=\"204.2\" height=\"68\"/>\n\t\t\t\t\t<text id=\"wakeup-description\" transform=\"matrix(1 0 0 1 619.1191 683.2352)\">\n\t\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st22 st14 st19\">DECIDES YOU’VE HAD </tspan>\n\t\t\t\t\t\t<tspan x=\"24\" y=\"21.6\" class=\"st22 st14 st19\">ENOUGH SLEEP. </tspan>\n\t\t\t\t\t\t<tspan class=\"offscreen\">An orange kitten meowing loudly.</tspan>\n\t\t\t\t\t</text>\n\t\t\t\t\t<image style=\"overflow:visible;\" width=\"256\" height=\"256\" id=\"wakeup-image\" xlink:href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/cat_sing.png\" transform=\"matrix(0.375 0 0 0.375 664.1059 557)\">\n\t\t\t\t\t</image>\n\t\t\t\t</g>\n\t\t\t</a>\n\t</g>\n\t<g id=\"sleep\" role=\"listitem\">\n\t\t\t<a xlink:href=\"#sleep-group\" role=\"img\" aria-labelledby=\"sleep-time sleep-text sleep-description\" tabindex=\"0\" id=\"sleep-group\">\n\t\t\t\t<text id=\"sleep-time\" transform=\"matrix(1 0 0 1 559.1717 800.7728)\" class=\"st21\">\n\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st25 st14 st15\">WHEN YOU LEAVE TILL </tspan>\n\t\t\t\t\t<tspan x=\"0\" y=\"33.9\" class=\"st25 st14 st15\">5 MIN BEFORE YOU’RE HOME</tspan>\n\t\t\t\t</text>\n\t\t\t\t<rect x=\"510.2\" y=\"620.5\" class=\"st25\" width=\"17\" height=\"326.3\"/>\n\t\t\t\t<polyline class=\"st25\" points=\"513.9,752 501.6,761.4 519.2,772.3\"/>\n\t\t\t\t<circle class=\"st25 time-circle\" cx=\"322.9\" cy=\"802.3\" r=\"130.5\"/>\n\t\t\t\t<g class=\"sleep-title\">\n\t\t\t\t\t<text id=\"sleep-text\" transform=\"matrix(1 0 0 1 242 735.695)\" class=\"st2 st16\">SMART FARMS</text>\n\t\t\t\t</g>\n\t\t\t\t<g id=\"sleep-activity\">\n\t\t\t\t\t<rect x=\"220.4\" y=\"838.8\" class=\"st17\" width=\"205\" height=\"94\"/>\n\t\t\t\t\t<text id=\"sleep-description\" transform=\"matrix(1 0 0 1 237.8921 851.7283)\">\n\t\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st2 st14 st19\">LITERALLY SLEEPS </tspan>\n\t\t\t\t\t\t<tspan x=\"7.5\" y=\"21.6\" class=\"st2 st14 st19\">THE WHOLE TIME </tspan>\n\t\t\t\t\t\t<tspan x=\"19.5\" y=\"43.2\" class=\"st2 st14 st19\">YOU’RE GONE.</tspan>\n\t\t\t\t\t\t<tspan class=\"offscreen\">A gray kitten curled up in a tight little ball, sleeping.</tspan>\n\t\t\t\t\t</text>\n\t\t\t\t\t<image style=\"overflow:visible;\" width=\"256\" height=\"256\" id=\"sleep-image\" xlink:href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/cat_sleep.png\" transform=\"matrix(0.375 0 0 0.375 268.95 741)\">\n\t\t\t\t\t</image>\n\t\t\t\t</g>\n\t\t\t</a>\n\t</g>\n\t<g id=\"feed\" role=\"listitem\">\n\t\t\t<a xlink:href=\"#feed-group\" role=\"img\" aria-labelledby=\"feed-time feed-text feed-description\" tabindex=\"0\" id=\"feed-group\">\n\t\t\t\t<text id=\"feed-time\" transform=\"matrix(1 0 0 1 411.8849 998.5654)\" class=\"st1 st14 st15\">2 Hrs</text>\n\t\t\t\t<rect x=\"510.2\" y=\"850.9\" class=\"st1\" width=\"17\" height=\"283\"/>\n\t\t\t\t<polyline class=\"st1\" points=\"524.9,1001.3 537.2,992 519.6,981\"/>\n\t\t\t\t<circle class=\"st1 time-circle\" cx=\"721.6\" cy=\"991.4\" r=\"130.5\"/>\n\t\t\t\t<g class=\"feed-title\">\n\t\t\t\t\t<text id=\"feed-text\" transform=\"matrix(1 0 0 1 620.6246 902.1143)\" class=\"st21\">\n\t\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st2 st16 st23\">SMART</tspan>\n\t\t\t\t\t\t<tspan x=\"-18.5\" y=\"33.9\" class=\"st2 st16 st23\">INVONTORY SYSTEMS</tspan>\n\t\t\t\t\t</text>\n\t\t\t\t</g>\n\t\t\t\t<g id=\"feed-activity\">\n\t\t\t\t\t<rect x=\"636\" y=\"1048\" class=\"st17\" width=\"180\" height=\"82.5\"/>\n\t\t\t\t\t<text id=\"feed-description\" transform=\"matrix(1 0 0 1 637.4875 1060.8926)\">\n\t\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st24 st14 st19\">POOR, POOR KITTY. </tspan>\n\t\t\t\t\t\t<tspan x=\"10\" y=\"21.6\" class=\"st24 st14 st19\">HOME ALONE ALL </tspan>\n\t\t\t\t\t\t<tspan x=\"67.5\" y=\"43.2\" class=\"st24 st14 st19\">DAY.</tspan>\n\t\t\t\t\t\t<tspan class=\"offscreen\">A sad, orange kitten staring down at an empty food bowl.</tspan>\n\t\t\t\t\t</text>\n\t\t\t\t\t<image style=\"overflow:visible;\" width=\"256\" height=\"256\" id=\"feed-image\" xlink:href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/cat_hungry.png\" transform=\"matrix(0.375 0 0 0.375 668.6 943.5654)\">\n\t\t\t\t\t</image>\n\t\t\t\t</g>\n\t\t\t</a>\n\t</g>\n\t<g id=\"cuddle\" role=\"listitem\">\n\t\t\t<a xlink:href=\"/smartparking\" role=\"img\" aria-labelledby=\"cuddle-time cuddle-text cuddle-description\" tabindex=\"0\" id=\"cuddle-group\">\n\t\t\t\t<text id=\"cuddle-time\" transform=\"matrix(1 0 0 1 563.3009 1196.9463)\" class=\"st26 st14 st15\">3Hrs</text>\n\t\t\t\t<rect x=\"510.2\" y=\"1133.9\" class=\"st26\" width=\"17\" height=\"110\"/>\n\t\t\t\t<polyline class=\"st26\" points=\"513.9,1181 501.6,1190.4 519.2,1201.3\"/>\n\t\t\t\t<circle class=\"st26 time-circle\" cx=\"317.6\" cy=\"1181.4\" r=\"130.5\"/>\n\t\t\t\t<g class=\"cuddle-title\">\n\t\t\t\t\t<text id=\"cuddle-text\" transform=\"matrix(1 0 0 1 236.5206 1096.4385)\" class=\"st21\">\n\t\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st2 st16\">SMART</tspan>\n\t\t\t\t\t\t<tspan x=\"10.2\" y=\"33.9\" class=\"st2 st16\">TRAFFIC LIGHTS</tspan>\n\t\t\t\t\t</text>\n\t\t\t\t</g>\n\t\t\t\t<g id=\"cuddle-activity\">\n\t\t\t\t\t<rect x=\"222.6\" y=\"1233\" class=\"st17\" width=\"190.7\" height=\"77\"/>\n\t\t\t\t\t<text id=\"cuddle-description\" transform=\"matrix(1 0 0 1 240.9248 1245.8857)\">\n\t\t\t\t\t\t<tspan x=\"0\" y=\"0\" class=\"st27 st14 st19\">HELPS YOU WITH </tspan>\n\t\t\t\t\t\t<tspan x=\"-9\" y=\"21.6\" class=\"st27 st14 st19\">YOUR WORK EMAIL</tspan>\n\t\t\t\t\t\t<tspan class=\"offscreen\">A gray kitten stretched out on a laptop.</tspan>\n\t\t\t\t\t</text>\n\t\t\t\t\t<image style=\"overflow:visible;enable-background:new    ;\" width=\"259\" height=\"259\" xlink:href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/cat_laptop.png\" transform=\"matrix(0.3707 0 0 0.3707 267.9986 1140.9463)\">\n\t\t\t\t\t</image>\n\t\t\t\t</g>\n\t\t\t</a>\n\t</g>\n</g>\n</svg>\n"

/***/ }),

/***/ "./src/app/svg/svg.component.scss":
/*!****************************************!*\
  !*** ./src/app/svg/svg.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  display: block;\n  width: 100%;\n  background: red; }\n\n@-webkit-keyframes slideDown {\n  0% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  100% {\n    -webkit-transform: translate(0px, 75px);\n            transform: translate(0px, 75px); } }\n\n@keyframes slideDown {\n  0% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  100% {\n    -webkit-transform: translate(0px, 75px);\n            transform: translate(0px, 75px); } }\n\n@-webkit-keyframes slideUp {\n  0% {\n    -webkit-transform: translate(0px, 75px);\n            transform: translate(0px, 75px); }\n  100% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); } }\n\n@keyframes slideUp {\n  0% {\n    -webkit-transform: translate(0px, 75px);\n            transform: translate(0px, 75px); }\n  100% {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); } }\n\n/*\r\nstuff here\r\n*/\n\nbody {\n  font-family: cabin, Arial, sans-serif;\n  background: #f9f9f9;\n  font-weight: 300;\n  font-size: 15px;\n  color: #333;\n  overflow: scroll;\n  overflow-x: hidden;\n  padding: 0;\n  margin: 0; }\n\n.st0 {\n  fill: #BBB8BF; }\n\n.st1 {\n  fill: #663399; }\n\n.st2 {\n  fill: #FFFFFF; }\n\n.st3 {\n  fill: #898989;\n  stroke: #898989;\n  stroke-miterlimit: 10; }\n\n.st4 {\n  font-family: 'Courier', Arial; }\n\n.st5 {\n  font-size: 55px; }\n\n.st6 {\n  fill: #F7F6F5;\n  stroke: #F7F6F5;\n  stroke-width: 0.25;\n  stroke-miterlimit: 10; }\n\n.st7 {\n  font-family: kelly-slab, Arial; }\n\n.st8 {\n  font-size: 45px; }\n\n.st9 {\n  letter-spacing: 2.6; }\n\n.st10 {\n  font-family: dancing-script, Arial; }\n\n.st11 {\n  font-family: lobster, Arial; }\n\n.st12 {\n  font-size: 75.4598px; }\n\n.st13 {\n  fill: #353659; }\n\n.st14 {\n  font-family: cabin, Arial; }\n\n.st15 {\n  font-size: 28.2251px; }\n\n.st16 {\n  font-family: cabin, Arial; }\n\n.st17 {\n  fill: none; }\n\n.st18 {\n  fill: #CEB995; }\n\n.st19 {\n  font-size: 18px; }\n\n.st20 {\n  fill: #035E6D; }\n\n.st21 {\n  enable-background: new; }\n\n.st22 {\n  fill: #FCDAA9; }\n\n.st24 {\n  fill: #EAE9E8; }\n\n.st25 {\n  fill: #D1652F; }\n\n.st26 {\n  fill: #C5023C; }\n\n.st27 {\n  fill: #E5E4E3; }\n\nul {\n  list-style: none; }\n\n[class$=\"title\"] text {\n  font-size: 20px;\n  font-family: cabin-condensed, Arial, sans-serif; }\n\n@supports ((-webkit-animation: slideDown) or (animation: slideDown)) {\n  [class$=\"title\"] {\n    -webkit-animation: slideDown ease-in-out .5s forwards;\n            animation: slideDown ease-in-out .5s forwards;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transform-origin: center;\n            transform-origin: center; } }\n\n[id$=\"activity\"] {\n  opacity: 0;\n  visibility: hidden; }\n\n@supports ((-webkit-animation: slideUp) or (animation: slideUp)) {\n  a:hover [class$=\"title\"], a:focus [class$=\"title\"] {\n    -webkit-animation: slideUp ease-in-out .5s forwards;\n            animation: slideUp ease-in-out .5s forwards;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transform-origin: center;\n            transform-origin: center; } }\n\na:hover [id$=\"activity\"], a:focus [id$=\"activity\"] {\n  opacity: 1;\n  visibility: visible; }\n\na:focus [class*=\"time-circle\"], a:hover [class*=\"time-circle\"] {\n  stroke: black;\n  stroke-width: 5;\n  paint-order: stroke; }\n\n.offscreen {\n  position: absolute !important;\n  font-size: 0px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\n          clip-path: polygon(0 0, 0 0, 0 0, 0 0); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ZnL0M6XFxOb2RlUHJvamVjdHNcXGlTcGFjZS1tYXRlcmlhbC9zcmNcXGFwcFxcc3ZnXFxzdmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N2Zy9zdmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRTtJQUNFLHNDQUE2QjtZQUE3Qiw4QkFBNkIsRUFBQTtFQUUvQjtJQUNFLHVDQUE4QjtZQUE5QiwrQkFBOEIsRUFBQSxFQUFBOztBQUxsQztFQUNFO0lBQ0Usc0NBQTZCO1lBQTdCLDhCQUE2QixFQUFBO0VBRS9CO0lBQ0UsdUNBQThCO1lBQTlCLCtCQUE4QixFQUFBLEVBQUE7O0FBS2xDO0VBQ0U7SUFDRSx1Q0FBOEI7WUFBOUIsK0JBQThCLEVBQUE7RUFFaEM7SUFDRSxzQ0FBOEI7WUFBOUIsOEJBQThCLEVBQUEsRUFBQTs7QUFMbEM7RUFDRTtJQUNFLHVDQUE4QjtZQUE5QiwrQkFBOEIsRUFBQTtFQUVoQztJQUNFLHNDQUE4QjtZQUE5Qiw4QkFBOEIsRUFBQSxFQUFBOztBQUtsQzs7Q0NQQzs7QURZRDtFQUNJLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1osU0FBUyxFQUFBOztBQUlYO0VBQUssYUFBWSxFQUFBOztBQUNmO0VBQUssYUFBWSxFQUFBOztBQUNqQjtFQUFLLGFBQVksRUFBQTs7QUFDakI7RUFBSyxhQUFZO0VBQUMsZUFBYztFQUFDLHFCQUFvQixFQUFBOztBQUNyRDtFQUFLLDZCQUE0QixFQUFBOztBQUNqQztFQUFLLGVBQWMsRUFBQTs7QUFDbkI7RUFBSyxhQUFZO0VBQUMsZUFBYztFQUFDLGtCQUFpQjtFQUFDLHFCQUFvQixFQUFBOztBQUN2RTtFQUFLLDhCQUE4QixFQUFBOztBQUNuQztFQUFLLGVBQWMsRUFBQTs7QUFDbkI7RUFBSyxtQkFBa0IsRUFBQTs7QUFDdkI7RUFBTSxrQ0FBa0MsRUFBQTs7QUFDeEM7RUFBTSwyQkFBMkIsRUFBQTs7QUFDakM7RUFBTSxvQkFBbUIsRUFBQTs7QUFDekI7RUFBTSxhQUFZLEVBQUE7O0FBQ2xCO0VBQU0seUJBQXdCLEVBQUE7O0FBQzlCO0VBQU0sb0JBQW1CLEVBQUE7O0FBQ3pCO0VBQU0seUJBQXdCLEVBQUE7O0FBQzlCO0VBQU0sVUFBUyxFQUFBOztBQUNmO0VBQU0sYUFBWSxFQUFBOztBQUNsQjtFQUFNLGVBQWMsRUFBQTs7QUFDcEI7RUFBTSxhQUFZLEVBQUE7O0FBQ2xCO0VBQU0sc0JBQXFCLEVBQUE7O0FBQzNCO0VBQU0sYUFBWSxFQUFBOztBQUNsQjtFQUFNLGFBQVksRUFBQTs7QUFDbEI7RUFBTSxhQUFZLEVBQUE7O0FBQ2xCO0VBQU0sYUFBWSxFQUFBOztBQUNsQjtFQUFNLGFBQVksRUFBQTs7QUFFcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUMrQ2xCO0VEM0NJLGVBQWU7RUFDakIsK0NBQStDLEVBQUE7O0FBR2xCO0VDNEM3QjtJRDFDRSxxREFBNkM7WUFBN0MsNkNBQTZDO0lBQzdDLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQ3pCOztBQzRDSDtFRHhDRSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR1M7RUFDMUI7SUFDQyxtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQ3pCOztBQUdIO0VBQ0ksVUFBVTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQVk7RUFDWixlQUFjO0VBQ2QsbUJBQWtCLEVBQUE7O0FBR3BCO0VBQ0ksNkJBQTRCO0VBQzVCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsOEJBQTJCO0VBQzNCLDhDQUFtQztVQUFuQyxzQ0FBbUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N2Zy9zdmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZURvd257XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCkgO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw3NXB4KSA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBzbGlkZVVwe1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw3NXB4KSA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlKDBweCwwcHgpIDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKlxyXG5zdHVmZiBoZXJlXHJcbiovXHJcblxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogY2FiaW4sIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi5zdDB7ZmlsbDojQkJCOEJGO31cclxuICAuc3Qxe2ZpbGw6IzY2MzM5OTt9XHJcbiAgLnN0MntmaWxsOiNGRkZGRkY7fVxyXG4gIC5zdDN7ZmlsbDojODk4OTg5O3N0cm9rZTojODk4OTg5O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cclxuICAuc3Q0e2ZvbnQtZmFtaWx5OidDb3VyaWVyJywgQXJpYWw7fVxyXG4gIC5zdDV7Zm9udC1zaXplOjU1cHg7fVxyXG4gIC5zdDZ7ZmlsbDojRjdGNkY1O3N0cm9rZTojRjdGNkY1O3N0cm9rZS13aWR0aDowLjI1O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cclxuICAuc3Q3e2ZvbnQtZmFtaWx5OiBrZWxseS1zbGFiLCBBcmlhbDt9XHJcbiAgLnN0OHtmb250LXNpemU6NDVweDt9XHJcbiAgLnN0OXtsZXR0ZXItc3BhY2luZzoyLjY7fVxyXG4gIC5zdDEwe2ZvbnQtZmFtaWx5OiBkYW5jaW5nLXNjcmlwdCwgQXJpYWw7fVxyXG4gIC5zdDExe2ZvbnQtZmFtaWx5OiBsb2JzdGVyLCBBcmlhbDt9XHJcbiAgLnN0MTJ7Zm9udC1zaXplOjc1LjQ1OThweDt9XHJcbiAgLnN0MTN7ZmlsbDojMzUzNjU5O31cclxuICAuc3QxNHtmb250LWZhbWlseTpjYWJpbiwgQXJpYWw7fVxyXG4gIC5zdDE1e2ZvbnQtc2l6ZToyOC4yMjUxcHg7fVxyXG4gIC5zdDE2e2ZvbnQtZmFtaWx5OmNhYmluLCBBcmlhbDt9XHJcbiAgLnN0MTd7ZmlsbDpub25lO31cclxuICAuc3QxOHtmaWxsOiNDRUI5OTU7fVxyXG4gIC5zdDE5e2ZvbnQtc2l6ZToxOHB4O31cclxuICAuc3QyMHtmaWxsOiMwMzVFNkQ7fVxyXG4gIC5zdDIxe2VuYWJsZS1iYWNrZ3JvdW5kOm5ldzt9XHJcbiAgLnN0MjJ7ZmlsbDojRkNEQUE5O31cclxuICAuc3QyNHtmaWxsOiNFQUU5RTg7fVxyXG4gIC5zdDI1e2ZpbGw6I0QxNjUyRjt9XHJcbiAgLnN0MjZ7ZmlsbDojQzUwMjNDO31cclxuICAuc3QyN3tmaWxsOiNFNUU0RTM7fVxyXG5cclxudWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuW2NsYXNzJD1cInRpdGxlXCJdIHRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBjYWJpbi1jb25kZW5zZWQsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5Ac3VwcG9ydHMoYW5pbWF0aW9uOiBzbGlkZURvd24pIHtcclxuICBbY2xhc3MkPVwidGl0bGVcIl0ge1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gZWFzZS1pbi1vdXQgLjVzIGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbltpZCQ9XCJhY3Rpdml0eVwiXXtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuQHN1cHBvcnRzKGFuaW1hdGlvbjogc2xpZGVVcCkge1xyXG4gICBhOmhvdmVyIFtjbGFzcyQ9XCJ0aXRsZVwiXSAsIGE6Zm9jdXMgW2NsYXNzJD1cInRpdGxlXCJdIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVVcCBlYXNlLWluLW91dCAuNXMgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuYTpob3ZlciBbaWQkPVwiYWN0aXZpdHlcIl0sICBhOmZvY3VzIFtpZCQ9XCJhY3Rpdml0eVwiXXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuYTpmb2N1cyBbY2xhc3MqPVwidGltZS1jaXJjbGVcIl0sIGE6aG92ZXIgW2NsYXNzKj1cInRpbWUtY2lyY2xlXCJde1xyXG4gIHN0cm9rZTpibGFjaztcclxuICBzdHJva2Utd2lkdGg6NTtcclxuICBwYWludC1vcmRlcjpzdHJva2U7XHJcbn1cclxuXHJcbi5vZmZzY3JlZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY2xpcDogcmVjdCgxcHgsMXB4LDFweCwxcHgpO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwwIDAsMCAwLDAgMCk7XHJcbn1cclxuIiwic3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7IH1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNzVweCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA3NXB4KTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7IH0gfVxuXG4vKlxyXG5zdHVmZiBoZXJlXHJcbiovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IGNhYmluLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzMzMztcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7IH1cblxuLnN0MCB7XG4gIGZpbGw6ICNCQkI4QkY7IH1cblxuLnN0MSB7XG4gIGZpbGw6ICM2NjMzOTk7IH1cblxuLnN0MiB7XG4gIGZpbGw6ICNGRkZGRkY7IH1cblxuLnN0MyB7XG4gIGZpbGw6ICM4OTg5ODk7XG4gIHN0cm9rZTogIzg5ODk4OTtcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyB9XG5cbi5zdDQge1xuICBmb250LWZhbWlseTogJ0NvdXJpZXInLCBBcmlhbDsgfVxuXG4uc3Q1IHtcbiAgZm9udC1zaXplOiA1NXB4OyB9XG5cbi5zdDYge1xuICBmaWxsOiAjRjdGNkY1O1xuICBzdHJva2U6ICNGN0Y2RjU7XG4gIHN0cm9rZS13aWR0aDogMC4yNTtcbiAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyB9XG5cbi5zdDcge1xuICBmb250LWZhbWlseToga2VsbHktc2xhYiwgQXJpYWw7IH1cblxuLnN0OCB7XG4gIGZvbnQtc2l6ZTogNDVweDsgfVxuXG4uc3Q5IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNjsgfVxuXG4uc3QxMCB7XG4gIGZvbnQtZmFtaWx5OiBkYW5jaW5nLXNjcmlwdCwgQXJpYWw7IH1cblxuLnN0MTEge1xuICBmb250LWZhbWlseTogbG9ic3RlciwgQXJpYWw7IH1cblxuLnN0MTIge1xuICBmb250LXNpemU6IDc1LjQ1OThweDsgfVxuXG4uc3QxMyB7XG4gIGZpbGw6ICMzNTM2NTk7IH1cblxuLnN0MTQge1xuICBmb250LWZhbWlseTogY2FiaW4sIEFyaWFsOyB9XG5cbi5zdDE1IHtcbiAgZm9udC1zaXplOiAyOC4yMjUxcHg7IH1cblxuLnN0MTYge1xuICBmb250LWZhbWlseTogY2FiaW4sIEFyaWFsOyB9XG5cbi5zdDE3IHtcbiAgZmlsbDogbm9uZTsgfVxuXG4uc3QxOCB7XG4gIGZpbGw6ICNDRUI5OTU7IH1cblxuLnN0MTkge1xuICBmb250LXNpemU6IDE4cHg7IH1cblxuLnN0MjAge1xuICBmaWxsOiAjMDM1RTZEOyB9XG5cbi5zdDIxIHtcbiAgZW5hYmxlLWJhY2tncm91bmQ6IG5ldzsgfVxuXG4uc3QyMiB7XG4gIGZpbGw6ICNGQ0RBQTk7IH1cblxuLnN0MjQge1xuICBmaWxsOiAjRUFFOUU4OyB9XG5cbi5zdDI1IHtcbiAgZmlsbDogI0QxNjUyRjsgfVxuXG4uc3QyNiB7XG4gIGZpbGw6ICNDNTAyM0M7IH1cblxuLnN0Mjcge1xuICBmaWxsOiAjRTVFNEUzOyB9XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG5bY2xhc3MkPVwidGl0bGVcIl0gdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IGNhYmluLWNvbmRlbnNlZCwgQXJpYWwsIHNhbnMtc2VyaWY7IH1cblxuQHN1cHBvcnRzIChhbmltYXRpb246IHNsaWRlRG93bikge1xuICBbY2xhc3MkPVwidGl0bGVcIl0ge1xuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIGVhc2UtaW4tb3V0IC41cyBmb3J3YXJkcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjsgfSB9XG5cbltpZCQ9XCJhY3Rpdml0eVwiXSB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG5Ac3VwcG9ydHMgKGFuaW1hdGlvbjogc2xpZGVVcCkge1xuICBhOmhvdmVyIFtjbGFzcyQ9XCJ0aXRsZVwiXSwgYTpmb2N1cyBbY2xhc3MkPVwidGl0bGVcIl0ge1xuICAgIGFuaW1hdGlvbjogc2xpZGVVcCBlYXNlLWluLW91dCAuNXMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7IH0gfVxuXG5hOmhvdmVyIFtpZCQ9XCJhY3Rpdml0eVwiXSwgYTpmb2N1cyBbaWQkPVwiYWN0aXZpdHlcIl0ge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG5cbmE6Zm9jdXMgW2NsYXNzKj1cInRpbWUtY2lyY2xlXCJdLCBhOmhvdmVyIFtjbGFzcyo9XCJ0aW1lLWNpcmNsZVwiXSB7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHN0cm9rZS13aWR0aDogNTtcbiAgcGFpbnQtb3JkZXI6IHN0cm9rZTsgfVxuXG4ub2Zmc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCAwLCAwIDApOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/svg/svg.component.ts":
/*!**************************************!*\
  !*** ./src/app/svg/svg.component.ts ***!
  \**************************************/
/*! exports provided: SvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgComponent", function() { return SvgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SvgComponent = /** @class */ (function () {
    function SvgComponent() {
    }
    SvgComponent.prototype.ngOnInit = function () {
    };
    SvgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-svg',
            template: __webpack_require__(/*! ./svg.component.html */ "./src/app/svg/svg.component.html"),
            styles: [__webpack_require__(/*! ./svg.component.scss */ "./src/app/svg/svg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SvgComponent);
    return SvgComponent;
}());



/***/ }),

/***/ "./src/app/video-dialog/video-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/video-dialog/video-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  video-dialog works!\n</p>\n"

/***/ }),

/***/ "./src/app/video-dialog/video-dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/video-dialog/video-dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWRpYWxvZy92aWRlby1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-dialog/video-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-dialog/video-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: VideoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDialogComponent", function() { return VideoDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoDialogComponent = /** @class */ (function () {
    function VideoDialogComponent() {
    }
    VideoDialogComponent.prototype.ngOnInit = function () {
    };
    VideoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-video-dialog',
            template: __webpack_require__(/*! ./video-dialog.component.html */ "./src/app/video-dialog/video-dialog.component.html"),
            styles: [__webpack_require__(/*! ./video-dialog.component.scss */ "./src/app/video-dialog/video-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoDialogComponent);
    return VideoDialogComponent;
}());



/***/ }),

/***/ "./src/app/video/video.component.html":
/*!********************************************!*\
  !*** ./src/app/video/video.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHtml]=\"iframe_html\" class=\"video-container\"></div>"

/***/ }),

/***/ "./src/app/video/video.component.scss":
/*!********************************************!*\
  !*** ./src/app/video/video.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-container iframe,\n.video-container object,\n.video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vQzpcXE5vZGVQcm9qZWN0c1xcaVNwYWNlLW1hdGVyaWFsL3NyY1xcYXBwXFx2aWRlb1xcdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7OztFQUdBLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC52aWRlby1jb250YWluZXIge1xyXG4vLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbi8vIHBhZGRpbmctdG9wOiAzMHB4OyBoZWlnaHQ6IDA7IG92ZXJmbG93OiBoaWRkZW47XHJcbi8vIGlmcmFtZSB7XHJcbi8vICAgICB3aWR0aDogNDUwcHg7XHJcbi8vIH1cclxuLy8gfVxyXG5cclxuLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUsXHJcbi52aWRlby1jb250YWluZXIgb2JqZWN0LFxyXG4udmlkZW8tY29udGFpbmVyIGVtYmVkIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDA7XHJcbmxlZnQ6IDA7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);



var VideoComponent = /** @class */ (function () {
    function VideoComponent(embedService) {
        this.embedService = embedService;
        this.vimeoUrl = 'https://vimeo.com/197933516';
        this.youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
        this.dailymotionUrl = 'https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport';
        this.vimeoId = '197933511';
        this.youtubeId = 'iHhcHTlGtRs';
        this.dailymotionId = 'x20qnej';
        console.log(this.embedService.embed(this.vimeoUrl));
        console.log(this.embedService.embed(this.youtubeUrl));
        console.log(this.embedService.embed(this.dailymotionUrl));
        console.log(this.embedService.embed_vimeo(this.vimeoId));
        console.log(this.embedService.embed_youtube(this.youtubeId));
        console.log(this.embedService.embed_dailymotion(this.dailymotionId));
        this.iframe_html = this.embedService.embed(this.youtubeUrl, {
            query: { portrait: 0, color: '333' },
            attr: { width: 853, height: 480 }
        });
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], VideoComponent.prototype, "url", void 0);
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/video/video.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/voter/voter.component.html":
/*!********************************************!*\
  !*** ./src/app/voter/voter.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"row\" fxFlex=\"1 1 100%\"  fxLayoutGap=\"3\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"example-card\" [ngStyle]=\"{'background-color':spot.spotOpen ? 'green' : 'red' }\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>SpotId: {{spot.spotId}}</mat-card-title>\n          <mat-card-subtitle>location map</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <div fxLayout=\"column\" fxLayoutGap=\"3\" fxLayoutAlign=\"center center\">\n           <div>Location : Zone1, 1st parking,</div>\n           <div class=\"car\"><mat-icon >local_car_wash</mat-icon></div>\n           <div>Time Stamp : {{(spot.timestamp * 1000) | date :'medium'}}</div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n            <button (click)=\"vote(true)\" mat-fab [disabled]=\"upVote\">+</button>\n            <button (click)=\"vote(false)\" mat-fab [disabled]=\"downVote\">-</button>\n        </mat-card-actions>\n      </mat-card>\n  </section>\n"

/***/ }),

/***/ "./src/app/voter/voter.component.scss":
/*!********************************************!*\
  !*** ./src/app/voter/voter.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  font-size: 70px; }\n\n.example-card {\n  max-width: 400px;\n  width: 250px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.car {\n  width: 100px;\n  height: 100px; }\n\n.material-icons {\n  font-size: 100px;\n  color: peru; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm90ZXIvQzpcXE5vZGVQcm9qZWN0c1xcaVNwYWNlLW1hdGVyaWFsL3NyY1xcYXBwXFx2b3Rlclxcdm90ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUVmO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZvdGVyL3ZvdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmNhciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiBwZXJ1O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/voter/voter.component.ts":
/*!******************************************!*\
  !*** ./src/app/voter/voter.component.ts ***!
  \******************************************/
/*! exports provided: VoterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterComponent", function() { return VoterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VoterComponent = /** @class */ (function () {
    function VoterComponent() {
        this.voted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.upVote = false;
        this.downVote = false;
    }
    VoterComponent.prototype.ngOnInit = function () {
        console.log('Spot : ', this.spot.spotOpen);
    };
    VoterComponent.prototype.vote = function (agreed) {
        this.upVote = (this.agreed >= this.total) ? true : false;
        this.downVote = (this.agreed >= 1) ? false : true;
        if (!this.upVote || !this.downVote) {
            this.voted.emit(agreed);
        }
        console.log('agreed', this.agreed, this.total);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VoterComponent.prototype, "spot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VoterComponent.prototype, "voted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], VoterComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], VoterComponent.prototype, "agreed", void 0);
    VoterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ispace-voter',
            template: __webpack_require__(/*! ./voter.component.html */ "./src/app/voter/voter.component.html"),
            styles: [__webpack_require__(/*! ./voter.component.scss */ "./src/app/voter/voter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VoterComponent);
    return VoterComponent;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\NodeProjects\iSpace-material\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map