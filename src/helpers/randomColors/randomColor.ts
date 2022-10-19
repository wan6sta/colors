import chroma from "chroma-js"
import {Color} from '../../components/ui/Color/Color';

function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(array: number[]) {
  let color = ''

  for (let i = 0; i < 3; i++) {
    color += componentToHex(array[i])
  }

  return '#' + color
}

export function randomColor(): string {
  return rgbToHex(chroma.random()._rgb._unclipped.slice(0, 3))
}