import React, { useState } from 'react'
import styles from './sideStyle.module.scss'

const routeList = [
  {
    id: 1,
    icon: '',
    name: '列表',
  },
  {
    id: 2,
    icon: '',
    name: '列表',
  },
  {
    id: 3,
    icon: '',
    name: '列表',
  },
  {
    id: 4,
    icon: '',
    name: '列表',
  },
  {
    id: 5,
    icon: '',
    name: '列表',
  },
  {
    id: 6,
    icon: '',
    name: '列表',
  },
]

const SideBar = () => {
  const [selectId, setSelectId] = useState<number>(1)
  const [hoverId, setHoverId] = useState<number | null>(null)

  return (
    <div className={styles['side']}>
      <div>logo</div>
      <div className={styles['side-route']}>
        {routeList.map(route => {
          return (
            <div
              className={`${styles['side-route-item']} ${
                selectId === route.id ? styles['side-route-item--select'] : ''
              } ${
                hoverId === route.id ? styles['side-route-item--hover'] : ''
              }`}
              key={route.id}
              onClick={() => setSelectId(route.id)}
              onMouseEnter={() => setHoverId(route.id)}
              onMouseLeave={() => setHoverId(null)}
            >
              <div className={styles['side-route-item-icon']}>{route.icon}</div>
              <div className={styles['side-route-item-name']}>{route.name}</div>
            </div>
          )
        })}
      </div>
      <div className={styles['side-upload']}>upload</div>
    </div>
  )
}

export default SideBar
