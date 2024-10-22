import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaintenanceComponent } from "./shared/maintenance/maintenance.component";
import { TopbarComponent } from "./shared/topbar/topbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaintenanceComponent, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecochimix';
}
