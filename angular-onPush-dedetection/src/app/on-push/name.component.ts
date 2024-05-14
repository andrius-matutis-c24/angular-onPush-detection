import { ChangeDetectionStrategy, Component, Signal, input } from '@angular/core';
import { NameChildComponent } from './name-child.component';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [NameChildComponent],
  styles: [':host{display: block}'],
  template: `
    <b>User.name:</b> {{user().name}}
    <app-name-child></app-name-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent {
  public user = input.required<{name: string}>();
}
