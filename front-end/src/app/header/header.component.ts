import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  divElementClub :any;
  divElementTeam:any;
  divElementResource:any;
  ngOnInit(){
    this.divElementTeam=document.querySelector(".team-manage-options");
    this.divElementClub=document.querySelector(".club-manage-options");
    this.divElementResource=document.querySelector(".resources-options");
    

  }

  showTeamManageOption(){
   

   this.divElementClub.style.display = "none";
   this.divElementResource.style.display = "none";

    if (this.divElementTeam.style.display === "flex" ) {
      this.divElementTeam.style.display = "none";
      console.log("none")
    } else {
      this.divElementTeam.style.display = "flex";
      console.log("flex")
    }
    console.log(this.divElementTeam);
    
  }
  showClubManageOption(){
    
    
   this.divElementTeam.style.display = "none";
   this.divElementResource.style.display = "none";
    if (this.divElementClub.style.display === "flex" ) {
      this.divElementClub.style.display = "none";
      console.log("none")
    } else {
      this.divElementClub.style.display = "flex";
      console.log("flex")
    }
    console.log(this.divElementClub);

  }
 
  showResourceOption(){
    this.divElementClub.style.display = "none";
    this.divElementTeam.style.display = "none";
    if (this.divElementResource.style.display === "flex" ) {
      this.divElementResource.style.display = "none";
      console.log("none")
    } else {
      this.divElementResource.style.display = "flex";
      console.log("flex")
    }

  }

}
