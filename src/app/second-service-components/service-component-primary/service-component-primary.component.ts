import { Component } from '@angular/core';
import { ComponentService } from 'src/app/component.service';
import { ModuleService } from 'src/app/module.service';
import { RootService } from 'src/app/root.service';

@Component({
  selector: 'app-service-component-primary',
  template: `
    <h1>Service Component</h1>
    <p>
      rootService: {{ rootService.number }}
      <button (click)="incrementRoot()">change</button>
    </p>
    <p>
      moduleService: {{ moduleService.number }}
      <button (click)="incrementModule()">change</button>
    </p>
    <p>
      componentService: {{ componentService.number }}
      <button (click)="incrementComponent()">change</button>
    </p>
  `,
  providers: [ComponentService],
  styles: [],
})
export class ServiceComponentPrimaryComponent {
  incrementRoot = () => this.rootService.number++;
  incrementModule = () => this.moduleService.number++;
  incrementComponent = () => this.componentService.number++;

  constructor(
    public rootService: RootService,
    public componentService: ComponentService,
    public moduleService: ModuleService
  ) {}
}
