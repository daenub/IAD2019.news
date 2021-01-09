import {useEffect, useState, useRef} from "react"
import {throttle, debounce} from "lodash"
import cn from "classnames"

import {getCategories} from "../../lib/categories"
import styles from "./header.module.scss"

const SCROLl_THRESHOLD = 20

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles["header__title"]}>The News</h1>
      <Navigation />
    </header>
  )
}

const useScrollable = (overflowRef) => {
  const [isScrollable, setScrollable] = useState({left: false, right: false})

  useEffect(() => {
    const listEl = overflowRef.current

    const scrollChecker = () => {
      if (!listEl) return

      const {scrollWidth, offsetWidth, scrollLeft} = listEl

      setScrollable({
        left: scrollLeft > SCROLl_THRESHOLD,
        right: scrollWidth > offsetWidth + scrollLeft + SCROLl_THRESHOLD,
      })
    }

    const resizeHandler = debounce(() => {
      scrollChecker()
    }, 500)

    const scrollHandler = throttle(() => {
      scrollChecker()
    }, 16.667)

    window.addEventListener("resize", resizeHandler)

    if (listEl) {
      listEl.addEventListener("scroll", scrollHandler)
    }

    return () => {
      window.removeEventListener("resize", resizeHandler)

      if (listEl) {
        listEl.removeEventListener("scroll", scrollHandler)
      }
    }
  }, [overflowRef, setScrollable])

  return isScrollable
}

const ScrollLeftButton = (props) => (
  <button {...props} className={cn(styles["navigation__scroll-button"], styles["navigation__scroll-button--left"])}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path xmlns="http://www.w3.org/2000/svg" d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z" fill="#000" />
    </svg>
  </button>
)

const ScrollRightButton = (props) => (
  <button {...props} className={cn(styles["navigation__scroll-button"], styles["navigation__scroll-button--right"])}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path xmlns="http://www.w3.org/2000/svg" d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="#000"></path>
    </svg>
  </button>
)

const Navigation = () => {
  const listRef = useRef(null)
  const isScrollable = useScrollable(listRef)
  const categories = getCategories()

  const scroll = (dir) => {
    if (!listRef.current) return

    listRef.current.scrollBy({
      left: listRef.current.offsetWidth * (dir === "left" ? -1 : 1) * 0.9,
      behavior: "smooth",
    })
  }

  const navClassNames = cn(styles.navigation, {
    [styles["navigation--scrollable-left"]]: isScrollable.left,
    [styles["navigation--scrollable-right"]]: isScrollable.right,
  })

  return (
    <nav className={navClassNames}>
      <ScrollLeftButton onClick={() => scroll("left")} />
      <ul ref={listRef} className={styles["navigation__list"]}>
        <li className={styles["navigation__item"]}>
          <a href={`#aktuelles`} className={cn(styles["navigation__link"], styles["navigation__link--active"])}>Aktuelles</a>
        </li>
        {
          categories.map((c, i) => (
            <li key={c} className={styles["navigation__item"]}>
              <a href={`#${c}`} className={styles["navigation__link"]}>{c}</a>
            </li>
          ))
        }
      </ul>
      <ScrollRightButton onClick={() => scroll("right")} />
    </nav>
  )
}

export default Header