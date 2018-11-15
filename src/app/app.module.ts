import { NgModule, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigService } from './shared/services/config-service.service';
import { AppCoreComponent } from './app.component';
import { AppConfigModel } from './models/app-config.model';
import { AppRoutingCoreModule } from './app-routing.module';
import { SharedCoreModule } from './shared/shared.core.module';
import { ProfileCoreModule } from './profile/profile.core.module';

@NgModule({
  declarations: [
    	AppCoreComponent
  ],
  imports: [
		BrowserModule,
		AppRoutingCoreModule,
		SharedCoreModule,
		ProfileCoreModule
  ],
  providers: [
		ConfigService
  ],
  bootstrap: [AppCoreComponent],
  exports: [ProfileCoreModule]
})
export class AppLoaderModule { 
	
	static forRoot(config: any): any {
        return {
            ngModule: AppLoaderModule,
            providers: [
                {provide: AppConfigModel, useValue: config }
            ]
        };
    }
    
    constructor(@Optional() config: AppConfigModel, 
        private configService: ConfigService) {
        if (config) { 
            this.configService.setConfig(config);
        }
    }
}
