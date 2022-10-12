import React, { useState, useContext } from "react"
import sublinks from "./data"

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false)
  const [location, setlocation] = useState({})
  const [page, setpage] = useState(sublinks[0])

  const openSidebar = () => {
    setisSidebarOpen(true)
  }

  const closeSidebar = () => {
    setisSidebarOpen(false)
  }

  const openSubmenu = (text, coordinates) => {
    setpage(sublinks.find((link) => link.page === text))
    setlocation(coordinates)
    setisSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setisSubmenuOpen(false)
  }

  return <AppContext.Provider value={{ page, location, closeSubmenu, openSubmenu, isSidebarOpen, setisSidebarOpen, isSubmenuOpen, setisSubmenuOpen, openSidebar, closeSidebar }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
