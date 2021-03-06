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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* Track */\r\n::ng-deep ::-webkit-scrollbar-track {\r\n    background-color: #5fcde4;\r\n    background-image: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsVUFBVTtBQUNWO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogVHJhY2sgKi9cclxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmY2RlNDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div class=\"header\">\r\n      <h1 [ngStyle]=\"{'color':'white'}\">\r\n          About\r\n      </h1>\r\n    </div>\r\n  </div>"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(shareimg) {
        this.shareimg = shareimg;
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["SharedImages"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/index.ts":
/*!********************************!*\
  !*** ./src/app/about/index.ts ***!
  \********************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]; });




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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/app/about/index.ts");
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games */ "./src/app/games/index.ts");
/* harmony import */ var _games_IMAMiner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games/IMAMiner */ "./src/app/games/IMAMiner/index.ts");
/* harmony import */ var _games_Polyvade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games/Polyvade */ "./src/app/games/Polyvade/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _privacy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privacy */ "./src/app/privacy/index.ts");
/* harmony import */ var _privacy_polyPrivacy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacy/polyPrivacy.component */ "./src/app/privacy/polyPrivacy.component.ts");
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./terms */ "./src/app/terms/index.ts");











var routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'games', component: _games__WEBPACK_IMPORTED_MODULE_4__["GamesComponent"] },
    { path: 'about', component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'IMAMinerPrivacy', component: _privacy__WEBPACK_IMPORTED_MODULE_8__["IMAPrivacyComponent"] },
    { path: 'PolyPrivacy', component: _privacy_polyPrivacy_component__WEBPACK_IMPORTED_MODULE_9__["PolyPrivacyComponent"] },
    { path: 'IMAMinerTerms', component: _terms__WEBPACK_IMPORTED_MODULE_10__["TermsComponent"] },
    { path: 'games/IMAMiner', component: _games_IMAMiner__WEBPACK_IMPORTED_MODULE_5__["IMAMinerComponent"] },
    { path: 'games/Polyvade', component: _games_Polyvade__WEBPACK_IMPORTED_MODULE_6__["PolyvadeComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hamnav {\r\n    height: 100%;\r\n    background: rgb(0, 0, 0);\r\n  }\r\n  \r\n  #hamitems { display: block; }\r\n  \r\n  #hamitems a, img {\r\n    color: white;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  #hamitems a:hover, img:hover { background: #5fcde4; }\r\n  \r\n  #hamnav label, #hamburger { display: none; }\r\n  \r\n  .header {\r\n    background-color: rgb(0, 0, 0);\r\n    padding: 5px 10%;\r\n}\r\n  \r\n  .firstnavbar {\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n    margin-right: 50px;\r\n    height: 100px;\r\n    width: 100px;\r\n    background-size: 100px 100px;\r\n}\r\n  \r\n  .navbar-brand {\r\n    padding: 5px;\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n    border: 2px solid white;\r\n    margin-right: 50px;\r\n}\r\n  \r\n  .lastnavbar {\r\n    padding: 5px;\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n    border: 2px solid white;\r\n}\r\n  \r\n  @media only screen and (max-width: 1080px) {\r\n    #hamitems a {\r\n        box-sizing: border-box;\r\n        display: block;\r\n        width: 100%;\r\n        margin-top: 20px;\r\n      }\r\n     \r\n      #hamnav label { \r\n        display: inline-block; \r\n        color: white;\r\n        background: #000000;\r\n        font-style: normal;\r\n        font-size: 50px;\r\n        position: relative;\r\n        left: 10px;\r\n        margin: 0;\r\n        width: 60px;\r\n      }\r\n      #hamnav img {\r\n          display: inline-block;\r\n          color: white;\r\n          background: #000000;\r\n          font-style: normal;\r\n          font-size: 50px;\r\n          position: relative;\r\n          left: calc(50% - 50px);\r\n          width: 100px;\r\n          margin-top: -100px;\r\n      }\r\n\r\n      .header {\r\n          text-align: left;\r\n      }\r\n    \r\n      #hamitems a { display: none; }\r\n      #hamnav input:checked ~ #hamitems a { display: block; }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCOztFQUVBLFlBQVksY0FBYyxFQUFFOztFQUM1QjtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFDQSwrQkFBK0IsbUJBQW1CLEVBQUU7O0VBRXBELDRCQUE0QixhQUFhLEVBQUU7O0VBRTdDO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7RUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztFQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7RUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7RUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsZ0JBQWdCO01BQ2xCOztNQUVBO1FBQ0UscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCxXQUFXO01BQ2I7TUFDQTtVQUNJLHFCQUFxQjtVQUNyQixZQUFZO1VBQ1osbUJBQW1CO1VBQ25CLGtCQUFrQjtVQUNsQixlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLHNCQUFzQjtVQUN0QixZQUFZO1VBQ1osa0JBQWtCO01BQ3RCOztNQUVBO1VBQ0ksZ0JBQWdCO01BQ3BCOztNQUVBLGNBQWMsYUFBYSxFQUFFO01BQzdCLHNDQUFzQyxjQUFjLEVBQUU7RUFDMUQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoYW1uYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAjaGFtaXRlbXMgeyBkaXNwbGF5OiBibG9jazsgfVxyXG4gICNoYW1pdGVtcyBhLCBpbWcge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgI2hhbWl0ZW1zIGE6aG92ZXIsIGltZzpob3ZlciB7IGJhY2tncm91bmQ6ICM1ZmNkZTQ7IH1cclxuICBcclxuICAjaGFtbmF2IGxhYmVsLCAjaGFtYnVyZ2VyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTAlO1xyXG59XHJcbi5maXJzdG5hdmJhciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDEwMHB4O1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG4ubGFzdG5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgI2hhbWl0ZW1zIGEge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAjaGFtbmF2IGxhYmVsIHsgXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgfVxyXG4gICAgICAjaGFtbmF2IGltZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgI2hhbWl0ZW1zIGEgeyBkaXNwbGF5OiBub25lOyB9XHJcbiAgICAgICNoYW1uYXYgaW5wdXQ6Y2hlY2tlZCB+ICNoYW1pdGVtcyBhIHsgZGlzcGxheTogYmxvY2s7IH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  \r\n  <div class=\"header\">\r\n    <h1 [ngStyle]=\"{'color':'white'}\">\r\n      <nav id=\"hamnav\">\r\n        <label for=\"hamburger\">&#9776;</label>\r\n        <input type=\"checkbox\" id=\"hamburger\">\r\n        <div id=\"hamitems\" class=\"navbar navbar-extended navbar-dark bg-dark\">\r\n          <img (click)=\"hamburgerClose()\" class=\"firstnavbar\" routerLink=\"/\" src=\"/assets/mainimages/logo.png\">\r\n          <a (click)=\"hamburgerClose()\" class=\"navbar-brand\" routerLink=\"/games\">Games</a>\r\n          <a (click)=\"hamburgerClose()\" class=\"navbar-brand\" routerLink=\"/about\">About</a>\r\n        </div>\r\n      </nav>\r\n    </h1>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, SharedImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedImages", function() { return SharedImages; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Frost Mouse Studios';
        this.image = "/assets/mainimages/image1.PNG";
    }
    AppComponent.prototype.hamburgerClose = function () {
        var checkbox = document.getElementById("hamburger");
        checkbox.checked = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

var leftLoaded = false;
var rightLoaded = false;
var SharedImages = /** @class */ (function () {
    function SharedImages() {
        this.leftLoaded = false;
        this.rightLoaded = false;
    }
    SharedImages.prototype.setLeftImage = function (passimg) {
        this.leftimg = document.getElementById("leftimage");
        this.leftimg.src = passimg;
    };
    SharedImages.prototype.setRightImage = function (passimg) {
        this.rightimg = document.getElementById("rightimage");
        this.rightimg.src = passimg;
    };
    SharedImages = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedImages);
    return SharedImages;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games */ "./src/app/games/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about */ "./src/app/about/index.ts");
/* harmony import */ var _privacy_IMAPrivacy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privacy/IMAPrivacy.component */ "./src/app/privacy/IMAPrivacy.component.ts");
/* harmony import */ var _privacy_polyPrivacy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacy/polyPrivacy.component */ "./src/app/privacy/polyPrivacy.component.ts");
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./terms */ "./src/app/terms/index.ts");
/* harmony import */ var _games_IMAMiner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games/IMAMiner */ "./src/app/games/IMAMiner/index.ts");
/* harmony import */ var _games_Polyvade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./games/Polyvade */ "./src/app/games/Polyvade/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _games__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"],
                _about__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _privacy_IMAPrivacy_component__WEBPACK_IMPORTED_MODULE_8__["IMAPrivacyComponent"],
                _privacy_polyPrivacy_component__WEBPACK_IMPORTED_MODULE_9__["PolyPrivacyComponent"],
                _terms__WEBPACK_IMPORTED_MODULE_10__["TermsComponent"],
                _games_IMAMiner__WEBPACK_IMPORTED_MODULE_11__["IMAMinerComponent"],
                _games_IMAMiner__WEBPACK_IMPORTED_MODULE_11__["IMAOpenImageDialog"],
                _games_Polyvade__WEBPACK_IMPORTED_MODULE_12__["PolyvadeComponent"],
                _games_Polyvade__WEBPACK_IMPORTED_MODULE_12__["polyOpenImageDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]
            ],
            providers: [_app_component__WEBPACK_IMPORTED_MODULE_4__["SharedImages"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _games_IMAMiner__WEBPACK_IMPORTED_MODULE_11__["IMAOpenImageDialog"],
                _games_Polyvade__WEBPACK_IMPORTED_MODULE_12__["polyOpenImageDialog"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/games/IMAMiner/IMAMiner.component.css":
/*!*******************************************************!*\
  !*** ./src/app/games/IMAMiner/IMAMiner.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scale {\r\n    width: 450px;\r\n    border: 2px solid black;\r\n    margin: auto;\r\n    max-width: 77vw;\r\n}\r\n.header {\r\n    margin: auto;\r\n    text-align: center;\r\n    background-color: black;\r\n}\r\n.main {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n.paragraph {\r\n    text-align: center;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    font-size: 25px;\r\n}\r\n.grid {\r\n    padding: 20px;\r\n    padding-left: 10vw;\r\n    padding-right: 10vw;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));\r\n    -moz-column-gap: 20px;\r\n         column-gap: 20px;\r\n    row-gap: 10px;\r\n    justify-content: center;\r\n    max-width: 77vw;\r\n}\r\n.video {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n.gpbadge {\r\n    height: 100px;\r\n    width: auto;\r\n}\r\n.applebadge {\r\n    height: 67px;\r\n    width: auto;\r\n    padding-bottom: 12px;\r\n}\r\n.badges {\r\n    display: inline-block;\r\n}\r\n/* Track */\r\n::ng-deep ::-webkit-scrollbar-track {\r\n    background-image: url(\"/assets/IMAMiner/side2.PNG\");\r\n    background-size: auto 100%;\r\n    background-position-x: 95%;\r\n  }\r\n@media only screen and (max-width: 1080px) {\r\n    ::ng-deep ::-webkit-scrollbar-track {\r\n      background: #000000;\r\n      background-image: none;\r\n    }\r\n    .scale {\r\n        pointer-events: none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvSU1BTWluZXIvSU1BTWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBLFVBQVU7QUFDVjtJQUNJLG1EQUFtRDtJQUNuRCwwQkFBMEI7SUFDMUIsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixzQkFBc0I7SUFDeEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvSU1BTWluZXIvSU1BTWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2FsZSB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogNzd2dztcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5tYWluIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnBhcmFncmFwaCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmdyaWQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTB2dztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDgwcHgsIDFmcikpO1xyXG4gICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNzd2dztcclxufVxyXG4udmlkZW8ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uZ3BiYWRnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuLmFwcGxlYmFkZ2Uge1xyXG4gICAgaGVpZ2h0OiA2N3B4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufVxyXG4uYmFkZ2VzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9JTUFNaW5lci9zaWRlMi5QTkdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogOTUlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgIDo6bmctZGVlcCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zY2FsZSB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/games/IMAMiner/IMAMiner.component.html":
/*!********************************************************!*\
  !*** ./src/app/games/IMAMiner/IMAMiner.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <iframe class=\"video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9WrsdmAOA2s?controls=1&rel=0&loop=1&playlist=9WrsdmAOA2s&autoplay=1&showinfo=0\" title=\"YouTube video player\" \r\n        frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen data-autoplay data-keepplaying>\r\n    </iframe>\r\n    <h1 class=\"header\" [ngStyle]=\"{'color':'white'}\">\r\n        About IMA Miner\r\n    </h1>\r\n    <p class=\"paragraph\" [ngStyle]=\"{'color':'white'}\">\r\n        Collect ore as you mine out the world so you can upgrade your ship to go deeper. As you go deeper the ores will become more valuable and the journey back home will become harder. \r\n        Don't let your drill run out of fuel or hit the ground too hard because you'll lose your hard-earned money. Purchase items to help you with your journey to become the best miner around. \r\n        Dynamite will help you clear out tiles above to reach ore that isn't in your tunnel's path or save you from running out of fuel a row under your escape route. \r\n        Flares can be used to help you find your way back, or see what's not in range of your light. \r\n        Complete contracts to gain a bonus payment for the ores you collect or sell them for a standard price at the Miner???s Market. \r\n        Will all your efforts be in Vain or will you be able to make it to the top by making it to the bottom?\r\n    </p>\r\n    <!-- <div class=\"badges\">\r\n        <a href='https://play.google.com/store/apps/details?id=com.FrostMouseStudios.IMAMiner&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' style=\"display: inline-block\">\r\n            <img class=\"gpbadge\" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>\r\n        </a>\r\n        <a href=\"https://apps.apple.com/us/app/ima-miner/id1603924325?itsct=apps_box_badge&amp;itscg=30200\" style=\"display: inline-block; overflow: hidden; border-radius: 13px;\">\r\n            <img class=\"applebadge\" src=\"https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1641600000&h=99bf4fd7dd02c444a56bd3c2b97d9762\" \r\n            alt=\"Download on the App Store\" style=\"border-radius: 13px;\">\r\n        </a>\r\n    </div> -->\r\n    <h1 class=\"header\" [ngStyle]=\"{'color':'white'}\">\r\n        Screenshots\r\n    </h1>\r\n    <div class=\"grid\">\r\n        <div *ngFor=\"let img of images\">\r\n            <img class=\"scale\" [src]=\"img\" (click)=\"openDialog(img)\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/games/IMAMiner/IMAMiner.component.ts":
/*!******************************************************!*\
  !*** ./src/app/games/IMAMiner/IMAMiner.component.ts ***!
  \******************************************************/
/*! exports provided: IMAMinerComponent, IMAOpenImageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAMinerComponent", function() { return IMAMinerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAOpenImageDialog", function() { return IMAOpenImageDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");




var IMAMinerComponent = /** @class */ (function () {
    function IMAMinerComponent(dialog, shareimg) {
        this.dialog = dialog;
        this.shareimg = shareimg;
        this.images = [
            "/assets/IMAMiner/1.jpg",
            "/assets/IMAMiner/2.jpg",
            "/assets/IMAMiner/3.jpg",
            "/assets/IMAMiner/4.jpg",
            "/assets/IMAMiner/5.jpg"
        ];
        this.video = "https://youtu.be/7n6YF25gEsA";
        shareimg.setLeftImage("/assets/IMAMiner/side1.PNG");
        shareimg.setRightImage("/assets/IMAMiner/side2.PNG");
    }
    IMAMinerComponent.prototype.openDialog = function (imageName) {
        this.dialog.open(IMAOpenImageDialog, {
            data: {
                image: imageName,
                activeImage: this.images.indexOf(imageName)
            },
            panelClass: 'custom-dialog-container',
            backdropClass: 'backdropBackground'
        });
    };
    IMAMinerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./IMAMiner.component.html */ "./src/app/games/IMAMiner/IMAMiner.component.html"),
            styles: [__webpack_require__(/*! ./IMAMiner.component.css */ "./src/app/games/IMAMiner/IMAMiner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["SharedImages"]])
    ], IMAMinerComponent);
    return IMAMinerComponent;
}());

var IMAOpenImageDialog = /** @class */ (function () {
    function IMAOpenImageDialog(data) {
        this.data = data;
        this.images = [
            "/assets/IMAMiner/1.jpg",
            "/assets/IMAMiner/2.jpg",
            "/assets/IMAMiner/3.jpg",
            "/assets/IMAMiner/4.jpg",
            "/assets/IMAMiner/5.jpg"
        ];
        this.activeImage = this.data.activeImage;
    }
    IMAOpenImageDialog.prototype.upImage = function () {
        var img = document.getElementById("disImage");
        if (this.activeImage === 4) {
            this.activeImage = 0;
        }
        else {
            this.activeImage += 1;
        }
        img.src = this.images[this.activeImage];
    };
    IMAOpenImageDialog.prototype.downImage = function () {
        var img = document.getElementById("disImage");
        if (this.activeImage === 0) {
            this.activeImage = 4;
        }
        else {
            this.activeImage -= 1;
        }
        img.src = this.images[this.activeImage];
    };
    IMAOpenImageDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'openImage',
            template: __webpack_require__(/*! ./openImage.html */ "./src/app/games/IMAMiner/openImage.html"),
            styles: [__webpack_require__(/*! ./openImage.css */ "./src/app/games/IMAMiner/openImage.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], IMAOpenImageDialog);
    return IMAOpenImageDialog;
}());



/***/ }),

/***/ "./src/app/games/IMAMiner/index.ts":
/*!*****************************************!*\
  !*** ./src/app/games/IMAMiner/index.ts ***!
  \*****************************************/
/*! exports provided: IMAMinerComponent, IMAOpenImageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IMAMiner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IMAMiner.component */ "./src/app/games/IMAMiner/IMAMiner.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMAMinerComponent", function() { return _IMAMiner_component__WEBPACK_IMPORTED_MODULE_0__["IMAMinerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMAOpenImageDialog", function() { return _IMAMiner_component__WEBPACK_IMPORTED_MODULE_0__["IMAOpenImageDialog"]; });




/***/ }),

/***/ "./src/app/games/IMAMiner/openImage.css":
/*!**********************************************!*\
  !*** ./src/app/games/IMAMiner/openImage.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\r\n    text-align: center;\r\n}\r\n.scale {\r\n    max-width: 100%;\r\n    max-height: 100vh;\r\n    margin: auto;\r\n}\r\n.leftB {\r\n    height: 40%;\r\n    width: 9%;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 15px;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n    background-image: url(\"/assets/arrow.png\");\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n    background-size: 100% 100%;\r\n    transform: rotate(180deg);\r\n    border: none;\r\n}\r\n.rightB {\r\n    height: 40%;\r\n    width: 9%;\r\n    position: absolute;\r\n    top: 30%;\r\n    right: 15px;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n    background-image: url(\"/assets/arrow.png\");\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n    background-size: 100% 100%;\r\n    border: none;\r\n}\r\n.exit {\r\n    height: 70px;\r\n    width: 70px;\r\n    position: relative;\r\n    top: 0px;\r\n    right: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvSU1BTWluZXIvb3BlbkltYWdlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvSU1BTWluZXIvb3BlbkltYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zY2FsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4ubGVmdEIge1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogOSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hcnJvdy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucmlnaHRCIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDklO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Fycm93LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmV4aXQge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/games/IMAMiner/openImage.html":
/*!***********************************************!*\
  !*** ./src/app/games/IMAMiner/openImage.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n    <button class=\"leftB\" (click)=\"downImage()\"></button>\r\n    <button class=\"rightB\" (click)=\"upImage()\"></button>\r\n    <img id=\"disImage\" class=\"scale\" src={{images[activeImage]}}>\r\n</div>"

/***/ }),

/***/ "./src/app/games/Polyvade/Polyvade.component.css":
/*!*******************************************************!*\
  !*** ./src/app/games/Polyvade/Polyvade.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scale {\r\n    width: 450px;\r\n    border: 2px solid black;\r\n    margin: auto;\r\n    max-width: 77vw;\r\n}\r\n.header {\r\n    margin: auto;\r\n    text-align: center;\r\n    background-color: black;\r\n}\r\n.main {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n.paragraph {\r\n    text-align: center;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    font-size: 25px;\r\n}\r\n.grid {\r\n    padding: 20px;\r\n    padding-left: 10vw;\r\n    padding-right: 10vw;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));\r\n    -moz-column-gap: 20px;\r\n         column-gap: 20px;\r\n    row-gap: 10px;\r\n    justify-content: center;\r\n    max-width: 77vw;\r\n}\r\n.video {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n.gpbadge {\r\n    height: 100px;\r\n    width: auto;\r\n}\r\n.applebadge {\r\n    height: 67px;\r\n    width: auto;\r\n    padding-bottom: 12px;\r\n}\r\n.badges {\r\n    display: inline-block;\r\n}\r\n/* Track */\r\n::ng-deep ::-webkit-scrollbar-track {\r\n    background: #00e9e6;\r\n    background-size: auto 100%;\r\n    background-position-x: 95%;\r\n  }\r\n@media only screen and (max-width: 1080px) {\r\n    ::ng-deep ::-webkit-scrollbar-track {\r\n      background: #000000;\r\n      background-image: none;\r\n    }\r\n    .scale {\r\n        pointer-events: none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvUG9seXZhZGUvUG9seXZhZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBLFVBQVU7QUFDVjtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRTtNQUNFLG1CQUFtQjtNQUNuQixzQkFBc0I7SUFDeEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvUG9seXZhZGUvUG9seXZhZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2FsZSB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogNzd2dztcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5tYWluIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnBhcmFncmFwaCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmdyaWQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTB2dztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDgwcHgsIDFmcikpO1xyXG4gICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNzd2dztcclxufVxyXG4udmlkZW8ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uZ3BiYWRnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuLmFwcGxlYmFkZ2Uge1xyXG4gICAgaGVpZ2h0OiA2N3B4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufVxyXG4uYmFkZ2VzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogIzAwZTllNjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA5NSU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNjYWxlIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/games/Polyvade/Polyvade.component.html":
/*!********************************************************!*\
  !*** ./src/app/games/Polyvade/Polyvade.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <iframe class=\"video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/2wO7XLHWwz0?controls=1&rel=0&loop=1&playlist=2wO7XLHWwz0&autoplay=1&showinfo=0\" title=\"YouTube video player\" \r\n        frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen data-autoplay data-keepplaying>\r\n    </iframe>\r\n    <h1 class=\"header\" [ngStyle]=\"{'color':'white'}\">\r\n        About Polyvade\r\n    </h1>\r\n    <p class=\"paragraph\" [ngStyle]=\"{'color':'white'}\">\r\n        Dodge obstacles as they fall. Reaction is everything. Every point you get your speed slightly increases. How far can you go before it's too fast for you?\r\n    </p>\r\n    <!-- <div class=\"badges\">\r\n        <a href='https://play.google.com/store/apps/details?id=com.FrostMouseStudios.IMAMiner&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' style=\"display: inline-block\">\r\n            <img class=\"gpbadge\" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>\r\n        </a>\r\n        <a href=\"https://apps.apple.com/us/app/ima-miner/id1603924325?itsct=apps_box_badge&amp;itscg=30200\" style=\"display: inline-block; overflow: hidden; border-radius: 13px;\">\r\n            <img class=\"applebadge\" src=\"https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1641600000&h=99bf4fd7dd02c444a56bd3c2b97d9762\" \r\n            alt=\"Download on the App Store\" style=\"border-radius: 13px;\">\r\n        </a>\r\n    </div> -->\r\n    <h1 class=\"header\" [ngStyle]=\"{'color':'white'}\">\r\n        Screenshots\r\n    </h1>\r\n    <div class=\"grid\">\r\n        <div *ngFor=\"let img of images\">\r\n            <img class=\"scale\" [src]=\"img\" (click)=\"openDialog(img)\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/games/Polyvade/Polyvade.component.ts":
/*!******************************************************!*\
  !*** ./src/app/games/Polyvade/Polyvade.component.ts ***!
  \******************************************************/
/*! exports provided: PolyvadeComponent, polyOpenImageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolyvadeComponent", function() { return PolyvadeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOpenImageDialog", function() { return polyOpenImageDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");




var PolyvadeComponent = /** @class */ (function () {
    function PolyvadeComponent(dialog, shareimg) {
        this.dialog = dialog;
        this.shareimg = shareimg;
        this.images = [
            "/assets/Polyvade/1.jpg",
            "/assets/Polyvade/2.jpg",
            "/assets/Polyvade/3.jpg",
            "/assets/Polyvade/4.jpg",
            "/assets/Polyvade/5.jpg"
        ];
        this.video = "https://youtu.be/7n6YF25gEsA";
        shareimg.setLeftImage("/assets/Polyvade/side1.PNG");
        shareimg.setRightImage("/assets/Polyvade/side2.PNG");
    }
    PolyvadeComponent.prototype.openDialog = function (imageName) {
        this.dialog.open(polyOpenImageDialog, {
            data: {
                image: imageName,
                activeImage: this.images.indexOf(imageName)
            },
            panelClass: 'custom-dialog-container',
            backdropClass: 'backdropBackground'
        });
    };
    PolyvadeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./Polyvade.component.html */ "./src/app/games/Polyvade/Polyvade.component.html"),
            styles: [__webpack_require__(/*! ./Polyvade.component.css */ "./src/app/games/Polyvade/Polyvade.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["SharedImages"]])
    ], PolyvadeComponent);
    return PolyvadeComponent;
}());

var polyOpenImageDialog = /** @class */ (function () {
    function polyOpenImageDialog(data) {
        this.data = data;
        this.images = [
            "/assets/Polyvade/1.jpg",
            "/assets/Polyvade/2.jpg",
            "/assets/Polyvade/3.jpg",
            "/assets/Polyvade/4.jpg",
            "/assets/Polyvade/5.jpg"
        ];
        this.activeImage = this.data.activeImage;
    }
    polyOpenImageDialog.prototype.upImage = function () {
        var img = document.getElementById("disImage");
        if (this.activeImage === 4) {
            this.activeImage = 0;
        }
        else {
            this.activeImage += 1;
        }
        img.src = this.images[this.activeImage];
    };
    polyOpenImageDialog.prototype.downImage = function () {
        var img = document.getElementById("disImage");
        if (this.activeImage === 0) {
            this.activeImage = 4;
        }
        else {
            this.activeImage -= 1;
        }
        img.src = this.images[this.activeImage];
    };
    polyOpenImageDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'openImage',
            template: __webpack_require__(/*! ./openImage.html */ "./src/app/games/Polyvade/openImage.html"),
            styles: [__webpack_require__(/*! ./openImage.css */ "./src/app/games/Polyvade/openImage.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], polyOpenImageDialog);
    return polyOpenImageDialog;
}());



/***/ }),

/***/ "./src/app/games/Polyvade/index.ts":
/*!*****************************************!*\
  !*** ./src/app/games/Polyvade/index.ts ***!
  \*****************************************/
/*! exports provided: PolyvadeComponent, polyOpenImageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Polyvade_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Polyvade.component */ "./src/app/games/Polyvade/Polyvade.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolyvadeComponent", function() { return _Polyvade_component__WEBPACK_IMPORTED_MODULE_0__["PolyvadeComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polyOpenImageDialog", function() { return _Polyvade_component__WEBPACK_IMPORTED_MODULE_0__["polyOpenImageDialog"]; });




/***/ }),

