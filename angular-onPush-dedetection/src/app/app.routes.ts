import { Routes } from '@angular/router';
import { DefaultRootComponent } from './default/root.component';
import { OnPushRootComponent } from './on-push/root.component';
import { OnPushManualRootComponent } from './on-push-manual/root.component';

export const routes: Routes = [
    { path: 'default', component: DefaultRootComponent },
    { path: 'on-push', component: OnPushRootComponent },
    { path: 'on-push-manual', component: OnPushManualRootComponent },
    
];
