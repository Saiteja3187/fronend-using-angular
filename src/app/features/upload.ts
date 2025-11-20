import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrtService } from '../services/srt';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.html',
  styleUrls: ['./upload.scss']
})
export class UploadComponent {

  selectedFile: File | null = null;
  loading = false;

  // Signal instead of normal variable
  results = signal<any>(null);

  constructor(private srtService: SrtService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) return;

    this.loading = true;

    this.srtService.uploadSrt(this.selectedFile).subscribe({
      next: (res) => {
        this.loading = false;
        this.results.set(res);   // Trigger UI update
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
