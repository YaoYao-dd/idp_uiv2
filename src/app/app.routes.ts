import { Routes } from '@angular/router';
import { Biz1Component } from './components/biz1/biz1.component';
import { Biz2Component } from './components/biz2/biz2.component';
import { DefaultContentComponent } from './components/default-content/default-content.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: DefaultContentComponent },
    { path: 'b1/:b1id', component: Biz1Component },
    { path: 'b2', component: Biz2Component },
    { path: 'formd', component: FormDemoComponent },
    { path: '**', component: PageNotFoundComponent },
];
