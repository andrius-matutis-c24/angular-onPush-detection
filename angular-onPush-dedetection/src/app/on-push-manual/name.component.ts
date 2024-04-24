import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, Signal, input } from '@angular/core';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [],
  styles: [':host{display: block}'],
  template: 'Name: {{user?.name}}',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements DoCheck {
  private lastValue?: any;

  public constructor (private changeDetectionRef: ChangeDetectorRef) {}
  @Input() public user?: {name: string};


  public ngDoCheck(): void {
    console.log({lv:this.lastValue, u: this.user})
    if (this.lastValue?.name !== this.user?.name) {
        this.lastValue = {...this.user};
        this.changeDetectionRef.markForCheck();
    }
  }
}
