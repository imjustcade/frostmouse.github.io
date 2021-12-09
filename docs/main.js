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


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html") })
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/app/contact/index.ts");
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games */ "./src/app/games/index.ts");
/* harmony import */ var _games_Vain_Miner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games/Vain Miner */ "./src/app/games/Vain Miner/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _privacy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./privacy */ "./src/app/privacy/index.ts");
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terms */ "./src/app/terms/index.ts");










var routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'games', component: _games__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"] },
    { path: 'contact', component: _contact__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'about', component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'vain-miner-privacy', component: _privacy__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"] },
    { path: 'vain-miner-terms', component: _terms__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"] },
    { path: 'games/Vain Miner', component: _games_Vain_Miner__WEBPACK_IMPORTED_MODULE_6__["VainMinerComponent"] },
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

module.exports = ".header {\r\n    background-color: rgb(0, 0, 0);\r\n    margin: 0 -9999rem;\r\n    padding: 5px 9999rem;\r\n}\r\n.navbar-brand {\r\n    padding: 5px .5em;\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIG1hcmdpbjogMCAtOTk5OXJlbTtcclxuICAgIHBhZGRpbmc6IDVweCA5OTk5cmVtO1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4IC41ZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <div class=\"header\">\r\n    <h1 [ngStyle]=\"{'color':'white'}\">\r\n      <nav class=\"navbar navbar-extended navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" routerLink=\"/\">{{ title }}</a>\r\n        <a class=\"navbar-brand\" routerLink=\"/games\">Games</a>\r\n        <a class=\"navbar-brand\" routerLink=\"/about\">About</a>\r\n        <a class=\"navbar-brand\" routerLink=\"/contact\">Contact</a>\r\n      </nav>\r\n    </h1>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Frost Mouse Studios';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games */ "./src/app/games/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact */ "./src/app/contact/index.ts");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about */ "./src/app/about/index.ts");
/* harmony import */ var _privacy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./privacy */ "./src/app/privacy/index.ts");
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./terms */ "./src/app/terms/index.ts");
/* harmony import */ var _games_Vain_Miner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games/Vain Miner */ "./src/app/games/Vain Miner/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _games__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"],
                _contact__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _about__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _privacy__WEBPACK_IMPORTED_MODULE_9__["PrivacyComponent"],
                _terms__WEBPACK_IMPORTED_MODULE_10__["TermsComponent"],
                _games_Vain_Miner__WEBPACK_IMPORTED_MODULE_11__["VainMinerComponent"],
                _games_Vain_Miner__WEBPACK_IMPORTED_MODULE_11__["openImageDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_games_Vain_Miner__WEBPACK_IMPORTED_MODULE_11__["openImageDialog"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div class=\"header\">\r\n      <h1 [ngStyle]=\"{'color':'white'}\">\r\n          Contact\r\n      </h1>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html") })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/index.ts":
/*!**********************************!*\
  !*** ./src/app/contact/index.ts ***!
  \**********************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return _contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"]; });




/***/ }),

/***/ "./src/app/games/Vain Miner/Vain Miner.component.css":
/*!***********************************************************!*\
  !*** ./src/app/games/Vain Miner/Vain Miner.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scale {\r\n    width: auto;\r\n    height: 250px;\r\n    border: 10px solid black;\r\n}\r\n.header {\r\n    margin: auto;\r\n    text-align: center;\r\n    background-color: black;\r\n}\r\n.main {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n.grid {\r\n    padding: 20px;\r\n    display: inline-grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    -moz-column-gap: 20px;\r\n         column-gap: 20px;\r\n    row-gap: 10px;\r\n}\r\n.video {\r\n    margin: auto;\r\n    padding: 20px;\r\n    height: 600px;\r\n    width: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvVmFpbiBNaW5lci9WYWluIE1pbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL1ZhaW4gTWluZXIvVmFpbiBNaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjYWxlIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi5tYWluIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmdyaWQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICByb3ctZ2FwOiAxMHB4O1xyXG59XHJcbi52aWRlbyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/games/Vain Miner/Vain Miner.component.html":
/*!************************************************************!*\
  !*** ./src/app/games/Vain Miner/Vain Miner.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <video class=\"video\" autoplay controls controlsList=\"nodownload\" disablePictureInPicture loop>\r\n        <!-- <source src={{video}} type=\"video/mp4\"> -->\r\n    </video>\r\n    <h1 class=\"header\" [ngStyle]=\"{'color':'white'}\">\r\n        Screenshots\r\n    </h1>\r\n    <div class=\"grid\">\r\n        <div *ngFor=\"let img of images\">\r\n            <img class=\"scale\" src={{img}} (click)=\"openDialog(img)\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/games/Vain Miner/Vain Miner.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/games/Vain Miner/Vain Miner.component.ts ***!
  \**********************************************************/
