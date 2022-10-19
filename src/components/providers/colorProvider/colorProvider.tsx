import {ColorContext} from './colorContext'
import {FC, PropsWithChildren, useMemo, useState} from 'react';
import {Color} from '../../../App';

export const ColorProvider: FC<PropsWithChildren> = ({children}) => {
  const [colors, setColors] = useState<Color[]>([])

  const colorContextProps = useMemo(() => ({
    colors,
    setColors
  }), [colors])

  return (
    <ColorContext.Provider value={colorContextProps}>
      {children}
    </ColorContext.Provider>
  )
}

