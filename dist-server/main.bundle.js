webpackJsonp([1,4],Array(28).concat([
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BookService = (function () {
    function BookService() {
        this.books = [
            new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]('4392923482', 'Aurelia', ['Rob Eisenberg'], 20),
            new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]('4392423423', 'Angular', ['Mîsko Hevery'], 30),
            new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]('1232131233', 'Vue', ['André Staltz'], 14.95)
        ];
    }
    BookService.prototype.getAll = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.books);
    };
    BookService.prototype.getByIsbn = function (isbn) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.books.find(function (book) { return book.isbn === isbn; }));
    };
    BookService.prototype.create = function (book) {
        this.books.unshift(book);
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
], BookService);

//# sourceMappingURL=book.service.js.map

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(isbn, title, authors, price) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.price = price;
        this.rating = 0;
    }
    Book.prototype.rateUp = function () {
        this.rating++;
    };
    Book.prototype.rateDown = function () {
        this.rating--;
    };
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMode; });
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["Grid"] = 0] = "Grid";
    ViewMode[ViewMode["List"] = 1] = "List";
})(ViewMode || (ViewMode = {}));
//# sourceMappingURL=view-mode.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookBus; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BookBus = (function () {
    function BookBus() {
        this.stream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    BookBus.prototype.propagate = function (book) {
        this.stream.next(book);
    };
    return BookBus;
}());
BookBus = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
], BookBus);

//# sourceMappingURL=book.bus.js.map

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_view_toggle_view_mode__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_book_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_book_bus__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDashboardComponent = (function () {
    function BookDashboardComponent(bookService, bookBus) {
        this.bookService = bookService;
        this.bookBus = bookBus;
        this.title = 'app works!';
        this.isGridEnabled = true;
    }
    BookDashboardComponent.prototype.addBookToList = function (book) {
        this.bookService.create(book);
        this.books = this.bookService.getAll();
    };
    BookDashboardComponent.prototype.setViewMode = function (viewMode) {
        viewMode === __WEBPACK_IMPORTED_MODULE_1__book_view_toggle_view_mode__["a" /* ViewMode */].Grid
            ? this.isGridEnabled = true
            : this.isGridEnabled = false;
    };
    BookDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books = this.bookService.getAll();
        this.bookBus.stream.subscribe(function (book) {
            return _this.addBookToList(book);
        });
    };
    return BookDashboardComponent;
}());
BookDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-book-dashboard',
        template: __webpack_require__(195),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_book_bus__["a" /* BookBus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_book_bus__["a" /* BookBus */]) === "function" && _b || Object])
], BookDashboardComponent);

var _a, _b;
//# sourceMappingURL=book-dashboard.component.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookDetailsComponent = (function () {
    function BookDetailsComponent(route) {
        this.route = route;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        this.book = this.route.snapshot.data['book'];
    };
    return BookDetailsComponent;
}());
BookDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-book-details',
        template: __webpack_require__(196),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], BookDetailsComponent);

var _a;
//# sourceMappingURL=book-details.component.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_validators_book_validators__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookEditComponent = (function () {
    function BookEditComponent(route) {
        this.route = route;
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.book = this.route.snapshot.data['book'];
        this.editForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            isbn: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](this.book.isbn, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__core_validators_book_validators__["a" /* BookValidators */].isbn])
        });
    };
    return BookEditComponent;
}());
BookEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'tr-book-edit',
        template: __webpack_require__(197),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], BookEditComponent);

var _a;
//# sourceMappingURL=book-edit.component.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_book_bus__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookGridElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookGridElementComponent = (function () {
    function BookGridElementComponent(books) {
        this.books = books;
    }
    BookGridElementComponent.prototype.select = function () {
        this.books.propagate(this.book);
    };
    return BookGridElementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]) === "function" && _a || Object)
], BookGridElementComponent.prototype, "book", void 0);
BookGridElementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-book-card',
        template: __webpack_require__(198),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_book_bus__["a" /* BookBus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_book_bus__["a" /* BookBus */]) === "function" && _b || Object])
], BookGridElementComponent);