/*! exports provided: VainMinerComponent, openImageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VainMinerComponent", function() { return VainMinerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openImageDialog", function() { return openImageDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var VainMinerComponent = /** @class */ (function () {
    function VainMinerComponent(dialog) {
        this.dialog = dialog;
        this.images = [
            "/assets/Vain Miner/1.PNG",
            "/assets/Vain Miner/2.PNG",
            "/assets/Vain Miner/3.PNG",
            "/assets/Vain Miner/4.PNG",
            "/assets/Vain Miner/5.PNG"
        ];
        this.video = "/assets/Vain Miner/video.mp4";
    }
    VainMinerComponent.prototype.openDialog = function (imageName) {
        this.dialog.open(openImageDialog, {
            data: {
                image: imageName,
                activeImage: this.images.indexOf(imageName)
            },
            panelClass: 'custom-dialog-container',
            backdropClass: 'backdropBackground'
        });
    };
    VainMinerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./Vain Miner.component.html */ "./src/app/games/Vain Miner/Vain Miner.component.html"),
            styles: [__webpack_require__(/*! ./Vain Miner.component.css */ "./src/app/games/Vain Miner/Vain Miner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], VainMinerComponent);
    return VainMinerComponent;
}());

var openImageDialog = /** @class */ (function () {
    function openImageDialog(data) {
        this.data = data;
        this.images = [
            "/assets/Vain Miner/1.PNG",
            "/assets/Vain Miner/2.PNG",
            "/assets/Vain Miner/3.PNG",
            "/assets/Vain Miner/4.PNG",
            "/assets/Vain Miner/5.PNG"
        ];
        this.activeImage = this.data.activeImage;
    }
    openImageDialog.prototype.upImage = function () {
        var img = document.getElementById("disImage");
        if (this.activeImage === 4) {
            this.activeImage = 0;
        }
        else {
            this.activeImage += 1;
        }
        img.src = this.images[this.activeImage];
    };
    openImageDialog.prototype.downImage = function () {
        var img = document.getElementById("disImage");
        if (this.activeImage === 0) {
            this.activeImage = 4;
        }
        else {
            this.activeImage -= 1;
        }
        img.src = this.images[this.activeImage];
    };
    openImageDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'openImage',
            template: __webpack_require__(/*! ./openImage.html */ "./src/app/games/Vain Miner/openImage.html"),
            styles: [__webpack_require__(/*! ./openImage.css */ "./src/app/games/Vain Miner/openImage.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], openImageDialog);
    return openImageDialog;
}());



/***/ }),

/***/ "./src/app/games/Vain Miner/index.ts":
/*!*******************************************!*\
  !*** ./src/app/games/Vain Miner/index.ts ***!
  \*******************************************/
/*! exports provided: VainMinerComponent, openImageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vain_Miner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vain Miner.component */ "./src/app/games/Vain Miner/Vain Miner.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VainMinerComponent", function() { return _Vain_Miner_component__WEBPACK_IMPORTED_MODULE_0__["VainMinerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openImageDialog", function() { return _Vain_Miner_component__WEBPACK_IMPORTED_MODULE_0__["openImageDialog"]; });




/***/ }),

