(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-login></app-login> -->\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/components/login/login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/components/login/login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" *ngIf=\"error\">\r\n    <h1>{{error.errorTitle}}</h1>\r\n    <h3>{{error.errorDesc}}</h3>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8 col-md-6 col-lg-4 mx-auto\">\r\n            <div class=\"card card-signin my-5\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title text-center\">Sign In</h5>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"loginError\">\r\n                        {{loginError}}\r\n                    </div>\r\n                    <form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                        <div class=\"form-label-group\" [ngClass]=\"{ 'has-error': isSubmitted && formControls.email.errors }\">\r\n                            <input type=\"email\" id=\"inputEmail\"  class=\"form-control\" placeholder=\"Email address\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': (username.dirty || username.touched) && username.errors }\" required autofocus>\r\n                            <label for=\"inputEmail\">Email address</label>\r\n                            <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"text-danger\">\r\n                                <small *ngIf=\"username.errors.required\">\r\n                                    Email Address is required.\r\n                                  </small>\r\n                                  <small *ngIf=\"username.errors.email\">\r\n                                      Email must be a valid email address\r\n                                  </small> \r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-label-group\">\r\n                            <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': (password.dirty || password.touched) && password.errors }\" required>\r\n                            <label for=\"inputPassword\">Password</label>\r\n                            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"text-danger\">\r\n                                <small *ngIf=\"password.errors.required\">\r\n                                    Password is required.\r\n                                  </small>\r\n                                  <small *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"custom-control custom-checkbox mb-3\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" formControlName=\"password\">\r\n                            <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\r\n                        </div>\r\n                        <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!loginForm.valid\">Sign in</button>\r\n                        <a class=\"d-block text-center mt-2 small\" href=\"#\">Forgot Password</a>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <router-outlet></router-outlet> -->\r\n"

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



var routes = [];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'SensorUWebApplication';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AuthService } from './auth/services/auth.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth/auth.guard.ts");






var routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] //shared
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/auth/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/'], { queryParams: { returnUrl: url } });
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");




// import {AuthService} from './services/auth.service';


var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]
            ],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container-fluid {\r\n  background: #244c7f ;\r\n  background: -webkit-gradient(linear, left top, right top, from(#244c7f) ,to(#0062E6));\r\n  background: linear-gradient(to right, #244c7f ,#0062E6);\r\n  font-family:Roboto Regular!important;\r\n  font-size: 16px!important;\r\n  height: 100vh;\r\n}\r\n:root {\r\n    --input-padding-x: 11px;\r\n    --input-padding-y: 23px;\r\n  }\r\n.card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n.card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n.card-signin .card-body {\r\n    padding: 2rem;\r\n  }\r\n.form-signin {\r\n    width: 100%;\r\n  }\r\n.form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    -webkit-transition: all 0.2s;\r\n    transition: all 0.2s;\r\n  }\r\n.form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n.form-label-group input {\r\n    height: auto;\r\n    border-radius: 2rem;\r\n  }\r\n.form-label-group>input,\r\n  .form-label-group>label {\r\n    /*padding: var(--input-padding-y) var(--input-padding-x);*/\r\n    padding: 11px 23px;\r\n  }\r\n.form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    -webkit-transition: all .1s ease-in-out;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n.form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n.form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n.form-label-group input::-moz-placeholder {\r\n    color: transparent;\r\n  }\r\n.form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n.form-label-group input:not(:placeholder-shown) {\r\n    padding-top: calc(11px + 13px * (2 / 3));\r\n    padding-bottom: calc(13 / 3);\r\n  }\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n.btn-google {\r\n    color: white;\r\n    background-color: #ea4335;\r\n  }\r\n.btn-facebook {\r\n    color: white;\r\n    background-color: #3b5998;\r\n  }\r\n/* Fallback for Edge\r\n  -------------------------------------------------- */\r\n@supports (-ms-ime-align: auto) {\r\n    .form-label-group>label {\r\n      display: none;\r\n    }\r\n    .form-label-group input::-ms-input-placeholder {\r\n      color: #777;\r\n    }\r\n  }\r\n/* Fallback for IE\r\n  -------------------------------------------------- */\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n    .form-label-group>label {\r\n      display: none;\r\n    }\r\n    .form-label-group input:-ms-input-placeholder {\r\n      color: #777;\r\n    }\r\n  }\r\n.text-danger{\r\n    margin-left: 16px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFGQUF1RDtFQUF2RCx1REFBdUQ7RUFDdkQsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7RUFDekI7QUFFQTtJQUNFLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOENBQThDO0VBQ2hEO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxXQUFXO0VBQ2I7QUFFQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNEJBQW9CO0lBQXBCLG9CQUFvQjtFQUN0QjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUVBOztJQUVFLDBEQUEwRDtJQUMxRCxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsdUNBQStCO0lBQS9CLCtCQUErQjtFQUNqQztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBTUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsNEJBQTRCO0VBQzlCO0FBRUE7SUFDRSw2Q0FBNkM7SUFDN0MsZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7QUFFQTtzREFDb0Q7QUFFcEQ7SUFDRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0Y7QUFFQTtzREFDb0Q7QUFFcEQ7SUFFRTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0Y7QUFDQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIGJhY2tncm91bmQ6ICMyNDRjN2YgO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0NGM3ZiAsIzAwNjJFNik7XHJcbiAgZm9udC1mYW1pbHk6Um9ib3RvIFJlZ3VsYXIhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweCFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG46cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMTFweDtcclxuICAgIC0taW5wdXQtcGFkZGluZy15OiAyM3B4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtc2lnbmluIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1zaWduaW4gLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tc2lnbmluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmlucHV0LFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIC8qcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpOyovXHJcbiAgICBwYWRkaW5nOiAxMXB4IDIzcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYygxMXB4ICsgMTNweCAqICgyIC8gMykpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoMTMgLyAzKTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1nb29nbGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcclxuICB9XHJcblxyXG4gIC5idG4tZmFjZWJvb2sge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuICB9XHJcblxyXG4gIC8qIEZhbGxiYWNrIGZvciBFZGdlXHJcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBGYWxsYmFjayBmb3IgSUVcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLFxyXG4gICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzc3NztcclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtZGFuZ2Vye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


//import{ User } from '../../dataModel/user';



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.submitted = false;
    }
    //
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () { return this.loginForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.authService.login(this.username.value, this.password.value).subscribe(function (data) {
            if (_this.authService.isLoggedIn()) {
                _this.router.navigate(['/dashboard/load']);
            }
            else {
                _this.loginError = 'Username or password is incorrect.';
            }
        }, function (error) { return _this.error = error; });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (username, password) {
        return this.http.get('http://localhost:3000/user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            var userdetails = user.filter(function (key) { return key.username == username && key.password == password; });
            if (userdetails.length != 0 && userdetails[0].token) {
                localStorage.setItem('currentUser', JSON.stringify(userdetails[0]));
            }
            //const userExists = user.some(key => key.username == username && key.password == password)
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    };
    AuthService.prototype.getAuthorizationToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.token;
    };
    AuthService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: 'Oops! Request for document failed',
            errorDesc: 'Something bad happened. Please try again later.'
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(this.errorData);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\19-08-2019\sensorUWebApplication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map