var _a, _b;
//# sourceMappingURL=book-grid-element.component.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_book__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleBooksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GoogleBooksService = (function () {
    function GoogleBooksService(http) {
        this.http = http;
    }
    GoogleBooksService.prototype.search = function (query) {
        return this.http
            .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
            .map(function (response) { return response.json(); })
            .map(function (result) { return result.items.map(function (b) {
            var book = new __WEBPACK_IMPORTED_MODULE_6__models_book__["a" /* Book */]('', b.volumeInfo.title, b.volumeInfo.authors, b.saleInfo.listPrice ? b.saleInfo.amount : null);
            book.thumbnails = b.volumeInfo.imageLinks ? [b.volumeInfo.imageLinks.thumbnail] : null;
            book.rating = b.volumeInfo.averageRating ? b.volumeInfo.averageRating : 0;
            return book;
        }); })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(new Error(err.json().error.message));
        });
    };
    return GoogleBooksService;
}());
GoogleBooksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GoogleBooksService);

var _a;
//# sourceMappingURL=google-books.service.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookResolver = (function () {
    function BookResolver(bookService) {
        this.bookService = bookService;
    }
    BookResolver.prototype.resolve = function (route, state) {
        return this.bookService.getByIsbn(route.paramMap.get('isbn'));
    };
    return BookResolver;
}());
BookResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _a || Object])
], BookResolver);

var _a;
//# sourceMappingURL=book.resolver.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLoadingIndicatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLoadingIndicatorComponent = (function () {
    function AppLoadingIndicatorComponent() {
    }
    AppLoadingIndicatorComponent.prototype.ngOnInit = function () {
    };
    return AppLoadingIndicatorComponent;
}());
AppLoadingIndicatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-app-loading-indicator',
        template: __webpack_require__(205),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], AppLoadingIndicatorComponent);

//# sourceMappingURL=app-loading-indicator.component.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-not-found',
        template: __webpack_require__(206),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 101;


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(126);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .then(function () { return registerWorker('/worker-basic.min.js'); });
/**
 * Loads a service worker if the browser is supporting it
 * @param {string} workerScript path to the script file implementing the service worker
 */
function registerWorker(workerScript) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(workerScript);
    }
}
//# sourceMappingURL=main.js.map

/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_book_view_toggle_view_mode__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_core_book_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(bookService) {
        this.bookService = bookService;
        this.title = 'app works!';
        this.isGridEnabled = true;
    }
    AppComponent.prototype.addBookToList = function (book) {
        this.bookService.create(book);
        this.books = this.bookService.getAll();
    };
    AppComponent.prototype.setViewMode = function (viewMode) {
        viewMode === __WEBPACK_IMPORTED_MODULE_1__book_book_view_toggle_view_mode__["a" /* ViewMode */].Grid
            ? this.isGridEnabled = true
            : this.isGridEnabled = false;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.books = this.bookService.getAll();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-root',
        template: __webpack_require__(193)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_core_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_core_book_service__["a" /* BookService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading_module__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_book_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ServiceWorkerModule, NgServiceWorker } from '@angular/service-worker';





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'buecher' }),
            // ServiceWorkerModule,
            __WEBPACK_IMPORTED_MODULE_4__book_book_module__["a" /* BookModule */],
            __WEBPACK_IMPORTED_MODULE_2__loading_loading_module__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.module.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAddFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookAddFormComponent = (function () {
    function BookAddFormComponent() {
        this.create = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.book = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */]('', '', [], 0);
    }
    BookAddFormComponent.prototype.createNewBook = function (form) {
        this.create.emit(Object.assign({}, this.book));
        form.reset();
    };
    BookAddFormComponent.prototype.updateAuthors = function (authors) {
        this.book.authors = authors.value.split(',');
    };
    return BookAddFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], BookAddFormComponent.prototype, "create", void 0);
BookAddFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-book-add-form',
        template: __webpack_require__(194),
        styles: [__webpack_require__(180)]
    })
], BookAddFormComponent);

