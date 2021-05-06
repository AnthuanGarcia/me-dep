import { Component, OnInit, QueryList, ViewChildren, AfterViewInit  } from '@angular/core';
import { ProjectsService } from './projects.service';
import { NodeService } from '../node/node.service';
import { Router } from '@angular/router';

//import * as THREE from 'three';

declare var RGBShiftEffect: any;
declare var THREE: any

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers: [ProjectsService],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('load') imags!: QueryList<any>;

  data: any;
  
  constructor(
    private projects: ProjectsService,
    private node: NodeService,
  ) { 
    this.projects.getProjects().subscribe(async data => {
      this.data = await data;
    });
  }

  ngAfterViewInit(): void {
    this.imags.changes.subscribe(t => {

      const itemsWrap = document.querySelector('.grid');

      const effect = new RGBShiftEffect(
        document.getElementsByClassName('conte')[0],
        itemsWrap,
        {strength: 0.25}
      );

    });
  }

  ngOnInit(): void {

   //preloadImages();
  }

  loadPro(proj: any) {
    this.node.changeProject(proj);
  }
}
