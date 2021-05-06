import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { routeTransitionAnimations } from './anim/animateTransitions';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//import { makeTextSprite } from './utils/text3d';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit{

  constructor(){
  }

  sele: boolean[] = [
    false,
    false,
    false,
    false
  ]

  aux: number = 0;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
  }

  ngOnInit(): void {
  }

  selected(n: number) {
    this.sele[this.aux] = false;
    this.sele[n-1] = true;
    this.aux = n-1;
  }
}
