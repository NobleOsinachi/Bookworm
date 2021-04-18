(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        /**constructor( private userService: UserService, private auth: AuthService, router: Router ) {auth.user$.subscribe(user => {if (!user) return;userService.save(user);let returnUrl = localStorage.getItem('returnUrl');if (!returnUrl) return;localStorage.removeItem('returnUrl');router.navigateByUrl(returnUrl);});}**/
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@media (max-width: 767px) {\r\n  \r\n  .body-content[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2RkFBNkY7RUFDN0Y7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xyXG4gIC5ib2R5LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "./src/contact-form/contact-form.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./books/book.service */ "./src/app/books/book.service.ts");
/* harmony import */ var _books_books_list_books_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books/books-list/books-list.component */ "./src/app/books/books-list/books-list.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./courses/courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _department_add_edit_department_add_edit_department_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./department/add-edit-department/add-edit-department.component */ "./src/app/department/add-edit-department/add-edit-department.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
/* harmony import */ var _employee_add_edit_employee_add_edit_employee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee/add-edit-employee/add-edit-employee.component */ "./src/app/employee/add-edit-employee/add-edit-employee.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./favourite/favourite.component */ "./src/app/favourite/favourite.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _like_like_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./like/like.component */ "./src/app/like/like.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _pin_pin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pin/pin.component */ "./src/app/pin/pin.component.ts");
/* harmony import */ var _pin_pin_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pin/pin.service */ "./src/app/pin/pin.service.ts");
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/phone.pipe */ "./src/app/pipes/phone.pipe.ts");
/* harmony import */ var _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/summary.pipe */ "./src/app/pipes/summary.pipe.ts");
/* harmony import */ var _pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/title-case.pipe */ "./src/app/pipes/title-case.pipe.ts");
/* harmony import */ var _pipes_title_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/title.pipe */ "./src/app/pipes/title.pipe.ts");
/* harmony import */ var _shared_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/pipes/truncate.pipe */ "./src/app/shared/pipes/truncate.pipe.ts");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./validation-message/validation-message.component */ "./src/app/validation-message/validation-message.component.ts");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./welcome.component */ "./src/app/welcome.component.ts");




































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        /* AdminAuthGuard,*/
        _courses_courses_service__WEBPACK_IMPORTED_MODULE_11__["CoursesService"],
        _pin_pin_service__WEBPACK_IMPORTED_MODULE_23__["PinService"],
        _books_book_service__WEBPACK_IMPORTED_MODULE_7__["BookService"],
        _shared_shared_service__WEBPACK_IMPORTED_MODULE_29__["SharedService"]
    ], imports: [[
            //SharedModule,AdminModule,ShoppingModule,CoreModule,AngularFireModule.initializeApp(environment.firebase),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: "ng-cli-universal" }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], pathMatch: "full" },
                { path: "counter", component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"] },
                { path: "fetch-data", component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_17__["FetchDataComponent"] },
                { path: "courses", component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"] },
                { path: "like", component: _like_like_component__WEBPACK_IMPORTED_MODULE_19__["LikeComponent"] },
                { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"] },
                { path: "fav", component: _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_16__["FavouriteComponent"] },
                { path: "contact", component: _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormComponent"] },
                { path: "pins", component: _pin_pin_component__WEBPACK_IMPORTED_MODULE_22__["PinComponent"] },
                { path: "department", component: _department_department_component__WEBPACK_IMPORTED_MODULE_13__["DepartmentComponent"] },
                { path: "employee", component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeComponent"] },
                { path: "spinner", component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_30__["SpinnerComponent"] },
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_21__["NavMenuComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
        _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_17__["FetchDataComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_21__["NavMenuComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
        _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_17__["FetchDataComponent"],
        _courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"],
        _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_16__["FavouriteComponent"],
        _courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
        _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_25__["SummaryPipe"],
        _pipes_title_pipe__WEBPACK_IMPORTED_MODULE_27__["TitlePipe"],
        _pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_26__["TitleCasePipe"],
        _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_24__["PhonePipe"],
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_21__["NavMenuComponent"],
        _like_like_component__WEBPACK_IMPORTED_MODULE_19__["LikeComponent"],
        _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormComponent"],
        _pin_pin_component__WEBPACK_IMPORTED_MODULE_22__["PinComponent"],
        _validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_31__["ValidationMessageComponent"],
        _shared_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_28__["TruncatePipe"],
        _books_books_list_books_list_component__WEBPACK_IMPORTED_MODULE_8__["BooksListComponent"],
        _welcome_component__WEBPACK_IMPORTED_MODULE_32__["WelcomeComponent"],
        _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeComponent"],
        _department_department_component__WEBPACK_IMPORTED_MODULE_13__["DepartmentComponent"],
        _employee_add_edit_employee_add_edit_employee_component__WEBPACK_IMPORTED_MODULE_14__["AddEditEmployeeComponent"],
        _department_add_edit_department_add_edit_department_component__WEBPACK_IMPORTED_MODULE_12__["AddEditDepartmentComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_30__["SpinnerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                //Directive, Components, Pipes
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_21__["NavMenuComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
                    _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_17__["FetchDataComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_21__["NavMenuComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"],
                    _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_17__["FetchDataComponent"],
                    _courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"],
                    _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_16__["FavouriteComponent"],
                    _courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                    _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_25__["SummaryPipe"],
                    _pipes_title_pipe__WEBPACK_IMPORTED_MODULE_27__["TitlePipe"],
                    _pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_26__["TitleCasePipe"],
                    _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_24__["PhonePipe"],
                    _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_21__["NavMenuComponent"],
                    _like_like_component__WEBPACK_IMPORTED_MODULE_19__["LikeComponent"],
                    _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormComponent"],
                    _pin_pin_component__WEBPACK_IMPORTED_MODULE_22__["PinComponent"],
                    _validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_31__["ValidationMessageComponent"],
                    _shared_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_28__["TruncatePipe"],
                    _books_books_list_books_list_component__WEBPACK_IMPORTED_MODULE_8__["BooksListComponent"],
                    _welcome_component__WEBPACK_IMPORTED_MODULE_32__["WelcomeComponent"],
                    _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeComponent"],
                    _department_department_component__WEBPACK_IMPORTED_MODULE_13__["DepartmentComponent"],
                    _employee_add_edit_employee_add_edit_employee_component__WEBPACK_IMPORTED_MODULE_14__["AddEditEmployeeComponent"],
                    _department_add_edit_department_add_edit_department_component__WEBPACK_IMPORTED_MODULE_12__["AddEditDepartmentComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_30__["SpinnerComponent"]
                ],
                imports: [
                    //SharedModule,AdminModule,ShoppingModule,CoreModule,AngularFireModule.initializeApp(environment.firebase),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: "ng-cli-universal" }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                        { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], pathMatch: "full" },
                        { path: "counter", component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"] },
                        { path: "fetch-data", component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_17__["FetchDataComponent"] },
                        { path: "courses", component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_10__["CoursesComponent"] },
                        { path: "like", component: _like_like_component__WEBPACK_IMPORTED_MODULE_19__["LikeComponent"] },
                        { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"] },
                        { path: "fav", component: _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_16__["FavouriteComponent"] },
                        { path: "contact", component: _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormComponent"] },
                        { path: "pins", component: _pin_pin_component__WEBPACK_IMPORTED_MODULE_22__["PinComponent"] },
                        { path: "department", component: _department_department_component__WEBPACK_IMPORTED_MODULE_13__["DepartmentComponent"] },
                        { path: "employee", component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeComponent"] },
                        { path: "spinner", component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_30__["SpinnerComponent"] },
                    ])
                ],
                ///register dependencies and services here
                providers: [
                    /* AdminAuthGuard,*/
                    _courses_courses_service__WEBPACK_IMPORTED_MODULE_11__["CoursesService"],
                    _pin_pin_service__WEBPACK_IMPORTED_MODULE_23__["PinService"],
                    _books_book_service__WEBPACK_IMPORTED_MODULE_7__["BookService"],
                    _shared_shared_service__WEBPACK_IMPORTED_MODULE_29__["SharedService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/books/book.service.ts":
/*!***************************************!*\
  !*** ./src/app/books/book.service.ts ***!
  \***************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class BookService {
    constructor(http, baseUrl) {
        http.get('api/books/books.json')
            .subscribe((result) => { this.books = result; }, (error) => { return console.error(error); });
    }
    getBooks() {
        return this.books;
    }
    handleError(error) {
        console.error(error);
        let message = `Error status code ${error.status} at ${error.url}`;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(message);
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('BASE_URL')); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                "providedIn": "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['BASE_URL']
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/books/books-list/books-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/books/books-list/books-list.component.ts ***!
  \**********************************************************/
/*! exports provided: BooksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksListComponent", function() { return BooksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/truncate.pipe */ "./src/app/shared/pipes/truncate.pipe.ts");




function BooksListComponent_div_21_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const book_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.imageWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", book_r1.bookImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BooksListComponent_div_21_p_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Number in Stock: ", ctx_r3.booksInStock, "");
} }
function BooksListComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BooksListComponent_div_21_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BooksListComponent_div_21_img_3_Template, 1, 3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Author: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "limitChar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Published On: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "In Stock: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, BooksListComponent_div_21_p_39_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.showImage ? "Hide Image" : "Show Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 10, book_r1.bookPrice, "NGN", "\u20A6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.bookAuthor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", book_r1.bookTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 14, book_r1.bookDescription, "10"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 17, book_r1.publishedOn, "fullDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 20, book_r1.inStock));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reviews ", book_r1.bookReviews, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.booksInStock > 0);
} }
const _c0 = function (a0, a1) { return { "alert-danger": a0, "alert-success": a1 }; };
// import { IBook } from './../book';
// export interface IBook {//   bookAuthor: string;//   bookTitle: string;//   bookPrice: number;//   bookDescription: string;//   publishedOn: Date;//   inStock: string;//   bookReviews: number;//   bookImageUrl: string;//   bookImageUrl2?: string;// }
class BooksListComponent {
    constructor() {
        //#region Properties
        this.animals = ['zebra', 'moose'];
        this.imageWidth = 100;
        this.showImage = true;
        this.booksInStock = 2;
        this.todaysDate = new Date();
        this.favoriteMessage = '';
        this.errorMessage = '';
        this.showMessage = 'test';
        this.fave = false;
        this.favoriteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //#endregion
    // constructor(private _bookService: BookService) {}
    //#region Methods
    ngOnInit() {
        //throw new Error("Method not implemented.");
        console.log('Init' + this.booksInStock);
        // this.getBooks();
    }
    ngOnChanges(changes) {
        alert('new change detected ' + changes);
        console.log(changes);
    }
    // getBooks() {
    //   this._bookService.getBooks().subscribe(
    //     (books:IBook) => (this.books = books), //response => this.books = response,
    //     (error:any) => (this.errorMessage = <any>error)
    //   );
    // }
    changeMethod() {
        this.animals = ['cat', 'dog'];
        alert('change method happened ' + this.animals);
    }
    onNotifyClicked(message) {
        this.showMessage = message;
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    onFavoriteClicked(message) {
        this.favoriteMessage = message;
        alert(message);
    }
    onClick1() {
        this.favoriteClicked.emit(`The favorite ${this.favorite} was saved`);
        this.fave = !this.fave;
    }
    isSelected(fave) {
        if (!fave || !this.fave) {
            return false;
        }
        if (fave) {
            return true;
        }
    }
    onClick() {
        this.notify.emit(`Message from child`);
    }
}
BooksListComponent.ɵfac = function BooksListComponent_Factory(t) { return new (t || BooksListComponent)(); };
BooksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooksListComponent, selectors: [["bs-books-list"]], inputs: { favorite: "favorite", reviews: "reviews" }, outputs: { favoriteClicked: "favoriteClicked", notify: "notify" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 22, vars: 8, consts: [[1, "container"], [1, "glyphicon", "glyphicon-book"], ["role", "alert", 1, "alert", "alert-dismissible", "fade", "in", 3, "ngClass"], ["type", "button", "data-dismiss", "alert", 1, "close"], ["title", "CLOSE", "aria-hidden", "true"], [1, "sr-only"], ["type", "button", "value", "CLICK ME TO TEST ngOnChanges Method", 3, "click"], ["id", "products"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "thumbnail"], ["type", "button", 1, "btn", "btn-primary", 3, "value", "click"], [3, "src", "width", 4, "ngIf"], [1, "caption"], [1, "pull-right"], ["href", "product.html"], [1, "text-warning"], [1, "glyphicon", "glyphicon-star"], [1, "clearfix"], ["class", "text-success", 4, "ngIf"], [3, "src"], [1, "text-success"]], template: function BooksListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BooksListComponent_Template_input_click_11_listener() { return ctx.changeMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Books List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BooksListComponent_div_21_Template, 41, 22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !ctx.showImage, ctx.showImage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Picture ", ctx.showImage != true ? "hidden" : "shown", " successfully ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.favoriteMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _shared_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // //moduleId: module.id,
                selector: 'bs-books-list',
                templateUrl: 'books-list.component.html',
            }]
    }], null, { favorite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reviews: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], favoriteClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], notify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["app-counter-component"]], decls: 10, vars: 1, consts: [[1, "btn", "btn-primary", 3, "click"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This is a simple example of an Angular component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Current count: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_8_listener() { return ctx.incrementCounter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Increment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCount);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter-component',
                templateUrl: './counter.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.service */ "./src/app/courses/courses.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/summary.pipe */ "./src/app/pipes/summary.pipe.ts");






function CoursesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.isAdded = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Course added successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_div_4_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_div_4_li_6_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const course_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onRemove(course_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r7 = ctx.$implicit;
    const index_r8 = ctx.index;
    const isEven_r9 = ctx.even;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", index_r8, " ", course_r7, " ", isEven_r9, " ");
} }
function CoursesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "from courses.service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoursesComponent_div_4_li_6_Template, 3, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.courses);
} }
function CoursesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No courses have been uploaded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CoursesComponent {
    constructor(service) {
        this.isAdded = false;
        this.username = "Noble Osinachi";
        this.email = "";
        this.title = "Lorem ipsum dolor sit amet consectetur nobis perferendis adipisci exercitationem rem iste ea ipsa? Libero consequuntur autem laudantium, optio unde soluta, vel molestiae odit magnam voluptate quasi quo!";
        this.post = { name: "The flaws of a perfectionist", isFavourite: false };
        this.del = 44;
        this.onSave = function ($event) {
            //alert( "saved!" )
            this.courses.push(this.email);
            console.log($event);
            console.log(typeof $event);
            this.email = "";
        };
        this.courses = service.getCourses();
        this.colSpan = 3;
    }
    onAdd() {
        let timeStamp = new Date().toISOString().replace(/-/g, "").replace(/T/g, "").replace(/:/g, "").replace(".", "").replace("Z", "");
        this.courses.push("New Course Added - " + timeStamp);
        this.showSuccessAlert();
    }
    ;
    showSuccessAlert() {
        this.isAdded = true;
        setInterval(function () {
            this.isAdded = false;
        }, 1000);
        setTimeout(function () {
            this.isAdded = false;
        }, 1000);
        //this.isAdded = false;
    }
    ;
    onRemove(course) {
        this.courses.splice(this.courses.indexOf(course), 1);
    }
    ;
    onFavouriteChanged($event) { alert("Save icon clicked. New value is " + $event.newValue); }
    onKeyUp( /*email*/) {
        console.log(this.email);
    }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"])); };
CoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesComponent, selectors: [["courses"]], decls: 16, vars: 11, consts: [["class", "alert alert-success", 4, "ngIf"], ["type", "button", "name", "addCourse", "value", "Add course", 1, "btn", "btn-link", 3, "click"], [4, "ngIf", "ngIfElse"], ["noCourses", ""], [1, "btn", "btn-danger", 3, "click"], [3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], [1, "alert", "alert-success"], ["data-dismiss", "alert-success", 1, "close", 3, "click"], [1, "small"], [4, "ngFor", "ngForOf"], ["type", "button", "name", "onRemove", "value", "Remove", 3, "click"], [1, "alert", "alert-danger"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CoursesComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_Template_input_click_3_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CoursesComponent_div_4_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CoursesComponent_ng_template_5_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_Template_button_click_7_listener($event) { return ctx.onSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Save\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CoursesComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; })("keyup.enter", function CoursesComponent_Template_input_keyup_enter_9_listener() { return ctx.onKeyUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdded == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Title is: " + ctx.post.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.courses.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.email)("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 8, ctx.title, ctx.email), "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_4__["SummaryPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "courses",
                templateUrl: "./courses.component.html"
            }]
    }], function () { return [{ type: _courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/courses/courses.service.ts":
/*!********************************************!*\
  !*** ./src/app/courses/courses.service.ts ***!
  \********************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CoursesService {
    getCourses() { return ["Angular For Beginners", "NodeJS For Noobs", "Getting started with React"]; }
}
CoursesService.ɵfac = function CoursesService_Factory(t) { return new (t || CoursesService)(); };
CoursesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoursesService, factory: CoursesService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                "providedIn": "root",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/department/add-edit-department/add-edit-department.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/department/add-edit-department/add-edit-department.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEditDepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditDepartmentComponent", function() { return AddEditDepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AddEditDepartmentComponent_input_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditDepartmentComponent_input_13_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addDepartment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddEditDepartmentComponent_input_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditDepartmentComponent_input_14_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.updateDepartment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
//import bootbox = require( "bootbox" );
//const bootbox = require( "bootbox/bootbox.js" );
class AddEditDepartmentComponent {
    constructor(service) {
        this.service = service;
        this.DepartmentList = [];
    }
    refreshDepartmentList() {
        this.service.getDepartments().subscribe(data => this.DepartmentList = data);
    }
    ;
    ngOnInit() {
        this.id = this.Department.id;
        this.name = this.Department.name; // let f: NgForm;this.val = f;
        this.refreshDepartmentList();
        return;
    }
    addDepartment() {
        this.val = { id: this.id, name: this.name };
        this.service.addDepartment(this.val)
            .subscribe(res => bootbox.
            alert("Added successfully " + JSON.stringify(res))
        // , error => console.log( error )
        );
        this.clear();
    }
    clear() { this.id = null; this.name = null; }
    updateDepartment() {
        this.val = { id: this.id, name: this.name };
        this.service.updateDepartment(this.val)
            .subscribe(res => {
            alert(JSON.stringify(res));
        }
        //, error => console.log( error )
        );
        bootbox.
            alert("Updated successfully");
        this.clear();
    }
}
AddEditDepartmentComponent.ɵfac = function AddEditDepartmentComponent_Factory(t) { return new (t || AddEditDepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
AddEditDepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditDepartmentComponent, selectors: [["app-add-edit-department"]], inputs: { Department: ["dep", "Department"] }, decls: 17, vars: 9, consts: [["action", "#"], ["f", "ngForm"], [1, "form-group"], ["for", "id"], ["type", "text", "name", "id", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name"], ["required", "", "minlength", "3", "type", "text", "id", "name", "name", "name", "placeholder", "Enter Department name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["hidden", "f.", "data-dismiss", "@modal", "type", "submit", "value", "Add", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["data-dismiss", "@modal", "type", "submit", "value", "Update", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["hidden", "f.", "data-dismiss", "@modal", "type", "submit", "value", "Add", 1, "btn", "btn-primary", 3, "click"], ["data-dismiss", "@modal", "type", "submit", "value", "Update", 1, "btn", "btn-primary", 3, "click"]], template: function AddEditDepartmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Department Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditDepartmentComponent_Template_input_ngModelChange_5_listener($event) { return ctx.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Department Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditDepartmentComponent_Template_input_ngModelChange_10_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddEditDepartmentComponent_input_13_Template, 1, 0, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddEditDepartmentComponent_input_14_Template, 1, 0, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Department.id == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Department.id != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, _r0.value), " ", ctx.name, " ", ctx.id, "\n");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnQvYWRkLWVkaXQtZGVwYXJ0bWVudC9hZGQtZWRpdC1kZXBhcnRtZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditDepartmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-department',
                templateUrl: './add-edit-department.component.html',
                styleUrls: ['./add-edit-department.component.css']
            }]
    }], function () { return [{ type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, { Department: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["dep"]
        }] }); })();


/***/ }),

/***/ "./src/app/department/department.component.ts":
/*!****************************************************!*\
  !*** ./src/app/department/department.component.ts ***!
  \****************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _add_edit_department_add_edit_department_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-department/add-edit-department.component */ "./src/app/department/add-edit-department/add-edit-department.component.ts");






function DepartmentComponent_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spinner");
} }
function DepartmentComponent_app_add_edit_department_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-edit-department", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dep", ctx_r1.department);
} }
function DepartmentComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentComponent_tr_23_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const data_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editClick(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentComponent_tr_23_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const data_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteClick(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.name);
} }
class DepartmentComponent {
    constructor(service) {
        this.service = service;
        this.isAddEditComponentActive = false;
        this.modalTitle = "";
    }
    ngOnInit() {
        this.refreshDepartmentList();
    }
    refreshDepartmentList() {
        this.service.getDepartments()
            .subscribe(x => this.departmentsList = x);
    }
    addClick() {
        this.department = { id: 0, name: "" };
        this.modalTitle = "Add Department";
        this.isAddEditComponentActive = true;
    }
    editClick(dept) {
        this.department = dept;
        this.modalTitle = "Edit Department";
        this.isAddEditComponentActive = true;
    }
    deleteClick(dept) {
        let Department = this;
        bootbox.confirm("Are you sure you want to delete this Department?<br/><small class='alert text-danger'>Note that this will delete rows from any table that references it as a foreign key.</h1>    ", function (result) {
            if (result) {
                Department.service.deleteDepartment(dept).subscribe(res => {
                    bootbox.alert("Deleted successfully " + JSON.stringify(res));
                    Department.refreshDepartmentList();
                });
            }
        });
    }
    closeClick() {
        this.isAddEditComponentActive = false;
        this.refreshDepartmentList();
    }
}
DepartmentComponent.ɵfac = function DepartmentComponent_Factory(t) { return new (t || DepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
DepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentComponent, selectors: [["app-department"]], decls: 24, vars: 4, consts: [["type", "button", "data-toggle", "modal", "data-target", "#myModal", "data-backdrop", "static", "data-keyboard", "false", 1, "btn", "btn-info", 2, "float", "right", 3, "click"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-title"], [1, "modal-body"], [4, "ngIf"], [3, "dep", 4, "ngIf"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [3, "dep"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal", "data-backdrop", "static", "data-keyboard", "false", 1, "btn", "btn-default", 3, "click"], [1, "glyphicon", "glyphicon-pencil"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "glyphicon", "glyphicon-trash"]], template: function DepartmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentComponent_Template_button_click_0_listener() { return ctx.addClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentComponent_Template_button_click_6_listener() { return ctx.closeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DepartmentComponent_spinner_11_Template, 1, 0, "spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DepartmentComponent_app_add_edit_department_12_Template, 1, 1, "app-add-edit-department", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DepartmentId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Department Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DepartmentComponent_tr_23_Template, 14, 2, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddEditComponentActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddEditComponentActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departmentsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _add_edit_department_add_edit_department_component__WEBPACK_IMPORTED_MODULE_4__["AddEditDepartmentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-department',
                templateUrl: './department.component.html',
                styleUrls: ['./department.component.css']
            }]
    }], function () { return [{ type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee/add-edit-employee/add-edit-employee.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/employee/add-edit-employee/add-edit-employee.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddEditEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditEmployeeComponent", function() { return AddEditEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AddEditEmployeeComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
} }
function AddEditEmployeeComponent_input_43_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditEmployeeComponent_input_43_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
} }
function AddEditEmployeeComponent_input_44_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditEmployeeComponent_input_44_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.updateEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddEditEmployeeComponent {
    constructor(service) {
        this.service = service;
        this.photoFileName = "ANONYMOUS.PNG";
        /** This is used for previewing the photo before uploading.
         *@note Add functionality for cropping picture to 1:1 before uploading*/
        this.url = document.getElementsByTagName('base')[0].href + "assets/images/default.bmp";
        this.isImageCircle = false;
    }
    ngOnChanges(changes) {
    }
    ngOnInit() {
        this.refreshEmployeeList();
    }
    refreshEmployeeList() {
        this.service.getDepartments().subscribe(data => {
            this.departmentsList = data;
            this.id = this.employee.id;
            this.name = this.employee.name;
            this.departmentId = this.employee.departmentId;
            this.dateOfJoining = this.employee.dateOfJoining;
            this.photoFileName = this.employee.photoFileName; //.replace( /[\/]/g, "" )[ -1 ];
            this.photoFilePath = this.service.photoFilePath + this.photoFileName;
            this.url = this.photoFilePath;
        });
    }
    ;
    addEmployee() {
        this.val = {
            id: this.id,
            name: this.name,
            departmentId: this.departmentId,
            // department: this.department,
            dateOfJoining: this.dateOfJoining,
            photoFileName: this.photoFileName,
        };
        this.service.addEmployee(this.val)
            .subscribe(res => bootbox.
            alert("Added successfully " + JSON.stringify(res))
        // , error => console.log( error )
        );
        this.clear();
    }
    clear() {
        this.id = 0,
            this.name = "",
            //this.departmentsList = null,
            this.departmentId = 0,
            this.dateOfJoining = new Date(),
            this.department = null;
        this.ngOnInit();
    }
    updateEmployee() {
        this.ngOnInit();
        this.val = {
            id: this.id,
            name: this.name,
            departmentId: this.departmentId,
            // department: this.department,
            dateOfJoining: this.dateOfJoining,
            photoFileName: this.photoFileName,
        };
        this.service.updateEmployee(this.val)
            .subscribe(res => {
            //alert( JSON.stringify( res ) );
        }
        //, error => console.log( error )
        );
        bootbox.
            alert("Updated successfully");
        this.clear();
    }
    uploadPhoto($event) {
        let file = $event.target.files[0];
        const formData = new FormData();
        formData.append("photoFileName", file, file.name);
        this.service.uploadPhoto(formData) //.forEach( data => {this.photoFileName = data; this.photoFilePath = this.service.photoFilePath + this.photoFileName;alert( "wahala" );} );
            .subscribe(data => {
            this.photoFileName = data;
            this.photoFilePath = this.service.photoFilePath + this.photoFileName;
            alert("uploadPhoto subscribe wahala");
        }, (error) => { console.error(error); });
        this.photoFilePath = this.service.photoFilePath + this.photoFileName;
        this.photoFileName = file.name;
        // this.url = this.service.photoFilePath + "default.bmp";
        this.onFileSelected($event);
    }
    onFileSelected($event) {
        let file = $event.target.files;
        console.clear();
        console.log($event.target);
        if (file && file[0]) {
            let reader = new FileReader();
            reader.onload = (event) => { this.url = event.target.result; };
            reader.readAsDataURL(file[0]);
        }
    }
    toggleCircle() { this.isImageCircle = !this.isImageCircle; }
    onClick(event) {
        bootbox
            .alert(JSON.stringify(event));
    }
}
AddEditEmployeeComponent.ɵfac = function AddEditEmployeeComponent_Factory(t) { return new (t || AddEditEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
AddEditEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditEmployeeComponent, selectors: [["app-add-edit-employee"]], inputs: { employee: ["emp", "employee"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 49, vars: 18, consts: [["role", "form", "enctype", "multipart/form-data", 1, "form-group"], ["f", "ngForm"], [1, "row"], [1, "col-lg-6", "col-md-12", "col-md-6", "col-sm-12"], [1, "form-group"], ["for", "id", 1, "control-label"], ["type", "text", "id", "id", "name", "id", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name", 1, "control-label"], ["required", "", "minlength", "3", "type", "text", "id", "name", "name", "name", "placeholder", "Enter Employee name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "departmentId", 1, "control-label"], ["required", "", "id", "departmentId", "name", "departmentId", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", ""], ["class", "active", 3, "value", 4, "ngFor", "ngForOf"], ["required", "", "type", "date", "name", "dateOfJoining", 1, "form-control", 3, "ngModel", "ngModelChange"], ["date", ""], [1, "alert", "alert-info"], [1, "text-center"], ["type", "image", "alt", "Your photo no dey database", "width", "200", "height", "200", 1, "img-thumbnail", "card-img", "figure-img", "img-thumbnail", "img-fluid", 3, "src"], [1, "checkbox"], ["type", "checkbox", 3, "click"], ["hidden", "", "name", "photoFileName", 1, "form-control-static", 3, "ngModel", "ngModelChange"], ["type", "file", "accept", "image/*", "name", "_photoFileName", "value", "", 1, "form-control", 3, "change"], [1, "modal-footer"], ["data-dismiss", "@modal", "type", "submit", "value", "Add", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["data-dismiss", "@modal", "type", "submit", "value", "Update", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "active", 3, "value"], ["data-dismiss", "@modal", "type", "submit", "value", "Add", 1, "btn", "btn-primary", 3, "disabled", "click"], ["data-dismiss", "@modal", "type", "submit", "value", "Update", 1, "btn", "btn-primary", 3, "click"]], template: function AddEditEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Employee Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditEmployeeComponent_Template_input_ngModelChange_7_listener($event) { return ctx.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Employee Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditEmployeeComponent_Template_input_ngModelChange_11_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditEmployeeComponent_Template_select_ngModelChange_15_listener($event) { return ctx.departmentId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-- Select Department --");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddEditEmployeeComponent_option_18_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date of Joining");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditEmployeeComponent_Template_input_ngModelChange_22_listener($event) { return ctx.dateOfJoining = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditEmployeeComponent_Template_input_click_35_listener() { return ctx.toggleCircle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Make image circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditEmployeeComponent_Template_input_ngModelChange_37_listener($event) { return ctx.photoFileName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddEditEmployeeComponent_Template_input_change_38_listener($event) { return ctx.uploadPhoto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "It's best to use a 1:1 photo. Crop yours before uploading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AddEditEmployeeComponent_input_43_Template, 1, 1, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddEditEmployeeComponent_input_44_Template, 1, 0, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.departmentId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departmentsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateOfJoining);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 13, ctx.dateOfJoining, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("img-circle", ctx.isImageCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.photoFileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee.id == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee.id != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 16, _r0.value));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2FkZC1lZGl0LWVtcGxveWVlL2FkZC1lZGl0LWVtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-employee',
                templateUrl: './add-edit-employee.component.html',
                styleUrls: ['./add-edit-employee.component.css']
            }]
    }], function () { return [{ type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, { employee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["emp"]
        }] }); })();


/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _add_edit_employee_add_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-employee/add-edit-employee.component */ "./src/app/employee/add-edit-employee/add-edit-employee.component.ts");






function EmployeeComponent_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "spinner");
} }
function EmployeeComponent_app_add_edit_employee_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-edit-employee", 13);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("emp", ctx_r2.employee);
} }
function EmployeeComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Oops!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No employee records are in the database. Create one!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmployeeComponent_div_16_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeComponent_div_16_tr_15_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const data_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.editClick(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeComponent_div_16_tr_15_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const data_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.deleteClick(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.department.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, data_r7.dateOfJoining, "fullDate"));
} }
function EmployeeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EmployeeId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Employee Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date of Joining");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmployeeComponent_div_16_tr_15_Template, 19, 7, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.employeesList);
} }
class EmployeeComponent {
    constructor(service) {
        this.service = service;
        this.employeesList = [];
        this.isAddEditComponentActive = false;
        this.modalTitle = "";
    }
    ngOnInit() {
        this.refreshEmployeeList();
    }
    refreshEmployeeList() {
        this.service.getEmployees()
            .subscribe(data => this.employeesList = data);
    }
    addClick() {
        this.employee = {
            id: 0,
            name: "",
            // department:null,
            departmentId: 0,
            dateOfJoining: new Date(),
            photoFileName: "anonymous.png"
        };
        this.modalTitle = "Add Employee";
        this.isAddEditComponentActive = true;
    }
    editClick(emp) {
        this.employee = emp;
        this.modalTitle = "Edit Employee";
        this.isAddEditComponentActive = true;
    }
    deleteClick(emp) {
        let Employee = this;
        bootbox.confirm("Are you sure you want to delete this Employee?", function (result) {
            if (result) {
                Employee.service.deleteEmployee(emp)
                    .subscribe(res => {
                    bootbox.alert("Deleted successfully " + JSON.stringify(res));
                    Employee.refreshEmployeeList();
                });
            }
        });
    }
    closeClick() {
        this.isAddEditComponentActive = false;
        this.refreshEmployeeList();
    }
}
EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) { return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeComponent, selectors: [["app-employee"]], decls: 17, vars: 5, consts: [["type", "button", "data-toggle", "modal", "data-target", "#myModal", "data-backdrop", "static", "data-keyboard", "false", 1, "btn", "btn-info", 2, "float", "right", 3, "click"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], ["closeModal", ""], [1, "modal-title"], [1, "modal-body"], [4, "ngIf"], [3, "emp", 4, "ngIf"], ["noCourses", ""], [4, "ngIf", "ngIfElse"], [3, "emp"], [1, "page"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAKoUlEQVR42u1daWxVVRDGFY2KiuKCiQERrAaDRESwGiJGYzBG4wIY0JDIogiRtVbUAIlLSEtfN54WRBCVSGNAKygEtIl/xKIYRVmlUmOCRmvFtixSqPMlU9I3nvu63XvPuffNJCf39fW+e+fMzDlnzpxZunVTUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUIgYlJaWXlFUVHRPcXHxTLqW0LWisLBwG7Vq+lxH1yN0PYHGn/FdNe7BvdSK6XczSkpK7sazlKKOAzFqADFsOrVy4t2v1Jp9bnjmGmrTSEj6K8UdAGLGUGJ4Pl33B8DwttpP1PJI8IYoJ0IEYngvIvxcGoV7LDDdq+0mvObk5+dfqhwKCBKJxPVE6OXUjraHKbyuV/Fv5tJIfZTacEzfdL1k8eLF55aXl5+Bhs/4jv83HPfSb3LwW9YbjnTgncuoZSnH/Jvms7D2EnFPtsEACMYmarOxNMyfP/9sv3DAs0gAb8UoJzw20/OPtYELFMvV0EuUg12Y6omIb1BrSjPi/qXrWrp3dF5e3nkh7jDOp3ePpfeuYxy88Guie5ZgdlGOthOam5tPI4I9RcT7Ow1hqzEaISS28U0mk5exTnIgDb5/0XUS+qYcTj/q+xGxvkgztX5L9zyCdds13GmZOJPwG0P4f++FP+FeSde+ymnzWj+BiFfvQby9NCs8TEQ+3fV+AEcsSbxNNPXlELXxynGGFStWnEMEWekxddYTMWf5qdCFOJt1x06C+tDoIQjLcE9GM5+2X1cREb7xINAGIt7VMdi+9uHdiamPVQUFBVdm6pQ/yGSyxYghoZgcJ4UJfaG+TfWwJ9TQ9wMzjfnZvBaaLGo3xLXfpMfcSP3bZ+h3HX0/LFM0/Tupww0GIlTQ/3rEvf+0JFyE5c1D3xmRCSO/wdD5Ihe3dgFvGZMeQjAsrswf5DHtv5iJBhL0mZi9wLQcxE4ngLbvcUY/V+0fxbkmxTA2uwPs8z22ei+pFeSUECw0bRFjYSfwMPIUq138f9vEpMlYFHXmTzBp+5mk8HVEMaS1f72BXtE0G/PBTr3Qcndlwlavs1BWVnahwU5wCNbEyE1phlO9w3E28vhpLJIWQ5wiRmrJxHm+4Sh0srK33bPnMwb6TYwK8r0MzhwbVOnrsFK4STqV0Ha6p/PIw41LWrficKpnQYHuK4+SEeDiOtJZ0ocP5/nKzk7Pps+JmfS400EphPD7YvTviaIzh0P07G4IennXSWThty9dt+HGpWzs8pI6VrqcE62vc1Fa35QOnFHw4XMdQEOi5Q5B2zLnNH8ZsQPvXWVfMLMA7AROhaHhVE/67au519dZAP4DNc4q1zJQE0EbyrbAdwQ7XRn9Q2W4lgsRO3EDJKnANlAMtMEuSGa+kMy1yq7ABluFEIDXXEBqv0BqtLIqsME2TnpRW0UI4c8yRDvIKF2cJuLMnE2kDTwisiwyJFR8Fi1adIEhGrmvTYmcLpDZFCSxTU6lfPCUZYP5NvCh538mZtynbQpAuSDA7AA7vj5N1O1HFnY+VvDhzCWtBW61zfVfevoODZDgjWni7+stCIAVfJDCRnoQ29yWpFinysrKzgpQ2BpcEgBb+PABkbS6hr/t5iSMKW7MYW6BBAHW2d6ShYkPvWO7eOdIG9P/TIHE8oDfl2VKGwNPGRvJmGziI13toYzbmAFKwo7yAdGhYLGXEeLo1tnMxGULH3rP84L2CetWKeTWU1NNaLR/TAjAh6EjwUmVWwvAcGVNaAKQLZadr2wIQLVAQhMohwTwCJJ5i21IYZ2YATQZYkgAZxAhALU2ZoCU6BXk21XWhAM4b5F5lWzMACdaI6EeQOEBewilpKRVAVAB0CVAlwBVAlUJ1G2gbgPDEgA1BFkCov3tQgC22lgC1BRsCaQp2MZpKJAoFlKYo6wJjfbzhAAUhI4EiiqGeRyskEL7t60fB6OiplACtylrQpsB7DuEmFzCNBdAKKO/u6xaZi1QVDqForSasihwAbjNCadQFoA1GhQaOs1zBc3fs4nMNLEMbFYWBT4DVIoZYIpNg0R/gcwxFFVUNgXG/B4yQth6FlFZHg3ZLFwhGOIUCJ9bMEqolVL7FHX9qP3Ofv0o8drETp0HWbuu4IhnlLEb6FKaG+QNlql3XUAqz7pVqhUgzz5XHv0kXfBGB1ot9ekDuj6RTCYvtjwDfCxwe9W6ABCxh8gEESinGiYO8EWgdz/ITD8RYJn4Y4iHpPfcFXbmUwi2oY7yIFempt02KoFgiqd3PWnIpRd44xKxY8JyhDFo/z+4pJzMEcQ5AK+VgN95v8xNZKreTdev6d6lMJfS36MwamDEQqw9cIQQQbmimaw3XW+m9gAXpoa59cd2CMN3QVviGMdfhADMcEYAYIkyFEUcE8S7wDzoGWkY8hvy6FG7D0z2o2846aR3vpOuojkyeAblFGPIDHLYOQcclDeRU6TfGjQR4l569h+GkX6SQ7RGBTnzcP0jFIb+3GPGOQj9IAD9ZqcY/a+7aKHKkgqYn/mCoFfIVLSY4ukdb9GscK2F/qIM3hqJE9NgZlCjn7etbnpfIVuFdFXyq/KVYbStt5kfqAUSicRNButcsx/PhqMt9Cnx7FXOWqoQGWvYquT4KQBsxHnIpQIUXATycYSG+ykA9MwXZLp41GJy3Vy5RCDd4Ie5siUJVdg2hg4OgN4t+oEPdOwnFWuU2O3mOkA7bT0SWBfY2NURC/NsFIJPoIQSroVdfAYyhG8RzP/TtiWyI6N1kkFLntpNob2D6FkD/SZEpgO8JlZKjyGURFP2tq1UyiRQmA0i1xFksDQkUtyL4ojKZjNgipdmbRifIlt0Sx5ftpSQC9pMHEVgc+9Gw3Z3bKQ7Ziglg5bUOoKpSyabr5udt/h1QgDgxVpl6NwCZf2pmfJlwyD5MjZe1jjLliVPuOUq81OjfLj97LK9o1MA9yoZUs5tYSYuB7xTesXkgYQSfLHsNHV4mCwp36ITZJJiyArfUgMd/oEPY6w7Tx0fYRICHO5kwhYRWz2Ttg/mU7sjI0YApzyvMyiG++JsLGIjj8l9rTb2I99DJ6gxzAQ4AJkaJ70AfWHz7lGTwhfbNb+du4Mqj5TrG60HPfiz5PWTBzutt3ok8Jdn9DaI7QTLPFysGlEw0S+nkjABzhw4zzf4Sp4y8mg0dep+eLypCBO3/TCJRqEYNY6s4cZl8ORpaXWRN+8GqCT1MblXtWo7WBCc2zLy1m5cG67kWyJ7sBOygWSidCqRcQdYGlxYP1mPyZV++9KZI1Ln+Y6soT25KsnxNCPqOAdzjvMjBqADeguidMcjVs/gAyl9+Aoj48njqM1gAJIgtBXzh5hELqqYAzuDn4ojK6rZPNIr2xDKFtfwVc47cEZMP0B2zDIvrdrQjnK490qusYPcetl4DqJ9kG8XugQaPuM7/I+TMOLeeRwetl3m5EnTDkO716ypAQIYRUSeJaNlbDYEaiJWT/Mlh29DGIwS6m0FiQYUHbwL8fnOhGhnOpA2fg0KKXN0Uk0ATK9hXWRKHCyUmTA79ELYNlc4T6C0GqprcUobHL40cpxdE9cBruX/bUX0MdKv8m9HWsvDp6CgoKCgoKCgoKCgoKCgoKCgoKCgoKCg0En4D/+ev0zwNkJhAAAAAElFTkSuQmCC", "width", "128", "height", "128"], [1, "alert", "alert-info"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal", "data-backdrop", "static", "data-keyboard", "false", 1, "btn", "btn-default", 3, "click"], [1, "glyphicon", "glyphicon-pencil"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "glyphicon", "glyphicon-trash"]], template: function EmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeComponent_Template_button_click_0_listener() { return ctx.addClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeComponent_Template_button_click_6_listener() { return ctx.closeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmployeeComponent_spinner_12_Template, 1, 0, "spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmployeeComponent_app_add_edit_employee_13_Template, 1, 1, "app-add-edit-employee", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmployeeComponent_ng_template_14_Template, 8, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EmployeeComponent_div_16_Template, 16, 1, "div", 12);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAddEditComponentActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddEditComponentActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employeesList.length > 0)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _add_edit_employee_add_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__["AddEditEmployeeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    color: #444;\r\n}\r\n\r\n.page[_ngcontent-%COMP%] {\r\n    width: 740px;\r\n    margin: 50px auto;\r\n    text-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    font-family: 'Arial', 'Segoe UI', Arial, helvetica, sans-serif;\r\n    font-weight: 400;\r\n    margin: 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 100px;\r\n    line-height: 140px;\r\n    color: #999;\r\n    margin-bottom: 50px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 22px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOERBQThEO0lBQzlELGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgICB3aWR0aDogNzQwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgJ1NlZ29lIFVJJywgQXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTQwcHg7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee',
                templateUrl: './employee.component.html',
                styleUrls: ['./employee.component.css']
            }]
    }], function () { return [{ type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/favourite/favourite.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favourite/favourite.component.ts ***!
  \**************************************************/
/*! exports provided: FavouriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteComponent", function() { return FavouriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/phone.pipe */ "./src/app/pipes/phone.pipe.ts");





function FavouriteComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Map View Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FavouriteComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List View Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FavouriteComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Otherwise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FavouriteComponent {
    constructor() {
        this.isFavourite = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewMode = "map";
        this.url = "";
    }
    ngOnInit() { this.noble = [1, 2, 3]; }
    toggleSave() {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }
    onFileSelected($event) {
        let file = $event.target.files;
        console.clear();
        console.log($event.target);
        if (file && file[0]) {
            var reader = new FileReader();
            reader.onload = (event) => { this.url = event.target.result; };
            reader.readAsDataURL(file[0]);
            reader.readAsDataURL(file[0]);
        }
    }
}
FavouriteComponent.ɵfac = function FavouriteComponent_Factory(t) { return new (t || FavouriteComponent)(); };
FavouriteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavouriteComponent, selectors: [["bs-favorite"]], inputs: { isFavourite: "isFavourite" }, outputs: { change: "change" }, decls: 31, vars: 22, consts: [[3, "click"], [1, "form-group"], ["for", "phone", 1, ""], ["type", "tel", "id", "phone", "accept", "image", "name", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "nav", "nav-pills"], [1, "jumbotron"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["alt", "No image yet", 1, "img-square", "img-responsive", "img-rounded", "img-thumbnail", "img-circle", 3, "src"], ["type", "file", "accept", "image/*", "name", "uploadFile", "onchange", "console.log(event.target.files)", "required", "", 1, "file-input", 3, "ngModel", "ngModelChange", "change"], ["fileUpload", ""], [1, "file-upload"], ["type", "submit", 3, "click"]], template: function FavouriteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouriteComponent_Template_span_click_0_listener() { return ctx.toggleSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FavouriteComponent_Template_input_ngModelChange_5_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouriteComponent_Template_a_click_11_listener() { return ctx.viewMode = "map"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Map View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouriteComponent_Template_a_click_14_listener() { return ctx.viewMode = "list"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "List View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FavouriteComponent_div_18_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FavouriteComponent_div_19_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FavouriteComponent_div_20_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FavouriteComponent_Template_input_ngModelChange_25_listener($event) { return ctx.fileName = $event; })("change", function FavouriteComponent_Template_input_change_25_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavouriteComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("glyphicon glyphicon-star", ctx.isFavourite === true ? "" : "-empty", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("glyphicon-star", ctx.isFavourite)("glyphicon-star-empty", !ctx.isFavourite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 20, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode === "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.noble, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileName || "Nothing don show yet...");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], pipes: [_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_3__["PhonePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZS9mYXZvdXJpdGUuY29tcG9uZW50LmNzcyJ9 */", ".img-square[_ngcontent-%COMP%]{\n        width:200px;\n        height: 200px;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavouriteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'bs-favorite', templateUrl: "./favourite.component.html", styleUrls: ['favourite.component.css'] }]
    }], null, { isFavourite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["isFavourite"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FetchDataComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FetchDataComponent_table_5_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const forecast_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](forecast_r3.dateFormatted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](forecast_r3.temperatureC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](forecast_r3.temperatureF);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](forecast_r3.summary);
} }
function FetchDataComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Temp. (C)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Temp. (F)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FetchDataComponent_table_5_tr_12_Template, 9, 4, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.forecasts);
} }
class FetchDataComponent {
    constructor(http, baseUrl) {
        this.sampleData = [{ "dateFormatted": "3/30/2021", "temperatureC": 28, "summary": "Balmy", "temperatureF": 82 }, { "dateFormatted": "3/31/2021", "temperatureC": -3, "summary": "Bracing", "temperatureF": 27 }, { "dateFormatted": "4/1/2021", "temperatureC": 41, "summary": "Sweltering", "temperatureF": 105 }, { "dateFormatted": "4/2/2021", "temperatureC": 52, "summary": "Balmy", "temperatureF": 125 }, { "dateFormatted": "4/3/2021", "temperatureC": 35, "summary": "Chilly", "temperatureF": 94 }];
        http.get(baseUrl + 'api/SampleData/WeatherForecasts')
            .subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
}
FetchDataComponent.ɵfac = function FetchDataComponent_Factory(t) { return new (t || FetchDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('BASE_URL')); };
FetchDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FetchDataComponent, selectors: [["app-fetch-data"]], decls: 6, vars: 2, consts: [[4, "ngIf"], ["class", "table table-striped", 4, "ngIf"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"]], template: function FetchDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Weather forecast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This component demonstrates fetching data from the server.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FetchDataComponent_p_4_Template, 3, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FetchDataComponent_table_5_Template, 13, 1, "table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.forecasts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forecasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FetchDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fetch-data',
                templateUrl: './fetch-data.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['BASE_URL']
            }] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 67, vars: 0, consts: [["href", "https://get.asp.net/"], ["href", "https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"], ["href", "https://angular.io/"], ["href", "http://www.typescriptlang.org/"], ["href", "http://getbootstrap.com/"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello, world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to your new single-page application, built with:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ASP.NET Core");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " for cross-platform server-side code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " for client-side code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " for layout and styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To help you get started, we've also set up:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Client-side navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ". For example, click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " then ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " to return here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Angular CLI integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ". In development mode, there's no need to run ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "ng serve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ". It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Efficient production builds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ". In production mode, development-time features are disabled, and your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "dotnet publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " configuration automatically invokes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "ng build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " to produce minified, ahead-of-time compiled JavaScript files.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "ClientApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " command (e.g., ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "ng test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "), or use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "npm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " to install extra packages into it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/like/like.component.ts":
/*!****************************************!*\
  !*** ./src/app/like/like.component.ts ***!
  \****************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LikeComponent {
    constructor() {
        this.isLiked = true;
        this.likesCount = 10;
        this.onClick = () => {
            this.isLiked = !this.isLiked;
            this.likesCount += ((this.isLiked) ? -1 : 1);
        };
    }
}
LikeComponent.ɵfac = function LikeComponent_Factory(t) { return new (t || LikeComponent)(); };
LikeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LikeComponent, selectors: [["app-like"]], inputs: { isLiked: "isLiked", likesCount: "likesCount" }, decls: 3, vars: 3, consts: [[1, "glyphicon", "glyphicon-heart", 3, "click"]], template: function LikeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LikeComponent_Template_span_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlighted", ctx.isLiked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.likesCount);
    } }, styles: [".glyphicon[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: grey;\r\n}\r\n\r\n.highlighted[_ngcontent-%COMP%] {\r\n  color: deeppink;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlrZS9saWtlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xpa2UvbGlrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdseXBoaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0ZWQge1xyXG4gIGNvbG9yOiBkZWVwcGluaztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-like',
                templateUrl: './like.component.html',
                styleUrls: ['./like.component.css']
            }]
    }], null, { isLiked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], likesCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class LoginComponent {
    constructor() {
        /**constructor( private userService: UserService, private auth: AuthService, router: Router ) {auth.user$.subscribe(user => {if (!user) return; userService.save(user);let returnUrl = localStorage.getItem('returnUrl');if (!returnUrl) return; localStorage.removeItem('returnUrl');router.navigateByUrl(returnUrl);});}**/
        this.email = "";
        this.emailPlaceholder = "email@domain.com";
        this.password = "";
    }
    //del: string = null;
    onKeyUp() {
        alert(this.email);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 24, vars: 6, consts: [[1, "container"], ["_ngcontent-ng-cli-universal-c46", "", "ng-reflect-router-link", "/counter", "href", "/", 1, "nav-link", "text-dark"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "text", "name", "email", 1, "form-control", 3, "value", "ngModel", "valueChange", "ngModelChange"], ["for", "password"], ["type", "text", "id", "password", "name", "password", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], [1, "btn-group"], ["type", "submit", "name", "Submit", "value", "Submit", 1, "btn", "btn-primary"], ["type", "reset", "name", "Reset", "value", "Reset", 1, "btn", "btn-danger"], [1, "btn", "btn-info"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LoginComponent_Template_input_valueChange_9_listener($event) { return ctx.email = $event; })("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.email)("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" email = ", ctx.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" password = ", ctx.password, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'login',
                //  template: `
                //<a _ngcontent-ng-cli-universal-c46=""
                //class="nav-link text-dark"
                //ng-reflect-router-link="/counter"
                //href="/">Courses</a>
                //<h2>Login Page</h2>
                //<div>
                //<label for="email">Email Address: </label>
                //<input type="text" name="email"
                //value="{{email}}"
                ///>
                //</div>
                //<div
                //>
                //</div>
                //<div>
                //<label for="password">Password: </label>
                //<input type="text"
                //name="password"
                //value="{{password}}" />
                //</div>
                //<p>
                //email = {{email}}
                //</p>
                //<p>
                //password = {{password}}
                //</p>
                //<br  />
                //<button class="btn btn-info">Submit</button>
                //`,
                templateUrl: "./login.component.html",
                styleUrls: ['./login.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return ["/"]; };
const _c1 = function (a0) { return { "show": a0 }; };
const _c2 = function () { return ["link-active"]; };
const _c3 = function () { return { exact: true }; };
const _c4 = function () { return ["/counter"]; };
const _c5 = function () { return ["/fetch-data"]; };
const _c6 = function () { return ["/courses"]; };
const _c7 = function () { return ["/fav"]; };
const _c8 = function () { return ["/login"]; };
const _c9 = function () { return ["/pins"]; };
const _c10 = function () { return ["/contact"]; };
const _c11 = function () { return ["/department"]; };
const _c12 = function () { return ["/employee"]; };
class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 39, vars: 50, consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-white", "border-bottom", "box-shadow", "mb-3"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "flex-sm-row-reverse", 3, "ngClass"], [1, "navbar-nav", "flex-grow", "nav-item", "nav", "nav-pills"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", "text-dark", 3, "routerLink"], [1, "nav-item", 3, "routerLinkActive"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "BookWorm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_button_click_5_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fetch data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Favourites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "All Pins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.isExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c12));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["a.navbar-brand[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow[_ngcontent-%COMP%] {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-menu',
                templateUrl: './nav-menu.component.html',
                styleUrls: ['./nav-menu.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pin/pin.component.ts":
/*!**************************************!*\
  !*** ./src/app/pin/pin.component.ts ***!
  \**************************************/
/*! exports provided: PinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinComponent", function() { return PinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pin.service */ "./src/app/pin/pin.service.ts");



class PinComponent {
    constructor(pins) {
        this.allPins = JSON.stringify(pins.getAllPins());
    }
    ngOnInit() { }
}
PinComponent.ɵfac = function PinComponent_Factory(t) { return new (t || PinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pin_service__WEBPACK_IMPORTED_MODULE_1__["PinService"])); };
PinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinComponent, selectors: [["pin"]], decls: 0, vars: 0, template: function PinComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pin',
                templateUrl: 'pin.component.html'
            }]
    }], function () { return [{ type: _pin_service__WEBPACK_IMPORTED_MODULE_1__["PinService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pin/pin.service.ts":
/*!************************************!*\
  !*** ./src/app/pin/pin.service.ts ***!
  \************************************/
/*! exports provided: PinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinService", function() { return PinService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PinService {
    constructor() {
        this.sampleData = [{ "id": "56710275-e09b-aaa0-b24f-31603347c042", "title": "Ruth Breda", "desc": "My crush", "path": "/Files/20210311224215729.jpg", "username": "RuthBreda", "isSave": false }, { "id": "fb3026bb-b791-e201-3b35-739a6e031c99", "title": "Chimdugo", "desc": "A rare photo of an Angel", "path": "/Files/20210311221954184.jpg", "username": "AdaHappie", "isSave": true }, { "id": "ab855965-ed40-8f81-e80e-d7d856441c5a", "title": "facilis quis", "desc": "odio quidem molestiae repudiand quaerat quidem tempore", "path": "/files/2020-05-23_135750.png", "username": "Zbyszek Eduardo", "isSave": true }, { "id": "2370b5a9-1625-0666-9cfe-6525476f6dbc", "title": "labore dolor", "desc": "consectet corrupti voluptate pariatur similique delectus esse", "path": "/files/2020-05-24_073333.png", "username": "de Sommer", "isSave": false }, { "id": "3847d35c-7913-2089-489e-f0f1b266c681", "title": "tempore minus", "desc": "molestiae fuga quas perspicia minus quae doloremqu", "path": "/files/20210311221954184.jpg", "username": "Rita Chang", "isSave": true }, { "id": "29225df9-5aaa-e7e9-e9ae-33d68c3cc98c", "title": "corrupti ratione", "desc": "enim eaque debitis nobis molestias soluta animi", "path": "/files/20210311223528090.jpg", "username": "de Roel", "isSave": false }, { "id": "d6d245b6-82bb-1aa7-48f7-7453c0966bd5", "title": "repellend quas", "desc": "repudiand reprehend ipsa enim repudiand quidem labore", "path": "/files/20210311223606124.jpg", "username": "Hanna Fonseca", "isSave": true }, { "id": "15435595-c6dc-d236-4842-3dc0990c211c", "title": "ipsam reiciendi", "desc": "adipisci nihil eaque fuga tempore assumenda maxime", "path": "/files/20210311223650252.jpg", "username": "Batista Karin", "isSave": false }, { "id": "70d1868a-85ef-c34a-b06b-8d663800e11a", "title": "fuga quam", "desc": "laboriosa odio eaque modi corrupti quibusdam odio", "path": "/files/20210311223719466.jpg", "username": "Pfalzheim Christina", "isSave": true }, { "id": "1019855b-04d6-ed3b-009f-fc4117da3a80", "title": "eligendi ipsa", "desc": "debitis recusanda adipisici tempore culpa animi ipsa", "path": "/files/20210311224215729.jpg", "username": "Maria Matti", "isSave": false }, { "id": "92c6fa81-68f5-821b-904e-c0ad201a62b7", "title": "recusanda recusanda", "desc": "voluptem perspicia isteid reiciendi numquam tempore similique", "path": "/files/20210311224826499.jpg", "username": "Izquierdo Nixon", "isSave": true }, { "id": "9b7f820a-5a55-314e-f829-c1bb0efd5a29", "title": "nemo repudiand", "desc": "nemo voluptatu quam autem dolorum nihil aperiam", "path": "/files/20210314153052513.jpg", "username": "Gutierrez Saveley", "isSave": false }, { "id": "36dc10fd-51ee-4253-467c-59df681762cd", "title": "odio corrupti", "desc": "itaque recusanda amet pariatur perspicia nemo ducimus", "path": "/files/20210315080542662.jpg", "username": "Thomas McKenna", "isSave": true }, { "id": "77dec101-7d47-e263-397b-596b259b9e93", "title": "placeat maxime", "desc": "culpa delectus fuga dolor delectus elit numquam", "path": "/files/20210315101043472.jpg", "username": "Messner Roland", "isSave": false }, { "id": "b0182d63-166a-45b5-c06b-9b6d09382bc3", "title": "placeat delectus", "desc": "odio maxime numquam lautium natus nemo pariatur", "path": "/files/20210315101053200.png", "username": "Miguel Palle", "isSave": true }, { "id": "f543468b-8f72-d5c4-5cb9-009997a41422", "title": "delectus placeat", "desc": "adipisici recusanda beatae odio illum ratione explicabo", "path": "/files/20210315101053202.png", "username": "Lincoln Alexander", "isSave": false }, { "id": "8d7b5b9c-5be8-84dc-6c16-29fcac62fcee", "title": "explicabo sit", "desc": "minus enim placeat similique similique fugit fugit", "path": "/files/20210315101053203.png", "username": "Karin Crowther", "isSave": true }, { "id": "73a0bf32-8799-4b7a-af7f-22049dada9e6", "title": "debitis eligendi", "desc": "adipisci voluptem adipisci consectet debitis quaerat autem", "path": "/files/20210315101053204.png", "username": "Ann Paula", "isSave": false }, { "id": "f29c7e80-9228-2ac4-8788-d9ad71952867", "title": "quam odio", "desc": "dolore fugit quis autem itaque nemo laboriosa", "path": "/files/20210315101053289.jpg", "username": "Fonseca Maria", "isSave": true }, { "id": "6ed34724-c112-7469-3d22-b6a6df099574", "title": "adipisici quaerat", "desc": "quidem debitis fugit aperiam sunt perspicia similique", "path": "/files/20210315101135963.jpg", "username": "Camino Karl", "isSave": false }, { "id": "a2521f49-44c1-b48e-ed5f-60379f5a4ba3", "title": "odio ipsum", "desc": "modi quidem illum illum recusanda numquam ducimus", "path": "/files/20210315101146309.jpg", "username": "Wilson Jonas", "isSave": true }, { "id": "d888f81d-b46a-c27d-7c99-268d53a325e8", "title": "numquam odio", "desc": "quia adipisici veritatis similique pariatur repellend molestias", "path": "/files/20210315101411215.jpg", "username": "Wilson Carlos", "isSave": false }, { "id": "553626e2-f3e1-0ca2-ca05-3d7e0c38bc9f", "title": "labore reiciendi", "desc": "quidem reiciendi pariatur voluptatu nemo ipsam molestias", "path": "/files/20210315101707189.jpg", "username": "Domingues Annette", "isSave": true }, { "id": "d6ce97ae-7786-aead-20e9-216a9d0974ad", "title": "nemo debitis", "desc": "pariatur nobis perspicia soluta reprehend enim modi", "path": "/files/20210315120358797.jpg", "username": "Renate Yang", "isSave": false }, { "id": "20c9b1e6-cfa1-a399-6afe-f5c535941330", "title": "consectet quia", "desc": "pariatur voluptate similique tempore fugit quibusdam quae", "path": "/files/20210320104332881.jpg", "username": "Pascale Fran", "isSave": true }, { "id": "dc102748-2016-1d9a-446e-d447a0a97e4b", "title": "quam vel", "desc": "voluptate pariatur auteos veritatis enim minima eligendi", "path": "/files/20210320105753147.jpg", "username": "Jaime Ottlieb", "isSave": false }, { "id": "3a19bc67-588f-afb7-20c6-3f94e74871dc", "title": "deserunt voluptate", "desc": "elit eligendi minima minus natus pariatur dolorum", "path": "/files/20210320111421880.jpg", "username": "Ana Gutierrez", "isSave": false }, { "id": "94eb4e88-8e89-9166-3636-246c104c7d20", "title": "nemo corrupti", "desc": "doloremqu sit doloremqu eligendi nostrum minus odio", "path": "/files/20210320114724904.jpg", "username": "Trujillo Trujillo", "isSave": false }, { "id": "3eb6b683-aa6d-6608-724d-64a57553d811", "title": "nisi molestias", "desc": "delectus nemo itaque illum nisi tempore fuga", "path": "/files/20210320114738807.jpg", "username": "de Cruz", "isSave": true }, { "id": "6bf64b57-6432-d043-6a5a-f16fa3478ec1", "title": "assumenda ipsam", "desc": "isteid quidem illum nemo nihil nemo placeat", "path": "/files/20210320114751328.jpg", "username": "Mendel Annette", "isSave": false }, { "id": "4e8ce83c-7940-23b9-4fec-58b7036739a2", "title": "Pretty Lady", "desc": "Nobl", "path": "/Files/20210323194350121.jpg", "username": "", "isSave": false }, { "id": "5978bde6-d621-95c8-5f04-2250f57400aa", "title": "Yoga ", "desc": "Children", "path": "/Files/20210323194447459.jpg", "username": "", "isSave": false }, { "id": "c7cd4540-c3e4-7569-c127-4c1fdee13235", "title": "", "desc": "", "path": "/Files/20210323194705235.jpg", "username": "", "isSave": false }, { "id": "0a8e6b2f-c109-0203-15af-80fb81cf3402", "title": "", "desc": "", "path": "/Files/20210323194749075.jpg", "username": "Noble", "isSave": false }];
    }
    getAllPins() {
        return this.sampleData;
    }
}
PinService.ɵfac = function PinService_Factory(t) { return new (t || PinService)(); };
PinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PinService, factory: PinService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                "providedIn": "root",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/phone.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/phone.pipe.ts ***!
  \*************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PhonePipe {
    constructor() {
        this.formatPhoneNumber = function (value) {
            /* +2349025778189
            * 23409025778189
            * +2349025778189
            * 09025778189
            * 9025778189
            */
            if (value.startsWith("0") && value.length == 11)
                return "+234" + value.substr(1);
            else if (value.startsWith("234"))
                return "+" + value;
            else if (value.startsWith("2340"))
                return "+" + value.substr(4);
            else if (value.startsWith("+234"))
                return "" + value;
            else
                return "+234" + value.substr(0);
        };
    }
    transform(value) {
        if (!value)
            return null;
        value = value.toUpperCase().replace(/-/g, "")
            .replace(/ /g, "")
            .replace("(", "")
            .replace(/[A-Z]/g, "")
            .replace(")", "");
        return this.formatPhoneNumber(value);
    }
}
PhonePipe.ɵfac = function PhonePipe_Factory(t) { return new (t || PhonePipe)(); };
PhonePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "phone", type: PhonePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhonePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "phone",
                pure: true
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/summary.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/summary.pipe.ts ***!
  \***************************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SummaryPipe {
    transform(value, limit) {
        let actualLimit = (limit) ? limit : 50;
        return (!value) ? null : value.substr(0, actualLimit) + "...";
    }
}
SummaryPipe.ɵfac = function SummaryPipe_Factory(t) { return new (t || SummaryPipe)(); };
SummaryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "summary", type: SummaryPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "summary",
                pure: true
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/title-case.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/title-case.pipe.ts ***!
  \******************************************/
/*! exports provided: TitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function() { return TitleCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TitleCasePipe {
    transform(value, ...args) {
        let xxx;
        console.log(value, xxx, args);
        throw new Error("Method not implemented.");
    }
}
TitleCasePipe.ɵfac = function TitleCasePipe_Factory(t) { return new (t || TitleCasePipe)(); };
TitleCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "titleCase", type: TitleCasePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleCasePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "titleCase"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/title.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/title.pipe.ts ***!
  \*************************************/
/*! exports provided: TitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlePipe", function() { return TitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TitlePipe {
    constructor() {
        this.toTitleCase = function (word) {
            return word.substr(0, 1).toUpperCase()
                + word.substr(1).toLowerCase();
            ;
        };
    }
    transform(value) {
        if (!value)
            return null;
        let words = value.split(" ");
        for (var i = 0; i < words.length; i++) {
            let word = words[i];
            if (i > 0 && this.isPreposition(word))
                words[i] = word.toLowerCase();
            else
                words[i] = this.toTitleCase(word);
        }
        return words.join(" ");
    }
    isPreposition /*= function*/(word = "") {
        let prepositions = ["the", "of"];
        return prepositions.includes(word.toLowerCase());
    }
}
TitlePipe.ɵfac = function TitlePipe_Factory(t) { return new (t || TitlePipe)(); };
TitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "title", type: TitlePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: "title" }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/truncate.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/truncate.pipe.ts ***!
  \***********************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TruncatePipe {
    //⁇
    transform(input, limit) {
        //if (input)
        return input.length >= length ? input.substring(0, limit) + '...' : input;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "limitChar", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'limitChar',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




//import { } from "fs";
class SharedService {
    //private EmployeeList: any;
    constructor(http, 
    /** returns http://localhost:5000/ */ baseUrl, rootUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.rootUrl = rootUrl;
        this.sampleData = [{ "dateFormatted": "3/30/2021", "temperatureC": 28, "summary": "Balmy", "temperatureF": 82 }, { "dateFormatted": "3/31/2021", "temperatureC": -3, "summary": "Bracing", "temperatureF": 27 }, { "dateFormatted": "4/1/2021", "temperatureC": 41, "summary": "Sweltering", "temperatureF": 105 }, { "dateFormatted": "4/2/2021", "temperatureC": 52, "summary": "Balmy", "temperatureF": 125 }, { "dateFormatted": "4/3/2021", "temperatureC": 35, "summary": "Chilly", "temperatureF": 94 }];
        // let imageUrl = "assets/images/avatars/";
        let imageUrl = "Resources/Images/";
        //let uploadDir = this.rootUrl + imageUrl;if ( !fs.existsSync( uploadDir ) ) fs.mkdirSync( uploadDir );
        this.photoFilePath = baseUrl + imageUrl;
        http.get(baseUrl + 'api/SampleData/WeatherForecasts')
            .subscribe((result) => {
            this.forecasts = result;
        }, error => console.error(error));
    }
    uploadPhoto(formData) {
        return this.http.post(this.baseUrl + "api/pictures", formData);
    }
    /** GET /api/Department */
    getDepartments() {
        return this.http.get(this.baseUrl + "api/Departments");
    }
    /** POST /api/Departments */
    addDepartment(val) {
        return this.http.post(this.baseUrl + "api/Departments/", val);
    }
    /** PUT /api/Departments */
    updateDepartment(val) {
        return this.http.put(this.baseUrl + "api/Departments/" + val.id, val);
    }
    /** DELETE /api/Departments */
    deleteDepartment(val) {
        return this.http.delete(this.baseUrl + "api/Departments/" + val.id);
    }
    //deleteDepartment ( DepartmentId:number|string ) {return this.http.delete<IDepartment[]>( this.baseUrl + "api/Departments/"+ DepartmentId);}
    /** GET /api/employees */
    getEmployees() {
        return this.http.get(this.baseUrl + "api/employees");
    }
    /** PUT /api/employees */
    addEmployee(val) {
        return this.http.post(this.baseUrl + "api/employees/", val);
    }
    /** PUT /api/employees */
    updateEmployee(val) {
        return this.http.put(this.baseUrl + "api/employees/" + val.id, val);
    }
    /** DELETE /api/employees */
    deleteEmployee(val) {
        return this.http.delete(this.baseUrl + "api/employees/" + val.id);
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('BASE_URL'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('ROOT_URL')); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ "providedIn": "root", }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['BASE_URL']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['ROOT_URL']
            }] }]; }, null); })();