/***/ "./src/app/games/Vain Miner/openImage.css":
/*!************************************************!*\
  !*** ./src/app/games/Vain Miner/openImage.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent {\r\n    text-align: center;\r\n}\r\n.scale {\r\n    max-width: 100%;\r\n    max-height: 100vh;\r\n    margin: auto;\r\n}\r\n.leftB {\r\n    height: 40%;\r\n    width: 9%;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 15px;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n    background-image: url(\"/assets/arrow.png\");\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n    background-size: 100% 100%;\r\n    transform: rotate(180deg);\r\n    border: none;\r\n}\r\n.rightB {\r\n    height: 40%;\r\n    width: 9%;\r\n    position: absolute;\r\n    top: 30%;\r\n    right: 15px;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n    background-image: url(\"/assets/arrow.png\");\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n    background-size: 100% 100%;\r\n    border: none;\r\n}\r\n.exit {\r\n    height: 70px;\r\n    width: 70px;\r\n    position: relative;\r\n    top: 0px;\r\n    right: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvVmFpbiBNaW5lci9vcGVuSW1hZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy9WYWluIE1pbmVyL29wZW5JbWFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2NhbGUge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmxlZnRCIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDklO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYXJyb3cucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnJpZ2h0QiB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiA5JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hcnJvdy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5leGl0IHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/games/Vain Miner/openImage.html":
/*!*************************************************!*\
  !*** ./src/app/games/Vain Miner/openImage.html ***!
  \*************************************************/
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

module.exports = ".scroll {\r\n    max-height: 100vh;\r\n}\r\n.main {\r\n    padding: 20px;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(640px, 1fr));\r\n    -moz-column-gap: 20px;\r\n         column-gap: 20px;\r\n    row-gap: 60px;\r\n    justify-content: center;\r\n}\r\n.games {\r\n    width: 500px;\r\n    border: 2px solid rgb(214, 214, 214);\r\n    margin: auto;\r\n}\r\n.images {\r\n    white-space: nowrap;\r\n    overflow-x: auto;\r\n}\r\n.scale {\r\n    width: 500px;\r\n    height: auto;\r\n}\r\n.header {\r\n    margin: auto;\r\n    background-color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQscUJBQWdCO1NBQWhCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwge1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbn1cclxuLm1haW4ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg2NDBweCwgMWZyKSk7XHJcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgcm93LWdhcDogNjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5nYW1lcyB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmltYWdlcyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uc2NhbGUge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll\" style=\"text-align:center\">\r\n    <div class=\"main\">\r\n      <div class=\"games\" [style.height.px]=\"height\" *ngFor=\"let game of gameList\">\r\n        <h1 class=\"header\" [ngStyle]=\"{'color':'white'}\">\r\n          {{game.name}}\r\n        </h1>\r\n        <a class=\"images\" href=\"/games/{{game.name}}\">\r\n          <img class=\"scale\" src={{game.image}}>\r\n        </a>\r\n      </div>\r\n    </div>\r\n</div>"

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


var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
        this.gameList = games;
    }
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        })
    ], GamesComponent);
    return GamesComponent;
}());

var games = [];
var VainMiner = {
    name: "Vain Miner",
    image: "/assets/Vain Miner/1.PNG"
};
games.push(VainMiner);


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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <div class=\"header\">\r\n      <h1 [ngStyle]=\"{'color':'white'}\">\r\n          Home\r\n      </h1>\r\n    </div>\r\n  </div>"

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


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Frost Mouse Studios';
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
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

/***/ "./src/app/privacy/index.ts":
/*!**********************************!*\
  !*** ./src/app/privacy/index.ts ***!
  \**********************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return _privacy_component__WEBPACK_IMPORTED_MODULE_0__["PrivacyComponent"]; });




/***/ }),

