import {useEffect, useState} from "react"
import cn from "classnames"

import styles from "./like.module.scss"

const Icon = () => (
  <svg className={styles["like__icon"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path xmlns="http://www.w3.org/2000/svg" d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z"></path>
  </svg>
)

const Like = ({identifier, numOfLikes}) => {
  const [liked, setLiked] = useState(false)

  const checkboxHandler = () => {
    setLiked(state => !state)
  }

  const adClassNames = cn(styles.like, {
    [styles["like--liked"]]: liked
  })

  return (
    <div className={adClassNames}>
      <span className={styles["like__likes"]}>{numOfLikes + (liked ? 1 : 0)}</span>
      <input
        type="checkbox"
        id={`checkbox__` + identifier}
        onChange={checkboxHandler}
        checked={liked}
        className={styles["like__checkbox"]}
      />
      <label htmlFor={`checkbox__` + identifier} className={styles["like__label"]}>
        <Icon />
      </label>
    </div>
  )
}

export default Like