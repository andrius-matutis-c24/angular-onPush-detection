import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, Signal, input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  standalone: true,
  imports: [],
  styles: [':host{display: block}'],
  template: '',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameChildComponent implements DoCheck {
  public ngDoCheck(): void {
    // runs always when parent runs change detection
    console.log('NameChildComponent.ngDoCheck')
  }
}
