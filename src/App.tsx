import {useColors} from './components/providers/colorProvider/useColors';
import {Color} from './components/ui/Color/Color';
import {KeyboardEvent, useEffect, useRef} from 'react'
import {randomColor} from './helpers/randomColors/randomColor';
import {Button} from '@mui/material';
import chroma from 'chroma-js';

export type Color = {
  id: string
  color: string
  isLocked: boolean
}

export const App = () => {
  const {colors, setColors} = useColors()

  const changeLockStatus = (id: string) => {
    setColors(colors.map(color => {
      if (color.id === id) color.isLocked = !color.isLocked
      return color
    }))
  }

  const changeColors = () => {
    const newColors = colors.map(color => {
      if (color.isLocked) return color
      color.color = randomColor()
      return color
    }) as Color[]

    document.location.hash = colors.map(color => color.color).map(col => col.substring(1)).join('-')
    setColors(newColors)
  }

  const spaceDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code.toLowerCase() !== 'space') return

    changeColors()
  }

  const Colors = colors.map(color => (
    <Color
      key={color.id}
      color={color}
      changeLockStatus={changeLockStatus}
    />
  ))

  return (
    <div tabIndex={0} onKeyDown={spaceDown} className='app'>
      <div className='colors'>
        {Colors}
      </div>
      <div className='generateBtnWrap'>
        <Button style={{color: colors[0]?.color}} onClick={changeColors} className='generateBtn'>
          Generate
        </Button>
      </div>
    </div>
  )
}

