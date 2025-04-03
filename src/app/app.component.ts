import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RestService } from './modules/shared/services/rest.service';
import { SharedModule } from './modules/shared/shared.module';
import { ConfirmationService } from './modules/shared/services/confirmation.service';
import { KeyboardShortcutEvent } from './modules/shared/Utils';
import { ModalComponent } from './components/modal/modal.component';
import { RestSimple } from './modules/shared/services/Rest';
import { HttpClientModule } from '@angular/common/http';
import { Store } from './modules/shared/RestModels';
//import { HeaderComponent } from './components/header/header.component';
import { BuildInfo } from './modules/shared/BuildInfo';
//import { PageStructureComponent } from "./modules/shared/page-structure/page-structure.component";

@Component
({
  selector: 'app-root',
    standalone: true,
  templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterModule, SharedModule, ModalComponent  ]
})
export class AppComponent implements OnInit {
	title = 'POSProcesos';
	store_name:string = '';

	build_info = BuildInfo;

	constructor(protected rest:RestService, public confirmation:ConfirmationService, public router:Router)
	{

	}

	ngOnInit(): void
	{
		if( this.rest.user )
		{
			console.log('FOOO user', this.rest.user);
			this.router.navigate(['/dashboard']);
		}
		else
		{
			console.log('NO user');
			this.router.navigate(['/login']);
		}
	}

	keyHandler(kse:KeyboardShortcutEvent)
	{

		if( this.confirmation.show_confirmation )
		{
			if( kse.shortcut.key_combination == 'Enter' )
			{
				kse.stopPropagation();
				this.confirmation.onAccept();
				return;
			}

			if( kse.shortcut.key_combination == 'Escape' )
			{
				kse.stopPropagation();
				this.confirmation.onCancel();
			}
		}
	}
}
