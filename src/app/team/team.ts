import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {

}