/***/ "./src/app/games/Polyvade/openImage.css":
/*!**********************************************!*\
  !*** ./src/app/games/Polyvade/openImage.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\r\n    text-align: center;\r\n}\r\n.scale {\r\n    max-width: 100%;\r\n    max-height: 100vh;\r\n    margin: auto;\r\n}\r\n.leftB {\r\n    height: 40%;\r\n    width: 9%;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 15px;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n    background-image: url(\"/assets/arrow.png\");\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n    background-size: 100% 100%;\r\n    transform: rotate(180deg);\r\n    border: none;\r\n}\r\n.rightB {\r\n    height: 40%;\r\n    width: 9%;\r\n    position: absolute;\r\n    top: 30%;\r\n    right: 15px;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n    background-image: url(\"/assets/arrow.png\");\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n    background-size: 100% 100%;\r\n    border: none;\r\n}\r\n.exit {\r\n    height: 70px;\r\n    width: 70px;\r\n    position: relative;\r\n    top: 0px;\r\n    right: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvUG9seXZhZGUvb3BlbkltYWdlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvUG9seXZhZGUvb3BlbkltYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zY2FsZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4ubGVmdEIge1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB3aWR0aDogOSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hcnJvdy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucmlnaHRCIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDklO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Fycm93LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmV4aXQge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/games/Polyvade/openImage.html":
/*!***********************************************!*\
  !*** ./src/app/games/Polyvade/openImage.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n    <button class=\"leftB\" (click)=\"downImage()\"></button>\r\n    <button class=\"rightB\" (click)=\"upImage()\"></button>\r\n    <img id=\"disImage\" class=\"scale\" src={{images[activeImage]}}>\r\n</div>"

/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    padding: 20px;\r\n    padding-left: 10vw;\r\n    padding-right: 10vw;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));\r\n    -moz-column-gap: 20px;\r\n         column-gap: 20px;\r\n    row-gap: 60px;\r\n    justify-content: center;\r\n    max-width: 77vw;\r\n}\r\n.games {\r\n    width: 450px;\r\n    border: 2px solid rgb(214, 214, 214);\r\n    margin: auto;\r\n    max-width: 77vw;\r\n}\r\n.images {\r\n    overflow-x: auto;\r\n    width: 450px;\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n    max-width: 77vw;\r\n}\r\n.scale {\r\n    width: 450px;\r\n    height: auto;\r\n    display: block;\r\n    max-width: 77vw;\r\n    max-height: 202px;\r\n}\r\n.header {\r\n    margin: auto;\r\n    background-color: black;\r\n}\r\n/* Track */\r\n::ng-deep ::-webkit-scrollbar-track {\r\n    background-color: #5fcde4;\r\n    background-image: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQscUJBQWdCO1NBQWhCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0EsVUFBVTtBQUNWO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTB2dztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0ODBweCwgMWZyKSk7XHJcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgcm93LWdhcDogNjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA3N3Z3O1xyXG59XHJcbi5nYW1lcyB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDc3dnc7XHJcbn1cclxuLmltYWdlcyB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXgtd2lkdGg6IDc3dnc7XHJcbn1cclxuLnNjYWxlIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA3N3Z3O1xyXG4gICAgbWF4LWhlaWdodDogMjAycHg7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Om5nLWRlZXAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZjZGU0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div class=\"main\">\r\n      <div class=\"games\" [style.height.px]=\"height\" *ngFor=\"let game of gameList\">\r\n        <a class=\"images\" href=\"/games/{{game.link}}\">\r\n          <h1 class=\"header\" [ngStyle]=\"{'color':'white'}\">\r\n            {{game.name}}\r\n          </h1>\r\n          <img class=\"scale\" src={{game.image}}>\r\n        </a>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var GamesComponent = /** @class */ (function () {
    function GamesComponent(shareimg) {
        this.shareimg = shareimg;
        this.gameList = games;
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["SharedImages"]])
    ], GamesComponent);
    return GamesComponent;
}());