;
;


/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SpinnerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SpinnerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SpinnerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "progress", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SpinnerComponent /*implements OnInit*/ {
    constructor() {
        this.title = "spinner";
        this.type = "default"; //default, purple, fullScreen
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent /*implements OnInit*/)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent /*implements OnInit*/, selectors: [["spinner"]], inputs: { type: "type" }, decls: 4, vars: 3, consts: [[4, "ngIf"], [1, "text-center", 2, "height", "1000", "align-self", "start"], ["xmlns", "http://www.w3.org/2000/svg", "width", "60", "height", "60", "viewBox", "0 0 60 60", 1, "fa-spin"], ["fill", "currentColor", "fill-rule", "evenodd", "d", "M59.972 26a37.616 37.616 0 0 0-.71-3.455 30.092 30.092 0 0 0-1.446-4.26 30.682 30.682 0 0 0-4.809-7.849 29.483 29.483 0 0 0-7.594-6.389A29.733 29.733 0 0 0 36.292.551C34.63.216 32.956.015 31.255.002a39.08 39.08 0 0 0-3.964.16 30.369 30.369 0 0 0-9.898 2.747 30.882 30.882 0 0 0-7.34 4.848A30.286 30.286 0 0 0 4.4 14.495C2.7 17.28 1.427 20.32.73 23.509c-.562 2.545-.83 5.17-.696 7.782.12 2.532.509 5.063 1.272 7.488a30.823 30.823 0 0 0 1.782 4.5 30.367 30.367 0 0 0 2.464 4.112 30.149 30.149 0 0 0 6.67 6.764 29.967 29.967 0 0 0 18.779 5.827 29.845 29.845 0 0 0 9.724-1.942 29.06 29.06 0 0 0 8.237-4.862c1.232-1.045 2.33-2.224 3.362-3.47 1.045-1.259 1.982-2.585 2.76-4.018a29.445 29.445 0 0 0 1.714-3.817c.24-.643.469-1.286.656-1.956.2-.71.348-1.446.482-2.17.201-1.138.281-2.317.174-3.469-.093.51-.174 1.005-.294 1.5a14.602 14.602 0 0 1-.55 1.688c-.428 1.165-.964 2.29-1.473 3.416a36.09 36.09 0 0 1-2.25 4.125 28.98 28.98 0 0 1-1.353 1.996c-.482.643-1.031 1.259-1.58 1.862a23.257 23.257 0 0 1-3.617 3.268 26.913 26.913 0 0 1-4.3 2.585c-3.026 1.473-6.335 2.357-9.683 2.652a27.72 27.72 0 0 1-10.22-1.018 27.424 27.424 0 0 1-8.72-4.393 27.441 27.441 0 0 1-6.455-6.939c-1.808-2.719-3.054-5.786-3.737-8.987a26.897 26.897 0 0 1-.402-2.532c-.08-.723-.147-1.46-.174-2.196a26.23 26.23 0 0 1 .281-4.581c.496-3.295 1.568-6.47 3.228-9.363a26.813 26.813 0 0 1 5.64-6.885 26.563 26.563 0 0 1 7.607-4.701 25.887 25.887 0 0 1 5.01-1.46 24.97 24.97 0 0 1 2.611-.362c.429-.04.844-.04 1.273-.08.174 0 .348.013.522.013 2.906-.053 5.826.322 8.599 1.192a25.15 25.15 0 0 1 8.237 4.42 25.798 25.798 0 0 1 6.295 7.475 27.988 27.988 0 0 1 2.934 7.795c.134.63.24 1.26.348 1.889a2.11 2.11 0 0 0 .91 1.433c1.045.696 2.505.228 3.014-.897.174-.389.228-.804.161-1.193z"], [1, "Loader"], ["id", "initial_startup"], ["width", "50", "height", "50", "viewBox", "0 0 44 44", 1, "spinner-container"], ["cx", "22", "cy", "22", "r", "20", "fill", "none", "stroke-width", "4", 1, "spinner-path"], [1, "progress-container"], ["dir", "ltr", "id", "progressbar", "value", "0", "max", "4656046.25"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_div_1_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpinnerComponent_div_3_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "fullScreen");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], #app[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#app[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n#startup[_ngcontent-%COMP%], #initial_startup[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  background-color: #f0f0f0;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: -webkit-flex;\r\n  -webkit-align-items: center;\r\n  -webkit-justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.spinner-container[_ngcontent-%COMP%] {\r\n  -webkit-animation: rotate 2s linear infinite;\r\n  animation: rotate 2s linear infinite;\r\n  z-index: 2;\r\n}\r\n\r\n.spinner-path[_ngcontent-%COMP%] {\r\n  stroke-dasharray: 1,150; \r\n  stroke-dashoffset: 0;\r\n  stroke: #acb9bf;\r\n  stroke-linecap: round;\r\n  -webkit-animation: dash 1.5s ease-in-out infinite;\r\n  animation: dash 1.5s ease-in-out infinite;\r\n}\r\n\r\n@keyframes rotate {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1,150; \r\n    stroke-dashoffset: 0;\r\n  }\r\n\r\n  50% {\r\n    stroke-dasharray: 90,150; \r\n    stroke-dashoffset: -35; \r\n  }\r\n\r\n  100% {\r\n    stroke-dasharray: 90,150; \r\n    stroke-dashoffset: -124; \r\n  }\r\n}\r\n\r\n@-webkit-keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1,150; \r\n    stroke-dashoffset: 0;\r\n  }\r\n\r\n  50% {\r\n    stroke-dasharray: 90,150; \r\n    stroke-dashoffset: -35; \r\n  }\r\n\r\n  100% {\r\n    stroke-dasharray: 90,150; \r\n    stroke-dashoffset: -124; \r\n  }\r\n}\r\n\r\n.progress-container[_ngcontent-%COMP%] {\r\n  width: 360px;\r\n  position: fixed;\r\n  padding-top: 120px;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-left: -180px;\r\n}\r\n\r\nprogress[_ngcontent-%COMP%] {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n       appearance: none;\r\n  width: 100%;\r\n  height: 3px;\r\n  border: none;\r\n  margin: 0;\r\n  color: #00d9bb;\r\n  background-color: #e6e6e6;\r\n}\r\n\r\nprogress[value][_ngcontent-%COMP%]::-webkit-progress-bar {\r\n    background-color: #e6e6e6;\r\n  }\r\n\r\nprogress[value][_ngcontent-%COMP%]::-webkit-progress-value {\r\n    background-color: #00d9bb;\r\n    -webkit-transition: width 0.3s ease;\r\n    transition: width 0.3s ease;\r\n  }\r\n\r\nprogress[value][_ngcontent-%COMP%]::-moz-progress-bar {\r\n    background-color: #00d9bb;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFFdkIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0Isc0JBQXNCO0FBRXhCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaURBQWlEO0VBQ2pELHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUIsRUFBRSwyQkFBMkI7SUFDcEQsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usd0JBQXdCLEVBQUUsNEJBQTRCO0lBQ3RELHNCQUFzQixFQUFFLHNCQUFzQjtFQUNoRDs7RUFFQTtJQUNFLHdCQUF3QixFQUFFLDRCQUE0QjtJQUN0RCx1QkFBdUIsRUFBRSx1QkFBdUI7RUFDbEQ7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCLEVBQUUsMkJBQTJCO0lBQ3BELG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHdCQUF3QixFQUFFLDRCQUE0QjtJQUN0RCxzQkFBc0IsRUFBRSxzQkFBc0I7RUFDaEQ7O0VBRUE7SUFDRSx3QkFBd0IsRUFBRSw0QkFBNEI7SUFDdEQsdUJBQXVCLEVBQUUsdUJBQXVCO0VBQ2xEO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBZ0I7T0FBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVFO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1DQUEyQjtJQUEzQiwyQkFBMkI7RUFDN0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5odG1sLCBib2R5LCAjYXBwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2FwcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jc3RhcnR1cCwgI2luaXRpYWxfc3RhcnR1cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3Bpbm5lci1wYXRoIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiAxLDE1MDsgLyogMSUsIDEwMSUgY2lyY3VtZmVyZW5jZSAqL1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIHN0cm9rZTogI2FjYjliZjtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXNoIHtcclxuICAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLDE1MDsgLyogMSUsIDEwMSUgY2lyY3VtZmVyZW5jZSAqL1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsMTUwOyAvKiA3MCUsIDEwMSUgY2lyY3VtZmVyZW5jZSAqL1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNTsgLyogMjUlIGNpcmN1bWZlcmVuY2UgKi9cclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsMTUwOyAvKiA3MCUsIDEwMSUgY2lyY3VtZmVyZW5jZSAqL1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7IC8qIC05OSUgY2lyY3VtZmVyZW5jZSAqL1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRhc2gge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsMTUwOyAvKiAxJSwgMTAxJSBjaXJjdW1mZXJlbmNlICovXHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwxNTA7IC8qIDcwJSwgMTAxJSBjaXJjdW1mZXJlbmNlICovXHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1OyAvKiAyNSUgY2lyY3VtZmVyZW5jZSAqL1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwxNTA7IC8qIDcwJSwgMTAxJSBjaXJjdW1mZXJlbmNlICovXHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNDsgLyogLTk5JSBjaXJjdW1mZXJlbmNlICovXHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMzYwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xODBweDtcclxufVxyXG5cclxucHJvZ3Jlc3Mge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMwMGQ5YmI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxufVxyXG5cclxuICBwcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgfVxyXG5cclxuICBwcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDliYjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gIHByb2dyZXNzW3ZhbHVlXTo6LW1vei1wcm9ncmVzcy1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDliYjtcclxuICB9XHJcbiJdfQ== */", ".fa-spin[_ngcontent-%COMP%] {-webkit-animation: fa-spin 2s infinite linear;animation: fa-spin 2s infinite linear;}.fa-pulse[_ngcontent-%COMP%] {-webkit-animation: fa-spin 1s infinite steps(8);animation: fa-spin 1s infinite steps(8);}@-webkit-keyframes fa-spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(359deg);transform: rotate(359deg);}}@keyframes fa-spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(359deg);transform: rotate(359deg);}}.fa-spinner[_ngcontent-%COMP%]:before {content: \"\\f110\";}", ".Loader[_ngcontent-%COMP%], .Loader[_ngcontent-%COMP%]:before, .Loader[_ngcontent-%COMP%]:after {border-radius: 50%;}.Loader[_ngcontent-%COMP%] {color: #521751;font-size: 11px;text-indent: -99999em;margin: 55px auto;position: relative;width: 10em;height: 10em;box-shadow: inset 0 0 0 1em;-webkit-transform: translateZ(0);-ms-transform: translateZ(0);transform: translateZ(0);}.Loader[_ngcontent-%COMP%]:before, .Loader[_ngcontent-%COMP%]:after {position: absolute;content: '';}.Loader[_ngcontent-%COMP%]:before {width: 5.2em;height: 10.2em;background: #fff;border-radius: 10.2em 0 0 10.2em;top: -0.1em;left: -0.1em;-webkit-transform-origin: 5.2em 5.1em;transform-origin: 5.2em 5.1em;-webkit-animation: load2 2s infinite ease 1.5s;animation: load2 2s infinite ease 1.5s;}.Loader[_ngcontent-%COMP%]:after {width: 5.2em;height: 10.2em;background: #fff;border-radius: 0 10.2em 10.2em 0;top: -0.1em;left: 5.1em;-webkit-transform-origin: 0px 5.1em;transform-origin: 0px 5.1em;-webkit-animation: load2 2s infinite ease;animation: load2 2s infinite ease;}@-webkit-keyframes load2 {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes load2 {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}", "html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], #app[_ngcontent-%COMP%] {height: 100%;width: 100%;overflow: hidden;padding: 0;margin: 0;}.app[_ngcontent-%COMP%], #app[_ngcontent-%COMP%] {position: absolute;top: 0;left: 0;}#startup[_ngcontent-%COMP%], #initial_startup[_ngcontent-%COMP%] {width: 100%;height: 100%;position: fixed;background-color: #f0f0f0;-moz-user-select: none;-webkit-user-select: none;display: flex;align-items: center;justify-content: center;display: -webkit-box;display: -webkit-flex;-webkit-align-items: center;-webkit-justify-content: center;flex-direction: column;-webkit-flex-direction: column;}.spinner-container[_ngcontent-%COMP%] {-webkit-animation: rotate 2s linear infinite;animation: rotate 2s linear infinite;z-index: 2;}.spinner-path[_ngcontent-%COMP%] {stroke-dasharray: 1, 150;stroke-dashoffset: 0;stroke: #acb9bf;stroke-linecap: round;-webkit-animation: dash 1.5s ease-in-out infinite;animation: dash 1.5s ease-in-out infinite;}@keyframes rotate {100% {transform: rotate(360deg);}}@-webkit-keyframes rotate {100% {-webkit-transform: rotate(360deg);}}@keyframes dash {0% {stroke-dasharray: 1, 150;stroke-dashoffset: 0;}50% {stroke-dasharray: 90, 150;stroke-dashoffset: -35;}100% {stroke-dasharray: 90, 150;stroke-dashoffset: -124;}}@-webkit-keyframes dash {0% {stroke-dasharray: 1, 150;stroke-dashoffset: 0;}50% {stroke-dasharray: 90, 150;stroke-dashoffset: -35;}100% {stroke-dasharray: 90, 150;stroke-dashoffset: -124;}}.progress-container[_ngcontent-%COMP%] {width: 360px;position: fixed;padding-top: 120px;top: 50%;left: 50%;margin-left: -180px;}progress[_ngcontent-%COMP%] {-webkit-appearance: none;appearance: none;width: 100%;height: 3px;border: none;margin: 0;color: #00d9bb;background-color: #e6e6e6;}progress[value][_ngcontent-%COMP%]::-webkit-progress-bar {background-color: #e6e6e6;}progress[value][_ngcontent-%COMP%]::-webkit-progress-value {background-color: #00d9bb;transition: width 0.3s ease;}progress[value][_ngcontent-%COMP%]::-moz-progress-bar {background-color: #00d9bb;}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent /*implements OnInit*/, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "spinner",
                templateUrl: "./spinner.component.html",
                styleUrls: ["./spinner.component.css"]
            }]
    }], null, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["type"]
        }] }); })();


