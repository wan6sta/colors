import {useContext, useEffect, useMemo} from 'react';
import {ColorContext, ColorContextProps} from './colorContext';
import {v1} from 'uuid';
import {randomColor} from '../../../helpers/randomColors/randomColor';
import {Color} from '../../../App';

export const useColors = (): ColorContextProps => {
  const {colors, setColors} = useContext(ColorContext) as ColorContextProps

  useEffect(() => {
    const startColors: Color[] = []

    for (let i = 0; i < 5; i++) {
      startColors.push({id: v1(), color: randomColor(), isLocked: false})
    }

    if (!document.location.hash) {
      setColors(startColors)
      return
    }

    startColors.map((color, index) => {
      color.color = document.location.hash.substring(1).split('-').map((colorText) => '#' + colorText)[index]
    })

    setColors(startColors)
  }, [])

  return {colors, setColors}
}