//# sourceMappingURL=book-add-form.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookGridComponent = (function () {
    function BookGridComponent() {
    }
    BookGridComponent.prototype.ngOnInit = function () {
    };
    return BookGridComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], BookGridComponent.prototype, "books", void 0);
BookGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-book-grid',
        template: __webpack_require__(199),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], BookGridComponent);

//# sourceMappingURL=book-grid.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_grid_element_book_grid_element_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListElementComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ListElementComponent = (function (_super) {
    __extends(ListElementComponent, _super);
    function ListElementComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ListElementComponent;
}(__WEBPACK_IMPORTED_MODULE_0__book_grid_element_book_grid_element_component__["a" /* BookGridElementComponent */]));
ListElementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'tr-book-list-element',
        template: __webpack_require__(200),
        styles: [__webpack_require__(186)]
    })
], ListElementComponent);

//# sourceMappingURL=book-list-element.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookListComponent = (function () {
    function BookListComponent() {
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    return BookListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], BookListComponent.prototype, "books", void 0);
BookListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-book-list',
        template: __webpack_require__(201),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [])
], BookListComponent);

//# sourceMappingURL=book-list.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_google_books_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookTopNavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BookTopNavigationComponent = (function () {
    function BookTopNavigationComponent(googleBooks) {
        var _this = this;
        this.googleBooks = googleBooks;
        this.isResultViewEnabled = false;
        this.queryChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* EventEmitter */]();
        this.books$ = this.queryChange
            .debounceTime(500)
            .distinctUntilChanged()
            .filter(function (query) { return query && query.length > 0; })
            .do(function () { return _this.isResultViewEnabled = true; })
            .switchMap(function (query) { return _this.googleBooks.search(query); })
            .catch(function (err) {
            _this.searchError = err.message;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        });
    }
    return BookTopNavigationComponent;
}());
BookTopNavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'tr-book-top-navigation',
        template: __webpack_require__(202),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__core_google_books_service__["a" /* GoogleBooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_google_books_service__["a" /* GoogleBooksService */]) === "function" && _a || Object])
], BookTopNavigationComponent);

var _a;
//# sourceMappingURL=book-top-navigation.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_mode__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewToggleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewToggleComponent = (function () {
    function ViewToggleComponent() {
        this.viewMode = __WEBPACK_IMPORTED_MODULE_1__view_mode__["a" /* ViewMode */];
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    ViewToggleComponent.prototype.propagate = function (viewMode) {
        this.changed.emit(viewMode);
    };
    ViewToggleComponent.prototype.ngOnInit = function () {
    };
    return ViewToggleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], ViewToggleComponent.prototype, "changed", void 0);
ViewToggleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-view-toggle',
        template: __webpack_require__(203),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [])
], ViewToggleComponent);

