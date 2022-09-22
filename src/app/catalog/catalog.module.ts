import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { CatalogComponent } from './catalog.component';

@NgModule({
    imports: [ CommonModule, RouterModule, SharedModule ],
    exports: [ CommonModule, CatalogComponent, SharedModule ],
    declarations: [ CatalogComponent ],
    providers: []
  })
  
  export class CatalogModule {};