var games = [];
var IMAMiner = {
    name: "IMA Miner",
    link: "IMAMiner",
    image: "/assets/IMAMiner/1.jpg"
};
var Polyvade = {
    name: "Polyvade",
    link: "Polyvade",
    image: "assets/Polyvade/1.jpg"
};
games.push(IMAMiner);
games.push(Polyvade);


/***/ }),

/***/ "./src/app/games/index.ts":
/*!********************************!*\
  !*** ./src/app/games/index.ts ***!
  \********************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _games_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games.component */ "./src/app/games/games.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return _games_component__WEBPACK_IMPORTED_MODULE_0__["GamesComponent"]; });




/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  font-size: 60px;\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n}\r\n\r\n/* Track */\r\n\r\n::ng-deep ::-webkit-scrollbar-track {\r\n    background-color: #5fcde4;\r\n    background-image: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVOztBQUNWO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6bmctZGVlcCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZmNkZTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div>\r\n      <h1 class=\"header\" [ngStyle]=\"{'color':'white'}\">\r\n          Welcome to Frost Mouse Studios\r\n      </h1>\r\n      <p>\r\n        \r\n      </p>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(shareimg) {
        this.shareimg = shareimg;
        this.title = 'Frost Mouse Studios';
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["SharedImages"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/privacy/IMAPrivacy.component.css":
/*!**************************************************!*\
  !*** ./src/app/privacy/IMAPrivacy.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    padding-left: 20vw;\r\n    padding-right: 20vw;\r\n    padding-top: 5vh;\r\n    padding-bottom: 5vh;\r\n    justify-content: center;\r\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    color: white;\r\n}\r\n/* Track */\r\n::ng-deep ::-webkit-scrollbar-track {\r\n    background-color: #5fcde4;\r\n    background-image: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS9JTUFQcml2YWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJEQUEyRDtJQUMzRCxZQUFZO0FBQ2hCO0FBQ0EsVUFBVTtBQUNWO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvSU1BUHJpdmFjeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHZ3O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjB2dztcclxuICAgIHBhZGRpbmctdG9wOiA1dmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Om5nLWRlZXAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZjZGU0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/privacy/IMAPrivacy.component.html":
/*!***************************************************!*\
  !*** ./src/app/privacy/IMAPrivacy.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <strong>Privacy Policy</strong>\r\n  <p>\r\n    Frost Mouse Studios LLC built the IMA Miner app as\r\n    a Freemium app. This SERVICE is provided by\r\n    Frost Mouse Studios LLC at no cost and is intended for use as\r\n    is.\r\n  </p>\r\n  <p>\r\n    This page is used to inform visitors regarding our\r\n    policies with the collection, use, and disclosure of Personal\r\n    Information if anyone decided to use our Service.\r\n  </p>\r\n  <p>\r\n    If you choose to use our Service, then you agree to\r\n    the collection and use of information in relation to this\r\n    policy. The Personal Information that we collect is\r\n    used for providing and improving the Service. We will not use or share your information with\r\n    anyone except as described in this Privacy Policy.\r\n  </p>\r\n  <p>\r\n    The terms used in this Privacy Policy have the same meanings\r\n    as in our Terms and Conditions, which are accessible at\r\n    IMA Miner unless otherwise defined in this Privacy Policy.\r\n  </p>\r\n  <p><strong>Information Collection and Use</strong></p>\r\n  <p>\r\n    For a better experience, while using our Service, we\r\n    may require you to provide us with certain personally\r\n    identifiable information. The information that\r\n    we request will be retained by us and used as described in this privacy policy.\r\n  </p>\r\n  <div>\r\n    <p>\r\n      The app does use third-party services that may collect\r\n      information used to identify you.\r\n    </p>\r\n    <p>\r\n      Link to the privacy policy of third-party service providers used\r\n      by the app\r\n    </p>\r\n    <ul>\r\n      <li><a href=\"https://unity3d.com/legal/privacy-policy\" target=\"_blank\" rel=\"noopener noreferrer\">Unity</a></li>\r\n    </ul>\r\n  </div>\r\n  <p><strong>Log Data</strong></p>\r\n  <p>\r\n    We want to inform you that whenever you\r\n    use our Service, in a case of an error in the app\r\n    we collect data and information (through third-party\r\n    products) on your phone called Log Data. This Log Data may\r\n    include information such as your device Internet Protocol\r\n    (???IP???) address, device name, operating system version, the\r\n    configuration of the app when utilizing our Service,\r\n    the time and date of your use of the Service, and other\r\n    statistics.\r\n  </p>\r\n  <p><strong>Cookies</strong></p>\r\n  <p>\r\n    Cookies are files with a small amount of data that are\r\n    commonly used as anonymous unique identifiers. These are sent\r\n    to your browser from the websites that you visit and are\r\n    stored on your device's internal memory.\r\n  </p>\r\n  <p>\r\n    This Service does not use these ???cookies??? explicitly. However,\r\n    the app may use third-party code and libraries that use\r\n    ???cookies??? to collect information and improve their services.\r\n    You have the option to either accept or refuse these cookies\r\n    and know when a cookie is being sent to your device. If you\r\n    choose to refuse our cookies, you may not be able to use some\r\n    portions of this Service.\r\n  </p>\r\n  <p><strong>Service Providers</strong></p>\r\n  <p>\r\n    We may employ third-party companies and\r\n    individuals due to the following reasons:\r\n  </p>\r\n  <ul>\r\n    <li>To facilitate our Service;</li>\r\n    <li>To provide the Service on our behalf;</li>\r\n    <li>To perform Service-related services; or</li>\r\n    <li>To assist us in analyzing how our Service is used.</li>\r\n  </ul>\r\n  <p>\r\n    We want to inform users of this Service\r\n    that these third parties have access to their Personal\r\n    Information. The reason is to perform the tasks assigned to\r\n    them on our behalf. However, they are obligated not to\r\n    disclose or use the information for any other purpose.\r\n  </p>\r\n  <p><strong>Security</strong></p>\r\n  <p>\r\n    We value your trust in providing us your\r\n    Personal Information, thus we are striving to use commercially\r\n    acceptable means of protecting it. But remember that no method\r\n    of transmission over the internet, or method of electronic\r\n    storage is 100% secure and reliable, and we cannot\r\n    guarantee its absolute security.\r\n  </p>\r\n  <p><strong>Links to Other Sites</strong></p>\r\n  <p>\r\n    This Service may contain links to other sites. If you click on\r\n    a third-party link, you will be directed to that site. Note\r\n    that these external sites are not operated by us.\r\n    Therefore, we strongly advise you to review the\r\n    Privacy Policy of these websites. We have\r\n    no control over and assume no responsibility for the content,\r\n    privacy policies, or practices of any third-party sites or\r\n    services.\r\n  </p>\r\n  <p><strong>Children???s Privacy</strong></p>\r\n  <div>\r\n    <p>\r\n      These Services do not address anyone under the age of 13.\r\n      We do not knowingly collect personally\r\n      identifiable information from children under 13 years of age. In the case\r\n      we discover that a child under 13 has provided\r\n      us with personal information, we immediately\r\n      delete this from our servers. If you are a parent or guardian\r\n      and you are aware that your child has provided us with\r\n      personal information, please contact us so that\r\n      we will be able to do the necessary actions.\r\n    </p>\r\n  </div>\r\n  <!---->\r\n  <p><strong>Changes to This Privacy Policy</strong></p>\r\n  <p>\r\n    We may update our Privacy Policy from\r\n    time to time. Thus, you are advised to review this page\r\n    periodically for any changes. We will\r\n    notify you of any changes by posting the new Privacy Policy on\r\n    this page.\r\n  </p>\r\n  <p>This policy is effective as of 2021-12-05</p>\r\n  <p><strong>Contact Us</strong></p>\r\n  <p>\r\n    If you have any questions or suggestions about our\r\n    Privacy Policy, do not hesitate to contact us at support@frostmouse.com.\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/privacy/IMAPrivacy.component.ts":
/*!*************************************************!*\
  !*** ./src/app/privacy/IMAPrivacy.component.ts ***!
  \*************************************************/
/*! exports provided: IMAPrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAPrivacyComponent", function() { return IMAPrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var IMAPrivacyComponent = /** @class */ (function () {
    function IMAPrivacyComponent(shareimg) {
        this.shareimg = shareimg;
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
    IMAPrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./IMAPrivacy.component.html */ "./src/app/privacy/IMAPrivacy.component.html"),
            styles: [__webpack_require__(/*! ./IMAPrivacy.component.css */ "./src/app/privacy/IMAPrivacy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["SharedImages"]])
    ], IMAPrivacyComponent);
    return IMAPrivacyComponent;
}());



/***/ }),

/***/ "./src/app/privacy/index.ts":
/*!**********************************!*\
  !*** ./src/app/privacy/index.ts ***!
  \**********************************/
/*! exports provided: IMAPrivacyComponent, PolyPrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IMAPrivacy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IMAPrivacy.component */ "./src/app/privacy/IMAPrivacy.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMAPrivacyComponent", function() { return _IMAPrivacy_component__WEBPACK_IMPORTED_MODULE_0__["IMAPrivacyComponent"]; });

