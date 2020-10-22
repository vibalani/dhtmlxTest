import { Component } from '@angular/core';
import '../codebase/spreadsheet.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dhtmlXTest';

  spreadsheet: any = {};

  // tslint:disable-next-line: align
  this.spreadsheet = new dhx.Spreadsheet(this.container.nativeElement, {
    editLine: false
  });

}
