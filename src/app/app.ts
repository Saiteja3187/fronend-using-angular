import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadComponent } from './features/upload';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UploadComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fronend-using-angular');
}
