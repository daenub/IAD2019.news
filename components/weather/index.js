import cn from "classnames"
import styles from "./weather.module.scss"

const SunIcon = ({main = false}) => (
  <svg className={cn(styles["weather__icon"], {[styles["weather__icon--main"]]: main})} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" d="M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2ZM19.0711 4.92893C19.4616 5.31945 19.4616 5.95261 19.0711 6.34314L18.364 7.05025C17.9735 7.44077 17.3403 7.44077 16.9498 7.05025C16.5593 6.65972 16.5593 6.02656 16.9498 5.63603L17.6569 4.92893C18.0474 4.5384 18.6806 4.5384 19.0711 4.92893ZM4.92893 4.92893C5.31945 4.5384 5.95262 4.5384 6.34314 4.92893L7.05025 5.63603C7.44077 6.02656 7.44077 6.65972 7.05025 7.05025C6.65972 7.44077 6.02656 7.44077 5.63603 7.05025L4.92893 6.34314C4.5384 5.95262 4.5384 5.31945 4.92893 4.92893ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12ZM19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12ZM5.63603 16.9497C6.02656 16.5592 6.65972 16.5592 7.05025 16.9497C7.44077 17.3403 7.44077 17.9734 7.05025 18.364L6.34314 19.0711C5.95262 19.4616 5.31945 19.4616 4.92893 19.0711C4.5384 18.6805 4.5384 18.0474 4.92893 17.6568L5.63603 16.9497ZM16.9498 18.364C16.5593 17.9734 16.5593 17.3403 16.9498 16.9497C17.3403 16.5592 17.9735 16.5592 18.364 16.9497L19.0711 17.6568C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711C18.6806 19.4616 18.0474 19.4616 17.6569 19.0711L16.9498 18.364ZM12 19C12.5523 19 13 19.4477 13 20V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20C11 19.4477 11.4477 19 12 19Z" />
  </svg>
)

const CloudIcon = () => (
  <svg className={styles["weather__icon"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" d="M5 10C5 6.68629 7.68629 4 11 4C13.627 4 15.858 5.68745 16.6713 8.03713C19.669 8.37085 22 10.9132 22 14C22 17.3137 19.3137 20 16 20H7C4.23858 20 2 17.7614 2 15C2 12.9436 3.24073 11.1787 5.01385 10.4103C5.00466 10.2746 5 10.1378 5 10ZM11 6C8.79086 6 7 7.79086 7 10C7 10.3029 7.03348 10.5967 7.09656 10.8785C7.21716 11.4173 6.8783 11.9519 6.33958 12.0727C5.00015 12.3732 4 13.571 4 15C4 16.6569 5.34315 18 7 18H16C18.2091 18 20 16.2091 20 14C20 11.7909 18.2091 10 16 10C15.9732 10 15.9465 10.0003 15.9198 10.0008C15.4368 10.0102 15.0161 9.67312 14.9201 9.19971C14.5499 7.37395 12.9343 6 11 6Z" />
  </svg>
)

const WEATHER_CONDITIONS = {
  SUNNY: {icon: SunIcon, label: "Sonnig"},
  CLOUDY: {icon: CloudIcon, label: "Bewölkt"},
}

const Weather = ({article}) => {

  return (
    <article className={styles.weather}>
      <div className={styles["weather__today"]}>
        <h3 className={styles["weather__title"]}>Zürich</h3>
        <SunIcon main={true} />
        <div className={styles["weather__temparatur"]}>23°</div>
        <div className={styles["weather__condition"]}>Sonnig</div>
      </div>
      <div className={styles["weather__forecast"]}>
        <ul className={styles.forecast}>
         <ForecastItem condition={WEATHER_CONDITIONS.SUNNY} temparatur={19} weekDay={"Mo"} />
         <ForecastItem condition={WEATHER_CONDITIONS.CLOUDY} temparatur={9} weekDay={"Di"} />
         <ForecastItem condition={WEATHER_CONDITIONS.SUNNY} temparatur={21} weekDay={"Mi"} />
        </ul>
      </div>
    </article>
  )
}

const ForecastItem = ({condition, temparatur, weekDay}) => {
  const {icon: Icon, label} = condition

  return (
    <li className={styles["forecast__item"]}>
      <span className={styles["forecast__week-day"]}>{weekDay}</span>
      <Icon />
      <span className={styles["forecast__temparatur"]}>{temparatur}°</span>
      <span className={styles["forecast__label"]}>{label}</span>
    </li>
  )
}

export default Weather