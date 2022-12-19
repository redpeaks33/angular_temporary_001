import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-template-download',
  templateUrl: './file-template-download.component.html',
  styleUrls: ['./file-template-download.component.scss']
})
export class FileTemplateDownloadComponent implements OnInit {

  fileUrl : string | undefined;
  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });
    this.fileUrl = <string>this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/Book1.csv');
    link.setAttribute('download', `Book1.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
