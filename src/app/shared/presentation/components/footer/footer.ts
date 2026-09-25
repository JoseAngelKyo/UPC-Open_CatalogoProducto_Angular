import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})

export class Footer {

  public readonly developerCode: string='U202422128';
  public readonly developerName: string ='Jose Carlos Vargas Enriquez';
}
