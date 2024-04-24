import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, Signal, input } from '@angular/core';
import { NameChildComponent } from './name-child.component';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [NameChildComponent],
  styles: [':host{display: block}'],
  template: `
    Name: {{user?.name}}
    <app-name-child></app-name-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements DoCheck {
  private lastValue?: any;

  public constructor (private changeDetectionRef: ChangeDetectorRef) {}
  @Input() public user?: {name: string};


  public ngDoCheck(): void {
    // runs always when parent runs change detection
    console.log('NameComponent.ngDoCheck', {lastValue:this.lastValue, user: this.user})
    if (this.lastValue?.name !== this.user?.name) {
        this.lastValue = {...this.user};
        this.changeDetectionRef.markForCheck();
    }
  }
}
