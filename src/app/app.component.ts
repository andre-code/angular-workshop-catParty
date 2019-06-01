import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  party = 'On 🥳';
  isParty = false;
  urlImage = "";
  urlImageNoParty = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';
  urlImageParty = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';

  constructor() {
    this.urlImage = this.urlImageNoParty;
  }
  playParty(){
    this.isParty = !this.isParty;
    this.party = this.isParty ? "Off ✋" : "On 🥳";
    this.urlImage = this.isParty ? 
                            this.urlImageParty : 
                            this.urlImageNoParty;
  };
}