//# sourceMappingURL=book-view-toggle.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_book_bus__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_resolvers_book_resolver__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_routing_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_utilities_module__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_grid_book_grid_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_grid_element_book_grid_element_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_list_book_list_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_list_element_book_list_element_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__book_view_toggle_book_view_toggle_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rating_button_rating_button_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__book_add_form_book_add_form_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__book_top_navigation_book_top_navigation_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__book_dashboard_book_dashboard_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_book_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_google_books_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_isbn_pipe_isbn_pipe__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__book_details_book_details_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__book_edit_book_edit_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var BookModule = (function () {
    function BookModule() {
    }
    return BookModule;
}());
BookModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__book_routing_module__["a" /* BookRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__utilities_utilities_module__["a" /* UtilitiesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__book_grid_book_grid_component__["a" /* BookGridComponent */],
            __WEBPACK_IMPORTED_MODULE_9__book_grid_element_book_grid_element_component__["a" /* BookGridElementComponent */],
            __WEBPACK_IMPORTED_MODULE_10__book_list_book_list_component__["a" /* BookListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__book_list_element_book_list_element_component__["a" /* ListElementComponent */],
            __WEBPACK_IMPORTED_MODULE_12__book_view_toggle_book_view_toggle_component__["a" /* ViewToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_13__rating_button_rating_button_component__["a" /* RatingButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_14__book_add_form_book_add_form_component__["a" /* BookAddFormComponent */],
            __WEBPACK_IMPORTED_MODULE_15__book_top_navigation_book_top_navigation_component__["a" /* BookTopNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__book_dashboard_book_dashboard_component__["a" /* BookDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__core_isbn_pipe_isbn_pipe__["a" /* IsbnPipe */],
            __WEBPACK_IMPORTED_MODULE_20__book_details_book_details_component__["a" /* BookDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__book_edit_book_edit_component__["a" /* BookEditComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__book_grid_book_grid_component__["a" /* BookGridComponent */],
            __WEBPACK_IMPORTED_MODULE_10__book_list_book_list_component__["a" /* BookListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__book_view_toggle_book_view_toggle_component__["a" /* ViewToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__book_add_form_book_add_form_component__["a" /* BookAddFormComponent */],
            __WEBPACK_IMPORTED_MODULE_15__book_top_navigation_book_top_navigation_component__["a" /* BookTopNavigationComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__core_book_bus__["a" /* BookBus */], __WEBPACK_IMPORTED_MODULE_17__core_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_18__core_google_books_service__["a" /* GoogleBooksService */], __WEBPACK_IMPORTED_MODULE_1__core_resolvers_book_resolver__["a" /* BookResolver */]]
    })
], BookModule);

//# sourceMappingURL=book.module.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_guards_book_edit_guard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_resolvers_book_resolver__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_dashboard_book_dashboard_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_details_book_details_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_edit_book_edit_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__book_dashboard_book_dashboard_component__["a" /* BookDashboardComponent */], pathMatch: 'full' },
    { path: 'book/:isbn', component: __WEBPACK_IMPORTED_MODULE_5__book_details_book_details_component__["a" /* BookDetailsComponent */], resolve: { book: __WEBPACK_IMPORTED_MODULE_1__core_resolvers_book_resolver__["a" /* BookResolver */] } },
    {
        path: 'book/:isbn/edit',
        component: __WEBPACK_IMPORTED_MODULE_6__book_edit_book_edit_component__["a" /* BookEditComponent */],
        resolve: { book: __WEBPACK_IMPORTED_MODULE_1__core_resolvers_book_resolver__["a" /* BookResolver */] },
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__core_guards_book_edit_guard__["a" /* BookEditGuard */]]
    }
];
var BookRoutingModule = (function () {
    function BookRoutingModule() {
    }
    return BookRoutingModule;
}());
BookRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__core_guards_book_edit_guard__["a" /* BookEditGuard */]]
    })
], BookRoutingModule);

//# sourceMappingURL=book.routing.module.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BookEditGuard = (function () {
    function BookEditGuard() {
    }
    BookEditGuard.prototype.canActivate = function (route, state) {
        return window.confirm('Sind Sie sicher, dass Sie das Buch bearbeiten möchten?');
    };
    return BookEditGuard;
}());
BookEditGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
], BookEditGuard);

//# sourceMappingURL=book-edit.guard.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsbnPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IsbnPipe = (function () {
    function IsbnPipe() {
    }
    IsbnPipe.prototype.transform = function (value) {
        var trimmed = value.replace(/\s+/g, '');
        var numbers = [];
        for (var i = 0; i < trimmed.length; i += 4) {
            numbers.push(trimmed.substr(i, 4));
        }
        return numbers.join(' ');
    };
    return IsbnPipe;
}());
IsbnPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'isbn'
    })
], IsbnPipe);

//# sourceMappingURL=isbn.pipe.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookValidators; });
var BookValidators = (function () {
    function BookValidators() {
    }
    BookValidators.isbn = function (control) {
        var pattern = /^\d{10}$/;
        var candidate = control.value.replace(/\s+/g, '');
        return pattern.test(candidate)
            ? null
            : { isbn: { valid: false } };
    };
    return BookValidators;
}());

