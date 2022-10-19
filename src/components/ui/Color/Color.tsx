import cls from './Color.module.css'
import {FC, useState} from 'react'
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Button} from '@mui/material';
import chroma from 'chroma-js';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Color {
  color: string
  isLocked: boolean
  id: string
}

type ColorProps = {
  color: Color
  changeLockStatus: (id: string) => void
}

export const Color: FC<ColorProps> = ({color, changeLockStatus}) => {

  const [showCopy, setShowCopy] = useState('')

  const isLight = chroma(color.color).luminance() > 0.5

  const style = {
    backgroundColor: color.color,
    color: isLight ? 'black' : 'white'
  }

  const showCopyHandler = () => {
    setShowCopy('show')

    setTimeout(() => {
      setShowCopy('')
    }, 1500)
  }

  const textHandler = () => {
    navigator.clipboard.writeText(color.color)
    showCopyHandler()
  }

  return (
    <div style={style} className={cls.Color}>
      <div className={cls.text}>
        <Button
          style={{color: isLight ? 'black' : 'white'}}
          className={cls.colorText}
          onClick={textHandler}
        >
          {color?.color}
        </Button>
        <ContentCopyIcon className={`${cls.copy} ${cls[showCopy]}`}/>
      </div>


      <Button
        onKeyDown={e => e.preventDefault()}
        onClick={() => {
          changeLockStatus(color.id)
        }}
        style={{color: isLight ? 'black' : 'white'}}
        startIcon={color.isLocked ? <LockIcon/> : <LockOpenIcon/>}
      >
      </Button>
    </div>
  )
}