/* harmony import */ var _polyPrivacy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyPrivacy.component */ "./src/app/privacy/polyPrivacy.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolyPrivacyComponent", function() { return _polyPrivacy_component__WEBPACK_IMPORTED_MODULE_1__["PolyPrivacyComponent"]; });





/***/ }),

/***/ "./src/app/privacy/polyPrivacy.component.css":
/*!***************************************************!*\
  !*** ./src/app/privacy/polyPrivacy.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    padding-left: 20vw;\r\n    padding-right: 20vw;\r\n    padding-top: 5vh;\r\n    padding-bottom: 5vh;\r\n    justify-content: center;\r\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    color: white;\r\n}\r\n/* Track */\r\n::ng-deep ::-webkit-scrollbar-track {\r\n    background-color: #5fcde4;\r\n    background-image: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS9wb2x5UHJpdmFjeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyREFBMkQ7SUFDM0QsWUFBWTtBQUNoQjtBQUNBLFVBQVU7QUFDVjtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wcml2YWN5L3BvbHlQcml2YWN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwdnc7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDV2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6bmctZGVlcCA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZmNkZTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/privacy/polyPrivacy.component.html":
/*!****************************************************!*\
  !*** ./src/app/privacy/polyPrivacy.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<div class=\"main\">\r\n\r\n  <body>\r\n    <h2>Privacy Policy</h2>\r\n    <p>\r\n      Frost Mouse Studios, LLC built the Polyvade game as\r\n      an Ad Supported game. This SERVICE is provided by\r\n      Frost Mouse Studios, LLC at no cost and is intended for\r\n      use as is.\r\n    </p>\r\n    <p>\r\n      This page is used to inform visitors regarding\r\n      our policies with the collection, use, and\r\n      disclosure of Personal Information if anyone decided to use\r\n      our Service.\r\n    </p>\r\n    <p>\r\n      If you choose to use our Service, then you agree\r\n      to the collection and use of information in relation to this\r\n      policy. The Personal Information that we collect is\r\n      used for providing and improving the Service.\r\n      We will not use or share your\r\n      information with anyone except as described in this Privacy\r\n      Policy.\r\n    </p>\r\n    <p>\r\n      The terms used in this Privacy Policy have the same meanings\r\n      as in our Terms and Conditions, which is accessible at\r\n      Polyvade unless otherwise defined in this Privacy\r\n      Policy.\r\n    </p>\r\n    <p><strong>Information Collection and Use</strong></p>\r\n    <p>\r\n      For a better experience, while using our Service,\r\n      we may require you to provide us with certain\r\n      personally identifiable information. The\r\n      information that we request will be\r\n      retained by us and used as described in this privacy policy.\r\n    </p>\r\n    <p>\r\n      The game does use third party services that may collect\r\n      information used to identify you.\r\n    </p>\r\n    <div>\r\n      <p>\r\n        Link to privacy policy of third party service providers\r\n        used by the game\r\n      </p>\r\n      <ul>\r\n        <li><a href=\"https://www.google.com/policies/privacy/\" target=\"_blank\">Google Play Services</a></li>\r\n        <!---->\r\n        <!---->\r\n        <!---->\r\n        <!---->\r\n        <!---->\r\n        <!---->\r\n        <!---->\r\n        <!---->\r\n        <!---->\r\n        <!---->\r\n        <li><a href=\"https://unity3d.com/legal/privacy-policy\" target=\"_blank\">Unity</a></li>\r\n        <!---->\r\n        <!---->\r\n      </ul>\r\n    </div>\r\n    <p><strong>Log Data</strong></p>\r\n    <p>\r\n      We want to inform you that whenever\r\n      you use our Service, in a case of an error in the\r\n      game we collect data and information (through third\r\n      party products) on your phone called Log Data. This Log Data\r\n      may include information such as your device Internet\r\n      Protocol (???IP???) address, device name, operating system\r\n      version, the configuration of the game when utilizing\r\n      our Service, the time and date of your use of the\r\n      Service, and other statistics.\r\n    </p>\r\n    <p><strong>Cookies</strong></p>\r\n    <p>\r\n      Cookies are files with a small amount of data that are\r\n      commonly used as anonymous unique identifiers. These are\r\n      sent to your browser from the websites that you visit and\r\n      are stored on your device's internal memory.\r\n    </p>\r\n    <p>\r\n      This Service does not use these ???cookies??? explicitly.\r\n      However, the game may use third party code and libraries that\r\n      use ???cookies??? to collect information and improve their\r\n      services. You have the option to either accept or refuse\r\n      these cookies and know when a cookie is being sent to your\r\n      device. If you choose to refuse our cookies, you may not be\r\n      able to use some portions of this Service.\r\n    </p>\r\n    <p><strong>Service Providers</strong></p>\r\n    <p>\r\n      We may employ third-party companies\r\n      and individuals due to the following reasons:\r\n    </p>\r\n    <ul>\r\n      <li>To facilitate our Service;</li>\r\n      <li>To provide the Service on our behalf;</li>\r\n      <li>To perform Service-related services; or</li>\r\n      <li>To assist us in analyzing how our Service is used.</li>\r\n    </ul>\r\n    <p>\r\n      We want to inform users of this\r\n      Service that these third parties have access to your\r\n      Personal Information. The reason is to perform the tasks\r\n      assigned to them on our behalf. However, they are obligated\r\n      not to disclose or use the information for any other\r\n      purpose.\r\n    </p>\r\n    <p><strong>Security</strong></p>\r\n    <p>\r\n      We value your trust in providing us\r\n      your Personal Information, thus we are striving to use\r\n      commercially acceptable means of protecting it. But remember\r\n      that no method of transmission over the internet, or method\r\n      of electronic storage is 100% secure and reliable, and\r\n      we cannot guarantee its absolute security.\r\n    </p>\r\n    <p><strong>Links to Other Sites</strong></p>\r\n    <p>\r\n      This Service may contain links to other sites. If you click\r\n      on a third-party link, you will be directed to that site.\r\n      Note that these external sites are not operated by\r\n      us. Therefore, we strongly advise you to\r\n      review the Privacy Policy of these websites.\r\n      We have no control over and assume no\r\n      responsibility for the content, privacy policies, or\r\n      practices of any third-party sites or services.\r\n    </p>\r\n    <p><strong>Children???s Privacy</strong></p>\r\n    <p>\r\n      These Services do not address anyone under the age of 13.\r\n      We do not knowingly collect personally\r\n      identifiable information from children under 13. In the case\r\n      we discover that a child under 13 has provided\r\n      us with personal information,\r\n      we immediately delete this from our servers. If you\r\n      are a parent or guardian and you are aware that your child\r\n      has provided us with personal information, please contact\r\n      us so that we will be able to do\r\n      necessary actions.\r\n    </p>\r\n    <p><strong>Changes to This Privacy Policy</strong></p>\r\n    <p>\r\n      We may update our Privacy Policy from\r\n      time to time. Thus, you are advised to review this page\r\n      periodically for any changes. We will\r\n      notify you of any changes by posting the new Privacy Policy\r\n      on this page. These changes are effective immediately after\r\n      they are posted on this page.\r\n    </p>\r\n    <p><strong>Contact Us</strong></p>\r\n    <p>\r\n      If you have any questions or suggestions about\r\n      our Privacy Policy, do not hesitate to contact\r\n      us at support@frostmouse.com.\r\n    </p>\r\n  </body>\r\n</div>"

/***/ }),

