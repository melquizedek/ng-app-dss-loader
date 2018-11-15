import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderDirective } from './directives/component-loader.directive';
import { ConfigService } from './services/config-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ ConfigService ],
  declarations: [ComponentLoaderDirective],
  exports: [ComponentLoaderDirective]
})
export class SharedCoreModule { }
