import React, { useState, useRef, useEffect } from "react"
import { useGlobalContext } from "./context"

const Submenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)
  const [coloumns, setcoloumns] = useState("col-2")
  useEffect(() => {
    setcoloumns("col-2")
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setcoloumns("col-3")
    }
    if (links.length > 3) {
      setcoloumns("col-4")
    }
  }, [location])

  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${coloumns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
