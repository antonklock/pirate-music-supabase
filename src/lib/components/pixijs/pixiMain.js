import * as PIXI from 'pixijs';
import { Application, Assets, Sprite } from 'pixijs';

export async function pixiJsMain() {
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new Application();

    // The application will create a canvas element for you that you
    // can then insert into the DOM
    // @ts-ignore
    document.body.appendChild(app.view);

    // // load the texture we need
    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

    // // This creates a texture from a 'bunny.png' image
    const bunny = new Sprite(texture);

    // // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    // // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // // Add the bunny to the scene we are building
    app.stage.addChild(bunny);

    // // Listen for frame updates
    app.ticker.add(() => {
        // each frame we spin the bunny around a bit
        bunny.rotation += 0.01;
    });
}