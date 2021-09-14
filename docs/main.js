(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Knm":
/*!********************************************!*\
  !*** ./src/app/anim/animateTransitions.ts ***!
  \********************************************/
/*! exports provided: routeTransitionAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeTransitionAnimations", function() { return routeTransitionAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('triggerName', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('one => two, one => three, one => four, one => five, two => three, two => four, two => five, three => four, three => five, four => five', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%', opacity: 1 })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.2s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '100%' }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.2s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%' })),
            ]),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('two => one, three => two, three => one, four => one, four => two, four => three, five => one, five => two, five => three, five => four', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%', opacity: 1 })]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.2s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.2s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])())
    ])
]);


/***/ }),

/***/ "+qrf":
/*!**********************************************!*\
  !*** ./src/app/projects/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
class ProjectsService {
    constructor(http) {
        this.http = http;
    }
    getProjects() {
        return this.http.get('https://fast-river-42170.herokuapp.com/getPro', httpOptions);
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anthu\Documents\pagePresentation\presentation\src\main.ts */"zUnb");


/***/ }),

/***/ "9S/N":
/*!********************************************************!*\
  !*** ./src/app/indi-project/indi-project.component.ts ***!
  \********************************************************/
/*! exports provided: IndiProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndiProjectComponent", function() { return IndiProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/project */ "BsXN");
/* harmony import */ var _node_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node/node.service */ "PKHM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["imgload"];
function IndiProjectComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.logos[lang_r3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx_r0.logoResolutions[lang_r3][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx_r0.logoResolutions[lang_r3][1]);
} }
function IndiProjectComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r4);
} }
function IndiProjectComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndiProjectComponent_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.plusSlides(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx_r2.imgWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx_r2.imgHeight);
} }
const _c1 = function (a0) { return { "width": a0 }; };
class IndiProjectComponent {
    constructor(proj) {
        this.proj = proj;
        this.project = new _model_project__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        this.slideIdx = 1;
        this.slides = document.getElementsByClassName("mySlides");
        this.imgWidth = 0;
        this.imgHeight = 0;
        this.contSizeW = 0;
        this.factor = document.body.clientWidth / (document.body.clientWidth + 100 * 25);
        this.mobil = document.body.clientWidth <= 768;
        this.logos = {
            'Flutter': 'https://i.ibb.co/n0b4Xq6/flutter-logo.png',
            'Angular': 'https://i.ibb.co/N1vBGVv/angular-logo.png',
            'Golang': 'https://i.ibb.co/FWFBFFj/golang-logo.png',
            'HTML': 'https://i.ibb.co/M786kxb/html-logo.png',
            'CSS': 'https://i.ibb.co/Kxwcrnn/css-logo.png',
            'JavaScript': 'https://i.ibb.co/jvQxWXn/js-logo.png',
            'Csharp': 'https://i.ibb.co/c6NMHsY/c-sharp-c-logo-02-F17714-BA-seeklogo-com.png',
            'Unity': 'https://i.ibb.co/BwcVN6R/218-2186770-tip-create-a-rotating-sun-alex-dunn-graphic.png'
        };
        // logo: [width, height]
        this.logoResolutions = {
            'Flutter': [this.mobil ? 50 : 60.5, this.mobil ? 65 : 75],
            'Angular': [this.mobil ? 75 : 900 / 10, this.mobil ? 75 : 900 / 10],
            'Golang': [this.mobil ? 90 : 1200 / 10, this.mobil ? 35 : 451 / 10],
            'HTML': [this.mobil ? 65 : 750 / 10, this.mobil ? 95 : 1245 / 10],
            'CSS': [this.mobil ? 65 : 750 / 10, this.mobil ? 95 : 1245 / 10],
            'JavaScript': [this.mobil ? 70 : 225 * .4, this.mobil ? 70 : 225 * .4],
            'Csharp': [this.mobil ? 70 : 225 * .4, this.mobil ? 70 : 225 * .4],
            'Unity': [this.mobil ? 70 : 225 * .4, this.mobil ? 70 : 225 * .4]
        };
        let resolutionW;
        let resolutionH;
        this.proj.data$.subscribe(res => {
            this.project = res;
            if (res.mobil)
                resolutionW = 1080, resolutionH = 1920;
            else
                resolutionW = 1370, resolutionH = 660;
            this.imgWidth = resolutionW * this.factor;
            this.imgHeight = resolutionH * this.factor;
            this.contSizeW = this.imgWidth > this.imgHeight ? 60 : 40;
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.showSlides(this.slideIdx);
    }
    plusSlides(n) {
        this.showSlides(this.slideIdx += n);
    }
    showSlides(n) {
        let i;
        if (n > this.slides.length)
            this.slideIdx = 1;
        if (n < 1)
            this.slideIdx = this.slides.length;
        for (i = 0; i < this.slides.length; i++)
            this.slides[i].setAttribute('style', 'display: none;');
        this.slides[this.slideIdx - 1].setAttribute('style', 'display: block;');
    }
}
IndiProjectComponent.ɵfac = function IndiProjectComponent_Factory(t) { return new (t || IndiProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_node_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"])); };
IndiProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndiProjectComponent, selectors: [["app-indi-project"]], viewQuery: function IndiProjectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imags = _t);
    } }, decls: 18, vars: 10, consts: [[1, "content"], [1, "info"], [1, "tit"], [1, "desc"], [1, "tit2"], [1, "tec"], ["class", "logo", 4, "ngFor", "ngForOf"], [1, "slideshow-container", 3, "ngStyle"], [1, "numbertext"], ["class", "mySlides fade", 3, "click", 4, "ngFor", "ngForOf"], [1, "logo"], [3, "src", "width", "height"], [1, "mySlides", "fade", 3, "click"], ["imgload", ""], [1, "aco", 3, "src", "width", "height"]], template: function IndiProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tecnolog\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, IndiProjectComponent_th_11_Template, 2, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IndiProjectComponent_td_13_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, IndiProjectComponent_div_17_Template, 3, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.desc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.langs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.langs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.contSizeW + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.slideIdx, " / ", ctx.project.imgs.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.imgs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".content[_ngcontent-%COMP%] {\n  width: 98vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 60%;\n  text-align: right;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-top: 0;\n  margin-bottom: 2rem;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .tit2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .tec[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  \n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .tec[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  align-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0rem 3rem;\n}\n@media screen and (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .tec[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin: 0rem 1rem;\n    margin-bottom: 1rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n    font-size: 9vw;\n    margin-bottom: 1rem;\n  }\n  .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n  .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .tit2[_ngcontent-%COMP%] {\n    font-size: 7vw;\n  }\n}\n.content[_ngcontent-%COMP%]   .slideshow-container[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 1rem;\n  text-align: center;\n  align-content: center;\n}\n.content[_ngcontent-%COMP%]   .slideshow-container[_ngcontent-%COMP%]   .mySlides[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: none;\n}\n.content[_ngcontent-%COMP%]   .slideshow-container[_ngcontent-%COMP%]   .mySlides[_ngcontent-%COMP%]   .aco[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.15);\n}\n@media screen and (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .slideshow-container[_ngcontent-%COMP%]   .mySlides[_ngcontent-%COMP%]   .aco[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-bottom: 1rem;\n  }\n}\n@media screen and (max-width: 768px) {\n  .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    width: 90%;\n    text-align: right;\n  }\n  .content[_ngcontent-%COMP%]   .slideshow-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0.5rem auto;\n  }\n}\n@media screen and (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0.7rem;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGluZGktcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFDSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFFUTtFQUNJLGVBQUE7QUFBWjtBQUdRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURaO0FBSVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTtBQUNaO0FBaEJZO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7QUFpQmhCO0FBZFk7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsbUJBQUE7RUFnQmxCO0FBQ0Y7QUFTUTtFQUNJO0lBQ0ksY0FBQTtJQUNBLG1CQUFBO0VBUGQ7RUFVVTtJQUNJLGNBQUE7RUFSZDtFQVdVO0lBQ0ksY0FBQTtFQVRkO0FBQ0Y7QUFhSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVhSO0FBYVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQVhaO0FBYVk7RUFDSSxjQUFBO0VBQ0EsZ0RBQUE7QUFYaEI7QUFjWTtFQUNJO0lBQ0ksU0FBQTtJQUNBLG1CQUFBO0VBWmxCO0FBQ0Y7QUFrQkk7RUFDSTtJQUNJLFVBQUE7SUFDQSxpQkFBQTtFQWhCVjtFQW1CTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtFQWpCVjtBQUNGO0FBcUJBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VBbEJOO0FBQ0YiLCJmaWxlIjoiaW5kaS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDk4dnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAgICAgLnRpdCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVjIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyouY29sIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sYW5nbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC50aXQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5dnc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlc2hvdy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5teVNsaWRlcyB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIC5hY28ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAuYWNvIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsaWRlc2hvdy1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndiProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indi-project',
                templateUrl: './indi-project.component.html',
                styleUrls: ['./indi-project.component.scss']
            }]
    }], function () { return [{ type: _node_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"] }]; }, { imags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['imgload']
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BsXN":
/*!**********************************!*\
  !*** ./src/app/model/project.ts ***!
  \**********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
class Project {
    constructor() {
        this.title = "";
        this.desc = "";
        this.langs = [];
        this.imgs = [];
        this.mobil = false;
    }
}


/***/ }),

/***/ "PKHM":
/*!**************************************!*\
  !*** ./src/app/node/node.service.ts ***!
  \**************************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/project */ "BsXN");