/***/ "./src/app/privacy/polyPrivacy.component.ts":
/*!**************************************************!*\
  !*** ./src/app/privacy/polyPrivacy.component.ts ***!
  \**************************************************/
/*! exports provided: PolyPrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolyPrivacyComponent", function() { return PolyPrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var PolyPrivacyComponent = /** @class */ (function () {
    function PolyPrivacyComponent(shareimg) {
        this.shareimg = shareimg;
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
    PolyPrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./polyPrivacy.component.html */ "./src/app/privacy/polyPrivacy.component.html"),
            styles: [__webpack_require__(/*! ./polyPrivacy.component.css */ "./src/app/privacy/polyPrivacy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["SharedImages"]])
    ], PolyPrivacyComponent);
    return PolyPrivacyComponent;
}());



/***/ }),

/***/ "./src/app/terms/index.ts":
/*!********************************!*\
  !*** ./src/app/terms/index.ts ***!
  \********************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.component */ "./src/app/terms/terms.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return _terms_component__WEBPACK_IMPORTED_MODULE_0__["TermsComponent"]; });




/***/ }),

/***/ "./src/app/terms/terms.component.css":
/*!*******************************************!*\
  !*** ./src/app/terms/terms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    padding-left: 20vw;\r\n    padding-right: 20vw;\r\n    padding-top: 5vh;\r\n    padding-bottom: 5vh;\r\n    justify-content: center;\r\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    color: white;\r\n}\r\n/* Track */\r\n::ng-deep ::-webkit-scrollbar-track {\r\n    background-color: #5fcde4;\r\n    background-image: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMvdGVybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkRBQTJEO0lBQzNELFlBQVk7QUFDaEI7QUFDQSxVQUFVO0FBQ1Y7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdGVybXMvdGVybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjB2dztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwdnc7XHJcbiAgICBwYWRkaW5nLXRvcDogNXZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDV2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjpuZy1kZWVwIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmY2RlNDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/terms/terms.component.html":
/*!********************************************!*\
  !*** ./src/app/terms/terms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <strong>Terms &amp; Conditions</strong>\r\n  <p>\r\n    By downloading or using the app, these terms will\r\n    automatically apply to you ??? you should make sure therefore\r\n    that you read them carefully before using the app. You???re not\r\n    allowed to copy or modify the app, any part of the app, or\r\n    our trademarks in any way. You???re not allowed to attempt to\r\n    extract the source code of the app, and you also shouldn???t try\r\n    to translate the app into other languages or make derivative\r\n    versions. The app itself, and all the trademarks, copyright,\r\n    database rights, and other intellectual property rights related\r\n    to it, still belong to Frost Mouse Studios LLC.\r\n  </p>\r\n  <p>\r\n    Frost Mouse Studios LLC is committed to ensuring that the app is\r\n    as useful and efficient as possible. For that reason, we\r\n    reserve the right to make changes to the app or to charge for\r\n    its services, at any time and for any reason. We will never\r\n    charge you for the app or its services without making it very\r\n    clear to you exactly what you???re paying for.\r\n  </p>\r\n  <p>\r\n    The IMA Miner app stores and processes personal data that\r\n    you have provided to us, to provide our\r\n    Service. It???s your responsibility to keep your phone and\r\n    access to the app secure. We therefore recommend that you do\r\n    not jailbreak or root your phone, which is the process of\r\n    removing software restrictions and limitations imposed by the\r\n    official operating system of your device. It could make your\r\n    phone vulnerable to malware/viruses/malicious programs,\r\n    compromise your phone???s security features and it could mean\r\n    that the IMA Miner app won???t work properly or at all.\r\n  </p>\r\n  <div>\r\n    <p>\r\n      The app does use third-party services that declare their\r\n      Terms and Conditions.\r\n    </p>\r\n    <p>\r\n      Link to Terms and Conditions of third-party service\r\n      providers used by the app\r\n    </p>\r\n    <ul>\r\n      <li><a href=\"https://unity3d.com/legal/terms-of-service\" target=\"_blank\" rel=\"noopener noreferrer\">Unity</a></li>\r\n    </ul>\r\n  </div>\r\n  <p>\r\n    You should be aware that there are certain things that\r\n    Frost Mouse Studios LLC will not take responsibility for. Certain\r\n    functions of the app will require the app to have an active\r\n    internet connection. The connection can be Wi-Fi or provided\r\n    by your mobile network provider, but Frost Mouse Studios LLC\r\n    cannot take responsibility for the app not working at full\r\n    functionality if you don???t have access to Wi-Fi, and you don???t\r\n    have any of your data allowance left.\r\n  </p>\r\n  <p></p>\r\n  <p>\r\n    If you???re using the app outside of an area with Wi-Fi, you\r\n    should remember that the terms of the agreement with your\r\n    mobile network provider will still apply. As a result, you may\r\n    be charged by your mobile provider for the cost of data for\r\n    the duration of the connection while accessing the app, or\r\n    other third-party charges. In using the app, you???re accepting\r\n    responsibility for any such charges, including roaming data\r\n    charges if you use the app outside of your home territory\r\n    (i.e. region or country) without turning off data roaming. If\r\n    you are not the bill payer for the device on which you???re\r\n    using the app, please be aware that we assume that you have\r\n    received permission from the bill payer for using the app.\r\n  </p>\r\n  <p>\r\n    Along the same lines, Frost Mouse Studios LLC cannot always take\r\n    responsibility for the way you use the app i.e. You need to\r\n    make sure that your device stays charged ??? if it runs out of\r\n    battery and you can???t turn it on to avail the Service,\r\n    Frost Mouse Studios LLC cannot accept responsibility.\r\n  </p>\r\n  <p>\r\n    With respect to Frost Mouse Studios LLC???s responsibility for your\r\n    use of the app, when you???re using the app, it???s important to\r\n    bear in mind that although we endeavor to ensure that it is\r\n    updated and correct at all times, we do rely on third parties\r\n    to provide information to us so that we can make it available\r\n    to you. Frost Mouse Studios LLC accepts no liability for any\r\n    loss, direct or indirect, you experience as a result of\r\n    relying wholly on this functionality of the app.\r\n  </p>\r\n  <p>\r\n    At some point, we may wish to update the app. The app is\r\n    currently available on Android &amp; iOS ??? the requirements for the\r\n    both systems(and for any additional systems we\r\n    decide to extend the availability of the app to) may change,\r\n    and you???ll need to download the updates if you want to keep\r\n    using the app. Frost Mouse Studios LLC does not promise that it\r\n    will always update the app so that it is relevant to you\r\n    and/or works with the Android &amp; iOS version that you have\r\n    installed on your device. However, you promise to always\r\n    accept updates to the application when offered to you, We may\r\n    also wish to stop providing the app, and may terminate use of\r\n    it at any time without giving notice of termination to you.\r\n    Unless we tell you otherwise, upon any termination, (a) the\r\n    rights and licenses granted to you in these terms will end;\r\n    (b) you must stop using the app, and (if needed) delete it\r\n    from your device.\r\n  </p>\r\n  <p><strong>Changes to This Terms and Conditions</strong></p>\r\n  <p>\r\n    We may update our Terms and Conditions\r\n    from time to time. Thus, you are advised to review this page\r\n    periodically for any changes. We will\r\n    notify you of any changes by posting the new Terms and\r\n    Conditions on this page.\r\n  </p>\r\n  <p>\r\n    These terms and conditions are effective as of 2021-12-05\r\n  </p>\r\n  <p><strong>Contact Us</strong></p>\r\n  <p>\r\n    If you have any questions or suggestions about our\r\n    Terms and Conditions, do not hesitate to contact us\r\n    at support@frostmouse.com.\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/terms/terms.component.ts":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var TermsComponent = /** @class */ (function () {
    function TermsComponent(shareimg) {
        this.shareimg = shareimg;
        shareimg.setLeftImage("/assets/mainimages/image1.PNG");
        shareimg.setRightImage("/assets/mainimages/image1.PNG");
    }
    TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.css */ "./src/app/terms/terms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["SharedImages"]])
    ], TermsComponent);
    return TermsComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Cade\Desktop\frostmouse.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map