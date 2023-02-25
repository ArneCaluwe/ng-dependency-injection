import { Component } from '@angular/core';
import { ComponentService } from 'src/app/component.service';
import { ModuleService } from 'src/app/module.service';
import { RootService } from 'src/app/root.service';

@Component({
  selector: 'app-second-service-component-collection',
  template: `
    <h1>Service Collection</h1>
    <p>
      rootService: {{ rootService.number }}
      <button (click)="incrementRoot()">change</button>
    </p>
    <p>
      moduleService: {{ moduleService.number }}
      <button (click)="incrementModule()">change</button>
    </p>
    <div class="container">
      <app-service-component-primary/>
      <app-service-component-primary/>
    </div>
  `,
  providers: [],
  styles: [],
})
export class ServiceComponentCollectionComponent {
  incrementRoot = () => this.rootService.number++;
  incrementModule = () => this.moduleService.number++;

  constructor(
    public rootService: RootService,
    public moduleService: ModuleService
  ) {}
}