class NodeService {
    constructor() {
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _model_project__WEBPACK_IMPORTED_MODULE_2__["Project"]());
        this.data$ = this.data.asObservable();
    }
    changeProject(data) {
        this.data.next(data);
    }
}
NodeService.ɵfac = function NodeService_Factory(t) { return new (t || NodeService)(); };
NodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NodeService, factory: NodeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "RnEW":
/*!*********************************!*\
  !*** ./src/app/utils/loader.ts ***!
  \*********************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");

function main(shader, selector, id, img = null) {
    const canva = document.getElementsByTagName(selector)[0].querySelector(id);
    const scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
    const camera = new three__WEBPACK_IMPORTED_MODULE_0__["OrthographicCamera"](-1, // left
    1, // right
    1, // top
    -1, // bottom
    -1, // near,
    1);
    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({ canvas: canva });
    renderer.autoClearColor = false;
    let uniforms;
    if (img !== null) {
        const loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
        const texture = loader.load(img);
        uniforms = {
            iTime: { value: 0 },
            iResolution: { value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]() },
            iChannel0: { value: texture }
        };
    }
    else {
        uniforms = {
            iTime: { value: 0 },
            iResolution: { value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]() },
        };
    }
    const material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
        fragmentShader: shader,
        uniforms: uniforms
    });
    const plane = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](2, 2);
    const back = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](plane, material);
    scene.add(back);
    const resize = (renderer) => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    };
    let render = (time) => {
        time *= 0.001;
        resize(renderer);
        //resizeRendererToDisplaySize(renderer);
        const canvas = renderer.domElement;
        uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
        uniforms.iTime.value = time;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _anim_animateTransitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anim/animateTransitions */ "+Knm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "text-decoration": a0 }; };
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { makeTextSprite } from './utils/text3d';
class AppComponent {
    constructor() {
        this.sele = [
            false,
            false,
            false,
            false
        ];
        this.aux = 0;
    }
    prepareRoute(outlet) {
        return outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animationState'];
    }
    ngOnInit() {
    }
    selected(n) {
        this.sele[this.aux] = false;
        this.sele[n - 1] = true;
        this.aux = n - 1;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 13, consts: [[1, "Title"], [1, "lks"], ["routerLink", "", 1, "egOne", 3, "ngStyle", "click"], ["routerLink", "exp", 1, "egOne", 3, "ngStyle", "click"], ["routerLink", "projects", 1, "egOne", 3, "ngStyle", "click"], ["routerLink", "contact", 1, "egOne", 3, "ngStyle", "click"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Anthuan Garc\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_5_listener() { return ctx.selected(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_8_listener() { return ctx.selected(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Experiencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener() { return ctx.selected(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Proyectos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() { return ctx.selected(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Enlaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.sele[0] ? "underline" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.sele[1] ? "underline" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.sele[2] ? "underline" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.sele[3] ? "underline" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@triggerName", ctx.prepareRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".Title[_ngcontent-%COMP%] {\n  width: 93vw;\n  margin: 0.5rem;\n  padding: 0.8vw 1.2vw;\n  font-size: 2.6vw;\n  text-align: left;\n  z-index: 1000;\n  color: #000;\n  display: flex;\n  flex-direction: row;\n}\n.Title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.Title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n}\n.Title[_ngcontent-%COMP%]   .lks[_ngcontent-%COMP%] {\n  margin-right: 3vw;\n  margin-left: auto;\n  display: flex;\n  flex-flow: row nowrap;\n}\n.Title[_ngcontent-%COMP%]   .lks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.6vw;\n  margin: 0.5vw 1.2vw;\n}\n@media screen and (max-width: 768px) {\n  .Title[_ngcontent-%COMP%]   .lks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    margin: 0.5vw 1.2vw;\n  }\n}\n.Title[_ngcontent-%COMP%]   .lks[_ngcontent-%COMP%]   .egOne[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 0.15s ease-out;\n  \n}\n.Title[_ngcontent-%COMP%]   .lks[_ngcontent-%COMP%]   .egOne[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 0;\n  left: 0;\n  background-color: black;\n  background-color: black;\n  visibility: hidden;\n  transform: scaleX(0);\n  transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;\n}\n.Title[_ngcontent-%COMP%]   .lks[_ngcontent-%COMP%]   .egOne[_ngcontent-%COMP%]:hover:before {\n  visibility: visible;\n  transform: scaleX(1);\n}\n@media only screen and (max-width: 768px) {\n  .Title[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFNSSxTQUFBO0FBTlI7QUFDUTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUNaO0FBS0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBSFI7QUFLUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFIWjtBQU1RO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsbUJBQUE7RUFKZDtBQUNGO0FBT1E7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBRUY7Ozs7O0dBQUE7QUFEVjtBQVFZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0VBRUEsc0RBaEVBO0FBMERoQjtBQVNZO0VBQ0ksbUJBQUE7RUFFQSxvQkFBQTtBQVBoQjtBQWVBO0VBRUk7SUFDSSxjQUFBO0VBYk47QUFDRjtBQWdCQTs7O0VBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRoZXRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKDEsLjI1LDAsLjc1KSAwcztcclxuXHJcbi5UaXRsZSB7XHJcbiAgICB3aWR0aDogOTN2dztcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC44dncgMS4ydnc7XHJcbiAgICBmb250LXNpemU6IDIuNnZ3O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sa3Mge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3Z3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZ2dztcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjV2dyAxLjJ2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXZ3IDEuMnZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLmVnT25lIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIHdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0aGV0cmFuc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHRoZXRyYW5zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gICAgLlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgIH1cclxufVxyXG5cclxuLyojYzpob3ZlciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcbn0qLyJdfQ== */"], data: { animation: [_anim_animateTransitions__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_anim_animateTransitions__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/loader */ "RnEW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
class ProfileComponent {
    constructor() {
        this.num = 0;
        this.wid = document.body.clientWidth <= 768 ? 30 : 50;
        this.hei = document.body.clientWidth <= 768 ? 80 : 40;
        this.fragmentShader = `
    uniform vec3      iResolution;           // viewport resolution (in pixels)
    uniform float     iTime;                 // shader playback time (in seconds)
    uniform float     iTimeDelta;            // render time (in seconds)
    uniform int       iFrame;                // shader playback frame
    uniform float     iChannelTime[4];       // channel playback time (in seconds)
    uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
    uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
    uniform sampler2D iChannel0, iChannel1, iChannel2, iChannel3;             // input channel. XX = 2D/Cube
    uniform vec4      iDate;                 // (year, month, day, time in seconds)
    uniform float     iSampleRate;           // sound sample rate (i.e., 44100)

    float colormap_red(float x) {
      if (x < 0.0) {
          return 54.0 / 255.0;
      } else if (x < 20049.0 / 82979.0) {
          return (829.79 * x + 54.51) / 255.0;
      } else {
          return 1.0;
      }
    }

    float colormap_green(float x) {
        if (x < 20049.0 / 82979.0) {
            return 0.0;
        } else if (x < 327013.0 / 810990.0) {
            return (8546482679670.0 / 10875673217.0 * x - 2064961390770.0 / 10875673217.0) / 255.0;
        } else if (x <= 1.0) {
            return (103806720.0 / 483977.0 * x + 19607415.0 / 483977.0) / 255.0;
        } else {
            return 1.0;
        }
    }

    float colormap_blue(float x) {
        if (x < 0.0) {
            return 54.0 / 255.0;
        } else if (x < 7249.0 / 82979.0) {
            return (829.79 * x + 54.51) / 255.0;
        } else if (x < 20049.0 / 82979.0) {
            return 127.0 / 255.0;
        } else if (x < 327013.0 / 810990.0) {
            return (792.02249341361393720147485376583 * x - 64.364790735602331034989206222672) / 255.0;
        } else {
            return 1.0;
        }
    }

    vec4 colormap(float x) {
        return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
    }

    float rand(vec2 n) { 
        return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }

    float noise(vec2 p){
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);

        float res = mix(
            mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
            mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
        return res*res;
    }

    const mat2 mtx = mat2( 0.80,  0.60, -0.60,  0.80 );

    float fbm( vec2 p )
    {
        float f = 0.0;

        f += 0.500000*noise( p + iTime  ); p = mtx*p*2.02;
        f += 0.031250*noise( p ); p = mtx*p*2.01;
        f += 0.250000*noise( p ); p = mtx*p*2.03;
        f += 0.125000*noise( p ); p = mtx*p*2.01;
        f += 0.062500*noise( p ); p = mtx*p*2.04;
        f += 0.015625*noise( p + sin(iTime) );

        return f/0.96875;
    }

    float pattern( in vec2 p )
    {
      return fbm( p + fbm( p + fbm( p ) ) );
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
        vec2 uv = fragCoord/iResolution.x;
        float shade = pattern(uv);
        fragColor = vec4(colormap(shade).rgb, shade);
    }

    void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
  `;
    }
    ngOnInit() {
        //let sum = document.body.clientWidth >= 600 ? 5 : 10;
        Object(_utils_loader__WEBPACK_IMPORTED_MODULE_2__["main"])(this.fragmentShader, 'app-root', '#c');
        const getRandInt = (max) => Math.floor(Math.random() * max);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(3000).subscribe(() => {
            this.num = getRandInt(8 + 1);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 24, vars: 4, consts: [[1, "conte"], [1, "desc"], [1, "tit"], [1, "details"], ["id", "c", 3, "ngStyle"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Soy un estudiante de ingenier\u00EDa en sistemas con ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " conocimientos en desarrollo multiplataforma, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " principalmente con Angular y Flutter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tambi\u00E9n tengo nociones para la creaci\u00F3n y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " mantenimiento de servicios web, principalmente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " servicios basados en REST.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Me gusta el dise\u00F1o grafico, no demasiado para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " dedicarme a el, pero lo suficiente para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " considerarme entusiasta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "canvas", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.wid + ctx.num + "vw", ctx.hei - ctx.num + "vh"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".conte[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 80vh;\n  margin: 1rem auto;\n}\n@media screen and (max-width: 768px) {\n  .conte[_ngcontent-%COMP%]   .conte[_ngcontent-%COMP%] {\n    width: 90vw;\n    margin: 0;\n  }\n}\n.conte[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 100vh;\n  z-index: 100;\n  top: 15%;\n  left: 12%;\n  position: absolute;\n}\n@media screen and (max-width: 768px) {\n  .conte[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    text-align: left;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    top: 15%;\n    left: 6%;\n    position: absolute;\n  }\n}\n.conte[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n  font-size: 3vw;\n  margin-bottom: 6rem;\n}\n@media screen and (max-width: 768px) {\n  .conte[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 0;\n    font-size: 9vw;\n    margin-bottom: 2rem;\n  }\n}\n.conte[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.5vw;\n}\n@media screen and (max-width: 768px) {\n  .conte[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    width: 70vw;\n    margin-right: 0;\n    margin-left: 0;\n    font-size: 4vw;\n  }\n}\n.conte[_ngcontent-%COMP%]   #c[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50vw;\n  height: 40vh;\n  margin-right: 0;\n  margin-left: 40%;\n  z-index: 10;\n  box-shadow: 10px 13px 12px 1px rgba(255, 15, 142, 0.25);\n  transition: 1.4s;\n}\n@media screen and (max-width: 768px) {\n  .conte[_ngcontent-%COMP%]   #c[_ngcontent-%COMP%] {\n    width: 30vw;\n    height: 90vh;\n    margin-left: 55%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFNBQUE7RUFDVjtBQUNGO0FBRUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVRO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7RUFBZDtBQUNGO0FBR1E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUlRO0VBQ0k7SUFDSSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBRmQ7QUFDRjtBQUtRO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIWjtBQU1RO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBSmQ7QUFDRjtBQVFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1REFBQTtFQUNBLGdCQUFBO0FBTlI7QUFTSTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQVBWO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZSB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5jb250ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICAuZGVzYyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZoO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICB0b3A6IDE1JTtcclxuICAgICAgICBsZWZ0OiAxMiU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNSU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA2JTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAudGl0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXZ3O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICAjYyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGhlaWdodDogNDB2aDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEzcHggMTJweCAxcHggcmdiYSgyNTUsIDE1LCAxNDIsIDAuMjUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDEuNHM7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAjYyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NSU7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _node_node_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node/node.service */ "PKHM");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _exp_exp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exp/exp.component */ "db1J");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _indi_project_indi_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./indi-project/indi-project.component */ "9S/N");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_node_node_service__WEBPACK_IMPORTED_MODULE_4__["NodeService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _exp_exp_component__WEBPACK_IMPORTED_MODULE_7__["ExpComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
        _indi_project_indi_project_component__WEBPACK_IMPORTED_MODULE_10__["IndiProjectComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _exp_exp_component__WEBPACK_IMPORTED_MODULE_7__["ExpComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                    _indi_project_indi_project_component__WEBPACK_IMPORTED_MODULE_10__["IndiProjectComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [_node_node_service__WEBPACK_IMPORTED_MODULE_4__["NodeService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/loader */ "RnEW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "box-shadow": a0 }; };
class ContactComponent {
    constructor() {
        this.fragmentShader = `
    uniform vec3      iResolution;           // viewport resolution (in pixels)
    uniform float     iTime;                 // shader playback time (in seconds)
    uniform float     iTimeDelta;            // render time (in seconds)
    uniform int       iFrame;                // shader playback frame
    uniform float     iChannelTime[4];       // channel playback time (in seconds)
    uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
    uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
    uniform sampler2D iChannel0, iChannel1, iChannel2, iChannel3;         // input channel. XX = 2D/Cube
    uniform vec4      iDate;                 // (year, month, day, time in seconds)
    uniform float     iSampleRate;           // sound sample rate (i.e., 44100)

    const int octaves = 6;

    vec2 random2(vec2 st){
      vec2 t = vec2(texture(iChannel0, st/1023.).x, texture(iChannel0, st/1023.+.5).x);
      return t*t*4.;
    }

    // Value Noise by Inigo Quilez - iq/2013
    // https://www.shadertoy.com/view/lsf3WH
    float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        vec2 u = f*f;

        return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ), 
                        dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                    mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ), 
                        dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
    }

    float fbm1(in vec2 _st) {
      float v = 0.0;
      float a = 0.5;
      vec2 shift = vec2(100.0);
      // Rotate to reduce axial bias
      mat2 rot = mat2(cos(0.5), sin(0.5),
                      -sin(0.5), cos(0.50));
      for (int i = 0; i < octaves; ++i) {
          v += a * noise(_st);
          _st = rot * _st * 2.0 + shift;
          a *= 0.4;
      }
      return v;
    }

    float pattern(vec2 uv, float time, inout vec2 q, inout vec2 r) {

      q = vec2( fbm1( uv * .1 + vec2(0.0,0.0) ),
                    fbm1( uv + vec2(5.2,1.3) ) );

      r = vec2( fbm1( uv * .1 + 4.0*q + vec2(1.7 - time / 2.,9.2) ),
                    fbm1( uv + 4.0*q + vec2(8.3 - time / 2.,2.8) ) );

      vec2 s = vec2( fbm1( uv + 5.0*r + vec2(21.7 - time / 2.,90.2) ),
                    fbm1( uv * .05 + 5.0*r + vec2(80.3 - time / 2.,20.8) ) ) * .25;

      return fbm1( uv * .05 + 4.0 * s );
    }


    vec2 getScreenSpace() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / min(iResolution.y, iResolution.x);
      
      return uv;
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
      // Normalized pixel coordinates (from 0 to 1)
      vec2 uv = getScreenSpace();

        
      float time = iTime / 10.;
        
      mat2 rot = mat2(cos(time / 10.), sin(time / 10.),
                        -sin(time / 10.), cos(time / 10.));
        
      uv = rot * uv;
      uv *= 0.9 * (sin(time)) + 3.;
      uv.x -= time / 5.;
        
      vec2 q = vec2(0.,0.);
      vec2 r = vec2(0.,0.);
        
      float _pattern = 0.;
        
      
      _pattern = pattern(uv, time, q, r);
    
      vec3 colour = vec3(_pattern) * 2.;
      colour.r -= dot(q, r) * 15.;
      colour = mix(colour, vec3(pattern(r, time, q, r), dot(q, r) * 15., -0.1), .5);
      colour -= q.y * 1.5;
      colour = mix(colour, vec3(.2, .2, .2), (clamp(q.x, -1., 0.)) * 3.);
      
      fragColor = vec4(-colour + (abs(colour) * 2.), 1./length(q));
    }

    void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
  `;
        this.shadowColor = [
            'rgba(255, 251, 0, 0.3)',
            'rgba(248, 120, 210, 0.3)',
            'rgba(246, 134, 6, 0.3)'
        ];
        this.idx = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        Object(_utils_loader__WEBPACK_IMPORTED_MODULE_2__["main"])(this.fragmentShader, 'app-contact', '#c4', 'https://i.ibb.co/Vp6NnG8/noise.png');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(2000).subscribe(() => {
            this.idx = this.idx >= this.shadowColor.length ? 0 : this.idx + 1;
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 12, vars: 3, consts: [[1, "conta"], ["id", "c4", 3, "ngStyle"], [1, "expand"], [1, "log"], ["href", "https://github.com/AnthuanGarcia", "target", "_blank"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "438.549px", "height", "438.549px", "viewBox", "0 0 438.549 438.549", 0, "xml", "space", "preserve", 1, "logsvg", 2, "enable-background", "new 0 0 438.549 438.549"], ["d", "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\n                        c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\n                        c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\n                        c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\n                        c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\n                        c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\n                        c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\n                        c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\n                        c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\n                        c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\n                        c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\n                        c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\n                        c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\n                        c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\n                        c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\n                        c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\n                        c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\n                        c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\n                        c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\n                        C438.536,184.851,428.728,148.168,409.132,114.573z"], ["href", "mailto: anthuan.garciafla@gmail.com"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 1, "logsvg", 2, "enable-background", "new 0 0 512 512"], ["d", "M371.496,485.52C327.36,505.384,289.104,512,236.872,512C114.76,512,7.352,424.456,7.352,280.28\n                    C7.352,130.208,116.224,0,282.488,0c129.472,0,222.16,89.016,222.16,212.6c0,107.4-60.32,175.08-139.768,175.08\n                    c-34.576,0-59.584-17.656-63.264-56.648h-1.472c-22.8,37.52-55.904,56.648-94.896,56.648c-47.816,0-82.392-35.312-82.392-95.64\n                    c0-89.744,66.208-171.4,172.136-171.4c32.368,0,69.144,8.096,87.544,18.392l-22.064,136.096\n                    c-7.352,43.392-2.208,63.264,18.392,63.992c31.632,0.736,71.352-39.728,71.352-124.32c0-95.632-61.792-169.936-175.824-169.936\n                    c-112.544,0-211.128,88.28-211.128,228.784c0,122.848,78.712,192.736,188.328,192.736c37.52,0,77.248-8.088,106.664-23.544\n                    L371.496,485.52z M306.024,181.704c-5.888-1.472-13.248-2.944-22.808-2.944c-48.544,0-86.808,47.816-86.808,104.456\n                    c0,27.952,12.512,45.608,36.784,45.608c27.216,0,55.912-34.576,62.528-77.24L306.024,181.704z"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "anthuan.garciafla@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "10px 13px 12px 1px " + ctx.shadowColor[ctx.idx]));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".conta[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90vw;\n  height: 70vh;\n  padding: 1rem auto;\n  margin: 1rem auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n}\n.conta[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%] {\n  padding: 0 2.5%;\n}\n.conta[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  left: 50%;\n  right: auto;\n  margin: auto;\n}\n.conta[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%]   .logsvg[_ngcontent-%COMP%] {\n  width: 9rem;\n  height: 9rem;\n  margin: 0 2rem;\n  cursor: pointer;\n  transition: 600ms ease-in-out;\n}\n.conta[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%]   .logsvg[_ngcontent-%COMP%]:hover {\n  width: 9.5rem;\n  height: 9.5rem;\n}\n@media screen and (max-width: 768px) {\n  .conta[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%]   .logsvg[_ngcontent-%COMP%] {\n    width: 6rem;\n    height: 6rem;\n    margin: 0 1rem;\n  }\n}\n.conta[_ngcontent-%COMP%]   #c4[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 65%;\n  height: 40%;\n  z-index: -1;\n  box-shadow: 10px 13px 12px 1px rgba(246, 134, 6, 0.3);\n  transition: 1.5s;\n}\n@media screen and (max-width: 768px) {\n  .conta[_ngcontent-%COMP%]   .log[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    position: relative;\n    margin: 0;\n    left: 0;\n    margin-top: 15%;\n  }\n  .conta[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%] {\n    margin-top: 37%;\n    font-size: 4vw;\n    padding: 0;\n  }\n  .conta[_ngcontent-%COMP%]   #c4[_ngcontent-%COMP%] {\n    top: 21%;\n    height: 20%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .conta[_ngcontent-%COMP%] {\n    width: 95vw;\n    padding: 0.5rem 0.5rem;\n    margin: 0;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBQVo7QUFHUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBRFo7QUFJUTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBRmQ7QUFDRjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0FBSlI7QUFPSTtFQUNJO0lBQ0ksMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLGVBQUE7RUFMVjtFQVFNO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0VBTlY7RUFTTTtJQUNJLFFBQUE7SUFDQSxXQUFBO0VBUFY7QUFDRjtBQVdBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxTQUFBO0lBQ0Esc0JBQUE7RUFSTjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIGF1dG87XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuZXhwYW5kIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIuNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAubG9nc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDlyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogOXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogNjAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nc3ZnOmhvdmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkuNXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5LjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAubG9nc3ZnIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2M0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEzcHggMTJweCAxcHggcmdiYSgyNDYsIDEzNCwgNiwgMC4zKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxLjVzO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgLmxvZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5leHBhbmQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNyU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2M0IHtcclxuICAgICAgICAgICAgdG9wOiAyMSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YSB7XHJcbiAgICAgICAgd2lkdGg6IDk1dnc7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "db1J":
/*!**************************************!*\
  !*** ./src/app/exp/exp.component.ts ***!
  \**************************************/
/*! exports provided: ExpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpComponent", function() { return ExpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/loader */ "RnEW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
class ExpComponent {
    constructor() {
        this.num = 0;
        this.wid = document.body.clientWidth <= 768 ? 65 : 35;
        this.hei = document.body.clientWidth <= 768 ? 45 : 78;
        this.fragmentShader = `
    uniform vec3      iResolution;           // viewport resolution (in pixels)
    uniform float     iTime;                 // shader playback time (in seconds)
    uniform float     iTimeDelta;            // render time (in seconds)
    uniform int       iFrame;                // shader playback frame
    uniform float     iChannelTime[4];       // channel playback time (in seconds)
    uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
    uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
    uniform sampler2D iChannel0, iChannel1, iChannel2, iChannel3;          // input channel. XX = 2D/Cube
    uniform vec4      iDate;                 // (year, month, day, time in seconds)
    uniform float     iSampleRate;           // sound sample rate (i.e., 44100)

    float rand(vec2 n) {
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }

    float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);

        float res = mix(
            mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
            mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
        return res*res;
    }

    const mat2 m2 = mat2(0.8,-0.6,0.6,0.8);

    float fbm( in vec2 p ){
        float f = 0.0;
        f += 0.5000*noise( p ); p = m2*p*2.02;
        f += 0.2500*noise( p ); p = m2*p*2.03;
        f += 0.1250*noise( p ); p = m2*p*2.01;
        f += 0.0625*noise( p );

        return f/0.769;
    }

    float pattern( in vec2 p ) {
      vec2 q = vec2(fbm(p + vec2(0.0,0.0)));
      vec2 r = vec2( fbm( p + 4.0*q + vec2(1.7,9.2)));
      r+= iTime * 0.15;
      return fbm( p + 1.760*r );
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
        vec2 uv = fragCoord/iResolution.xy;
        
        uv *= 4.5; // Scale UV to make it nicer in that big screen !
        float displacement = pattern(uv);
        vec4 color = vec4(displacement * 1.2, 0.2, displacement * 5., 1.);
        
        color.a = min(color.r * 0.25, 1.); // Depth for CineShader
        fragColor = color;
    }

    void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
  `;
    }
    ngOnInit() {
        Object(_utils_loader__WEBPACK_IMPORTED_MODULE_2__["main"])(this.fragmentShader, 'app-exp', '#c2');
        //const getRandInt = (max: number) => Math.floor(Math.random() * max);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(2000).subscribe(() => {
            this.num = this.num % 2 == 0 ? 1 : 0;
        });
    }
}
ExpComponent.ɵfac = function ExpComponent_Factory(t) { return new (t || ExpComponent)(); };
ExpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpComponent, selectors: [["app-exp"]], decls: 23, vars: 4, consts: [[1, "desc"], [1, "tit"], [1, "details"], ["id", "c2", 3, "ngStyle"]], template: function ExpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Experiencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dentro de mi etapa de estudios en la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " universidad trabaje en dos proyectos, en ambos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " proyectos tuve roles activos en el dise\u00F1o, no ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " solo en el aspecto grafico, si no tambi\u00E9n en un ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " aspecto m\u00E1s t\u00E9cnico, m\u00E1s concretamente en el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " dise\u00F1o e implementaci\u00F3n de API\u2019s web para el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " consumo de aplicaciones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "En ambos proyectos me encargue de gran parte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " del servidor, y en cierta medida en las GUI.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "canvas", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.wid + ctx.num + "vw", ctx.hei + ctx.num + "vh"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".desc[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  z-index: 100;\n  top: 15%;\n  right: 25%;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  background-color: transparent;\n}\n.desc[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n  font-size: 36px;\n  text-align: right;\n  margin-bottom: 6rem;\n}\n.desc[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 768px) {\n  .desc[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n    font-size: 9vw;\n    margin-bottom: 2.5rem;\n  }\n  .desc[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    font-size: 4vw;\n  }\n}\n@media screen and (max-width: 768px) {\n  .desc[_ngcontent-%COMP%] {\n    width: 80vw;\n    top: 10%;\n    right: 15%;\n  }\n}\n#c2[_ngcontent-%COMP%] {\n  width: 35vw;\n  height: 78vh;\n  margin: 0 8%;\n  box-shadow: 7px 10px 10px 1px rgba(108, 51, 255, 0.3);\n  transition: 1.4s;\n}\n@media screen and (max-width: 768px) {\n  #c2[_ngcontent-%COMP%] {\n    width: 65vw;\n    height: 45vh;\n    margin: 10% 8%;\n    margin-left: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGV4cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBR0k7RUFDSTtJQUNJLGNBQUE7SUFDQSxxQkFBQTtFQURWO0VBSU07SUFDSSxjQUFBO0VBRlY7QUFDRjtBQU1BO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7RUFITjtBQUNGO0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0FBSko7QUFPQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFKTjtBQUNGIiwiZmlsZSI6ImV4cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXNjIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgcmlnaHQ6IDI1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC50aXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDl2dztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGVzYyB7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgIH1cclxufVxyXG5cclxuI2MyIHtcclxuICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgaGVpZ2h0OiA3OHZoO1xyXG4gICAgbWFyZ2luOiAwIDglO1xyXG4gICAgYm94LXNoYWRvdzogN3B4IDEwcHggMTBweCAxcHggcmdiYSgxMDgsIDUxLCAyNTUsIDAuMyk7XHJcbiAgICB0cmFuc2l0aW9uOiAxLjRzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI2MyIHtcclxuICAgICAgICB3aWR0aDogNjV2dztcclxuICAgICAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICAgICAgbWFyZ2luOiAxMCUgOCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exp',
                templateUrl: './exp.component.html',
                styleUrls: ['./exp.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _exp_exp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp/exp.component */ "db1J");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _indi_project_indi_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indi-project/indi-project.component */ "9S/N");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");









const routes = [
    { path: '', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], data: { animationState: 'one' } },
    { path: 'exp', component: _exp_exp_component__WEBPACK_IMPORTED_MODULE_3__["ExpComponent"], data: { animationState: 'two' } },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], data: { animationState: 'three' } },
    { path: 'individual', component: _indi_project_indi_project_component__WEBPACK_IMPORTED_MODULE_5__["IndiProjectComponent"], data: { animationState: 'four' } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], data: { animationState: 'five' } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.service */ "+qrf");
/* harmony import */ var _node_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node/node.service */ "PKHM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = ["load"];
function ProjectsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectsComponent_div_3_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const project_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.loadPro(project_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", project_r3.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectsComponent_div_3_div_1_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.data);
} }
class ProjectsComponent {
    constructor(projects, node) {
        this.projects = projects;
        this.node = node;
        this.data = undefined;
        this.projects.getProjects().subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.data = yield data;
        }));
    }
    ngAfterViewInit() {
        this.imags.changes.subscribe(t => {
            const itemsWrap = document.querySelector('.grid');
            const effect = new RGBShiftEffect(document.getElementsByClassName('conte')[0], itemsWrap, { strength: 0.25 });
        });
    }
    ngOnInit() {
        //preloadImages();
    }
    loadPro(proj) {
        this.node.changeProject(proj);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_node_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imags = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])], decls: 4, vars: 2, consts: [[1, "conte"], [1, "grid"], ["class", "grid-items", 4, "ngIf"], [4, "ngIf"], [1, "grid-items"], ["src", "../../assets/resources/load.gif", "alt", "Cargando...", "srcset", "", "width", "150", "height", "150"], ["class", "grid-items", 4, "ngFor", "ngForOf"], ["load", ""], ["routerLink", "/individual", 1, "link", 3, "click"], ["alt", "", 1, "content__img", 2, "width", "0", "height", "0", 3, "src"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProjectsComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProjectsComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".conte[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100%;\n}\n\n.grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n\n.grid-items[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.grid-items[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1.5rem 2rem;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n  color: black;\n}\n\n.grid-items[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   content__img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBSUUsYUFBQTtFQUlBLHVCQUFBO0VBSUEsbUJBQUE7QUFDSjs7QUFDSTtFQUlJLGFBQUE7RUFDQSxtQkFBQTtFQUtBLHNCQUFBO0VBSUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNaIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcbiAgXHJcbiAgLmdyaWQtaXRlbXMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmxpbmsge1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogMS41cmVtIDJyZW07XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICAgICAgIGNvbnRlbnRfX2ltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                providers: [_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]],
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }, { type: _node_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"] }]; }, { imags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['load']
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map