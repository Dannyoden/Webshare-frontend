import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {InputComponent} from './input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token/interceptor';
import { AuthService } from './auth/service';

import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatFormFieldModule,
  MatProgressBarModule, MatProgressSpinnerModule
} from '@angular/material';
import {TransferComponent} from './transfer/transfer.component';



import {RouterModule, PreloadAllModules, Routes} from '@angular/router';
// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);


import { AppComponent } from './app.component';
import {ROUTES} from './aoo.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransferComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    FilePondModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule, MatProgressBarModule, MatProgressSpinnerModule, BrowserAnimationsModule
  ],
  providers: [ AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
