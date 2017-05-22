import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { ServiceWorkerModule, NgServiceWorker } from '@angular/service-worker';

import { LoadingModule } from './loading/loading.module';
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule } from './app.routing.module';

import { BookModule } from './book/book.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'buecher' }),
    NavigationModule,
    // ServiceWorkerModule,
    BookModule,
    LoadingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(private sw: NgServiceWorker) {
  //   this.sw
  //     .registerForPush({ applicationServerKey: '9423zhroefz9brzp938z 3' })
  //     .subscribe(sub => console.log(sub));

  //   this.sw
  //     .push
  //     .subscribe(notification => console.info(notification));
  // }
}
