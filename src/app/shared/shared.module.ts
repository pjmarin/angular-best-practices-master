import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoreModule } from '../core/core.module';
import { CommonModule } from "@angular/common";

import { LoadingSpinnerComponent } from './loading-spinner.component';
import { NavBarComponent } from './nav-bar';

@NgModule({
    imports: [RouterModule, CoreModule, CommonModule ],
    exports: [ LoadingSpinnerComponent, NavBarComponent ],
    declarations: [ LoadingSpinnerComponent, NavBarComponent ],
    providers: []
  })
  
  export class SharedModule {};