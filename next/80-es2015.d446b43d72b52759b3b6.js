(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"D7/f":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMobileCalendarModule",(function(){return X}));var a=n("An66"),o=n("3kIJ"),i=n("1VvW"),r=n("SVIu"),l=n("hLNI"),d=n("Qq0t"),c=n("l4xa"),m=n("dvRg"),u=n("kZht"),s=n("OZlg"),p=n("e0eB"),T=n("yZWP"),y=n("iyc4"),g=n("cWK9"),f=n("jIqt"),b=n("w0kG"),C=n("YtkY"),h=n("zV1d");let D=(()=>{class e{constructor(e,t,n){this.months=n,this.control=new o.FormControl(new c.TuiDay(2020,9,3)),this.date$=this.control.valueChanges.pipe(Object(f.a)(this.control.value),Object(b.a)(this.months),Object(C.a)(([e,t])=>this.getParsed(e,t)));const a=Object(c.tuiReplayedValueChangesFrom)(this.control),i=u.Injector.create({providers:[{provide:m.TUI_CALENDAR_DATA_STREAM,useValue:a}],parent:t}),r=new g.b(l.TuiMobileCalendarDialogComponent,i);this.dialog$=e.open(r,{size:"fullscreen",closeable:!1,data:{min:c.TuiDay.currentLocal()}})}get empty(){return!this.control.value}getParsed(e,t){if(!e)return"Choose a date";const{month:n,day:a,year:o}=e;return`${t[n]} ${a}, ${o}`}onClick(){this.dialog$.subscribe(e=>{this.control.setValue(e)})}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](d.TuiDialogService),u["\u0275\u0275directiveInject"](u.Injector),u["\u0275\u0275directiveInject"](d.TUI_MONTHS))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mobile-calendar-example-1"]],decls:5,vars:5,consts:[[1,"wrapper"],["tuiIconButton","","type","button","title","Choose a date","appearance","secondary","shape","rounded","icon","tuiIconCalendarLarge",3,"click"],[1,"date"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"button",1),u["\u0275\u0275listener"]("click",(function(){return t.onClick()})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"span",2),u["\u0275\u0275text"](3),u["\u0275\u0275pipe"](4,"async"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275classProp"]("date_empty",t.empty),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](u["\u0275\u0275pipeBind1"](4,3,t.date$)))},directives:[h.a],pipes:[a.b],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),e})();var _,S,A,I=n("EPR0"),v=n("+nax"),E=n("yHor"),M=n("zGJC"),x=n("u8jZ");_=$localize`:␟78eee463539a018cb7624d86dd51cd2d85eb1456␟865545313841625450: A calendar for mobile devices. It is used in ${"\ufffd#2\ufffd"}:START_LINK:InputDate${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: and ${"\ufffd#3\ufffd"}:START_LINK_1: InputDateRange ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: if ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: are both imported once in the main module `,_=u["\u0275\u0275i18nPostprocess"](_),S=$localize`:␟f105f2ad607575b562a8478c277b0f5c371ba723␟1928429328557389254: You can use ${"\ufffd#8\ufffd"}:START_TAG_CODE:TUI_CALENDAR_DATA_STREAM${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: token to set value from outside (see samples) `,A=$localize`:␟0ed69a09ce8592073b5bcda37a3421b0f15b525a␟4342005640125116549: Component should be used on mobile devices as fullscreen dialog `;const P=["heading",$localize`:␟0361f42c5934060e30ced524323effc0a4fe560f␟3980173860964639072:Custom dropdown`],$=function(){return["/components/input-date"]},O=function(){return["/components/input-date-range"]};function V(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,_),u["\u0275\u0275element"](2,"a",2),u["\u0275\u0275element"](3,"a",2),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"p"),u["\u0275\u0275i18nStart"](7,S),u["\u0275\u0275element"](8,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"strong"),u["\u0275\u0275i18n"](10,A),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](12,P),u["\u0275\u0275element"](13,"tui-mobile-calendar-example-1"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("routerLink",u["\u0275\u0275pureFunction0"](3,$)),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("routerLink",u["\u0275\u0275pureFunction0"](4,O)),u["\u0275\u0275advance"](8),u["\u0275\u0275property"]("content",e.example1)}}var L,w,R,j,k,N,G,H,z;function F(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,L),u["\u0275\u0275element"](1,"div"),u["\u0275\u0275element"](2,"strong"),u["\u0275\u0275i18nEnd"]())}function U(e,t){1&e&&u["\u0275\u0275i18n"](0,w)}function B(e,t){1&e&&u["\u0275\u0275i18n"](0,R)}function W(e,t){1&e&&u["\u0275\u0275i18n"](0,j)}function Y(e,t){1&e&&u["\u0275\u0275i18n"](0,k)}function K(e,t){1&e&&u["\u0275\u0275i18n"](0,N)}function J(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275element"](1,"tui-mobile-calendar",4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-documentation"),u["\u0275\u0275template"](3,F,3,0,"ng-template",5),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().disabledItemHandler=t})),u["\u0275\u0275template"](4,U,1,0,"ng-template",6),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().max=t})),u["\u0275\u0275template"](5,B,1,0,"ng-template",7),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().min=t})),u["\u0275\u0275template"](6,W,1,0,"ng-template",8),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().single=t})),u["\u0275\u0275template"](7,Y,1,0,"ng-template",9),u["\u0275\u0275template"](8,K,1,0,"ng-template",10),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("disabledItemHandler",e.disabledItemHandler)("max",e.max)("min",e.min)("single",e.single),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",e.single)}}function Z(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",11),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,G),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](6,"tui-doc-code",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"li"),u["\u0275\u0275elementStart"](8,"p"),u["\u0275\u0275i18nStart"](9,H),u["\u0275\u0275element"](10,"code"),u["\u0275\u0275element"](11,"code"),u["\u0275\u0275element"](12,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](13,"tui-doc-code",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"li"),u["\u0275\u0275elementStart"](15,"p"),u["\u0275\u0275i18n"](16,z),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](17,"tui-doc-code",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("code",e.exampleImportModule),u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("code",e.exampleImportDialogModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}function q(e){return e.stream}L=$localize`:␟c98678197ea98e1f5d179414969ee7d8dbdcefbb␟1004572627847397831:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,w=$localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `,R=$localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `,j=$localize`:␟2a1554aaea9c8357628e5c7de4f8fb7615e37d70␟4032379093756044480: Single date or a range `,k=$localize`:␟166ac781bfe693de7c6c507c3747d4fad5808bfe␟8437696185745475137: "Cancel" clicked `,N=$localize`:␟0b81f93ee05a0d9a3237fb88342921b96a0aec2a␟3862541995331771793: "Confirm" button clicked `,G=$localize`:␟ca588819ac4ec61a814c286dfbc0f57f3aa24973␟194075401487100702: Import ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiMobileCalendarModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: once into the main module `,G=u["\u0275\u0275i18nPostprocess"](G),H=$localize`:␟a448f82c6f5ac9a0ac04ed774204f6b5fe5713c3␟5351309614134079765: Import ${"[\ufffd#10\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: for automatic use with ${"[\ufffd#10\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TuiInputDate${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#10\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TuiInputDateRange${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: : `,H=u["\u0275\u0275i18nPostprocess"](H),z=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Q=(()=>{class e{constructor(){this.exampleImportModule="import {TuiMobileCalendarModule} from '@taiga-ui/addon-mobile';\nimport {TuiDialogModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiDialogModule,\n        TuiMobileCalendarModule,\n    ],\n...\n",this.exampleImportDialogModule="import {TuiMobileCalendarDialogModule} from '@taiga-ui/addon-mobile';\nimport {TuiInputDateModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiMobileCalendarDialogModule,\n        TuiInputDateModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-mobile-calendar\n    [min]="min"\n    [max]="max"\n    [single]="false"\n    [disabledItemHandler]="disabledItemHandler"\n></tui-mobile-calendar>\n',this.example1={TypeScript:"import {Component, Inject, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';\nimport {TuiDay, tuiReplayedValueChangesFrom} from '@taiga-ui/cdk';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {TUI_MONTHS} from '@taiga-ui/core';\nimport {TUI_CALENDAR_DATA_STREAM} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {map, startWith, withLatestFrom} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n// @dynamic\n@Component({\n    selector: 'tui-mobile-calendar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMobileCalendarExample1 {\n    private readonly control = new FormControl(new TuiDay(2020, 9, 3));\n\n    private readonly dialog$: Observable<TuiDay>;\n\n    readonly date$ = this.control.valueChanges.pipe(\n        startWith(this.control.value),\n        withLatestFrom(this.months),\n        map(([value, months]) => this.getParsed(value, months)),\n    );\n\n    constructor(\n        @Inject(TuiDialogService) dialogService: TuiDialogService,\n        @Inject(Injector) injector: Injector,\n        @Inject(TUI_MONTHS) private readonly months: Observable<string[]>,\n    ) {\n        const dataStream = tuiReplayedValueChangesFrom(this.control);\n        const computedInjector = Injector.create({\n            providers: [\n                {\n                    provide: TUI_CALENDAR_DATA_STREAM,\n                    useValue: dataStream,\n                },\n            ],\n            parent: injector,\n        });\n        const content = new PolymorpheusComponent(\n            TuiMobileCalendarDialogComponent,\n            computedInjector,\n        );\n\n        this.dialog$ = dialogService.open(content, {\n            size: 'fullscreen',\n            closeable: false,\n            data: {\n                min: TuiDay.currentLocal(),\n            },\n        });\n    }\n\n    get empty(): boolean {\n        return !this.control.value;\n    }\n\n    getParsed(value: TuiDay, months: string[]): string {\n        if (!value) {\n            return 'Choose a date';\n        }\n\n        const {month, day, year} = value as TuiDay;\n\n        return `${months[month]} ${day}, ${year}`;\n    }\n\n    onClick() {\n        this.dialog$.subscribe(value => {\n            this.control.setValue(value);\n        });\n    }\n}\n",HTML:'<div class="wrapper">\n    <button\n        tuiIconButton\n        type="button"\n        title="Choose a date"\n        appearance="secondary"\n        shape="rounded"\n        icon="tuiIconCalendarLarge"\n        (click)="onClick()"\n    ></button>\n    <span class="date" [class.date_empty]="empty">{{date$ | async}}</span>\n</div>\n',LESS:".wrapper {\n    display: flex;\n    align-items: center;\n}\n\n.date {\n    margin-left: 1rem;\n\n    &_empty {\n        color: var(--tui-text-03);\n    }\n}\n"},this.minVariants=[c.TUI_FIRST_DAY,new c.TuiDay(2017,2,5),new c.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[c.TUI_LAST_DAY,new c.TuiDay(2020,2,5),new c.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.single=!0,this.disabledItemHandlerVariants=[c.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new o.FormControl,this.stream=Object(c.tuiReplayedValueChangesFrom)(this.control)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-mobile-calendar"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:m.TUI_CALENDAR_DATA_STREAM,deps:[e],useFactory:q}])],decls:4,vars:0,consts:[["header","MobileCalendar","package","ADDON-MOBILE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","dropdown",3,"content",6,"heading"],[1,"calendar",3,"disabledItemHandler","max","min","single"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","single","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cancel","documentationPropertyMode","output","documentationPropertyType","void"],["documentationPropertyName","confirm","documentationPropertyMode","output","documentationPropertyType","TuiDayRange | TuiDay"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,V,14,5,"ng-template",1),u["\u0275\u0275template"](2,J,9,11,"ng-template",1),u["\u0275\u0275template"](3,Z,18,3,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[s.a,p.a,T.a,i.e,y.a,D,I.a,v.a,E.a,M.a,x.a],styles:[".calendar[_ngcontent-%COMP%]{height:28.75rem}"],changeDetection:0}),e})(),X=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.ReactiveFormsModule,d.TuiLinkModule,d.TuiButtonModule,l.TuiMobileCalendarModule,l.TuiMobileCalendarDialogModule,r.h,i.f.forChild(Object(r.o)(Q))]]}),e})()}}]);