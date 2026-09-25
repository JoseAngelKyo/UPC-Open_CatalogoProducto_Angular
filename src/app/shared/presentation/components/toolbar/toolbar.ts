import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  imports: [
    MatToolbarModule,
    MatButtonToggleModule,
    TranslatePipe,
    MatIconModule
  ],
  selector: 'app-toolbar',
  styleUrl: './toolbar.css',
  templateUrl: './toolbar.html',
})
export class Toolbar {

  private readonly translate = inject(TranslateService);

  public currentLanguage: string = 'en';

  constructor() {
    this.translate.use('en');
  }

  public onLanguageChange(lang: string): void {
    this.currentLanguage = lang;
    this.translate.use(lang);
  }
}
