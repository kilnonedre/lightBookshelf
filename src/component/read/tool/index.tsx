'use client'
import React, { useState, useEffect } from 'react'
import styles from './toolStyle.module.scss'
import types from './toolType.d'

const toolList = [
  {
    id: 1,
    icon: '',
    title: 'full',
  },
  {
    id: 2,
    icon: '',
    title: 'normal',
  },
  {
    id: 3,
    icon: '',
    title: 'content',
  },
  {
    id: 4,
    icon: '',
    title: 'previous',
  },
  {
    id: 5,
    icon: '',
    title: 'next',
  },
]

const Tool = (props: types.ConfigProps) => {
  const [isActive, setIsActive] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const { clickButton } = props

  useEffect(() => {
    setIsFullScreen(props.isFullScreen)
  }, [props.isFullScreen])

  const handleClick = (title: string) => {
    switch (title) {
      case 'full':
        setIsFullScreen(true)
        break
    }
    clickButton(title)
    setIsActive(false)
  }

  const filterToolList = () => {
    const filter = toolList.filter(tool => {
      return (
        (isFullScreen && tool.title !== 'full') ||
        (!isFullScreen && tool.title !== 'normal')
      )
    })
    return filter
  }

  return (
    <div
      className={`${styles['tool']} ${isActive ? '' : styles['tool--active']} ${
        isFullScreen ? styles['tool--fullscreen'] : ''
      }`}
    >
      <div
        className={styles['tool-button']}
        onClick={() => setIsActive(!isActive)}
      >
        
      </div>
      <div className={styles['tool-bar']}>
        {filterToolList().map(tool => {
          if (tool)
            return (
              <div
                className={styles['tool-bar-item']}
                key={tool.id}
                onClick={() => handleClick(tool.title)}
              >
                {tool.icon}
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Tool
