import * as THREE from 'three';

export function makeTextSprite(message: any, parameters: any) {
    if (parameters === undefined) parameters = {};

    let fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
    let fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 10;
    let borderThick = parameters.hasOwnProperty("borderThick") ? parameters["borderThick"] : 4;
    let borderColor = parameters.hasOwnProperty("borderColor") ? parameters["borderColor"] : {r: 0, g: 0, b: 0, a: 1.0};
    let backColor = parameters.hasOwnProperty("backColor") ? parameters["backColor"] : {r: 255, g: 255, b: 255, a: 1.0};

    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context!.font = fontsize + "px " + fontface;

    let metrics = context?.measureText(message);
    let textWidth = metrics?.width;

    context!.fillStyle = `rgba(${backColor.r}, ${backColor.g}, ${backColor.b}, ${backColor.a})`;
    context!.strokeStyle = `rgba(${borderColor.r}, ${borderColor.g}, ${borderColor.b}, ${borderColor.a})`;
    context!.lineWidth = borderThick;

    context!.fillStyle = "rbga(0, 0, 0, 1.0)";

    context!.fillText(message, borderThick, fontsize + borderThick);

    let texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    let spriteMaterial = new THREE.SpriteMaterial({map: texture});
    let sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(100, 50, 1.0);

    return sprite;
}