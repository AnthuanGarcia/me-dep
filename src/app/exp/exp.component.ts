import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { main } from '../utils/loader';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {
  num: number = 0;

  constructor() {}

  fragmentShader = `
    uniform vec3      iResolution;           // viewport resolution (in pixels)
    uniform float     iTime;                 // shader playback time (in seconds)
    uniform float     iTimeDelta;            // render time (in seconds)
    uniform int       iFrame;                // shader playback frame
    uniform float     iChannelTime[4];       // channel playback time (in seconds)
    uniform vec3      iChannelResolution[4]; // channel resolution (in pixels)
    uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
    uniform sampler2D iChannel0, iChannel1, iChannel2, iChannel3;          // input channel. XX = 2D/Cube
    uniform vec4      iDate;                 // (year, month, day, time in seconds)
    uniform float     iSampleRate;           // sound sample rate (i.e., 44100)

    float rand(vec2 n) {
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }

    float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);

        float res = mix(
            mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
            mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
        return res*res;
    }

    const mat2 m2 = mat2(0.8,-0.6,0.6,0.8);

    float fbm( in vec2 p ){
        float f = 0.0;
        f += 0.5000*noise( p ); p = m2*p*2.02;
        f += 0.2500*noise( p ); p = m2*p*2.03;
        f += 0.1250*noise( p ); p = m2*p*2.01;
        f += 0.0625*noise( p );

        return f/0.769;
    }

    float pattern( in vec2 p ) {
      vec2 q = vec2(fbm(p + vec2(0.0,0.0)));
      vec2 r = vec2( fbm( p + 4.0*q + vec2(1.7,9.2)));
      r+= iTime * 0.15;
      return fbm( p + 1.760*r );
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
        vec2 uv = fragCoord/iResolution.xy;
        
        uv *= 4.5; // Scale UV to make it nicer in that big screen !
        float displacement = pattern(uv);
        vec4 color = vec4(displacement * 1.2, 0.2, displacement * 5., 1.);
        
        color.a = min(color.r * 0.25, 1.); // Depth for CineShader
        fragColor = color;
    }

    void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
    }
  `;

  ngOnInit(): void {
    main(this.fragmentShader, 'app-exp', '#c2');

    //const getRandInt = (max: number) => Math.floor(Math.random() * max);

    interval(2000).subscribe(() => {
      this.num = this.num%2 == 0 ? 1 : 0;
    })
  }

}