//# sourceMappingURL=book.validators.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingButtonComponent = (function () {
    function RatingButtonComponent() {
        this.increase = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.decrease = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    RatingButtonComponent.prototype.raiseIncrease = function () {
        this.increase.emit(this.rating + 1);
    };
    RatingButtonComponent.prototype.raiseDecrease = function () {
        this.decrease.emit(this.rating - 1);
    };
    return RatingButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Number)
], RatingButtonComponent.prototype, "rating", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], RatingButtonComponent.prototype, "increase", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], RatingButtonComponent.prototype, "decrease", void 0);
RatingButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tr-rating-button',
        template: __webpack_require__(204),
        styles: [__webpack_require__(190)]
    })
], RatingButtonComponent);

//# sourceMappingURL=rating-button.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_loading_indicator_app_loading_indicator_component__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'loading', component: __WEBPACK_IMPORTED_MODULE_2__app_loading_indicator_app_loading_indicator_component__["a" /* AppLoadingIndicatorComponent */] }
];
var LoadingRoutingModule = (function () {
    function LoadingRoutingModule() {
    }
    return LoadingRoutingModule;
}());
LoadingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], LoadingRoutingModule);

//# sourceMappingURL=loading-routing.module.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_loading_indicator_app_loading_indicator_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_routing_module__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingModule = (function () {
    function LoadingModule() {
    }
    return LoadingModule;
}());
LoadingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__loading_routing_module__["a" /* LoadingRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_loading_indicator_app_loading_indicator_component__["a" /* AppLoadingIndicatorComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__app_loading_indicator_app_loading_indicator_component__["a" /* AppLoadingIndicatorComponent */]
        ],
    })
], LoadingModule);

//# sourceMappingURL=loading.module.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOnceDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOnceDirective = (function () {
    function ClickOnceDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        // tslint:disable-next-line:no-output-rename
        this.clickOnce = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    ClickOnceDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.unsubscribe = this.renderer.listen(this.element.nativeElement, 'click', function (event) {
            _this.renderer.setAttribute(_this.element.nativeElement, 'disabled', 'true');
            _this.clickOnce.emit(event);
            _this.unsubscribe();
        });
    };
    return ClickOnceDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])('click.once'),
    __metadata("design:type", Object)
], ClickOnceDirective.prototype, "clickOnce", void 0);
ClickOnceDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Directive */])({
        // tslint:disable-next-line:directive-selector
        selector: '[click.once]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _b || Object])
], ClickOnceDirective);

var _a, _b;
//# sourceMappingURL=click-once.directive.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modifiers_click_once_directive__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UtilitiesModule = (function () {
    function UtilitiesModule() {
    }
    return UtilitiesModule;
}());
UtilitiesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event_modifiers_click_once_directive__["a" /* ClickOnceDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__event_modifiers_click_once_directive__["a" /* ClickOnceDirective */]
        ]
    })
], UtilitiesModule);

