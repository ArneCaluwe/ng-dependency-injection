import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponentCollectionComponent } from './service-component-collection/service-component-collection.component';
import { ServiceComponentPrimaryComponent } from './service-component-primary/service-component-primary.component';
import { ModuleService } from '../module.service';

@NgModule({
  declarations: [
    ServiceComponentCollectionComponent,
    ServiceComponentPrimaryComponent,
  ],
  imports: [CommonModule],
  providers: [ModuleService],
  exports: [ServiceComponentCollectionComponent],
})
export class ServiceComponentsModule {}