/***/ "./src/app/privacy/privacy.component.css":
/*!***********************************************!*\
  !*** ./src/app/privacy/privacy.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/privacy/privacy.component.html":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n  <meta charset='utf-8'>\r\n  <meta name='viewport' content='width=device-width'>\r\n  <title>Privacy Policy</title>\r\n  <style>\r\n    body {\r\n      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n      padding: 1em;\r\n      color: white;\r\n    }\r\n  </style>\r\n</head>\r\n\r\n<body>\r\n  <strong>Privacy Policy</strong>\r\n  <p>\r\n    Frost Mouse Studios LLC built the Vain Miner app as\r\n    a Freemium app. This SERVICE is provided by\r\n    Frost Mouse Studios LLC at no cost and is intended for use as\r\n    is.\r\n  </p>\r\n  <p>\r\n    This page is used to inform visitors regarding our\r\n    policies with the collection, use, and disclosure of Personal\r\n    Information if anyone decided to use our Service.\r\n  </p>\r\n  <p>\r\n    If you choose to use our Service, then you agree to\r\n    the collection and use of information in relation to this\r\n    policy. The Personal Information that we collect is\r\n    used for providing and improving the Service. We will not use or share your information with\r\n    anyone except as described in this Privacy Policy.\r\n  </p>\r\n  <p>\r\n    The terms used in this Privacy Policy have the same meanings\r\n    as in our Terms and Conditions, which are accessible at\r\n    Vain Miner unless otherwise defined in this Privacy Policy.\r\n  </p>\r\n  <p><strong>Information Collection and Use</strong></p>\r\n  <p>\r\n    For a better experience, while using our Service, we\r\n    may require you to provide us with certain personally\r\n    identifiable information. The information that\r\n    we request will be retained by us and used as described in this privacy policy.\r\n  </p>\r\n  <div>\r\n    <p>\r\n      The app does use third-party services that may collect\r\n      information used to identify you.\r\n    </p>\r\n    <p>\r\n      Link to the privacy policy of third-party service providers used\r\n      by the app\r\n    </p>\r\n    <ul>\r\n      <li><a href=\"https://unity3d.com/legal/privacy-policy\" target=\"_blank\" rel=\"noopener noreferrer\">Unity</a></li>\r\n    </ul>\r\n  </div>\r\n  <p><strong>Log Data</strong></p>\r\n  <p>\r\n    We want to inform you that whenever you\r\n    use our Service, in a case of an error in the app\r\n    we collect data and information (through third-party\r\n    products) on your phone called Log Data. This Log Data may\r\n    include information such as your device Internet Protocol\r\n    (“IP”) address, device name, operating system version, the\r\n    configuration of the app when utilizing our Service,\r\n    the time and date of your use of the Service, and other\r\n    statistics.\r\n  </p>\r\n  <p><strong>Cookies</strong></p>\r\n  <p>\r\n    Cookies are files with a small amount of data that are\r\n    commonly used as anonymous unique identifiers. These are sent\r\n    to your browser from the websites that you visit and are\r\n    stored on your device's internal memory.\r\n  </p>\r\n  <p>\r\n    This Service does not use these “cookies” explicitly. However,\r\n    the app may use third-party code and libraries that use\r\n    “cookies” to collect information and improve their services.\r\n    You have the option to either accept or refuse these cookies\r\n    and know when a cookie is being sent to your device. If you\r\n    choose to refuse our cookies, you may not be able to use some\r\n    portions of this Service.\r\n  </p>\r\n  <p><strong>Service Providers</strong></p>\r\n  <p>\r\n    We may employ third-party companies and\r\n    individuals due to the following reasons:\r\n  </p>\r\n  <ul>\r\n    <li>To facilitate our Service;</li>\r\n    <li>To provide the Service on our behalf;</li>\r\n    <li>To perform Service-related services; or</li>\r\n    <li>To assist us in analyzing how our Service is used.</li>\r\n  </ul>\r\n  <p>\r\n    We want to inform users of this Service\r\n    that these third parties have access to their Personal\r\n    Information. The reason is to perform the tasks assigned to\r\n    them on our behalf. However, they are obligated not to\r\n    disclose or use the information for any other purpose.\r\n  </p>\r\n  <p><strong>Security</strong></p>\r\n  <p>\r\n    We value your trust in providing us your\r\n    Personal Information, thus we are striving to use commercially\r\n    acceptable means of protecting it. But remember that no method\r\n    of transmission over the internet, or method of electronic\r\n    storage is 100% secure and reliable, and we cannot\r\n    guarantee its absolute security.\r\n  </p>\r\n  <p><strong>Links to Other Sites</strong></p>\r\n  <p>\r\n    This Service may contain links to other sites. If you click on\r\n    a third-party link, you will be directed to that site. Note\r\n    that these external sites are not operated by us.\r\n    Therefore, we strongly advise you to review the\r\n    Privacy Policy of these websites. We have\r\n    no control over and assume no responsibility for the content,\r\n    privacy policies, or practices of any third-party sites or\r\n    services.\r\n  </p>\r\n  <p><strong>Children’s Privacy</strong></p>\r\n  <div>\r\n    <p>\r\n      These Services do not address anyone under the age of 13.\r\n      We do not knowingly collect personally\r\n      identifiable information from children under 13 years of age. In the case\r\n      we discover that a child under 13 has provided\r\n      us with personal information, we immediately\r\n      delete this from our servers. If you are a parent or guardian\r\n      and you are aware that your child has provided us with\r\n      personal information, please contact us so that\r\n      we will be able to do the necessary actions.\r\n    </p>\r\n  </div>\r\n  <!---->\r\n  <p><strong>Changes to This Privacy Policy</strong></p>\r\n  <p>\r\n    We may update our Privacy Policy from\r\n    time to time. Thus, you are advised to review this page\r\n    periodically for any changes. We will\r\n    notify you of any changes by posting the new Privacy Policy on\r\n    this page.\r\n  </p>\r\n  <p>This policy is effective as of 2021-12-05</p>\r\n  <p><strong>Contact Us</strong></p>\r\n  <p>\r\n    If you have any questions or suggestions about our\r\n    Privacy Policy, do not hesitate to contact us at nwilson@frostmouse.com or celmore@frostmouse.com.\r\n  </p>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.css */ "./src/app/privacy/privacy.component.css")]
        })
    ], PrivacyComponent);
    return PrivacyComponent;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/terms/terms.component.html":
