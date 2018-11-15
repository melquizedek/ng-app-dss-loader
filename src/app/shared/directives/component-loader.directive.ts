import { Directive, ViewContainerRef, Input, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ConfigService } from '../services/config-service.service';

@Directive({
  selector: '[componentLoader]'
})

export class ComponentLoaderDirective implements OnInit {

	@Input("componentLoader") componentToUsed : any;
	
	constructor(public viewContainerRef: ViewContainerRef,
				private componentFactoryResolver: ComponentFactoryResolver,
				private configService: ConfigService) {}

	ngOnInit() {
    
    	this.componentToUsed = this.configService.getConfig('ProfileModule', 'ViewProfileComponent');
    
		if (this.componentToUsed)
		{
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentToUsed.prototype.constructor);
			this.viewContainerRef.clear();
			let componentRef = this.viewContainerRef.createComponent(componentFactory);
    	}
    
	}

}