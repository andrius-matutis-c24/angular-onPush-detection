import { Component } from '@angular/core';
import { NameComponent } from './name.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-change-detection-root',
  standalone: true,
  imports: [
    NameComponent,
    CommonModule
  ],
  styles: [':host{display: block}'],
  template: `
    <button (click)="changeName()">Change Name</button>
    <button (click)="changeUser()">Change Name (ref)</button>
    <button (click)="triggerChangeDetection()">triggerChangeDetection in root</button>
    <details><summary>Root value: {{user.name}}</summary><pre>{{user | json}}</pre></details>

    <app-name [user]="user"></app-name>
  `,
})
export class DefaultRootComponent {
  protected user:{name: string} = {name: 'Foo'};
  
  protected changeName(): void {
    this.user.name = this.user.name === 'Bar' ? 'Foo' : 'Bar';
  }

  protected changeUser(): void {
    this.user = {
      ...this.user,
      name: this.user.name === 'Bar' ? 'Foo' : 'Bar'
    };
  }

  protected triggerChangeDetection(): void {}
}
