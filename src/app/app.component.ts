import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  isDarkTheme: boolean = true;

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') == 'Dark' ? true : false;
    console.log(`Dark theme: ${this.isDarkTheme}`);
  }

  // Stores theme to browser storage to retain on reset
  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? 'Dark' : 'Light');
  }
}
