import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Project } from '../model/project';
import { NodeService } from '../node/node.service';

@Component({
  selector: 'app-indi-project',
  templateUrl: './indi-project.component.html',
  styleUrls: ['./indi-project.component.scss']
})
export class IndiProjectComponent implements OnInit, AfterViewInit {
  @ViewChildren('imgload') imags!: QueryList<any>;

  project: Project = new Project();
  slideIdx: number = 1;
  slides = document.getElementsByClassName("mySlides");

  imgWidth: number = 0;
  imgHeight: number = 0;

  contSizeW: number = 0;

  factor: number = document.body.clientWidth / (document.body.clientWidth + 100*25);

  mobil: boolean = document.body.clientWidth <= 768;

  logos: any = {
    'Flutter':    'https://i.ibb.co/n0b4Xq6/flutter-logo.png',
    'Angular':    'https://i.ibb.co/N1vBGVv/angular-logo.png',
    'Golang':     'https://i.ibb.co/FWFBFFj/golang-logo.png',
    'HTML':       'https://i.ibb.co/M786kxb/html-logo.png',
    'CSS':        'https://i.ibb.co/Kxwcrnn/css-logo.png',
    'JavaScript': 'https://i.ibb.co/jvQxWXn/js-logo.png'
  };

  // logo: [width, height]
  logoResolutions: any = {
    'Flutter':    [this.mobil ? 50 : 60.5,      this.mobil ? 65 : 75],
    'Angular':    [this.mobil ? 75 : 900 / 10,  this.mobil ? 75 : 900 / 10],
    'Golang':     [this.mobil ? 90 : 1200 / 10, this.mobil ? 35 : 451 / 10],
    'HTML':       [this.mobil ? 65 : 750 / 10,  this.mobil ? 95 : 1245 / 10],
    'CSS':        [this.mobil ? 65 : 750 / 10,  this.mobil ? 95 : 1245 / 10],
    'JavaScript': [this.mobil ? 70 : 225 * .4,  this.mobil ? 70 : 225  * .4],
  }

  constructor(private proj: NodeService) {
    let resolutionW: number;
    let resolutionH: number;

    this.proj.data$.subscribe(res => {
      this.project = res;

      if (res.title == "ArduRemote") resolutionW = 1080, resolutionH = 1920;
      else if (res.title == "IMCH") resolutionW = 1370, resolutionH = 660;

      this.imgWidth = resolutionW * this.factor;
      this.imgHeight = resolutionH * this.factor;
      
      this.contSizeW = this.imgWidth > this.imgHeight ? 60 : 40;
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIdx);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIdx += n);
  }

  showSlides(n: number) {
    let i;

    if (n > this.slides.length) this.slideIdx = 1;
    if (n < 1) this.slideIdx = this.slides.length;

    for (i = 0; i < this.slides.length; i++)
      this.slides[i].setAttribute('style', 'display: none;');

    this.slides[this.slideIdx - 1].setAttribute('style', 'display: block;');
  }

}
