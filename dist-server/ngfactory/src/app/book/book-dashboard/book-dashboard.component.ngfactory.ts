/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './book-dashboard.component.sass.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../book-grid/book-grid.component.ngfactory';
import * as import3 from '../../../../../../src/app/book/book-grid/book-grid.component';
import * as import4 from '@angular/common';
import * as import5 from '../book-list/book-list.component.ngfactory';
import * as import6 from '../../../../../../src/app/book/book-list/book-list.component';
import * as import7 from '../book-top-navigation/book-top-navigation.component.ngfactory';
import * as import8 from '../../../../../../src/app/book/book-top-navigation/book-top-navigation.component';
import * as import9 from '../../../../../../src/app/book/core/google-books.service';
import * as import10 from '../../../../../../src/app/book/book-dashboard/book-dashboard.component';
import * as import11 from '../book-add-form/book-add-form.component.ngfactory';
import * as import12 from '../../../../../../src/app/book/book-add-form/book-add-form.component';
import * as import13 from '../book-view-toggle/book-view-toggle.component.ngfactory';
import * as import14 from '../../../../../../src/app/book/book-view-toggle/book-view-toggle.component';
import * as import15 from '../../../../../../src/app/book/core/book.service';
import * as import16 from '../../../../../../src/app/book/core/book.bus';
const styles_BookDashboardComponent:any[] = [import0.styles];
export const RenderType_BookDashboardComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_BookDashboardComponent,
  data: {}
}
);
function View_BookDashboardComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'tr-book-grid',([] as any[]),(null as any),(null as any),(null as any),import2.View_BookGridComponent_0,import2.RenderType_BookGridComponent)),
      import1.ɵdid(114688,(null as any),0,import3.BookGridComponent,([] as any[]),{books: [
        0,
        'books'
      ]
    },(null as any)),
    import1.ɵpid(131072,import4.AsyncPipe,[import1.ChangeDetectorRef])
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = import1.ɵunv(v,1,0,import1.ɵnov(v,2).transform(co.books));
    ck(v,1,0,currVal_0);
  },(null as any));
}
function View_BookDashboardComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'tr-book-list',([] as any[]),(null as any),(null as any),(null as any),import5.View_BookListComponent_0,import5.RenderType_BookListComponent)),
      import1.ɵdid(114688,(null as any),0,import6.BookListComponent,([] as any[]),{books: [
        0,
        'books'
      ]
    },(null as any)),
    import1.ɵpid(131072,import4.AsyncPipe,[import1.ChangeDetectorRef]),
    (l()(),import1.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = import1.ɵunv(v,2,0,import1.ɵnov(v,3).transform(co.books));
    ck(v,2,0,currVal_0);
  },(null as any));
}
export function View_BookDashboardComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'tr-book-top-navigation',([] as any[]),(null as any),(null as any),(null as any),import7.View_BookTopNavigationComponent_0,import7.RenderType_BookTopNavigationComponent)),
    import1.ɵdid(49152,(null as any),0,import8.BookTopNavigationComponent,[import9.GoogleBooksService],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),14,'div',[[
        'class',
        'container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'tr-book-add-form',([] as any[]),(null as any),[[
        (null as any),
        'create'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import10.BookDashboardComponent = v.component;
      if (('create' === en)) {
        const pd_0:any = ((<any>co.addBookToList($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import11.View_BookAddFormComponent_0,import11.RenderType_BookAddFormComponent)),
    import1.ɵdid(49152,(null as any),0,import12.BookAddFormComponent,([] as any[]),(null as any),{create: 'create'}),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),0,'hr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'tr-view-toggle',([] as any[]),(null as any),[[
        (null as any),
        'changed'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import10.BookDashboardComponent = v.component;
      if (('changed' === en)) {
        const pd_0:any = ((<any>co.setViewMode($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import13.View_ViewToggleComponent_0,import13.RenderType_ViewToggleComponent)),
    import1.ɵdid(114688,(null as any),0,import14.ViewToggleComponent,([] as any[]),(null as any),{changed: 'changed'}),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
    (l()(),import1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_BookDashboardComponent_1)),
    import1.ɵdid(16384,(null as any),0,import4.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
    ,{
      ngIf: [
        0,
        'ngIf'
      ]
      ,
      ngIfElse: [
        1,
        'ngIfElse'
      ]

    }
    ,(null as any)),
    (l()(),import1.ɵted((null as any),['\n\n  '])),
      (l()(),import1.ɵand(0,[[
        'bookList',
        2
      ]
    ],(null as any),0,(null as any),View_BookDashboardComponent_2)),
    (l()(),import1.ɵted((null as any),['\n\n'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import10.BookDashboardComponent = v.component;
    ck(v,11,0);
    const currVal_0:any = co.isGridEnabled;
    const currVal_1:any = import1.ɵnov(v,16);
    ck(v,14,0,currVal_0,currVal_1);
  },(null as any));
}
function View_BookDashboardComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'tr-book-dashboard',([] as any[]),(null as any),(null as any),(null as any),View_BookDashboardComponent_0,RenderType_BookDashboardComponent)),
    import1.ɵdid(114688,(null as any),0,import10.BookDashboardComponent,[
      import15.BookService,
      import16.BookBus
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const BookDashboardComponentNgFactory:import1.ComponentFactory<import10.BookDashboardComponent> = import1.ɵccf('tr-book-dashboard',import10.BookDashboardComponent,View_BookDashboardComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovd29ya2JlbmNoL3RyYWluaW5ncy9hbmd1bGFyL25nLXB3YS9zcmMvYXBwL2Jvb2svYm9vay1kYXNoYm9hcmQvYm9vay1kYXNoYm9hcmQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L3dvcmtiZW5jaC90cmFpbmluZ3MvYW5ndWxhci9uZy1wd2Evc3JjL2FwcC9ib29rL2Jvb2stZGFzaGJvYXJkL2Jvb2stZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L3dvcmtiZW5jaC90cmFpbmluZ3MvYW5ndWxhci9uZy1wd2Evc3JjL2FwcC9ib29rL2Jvb2stZGFzaGJvYXJkL2Jvb2stZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovd29ya2JlbmNoL3RyYWluaW5ncy9hbmd1bGFyL25nLXB3YS9zcmMvYXBwL2Jvb2svYm9vay1kYXNoYm9hcmQvYm9vay1kYXNoYm9hcmQuY29tcG9uZW50LnRzLkJvb2tEYXNoYm9hcmRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8dHItYm9vay10b3AtbmF2aWdhdGlvbj48L3RyLWJvb2stdG9wLW5hdmlnYXRpb24+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblxuICA8dHItYm9vay1hZGQtZm9ybSAoY3JlYXRlKT1cImFkZEJvb2tUb0xpc3QoJGV2ZW50KVwiPjwvdHItYm9vay1hZGQtZm9ybT5cblxuICA8aHI+XG5cbiAgPHRyLXZpZXctdG9nZ2xlIChjaGFuZ2VkKT1cInNldFZpZXdNb2RlKCRldmVudClcIj48L3RyLXZpZXctdG9nZ2xlPlxuXG4gIDx0ci1ib29rLWdyaWQgW2Jvb2tzXT1cImJvb2tzIHwgYXN5bmNcIiAqbmdJZj1cImlzR3JpZEVuYWJsZWQ7IGVsc2UgYm9va0xpc3RcIj48L3RyLWJvb2stZ3JpZD5cblxuICA8bmctdGVtcGxhdGUgI2Jvb2tMaXN0PlxuICAgIDx0ci1ib29rLWxpc3QgW2Jvb2tzXT1cImJvb2tzIHwgYXN5bmNcIj48L3RyLWJvb2stbGlzdD5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuPC9kaXY+XG4iLCI8dHItYm9vay1kYXNoYm9hcmQ+PC90ci1ib29rLWRhc2hib2FyZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVUU7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBYzs7OztJQUFBO0lBQWQsU0FBYyxTQUFkOzs7OztJQUV1QjtJQUNyQjtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFjO0lBQXVDOzs7O0lBQXZDO0lBQWQsU0FBYyxTQUFkOzs7OztJQWJKO2dCQUFBO0lBQWlEO01BRWpEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBdUI7TUFFckI7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBa0I7UUFBQTtRQUFBO01BQUE7TUFBbEI7SUFBQTtnQkFBQTtJQUFzRTtJQUV0RTtJQUFJO01BRUo7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBZ0I7UUFBQTtRQUFBO01BQUE7TUFBaEI7SUFBQTtnQkFBQTtJQUFpRTtJQUVqRTtnQkFBQTs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBMEY7TUFFMUY7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUVjO0lBRVY7Ozs7SUFSSjtJQUVzQztJQUFBO0lBQXRDLFVBQXNDLG1CQUF0Qzs7Ozs7SUNWRjtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==
