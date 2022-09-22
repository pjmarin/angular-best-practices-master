import {Component, Input} from '@angular/core'

@Component({
  selector: 'loading-spinner-component',
  template: '<img *ngIf="loading" src="../../assets/images/loading.gif" />'
})
export class LoadingSpinnerComponent {
  @Input() loading:boolean
}
