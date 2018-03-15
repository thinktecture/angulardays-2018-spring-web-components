import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NumberPadContainerComponent } from './components/numberPad/numberPadContainer.component';
import { NumberPadAngularElementContainerComponent } from './components/numberPadAngularElement/numberPadAngularElementContainer.component';
import { NumberPadContainerPolymerComponent } from './components/numberPadPolymer/numberPadContainerPolymer.component';
import { NumberPadContainerShadowComponent } from './components/numberPadShadow/numberPadContainerShadow.component';
import { SlotContainerComponent } from './components/slots/slotContainer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'controls',
    children: [
      {
        path: 'numberPad',
        component: NumberPadContainerComponent,
      },
    ],
  },
  {
    path: 'shadowControls',
    children: [
      {
        path: 'numberPad',
        component: NumberPadContainerShadowComponent,
      },
    ],
  },
  {
    path: 'webComponents',
    children: [
      {
        path: 'numberPad',
        component: NumberPadContainerPolymerComponent,
      },
    ],
  },
  {
    path: 'angularElement',
    children: [
      {
        path: 'numberPad',
        component: NumberPadAngularElementContainerComponent,
      },
    ],
  },
  {
    path: 'slots',
    component: SlotContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
