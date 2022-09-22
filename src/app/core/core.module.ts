import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AccountMenuComponent } from "./account-menu";

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [ AccountMenuComponent ],
  declarations: [ AccountMenuComponent ],
  providers: []
})

export class CoreModule {};