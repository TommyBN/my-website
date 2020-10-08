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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _welcome_hello_hello_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/hello/hello.component */ "./src/app/welcome/hello/hello.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'home', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _welcome_hello_hello_component__WEBPACK_IMPORTED_MODULE_7__["HelloComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  \n  <p>\n    Hello {{name}}, welcome to my website\n  </p>\n  \n  \n  <h1>Nothing here yet. but soooooooooon to come :)</h1>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(userService, elementRef) {
        this.userService = userService;
        this.elementRef = elementRef;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.name = this.userService.userName;
    };
    MainComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/welcome/hello/hello.component.css":
/*!***************************************************!*\
  !*** ./src/app/welcome/hello/hello.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding-left: 30%;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n#greeting {\r\n    color: white;\r\n    padding: 5%;\r\n    position: relative;\r\n    left: 0;\r\n    color: black;\r\n    width: 200px;\r\n    -webkit-transform: rotateZ(0deg);\r\n            transform: rotateZ(0deg);\r\n    -webkit-animation-name: greeting;\r\n            animation-name: greeting;\r\n    -webkit-animation-duration: 1.5s;\r\n            animation-duration: 1.5s;\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes greeting {\r\n    0% { left: -180%; -webkit-transform: rotateZ(0deg); transform: rotateZ(0deg)}\r\n    100% { left: 20%; -webkit-transform: rotateZ(360deg); transform: rotateZ(360deg)}\r\n}\r\n\r\n@keyframes greeting {\r\n    0% { left: -180%; -webkit-transform: rotateZ(0deg); transform: rotateZ(0deg)}\r\n    100% { left: 20%; -webkit-transform: rotateZ(360deg); transform: rotateZ(360deg)}\r\n}\r\n\r\n#your-ascii {\r\n    left: 0;\r\n}\r\n\r\n#holly-number {\r\n    position: relative;\r\n    display: inline-block;\r\n    color: rgb(82, 24, 53);\r\n    top: -800px;\r\n    left: 65%;\r\n    font-size: 30px;\r\n    -webkit-animation-name: hollyNumber;\r\n            animation-name: hollyNumber;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-delay: 6s;\r\n            animation-delay: 6s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes hollyNumber {\r\n    0% { top: -800px; }\r\n    /* 50% { top: -400px; } */\r\n    100% { top: -53px; }\r\n}\r\n\r\n@keyframes hollyNumber {\r\n    0% { top: -800px; }\r\n    /* 50% { top: -400px; } */\r\n    100% { top: -53px; }\r\n}\r\n\r\n#what-is-ascii {\r\n    position: relative;\r\n    left: -100%;\r\n    -webkit-animation: whatIsAscii;\r\n            animation: whatIsAscii;\r\n    -webkit-animation-delay: 8s;\r\n            animation-delay: 8s;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes whatIsAscii {\r\n    0% { left: -100% }\r\n    100% { left: 0% }\r\n}\r\n\r\n@keyframes whatIsAscii {\r\n    0% { left: -100% }\r\n    100% { left: 0% }\r\n}\r\n\r\n#ascii-numero {\r\n    position: relative;\r\n    right: 100%;\r\n    -webkit-animation: asciiNumero;\r\n            animation: asciiNumero;\r\n    -webkit-animation-delay: 9.5s;\r\n            animation-delay: 9.5s;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes asciiNumero {\r\n    0% { right: -100% }\r\n    100% { right: 0% }\r\n}\r\n\r\n@keyframes asciiNumero {\r\n    0% { right: -100% }\r\n    100% { right: 0% }\r\n}\r\n\r\n#link-to-site {\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    #your-ascii { left: 10% }\r\n    #holly-number { left: 77% }\r\n    .container { padding-left: 5%;}\r\n}"

/***/ }),

