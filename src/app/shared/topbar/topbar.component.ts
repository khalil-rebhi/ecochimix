import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  socialLinks : {facebook : string , instagram : string, linkedin : string} = { facebook : "#" , instagram : "#" , linkedin : "#"}
}
