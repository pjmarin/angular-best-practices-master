import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

import { appRoutes } from './routes'
import { AppComponent }  from './app';
import { CatalogModule } from "./catalog/catalog.module";
import { RegisterComponent } from "./components/sign-in";
import { SignInComponent } from "./components/sign-in";
import { DataRepositoryService } from "./services/data-repository";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    CatalogModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent
  ],
  providers: [ DataRepositoryService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
