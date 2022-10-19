import React, {Dispatch, SetStateAction} from 'react';
import {Color} from '../../../App';

export type ColorContextProps = {
  colors: Color[],
  setColors: Dispatch<SetStateAction<Color[]>>
}

export const ColorContext = React.createContext<ColorContextProps | null>(null)