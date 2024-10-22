import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent implements OnInit {

  socialLinks : {facebook : string , instagram : string, linkedin : string} = { facebook : "#" , instagram : "#" , linkedin : "#"}
  message : {title : string , prefix : string , description : string, thank : string , contact : string} = { title : "Our website is undergoing maintenance!" , prefix : "WE'LL BE BACK SOON", description : "We're making improvements and will be back online shortly.", thank : "Thank you for your patience!" , contact : "Connect with us" }
  
  ngOnInit(): void {
    const languageCode = navigator.language.split('-')[0];
    switch (languageCode) {
      case "ar":
        this.message = {
          "title": "موقعنا في حالة صيانة!",
          "prefix": "سنعود قريبًا",
          "description": "نحن نجري تحسينات وسنعود على الإنترنت قريبًا.",
          "thank": "شكرًا لصبرك!",
          "contact": "تواصل معنا"
      }
      
        break;
      case "fr":
        this.message = {
          "title": "Notre site web est en maintenance !",
          "prefix": "NOUS REVIENDRONS BIENTÔT",
          "description": "Nous faisons des améliorations et nous reviendrons en ligne sous peu.",
          "thank": "Merci de votre patience !",
          "contact": "Connectez-vous avec nous"
      }
          break;      
      default:
        break;
    }
  }

}
