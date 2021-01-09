import styles from "./weather.module.scss"

const Weather = ({article}) => {
  return (
    <article className={styles.weather}>
      <h3>Zürich</h3>
    </article>
  )
}

export default Weather