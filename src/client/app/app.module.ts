import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { ContentsModule } from './contents/contents.module';
import { HomeModule } from './home/home.module';
import { OrderWindowModule } from './order-window/order-window.module';
import { TermsModule } from './terms/terms.module';
import { SharedModule } from './shared/shared.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/database/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ContentsModule,
    FormsModule,
    AdminModule,
    HomeModule,
    OrderWindowModule,
    ReactiveFormsModule,
    TermsModule,
    SharedModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