/***/ "./src/app/welcome/hello/hello.component.html":
/*!****************************************************!*\
  !*** ./src/app/welcome/hello/hello.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <h1 id=\"greeting\"> Hello {{name}}!!!!!</h1>\n  <h2 id=\"your-ascii\" #yourAscii>\n    <!-- Did you now that your Ascii-Numerologic number is  -->\n    <!-- <span id=\"q-mark\">?</span>  -->\n  </h2>\n  <span id=\"holly-number\">{{hollyNumber}}?</span> \n  <h2 id=\"what-is-ascii\"><a href=\"https://en.wikipedia.org/wiki/ASCII\">what the hell is Ascii??</a> </h2>\n  <h2 id=\"ascii-numero\"> <a href=\"https://www.dcode.fr/word-value\">More about words values on dcode.fr</a>  </h2>\n  <!-- <h3 id=\"link-to-site\"> <a routerLink=\"/home\"> Fuck off, let me get inside tommy's website!</a></h3> -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/welcome/hello/hello.component.ts":
/*!**************************************************!*\
  !*** ./src/app/welcome/hello/hello.component.ts ***!
  \**************************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelloComponent = /** @class */ (function () {
    function HelloComponent(userService) {
        this.userService = userService;
        this.yourAsciiText = 'Did you know that your Ascii-Numerologic number is ';
        this.inter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(80);
    }
    HelloComponent.prototype.ngOnInit = function () {
        var _this = this;
        var len = this.yourAsciiText.length;
        var obs = this.inter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(len));
        var i = 0;
        this.name = this.userService.userName;
        setTimeout(function () {
            obs.subscribe(function () {
                _this.yourAsciiElement.nativeElement.innerHTML += _this.yourAsciiText[i];
                i++;
            });
        }, 3000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HelloComponent.prototype, "hollyNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('yourAscii'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HelloComponent.prototype, "yourAsciiElement", void 0);
    HelloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello',
            template: __webpack_require__(/*! ./hello.component.html */ "./src/app/welcome/hello/hello.component.html"),
            styles: [__webpack_require__(/*! ./hello.component.css */ "./src/app/welcome/hello/hello.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nbutton {\r\n    border-radius: 5px;\r\n}\r\n\r\n.form-container {\r\n    width: 50%;\r\n    height: 30%;\r\n    padding: 5%;\r\n    margin-left: 40%;\r\n    opacity: 1;\r\n    position: relative;\r\n    transition-property: opacity, padding;\r\n    transition-duration: 2s, 3s;\r\n}\r\n\r\napp-hello {\r\n    top: -9500px;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .form-container { margin-left: 10% }\r\n    #codeMaster { margin: 50% }\r\n\r\n}\r\n\r\n.form-container > div {\r\n    margin: 30px;\r\n}\r\n\r\n#codeMaster {\r\n    margin: auto;\r\n    padding: 10%;\r\n    margin-top: 0;\r\n    transition-property: margin-top;\r\n    transition-duration: 2s;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div id=\"bar\">\n  <div id=\"logo\">\n    tommybn\n  </div>\n</div> -->\n\n\n<div class=\"container\" >\n\n  <div class=\"form-container\" [style.opacity]=\"showName ? '0' : '1'\" \n    [style.padding]=\"showName ? '0.1%' : '5%'\" >\n    <div>\n      <h3>Your name please:</h3>\n    </div>\n    <div>\n      <input type=\"text\" #name (click)=\"checkValidation()\" (keyup)=\"checkValidation()\">\n    </div>\n    <div>\n      <button [disabled]=\"!formValid\" (click)=\"click(); showName=true\">OK, now what?</button>\n    </div>\n  </div>\n\n  <app-hello [hollyNumber]=\"hollyNumber\" *ngIf=\"showName\"></app-hello>\n\n  <div id=\"codeMaster\" [style.marginTop]=\"showName ? '100%' : '0'\" >\n    <h2>Thanks to:</h2>\n      My greatfull thanks to EG coder, who helped me upload the site.\n  </div>\n \n  \n</div>\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { trigger, state, style, animate, transition } from '@angular/animations';
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(userService) {
        this.userService = userService;
        this.formValid = false;
        this.showName = false;
        this.hollyNumber = 0;
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent.prototype.checkValidation = function () {
        this.formValid = this.nameRef.nativeElement.value.length > 1 ? true : false;
    };
    WelcomeComponent.prototype.click = function () {
        this.myName = this.nameRef.nativeElement.value;
        this.userService.userName = this.myName;
        this.calculateLetters();
    };
    WelcomeComponent.prototype.calculateLetters = function () {
        var tempNumber = 0;
        for (var _i = 0, _a = this.myName; _i < _a.length; _i++) {
            var letter = _a[_i];
            tempNumber += letter.charCodeAt(0);
        }
        this.hollyNumber = this.digitalRoot(tempNumber);
    };
    WelcomeComponent.prototype.digitalRoot = function (number) {
        var strin = number.toString();
        var len = strin.length;
        if (len == 1)
            return number;
        var sum = 0;
        for (var i = 0; i < len; i++) {
            sum += parseInt(strin[i]);
        }
        return this.digitalRoot(sum);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('name'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WelcomeComponent.prototype, "nameRef", void 0);
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")],
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\my-website\my-website-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map