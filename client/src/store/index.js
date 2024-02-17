import { proxy } from "valtio";
//Valtio is used to share state between react components.

//Calling proxy as a function
const state = proxy({
  intro: true,
  color: "maroon",
  // color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
