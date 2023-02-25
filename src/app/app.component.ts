import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SecondServiceComponentsModule } from './second-service-components/second-service-components.module';
import { ServiceComponentsModule } from './service-components/service-components.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ServiceComponentsModule,
    SecondServiceComponentsModule,
  ],
  template: `
  <div class="container">
    <app-service-component-collection />
    <app-service-component-collection />
    <app-second-service-component-collection />
  </div>
    `,
  styles: [],
})
export class AppComponent {
  title = 'dependency-injection';
}
