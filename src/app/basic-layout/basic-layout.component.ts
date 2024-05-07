import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RulesModalComponent } from '../rules-modal/rules-modal.component';
import { GameplayComponent } from '../gameplay/gameplay.component';
import { ScoreComponent } from '../score/score.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    ScoreComponent,
    GameplayComponent,
    RulesModalComponent,
    LoginComponent,
    RegisterComponent],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.scss'
})
export class BasicLayoutComponent{
  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   document.documentElement.style.setProperty(
  //     '--vh',
  //     `${window.innerHeight * 0.01}px`
  //   );
  // }

  // ngOnInit() {
  //   this.onResize();
  // }
}
