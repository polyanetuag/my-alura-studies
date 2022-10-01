import style from './Clock.module.scss'

interface IClockProps {
  time: number | undefined
}

export default function Clock({time = 0}: IClockProps) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60 
  const [minuteDec, minuteUni] = String(minutes).padStart(2, '0').split('')
  const [secondDec, secondUni] = String(seconds).padStart(2, '0').split('')

  return (
    <>
    <span className={style.clockNumber}>{minuteDec}</span>
      <span className={style.clockNumber}>{minuteUni}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondDec}</span>
      <span className={style.clockNumber}>{secondUni}</span>
    </>
  );
}

