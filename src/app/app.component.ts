import { Component } from '@angular/core';
import { ProcessbarService } from './shared/services/processbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    public processBarService: ProcessbarService
  ) { }
}