//# sourceMappingURL=utilities.module.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".tooltip.tooltip-validation {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 16px; }\n  :host:hover {\n    box-shadow: 5px 5px 10px 0px #d4d4d4; }\n  :host a {\n    color: #565656;\n    text-decoration: none; }\n    :host a .thumbnail {\n      text-align: center; }\n  :host .actions {\n    margin-top: 8px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host {\n  margin-top: 32px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  margin: 16px;\n  margin-left: 0; }\n  :host:hover {\n    box-shadow: 5px 5px 10px 0px #d4d4d4; }\n  :host a {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    text-decoration: none;\n    color: #565656; }\n    :host a .content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-left: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".search-results {\n  width: 100%;\n  height: 400px;\n  overflow-y: auto;\n  z-index: 1;\n  top: 60px;\n  position: absolute;\n  background-color: #ffffff;\n  box-shadow: 5px 5px 10px 0px #d4d4d4; }\n\n.spinner {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n  :host .btn-group {\n    margin-right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<form #bookForm=\"ngForm\" (ngSubmit)=\"createNewBook(bookForm)\">\n  <section class=\"form-block\">\n    Neues Buch hinzufügen\n  </section>\n  <div class=\"form-group\">\n    <label\n      for=\"book-add-title\"\n      i18n=\"@@BookAddForm:isbn:label\">ISBN</label>\n    <label\n      [class.invalid]=\"isbn.invalid && (isbn.dirty || isbn.touched)\"\n      for=\"book-add-isbn\"\n      class=\"tooltip tooltip-validation tooltip-top-left tooltip-md\"\n      aria-haspopup=\"true\"\n      role=\"tooltip\">\n      <input\n        [(ngModel)]=\"book.isbn\"\n        required\n        placeholder=\"ISBN eingeben...\"\n        i18n-placeholder=\"@@BookAddForm:isbn:input:placeholder\"\n        type=\"text\"\n        id=\"book-add-isbn\"\n        name=\"isbn\"\n        class=\"form-control\"\n        #isbn=\"ngModel\">\n      <span class=\"tooltip-content\">\n        <ng-container i18n=\"@@BookAddForm:isbn:validation\">\n          Bitte geben Sie eine gültige ISBN ein (max. 10 Ziffern).\n        </ng-container>\n      </span>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"book-add-title\">Titel</label>\n    <label\n      [class.invalid]=\"title.invalid && (title.dirty || title.touched)\"\n      for=\"book-add-title\"\n      class=\"tooltip tooltip-validation tooltip-top-left tooltip-md\"\n      aria-haspopup=\"true\"\n      role=\"tooltip\">\n      <input\n        [(ngModel)]=\"book.title\"\n        required\n        type=\"text\"\n        id=\"book-add-title\"\n        name=\"title\"\n        class=\"form-control\"\n        #title=\"ngModel\">\n      <span class=\"tooltip-content\">\n        <!--i18n:Missing title@@BookAddForm:title:validation -->\n        Bitte geben Sie einen Titel ein.\n        <!-- /i18n -->\n      </span>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"book-add-authors\">Autoren</label>\n    <label\n      [class.invalid]=\"authors.invalid && (authors.dirty || authors.touched)\"\n      for=\"book-add-authors\"\n      class=\"tooltip tooltip-validation tooltip-top-left tooltip-md\">\n      <input\n        [ngModel]=\"book.authors\"\n        (ngModelChange)=\"updateAuthors(authorsControl)\"\n        #authors=\"ngModel\"\n        #authorsControl\n        required\n        type=\"text\"\n        id=\"book-add-authors\"\n        name=\"authors\"\n        class=\"form-control\">\n      <span class=\"tooltip-content\">\n        Bitte ergänzen Sie einen oder mehrere Autoren getrennt durch ein Komma.\n      </span>\n    </label>\n\n  </div>\n  <div class=\"form-group\">\n    <label for=\"book-add-price\">Preis</label>\n    <label\n      [class.invalid]=\"price.invalid && (price.dirty || price.touched)\"\n      for=\"book-add-price\"\n      class=\"tooltip tooltip-validation tooltip-top-left tooltip-md\"\n      aria-hasPopup=\"true\"\n      role=\"tooltip\">\n      <input\n        [(ngModel)]=\"book.price\"\n        required\n        pattern=\"\\d+(\\.\\d{1,2})?\"\n        type=\"text\"\n        id=\"book-add-price\"\n        name=\"price\"\n        class=\"form-control\"\n        #price=\"ngModel\">\n      <span class=\"tooltip-content\">\n        <span [hidden]=\"!price.errors || !price.errors.pattern\">Bitte geben Sie einen gültigen Preis ein (Bsp.: 15.00€).</span>\n        <span [hidden]=\"!price.errors || !price.errors.required\">Die Eingabe eines Preises ist erforderlich.</span>\n      </span>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"book-add-description\">Beschreibung</label>\n    <textarea\n      [(ngModel)]=\"book.description\"\n      type=\"text\"\n      id=\"book-add-description\"\n      name=\"description\"\n      class=\"form-control\"\n      #description>\n    </textarea>\n  </div>\n  <button\n    [disabled]=\"bookForm.invalid\"\n    type=\"submit\"\n    class=\"btn btn-primary\">\n    Buch anlegen\n  </button>\n</form>\n"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<tr-book-top-navigation></tr-book-top-navigation>\n\n<div class=\"container\">\n\n  <tr-book-add-form (create)=\"addBookToList($event)\"></tr-book-add-form>\n\n  <hr>\n\n  <tr-view-toggle (changed)=\"setViewMode($event)\"></tr-view-toggle>\n\n  <tr-book-grid [books]=\"books | async\" *ngIf=\"isGridEnabled; else bookList\"></tr-book-grid>\n\n  <ng-template #bookList>\n    <tr-book-list [books]=\"books | async\"></tr-book-list>\n  </ng-template>\n\n</div>\n"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{ book.title }}</h2>\n  <form class=\"compact\">\n    <section class=\"form-block\">\n      <label>Details</label>\n      <div class=\"form-group\">\n        <label>ISBN</label>\n        <span>{{ book.isbn | isbn }}</span>\n      </div>\n      <div class=\"form-group\">\n        <label>Autoren</label>\n        <span>{{ book.authors }}</span>\n      </div>\n      <div class=\"form-group\">\n        <label>Bewertung</label>\n        <span>{{ book.rating }}</span>\n      </div>\n      <div class=\"form-group\">\n        <label>Preis</label>\n        <span>{{ book.price | currency:'EUR':true }}</span>\n      </div>\n      <div class=\"form-group\">\n        <label>Beschreibung</label>\n        <p>{{ book.description }}</p>\n      </div>\n      <a\n        [routerLink]=\"['/book', book.isbn, 'edit']\"\n        class=\"btn btn-default\">\n        Bearbeiten\n      </a>\n    </section>\n  </form>\n</div>\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{ book.title }}</h2>\n  <form [formGroup]=\"editForm\" class=\"compact\" >\n    <section class=\"form-block\">\n      <label>Details</label>\n      <div class=\"form-group\">\n        <label>ISBN</label>\n        <label\n          [class.invalid]=\"editForm.controls.isbn.invalid && (editForm.controls.isbn.dirty || editForm.controls.isbn.touched)\"\n          class=\"tooltip tooltip-validation tooltip-top-left tooltip-md\">\n          <input\n            formControlName=\"isbn\"\n            type=\"text\"\n            class=\"form-control\">\n          <span class=\"tooltip-content\">\n            <span [hidden]=\"!editForm.controls.isbn.errors || !editForm.controls.isbn.errors.required\">\n              Bitte geben Sie eine gültige ISBN ein.\n            </span>\n            <span [hidden]=\"!editForm.controls.isbn.errors || !editForm.controls.isbn.errors.isbn\">\n              Die ISBN muss 10 Zeichen lang sein.\n            </span>\n          </span>\n        </label>\n\n      </div>\n      <div class=\"form-group\">\n        <label>Autoren</label>\n        <span>{{ book.authors }}</span>\n      </div>\n      <div class=\"form-group\">\n        <label>Bewertung</label>\n        <span>{{ book.rating }}</span>\n      </div>\n      <div class=\"form-group\">\n        <label>Preis</label>\n        <span>{{ book.price | currency:'EUR':true }}</span>\n      </div>\n      <div class=\"form-group\">\n        <label>Beschreibung</label>\n        <p>{{ book.description }}</p>\n      </div>\n      <button\n        [disabled]=\"editForm.invalid\"\n        type=\"submit\"\n        class=\"btn btn-primary\">\n        Speichern\n      </button>\n    </section>\n  </form>\n</div>\n"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['book', book.isbn]\">\n  <div class=\"thumbnail\">\n    <img\n      *ngIf=\"book.thumbnails?.length > 0; else dummy;\"\n      [src]=\"book.thumbnails[0]\"\n      alt=\"Buchcover\">\n    <ng-template #dummy>\n      <img src=\"https://dummyimage.com/180x250/333/fff&text=Buch\"\n                alt=\"Buchcover\">\n    </ng-template>\n  </div>\n  <p class=\"title\">\n    {{ book.title }}\n  </p>\n  <div class=\"authors\">\n    {{ book.authors }}\n  </div>\n  <div class=\"price\">\n    {{ book.price | currency:'EUR':true }}\n  </div>\n  <div [hidden]=\"book.rating === 0\" class=\"rating\">\n    {{ book.rating }}\n  </div>\n</a>\n<div class=\"actions\">\n  <tr-rating-button\n    [rating]=\"book.rating\"\n    (increase)=\"book.rateUp()\"\n    (decrease)=\"book.rateDown()\">\n  </tr-rating-button>\n  <button\n    (click)=\"select()\"\n    class=\"btn btn-green\">\n    Hinzufügen\n  </button>\n</div>\n"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<tr-book-card\n  [book]=\"book\"\n  *ngFor=\"let book of books\">\n</tr-book-card>\n"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<a href=\"\">\n  <div class=\"thumbnail\">\n    <img src=\"https://dummyimage.com/150x120/333/fff&text=Buch\" alt=\"Buch Cover\">\n  </div>\n  <div class=\"content\">\n    <div class=\"title\">{{ book.title }} </div>\n    <div class=\"authors\">{{ book.authors[0] }}</div>\n    <div class=\"price\">{{ book.price | currency:'EUR':true }}</div>\n    <div [hidden]=\"book.rating === 0\" class=\"rating\" >{{ book.rating }}</div>\n  </div>\n</a>\n<div class=\"actions\">\n  <tr-rating-button\n    [rating]=\"book.rating\"\n    (increase)=\"book.rateUp()\"\n    (decrease)=\"book.rateDown()\">\n  </tr-rating-button>\n</div>\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<tr-book-list-element [book]=\"book\" *ngFor=\"let book of books\"></tr-book-list-element>\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"branding\">\n    <a href=\"\">\n      <span class=\"title\">Bücher</span>\n    </a>\n  </div>\n  <form class=\"search\">\n    <label>\n      <input\n        (input)=\"queryChange.emit(searchQuery.value)\"\n        type=\"text\"\n        #searchQuery\n        placeholder=\"Bücher suchen...\">\n    </label>\n  </form>\n  <div [hidden]=\"!isResultViewEnabled\" class=\"search-results\">\n    <div class=\"container\">\n      <button\n        (click)=\"isResultViewEnabled = false\"\n        class=\"btn btn-link btn-sm\">Schließen\n      </button>\n      <div\n        *ngIf=\"searchError\"\n        class=\"alert alert-danger\">\n        <div class=\"alert-item\">\n          <span class=\"alert-text\">{{ searchError }}</span>\n        </div>\n      </div>\n      <tr-book-grid\n        *ngIf=\"books$ | async as books; else searchResults;\"\n        [books]=\"books\">\n      </tr-book-grid>\n      <ng-template #searchResults><div class=\"spinner\"></div></ng-template>\n    </div>\n  </div>\n</header>\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n  <div (click)=\"propagate(viewMode.Grid)\" class=\"radio btn\">\n    <input type=\"radio\" name=\"radio-view-mode\" id=\"btn-view-mode-grid\" checked>\n    <label for=\"btn-view-mode-grid\">Kachelansicht</label>\n  </div>\n  <div (click)=\"propagate(viewMode.List)\" class=\"radio btn\">\n    <input type=\"radio\" name=\"radio-view-mode\" id=\"btn-view-mode-list\">\n    <label for=\"btn-view-mode-list\">Listenansicht</label>\n  </div>\n</div>\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group btn-sm\">\n  <button class=\"btn\" (click.once)=\"raiseIncrease()\">+</button>\n  <button class=\"btn\" (click.once)=\"raiseDecrease()\">-</button>\n</div>\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<h3>App gets prepared for you...</h3>\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(102);


/***/ })
]),[253]);
//# sourceMappingURL=main.bundle.js.map