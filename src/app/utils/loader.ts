import * as THREE from 'three';

export function main(shader: string, selector: string, id: string, img: string | null = null): void {
    const canva = <HTMLCanvasElement>document.getElementsByTagName(selector)[0].querySelector(id);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -1, // left
       1, // right
       1, // top
      -1, // bottom
      -1, // near,
       1, // far
    );

    const renderer = new THREE.WebGLRenderer({canvas: canva});
    renderer.autoClearColor = false;

    let uniforms: any;

    if (img !== null) {
      const loader = new THREE.TextureLoader();
      const texture = loader.load(img);

      uniforms = {
        iTime: { value:0 },
        iResolution: { value: new THREE.Vector3() },
        iChannel0: { value: texture }
      };

    } else {

      uniforms = {
        iTime: { value:0 },
        iResolution: { value: new THREE.Vector3() },
      };

    }
  
    const material = new THREE.ShaderMaterial({
      fragmentShader: shader,
      uniforms: uniforms
    });

    const plane = new THREE.PlaneGeometry(2, 2);
    const back = new THREE.Mesh(plane, material);

    scene.add(back);

    const resize = (renderer: THREE.WebGLRenderer) => {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;

      if (needResize) {
        renderer.setSize(width, height, false);
      }
      
      return needResize;
    };

    let render = (time: number) => {
      time *= 0.001;
      
      resize(renderer);
      //resizeRendererToDisplaySize(renderer);
      
      const canvas = renderer.domElement;
      uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
      uniforms.iTime.value = time;
      
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };
    
    requestAnimationFrame(render);
  }