/***/ }),

/***/ "./src/app/validation-message/validation-message.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/validation-message/validation-message.component.ts ***!
  \********************************************************************/
/*! exports provided: ValidationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessageComponent", function() { return ValidationMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ValidationMessageComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ValidationMessageComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This field should have ", ctx_r2.model.errors.minlength.requiredLength, " characters or more ");
} }
function ValidationMessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ValidationMessageComponent_div_0_div_3_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ValidationMessageComponent_div_0_div_4_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.errors.minlength);
} }
class ValidationMessageComponent {
    constructor() {
        this.isShown = true;
    }
    hide() {
        this.isShown = false;
    }
}
ValidationMessageComponent.ɵfac = function ValidationMessageComponent_Factory(t) { return new (t || ValidationMessageComponent)(); };
ValidationMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationMessageComponent, selectors: [["validation-message"]], inputs: { model: "model" }, decls: 1, vars: 1, consts: [["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], ["data-dismiss", "alert-danger", 1, "close"], [4, "ngIf"]], template: function ValidationMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValidationMessageComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.touched && !ctx.model.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbGlkYXRpb24tbWVzc2FnZS92YWxpZGF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'validation-message',
                templateUrl: './validation-message.component.html',
                styleUrls: ['./validation-message.component.css']
            }]
    }], null, { model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["model"]
        }] }); })();


/***/ }),