/*!********************************************!*\
  !*** ./src/app/terms/terms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n  <meta charset='utf-8'>\r\n  <meta name='viewport' content='width=device-width'>\r\n  <title>Terms &amp; Conditions</title>\r\n  <style>\r\n    body {\r\n      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n      padding: 1em;\r\n      color: white;\r\n    }\r\n  </style>\r\n</head>\r\n\r\n<body>\r\n  <strong>Terms &amp; Conditions</strong>\r\n  <p>\r\n    By downloading or using the app, these terms will\r\n    automatically apply to you – you should make sure therefore\r\n    that you read them carefully before using the app. You’re not\r\n    allowed to copy or modify the app, any part of the app, or\r\n    our trademarks in any way. You’re not allowed to attempt to\r\n    extract the source code of the app, and you also shouldn’t try\r\n    to translate the app into other languages or make derivative\r\n    versions. The app itself, and all the trademarks, copyright,\r\n    database rights, and other intellectual property rights related\r\n    to it, still belong to Frost Mouse Studios LLC.\r\n  </p>\r\n  <p>\r\n    Frost Mouse Studios LLC is committed to ensuring that the app is\r\n    as useful and efficient as possible. For that reason, we\r\n    reserve the right to make changes to the app or to charge for\r\n    its services, at any time and for any reason. We will never\r\n    charge you for the app or its services without making it very\r\n    clear to you exactly what you’re paying for.\r\n  </p>\r\n  <p>\r\n    The Vain Miner app stores and processes personal data that\r\n    you have provided to us, to provide our\r\n    Service. It’s your responsibility to keep your phone and\r\n    access to the app secure. We therefore recommend that you do\r\n    not jailbreak or root your phone, which is the process of\r\n    removing software restrictions and limitations imposed by the\r\n    official operating system of your device. It could make your\r\n    phone vulnerable to malware/viruses/malicious programs,\r\n    compromise your phone’s security features and it could mean\r\n    that the Vain Miner app won’t work properly or at all.\r\n  </p>\r\n  <div>\r\n    <p>\r\n      The app does use third-party services that declare their\r\n      Terms and Conditions.\r\n    </p>\r\n    <p>\r\n      Link to Terms and Conditions of third-party service\r\n      providers used by the app\r\n    </p>\r\n    <ul>\r\n      <li><a href=\"https://unity3d.com/legal/terms-of-service\" target=\"_blank\" rel=\"noopener noreferrer\">Unity</a></li>\r\n    </ul>\r\n  </div>\r\n  <p>\r\n    You should be aware that there are certain things that\r\n    Frost Mouse Studios LLC will not take responsibility for. Certain\r\n    functions of the app will require the app to have an active\r\n    internet connection. The connection can be Wi-Fi or provided\r\n    by your mobile network provider, but Frost Mouse Studios LLC\r\n    cannot take responsibility for the app not working at full\r\n    functionality if you don’t have access to Wi-Fi, and you don’t\r\n    have any of your data allowance left.\r\n  </p>\r\n  <p></p>\r\n  <p>\r\n    If you’re using the app outside of an area with Wi-Fi, you\r\n    should remember that the terms of the agreement with your\r\n    mobile network provider will still apply. As a result, you may\r\n    be charged by your mobile provider for the cost of data for\r\n    the duration of the connection while accessing the app, or\r\n    other third-party charges. In using the app, you’re accepting\r\n    responsibility for any such charges, including roaming data\r\n    charges if you use the app outside of your home territory\r\n    (i.e. region or country) without turning off data roaming. If\r\n    you are not the bill payer for the device on which you’re\r\n    using the app, please be aware that we assume that you have\r\n    received permission from the bill payer for using the app.\r\n  </p>\r\n  <p>\r\n    Along the same lines, Frost Mouse Studios LLC cannot always take\r\n    responsibility for the way you use the app i.e. You need to\r\n    make sure that your device stays charged – if it runs out of\r\n    battery and you can’t turn it on to avail the Service,\r\n    Frost Mouse Studios LLC cannot accept responsibility.\r\n  </p>\r\n  <p>\r\n    With respect to Frost Mouse Studios LLC’s responsibility for your\r\n    use of the app, when you’re using the app, it’s important to\r\n    bear in mind that although we endeavor to ensure that it is\r\n    updated and correct at all times, we do rely on third parties\r\n    to provide information to us so that we can make it available\r\n    to you. Frost Mouse Studios LLC accepts no liability for any\r\n    loss, direct or indirect, you experience as a result of\r\n    relying wholly on this functionality of the app.\r\n  </p>\r\n  <p>\r\n    At some point, we may wish to update the app. The app is\r\n    currently available on Android &amp; iOS – the requirements for the\r\n    both systems(and for any additional systems we\r\n    decide to extend the availability of the app to) may change,\r\n    and you’ll need to download the updates if you want to keep\r\n    using the app. Frost Mouse Studios LLC does not promise that it\r\n    will always update the app so that it is relevant to you\r\n    and/or works with the Android &amp; iOS version that you have\r\n    installed on your device. However, you promise to always\r\n    accept updates to the application when offered to you, We may\r\n    also wish to stop providing the app, and may terminate use of\r\n    it at any time without giving notice of termination to you.\r\n    Unless we tell you otherwise, upon any termination, (a) the\r\n    rights and licenses granted to you in these terms will end;\r\n    (b) you must stop using the app, and (if needed) delete it\r\n    from your device.\r\n  </p>\r\n  <p><strong>Changes to This Terms and Conditions</strong></p>\r\n  <p>\r\n    We may update our Terms and Conditions\r\n    from time to time. Thus, you are advised to review this page\r\n    periodically for any changes. We will\r\n    notify you of any changes by posting the new Terms and\r\n    Conditions on this page.\r\n  </p>\r\n  <p>\r\n    These terms and conditions are effective as of 2021-12-05\r\n  </p>\r\n  <p><strong>Contact Us</strong></p>\r\n  <p>\r\n    If you have any questions or suggestions about our\r\n    Terms and Conditions, do not hesitate to contact us\r\n    at nwilson@frostmouse.com or celmore@frostmouse.com.\r\n  </p>\r\n</body>\r\n\r\n</html>"

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


var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.css */ "./src/app/terms/terms.component.css")]
        })
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