import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { NumberPadComponent } from './components/numberPad/numberPad.component';
import { NumberPadContainerComponent } from './components/numberPad/numberPadContainer.component';
import { NumberPadSlotComponent } from './components/numberPad/numberPadSlot.component';
import { NumberPadAngularElementContainerComponent } from './components/numberPadAngularElement/numberPadAngularElementContainer.component';
import { NumberPadContainerPolymerComponent } from './components/numberPadPolymer/numberPadContainerPolymer.component';
import { NumberPadContainerShadowComponent } from './components/numberPadShadow/numberPadContainerShadow.component';
import { NumberPadShadowComponent } from './components/numberPadShadow/numberPadShadow.component';
import { NumberPadShadowSlotComponent } from './components/numberPadShadow/numberPadShadowSlot.component';
import { MultiSlotComponent } from './components/slots/multiSlot.component';
import { SingleSlotComponent } from './components/slots/singleSlot.component';
import { SlotContainerComponent } from './components/slots/slotContainer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumberPadComponent,
    NumberPadContainerComponent,
    NumberPadShadowComponent,
    NumberPadContainerShadowComponent,
    NumberPadContainerPolymerComponent,
    SingleSlotComponent,
    MultiSlotComponent,
    NumberPadSlotComponent,
    NumberPadShadowSlotComponent,
    SlotContainerComponent,
    NumberPadAngularElementContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NumberPadShadowSlotComponent, NumberPadShadowComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule {
}