/***/ "./src/app/welcome.component.ts":
/*!**************************************!*\
  !*** ./src/app/welcome.component.ts ***!
  \**************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class WelcomeComponent {
    constructor() {
        /**constructor( private userService: UserService, private auth: AuthService, router: Router ) {auth.user$.subscribe(user => {if (!user) return;userService.save(user);let returnUrl = localStorage.getItem('returnUrl');if (!returnUrl) return;localStorage.removeItem('returnUrl');router.navigateByUrl(returnUrl);});}**/
        this.title = 'app';
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["welcome"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@media (max-width: 767px) {\r\n  \r\n  .body-content[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2RkFBNkY7RUFDN0Y7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xyXG4gIC5ib2R5LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'welcome',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/contact-form/contact-form.component.ts":
/*!****************************************************!*\
  !*** ./src/contact-form/contact-form.component.ts ***!
  \****************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/validation-message/validation-message.component */ "./src/app/validation-message/validation-message.component.ts");




class ContactFormComponent {
    constructor() {
        this.onChange = (f) => console.log(f);
    }
    ngOnInit() { }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["contact-form"]], decls: 15, vars: 1, consts: [[1, "form-group", 3, "click"], ["f", ""], [1, "form-group"], ["for", "firstName", 1, "control-label"], ["type", "text", "required", "", "max", "255", "maxlength", "255", "minlength", "3", "name", "firstName", "ngModel", "", "id", "firstName", 1, "form-control", 3, "change"], ["firstName", "ngModel"], [3, "model"], ["for", "comment", 1, "control-label"], ["id", "comment", "name", "comment", "cols", "30", "rows", "10", 1, "form-control"], ["type", "submit", "value", "Submit", 1, "btn", "btn-primary"], ["type", "reset", "value", "Reset", 1, "btn", "btn-danger", "pull-right"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactFormComponent_Template_form_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onChange(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContactFormComponent_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onChange(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "validation-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _app_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_2__["ValidationMessageComponent"]], styles: [".form-control.ng-invalid.ng-touched.ng-dirty[_ngcontent-%COMP%] {\r\n  border-color: #def23a; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUIsRUFBRSxVQUFVO0FBQ25DIiwiZmlsZSI6InNyYy9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLm5nLWludmFsaWQubmctdG91Y2hlZC5uZy1kaXJ0eSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGVmMjNhOyAvKiNhOTQ0NDIqL1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/*! exports provided: getBaseUrl, getRootUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRootUrl", function() { return getRootUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




var de;
function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
function getRootUrl() {
    return "";
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
    { provide: 'ROOT_URL', useFactory: getRootUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"](providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Noble\source\repos\BookWorm\BookWorm\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map