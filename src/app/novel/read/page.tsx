'use client'
import React, { useRef, useState, useEffect } from 'react'
import styles from './readStyle.module.scss'
import Tool from '@/component/read/tool'
import { fullscreen } from '@/util/screen'
import Content from '@/component/read/content'

const Read = () => {
  const read = useRef(null)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [ePubData, setEPubData] = useState<string | null>(null)
  const [chapter, setChapter] = useState(0)
  const [isOpenContent, setIsOpenContent] = useState(false)

  const updateIsFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  useEffect(() => {
    ;(read.current as unknown as HTMLElement).addEventListener(
      'fullscreenchange',
      updateIsFullScreen
    )
    return () => {
      ;(read.current as unknown as HTMLElement).removeEventListener(
        'fullscreenchange',
        updateIsFullScreen
      )
    }
  }, [isFullScreen])

  useEffect(() => {
    renderReadBody()
  }, [chapter])

  const renderReadBody = async () => {
    const ePub = await fetch(`http://localhost:9090/?chapter=${chapter}`)
    const ePubText = await ePub.text()
    setEPubData(ePubText)
  }

  const clickButton = (title: string) => {
    console.log(title)
    switch (title) {
      case 'full':
        fullscreen(read.current as unknown as HTMLElement, 'request')
        break
      case 'normal':
        fullscreen(read.current as unknown as HTMLElement, 'exit')
        break
      case 'next':
        setChapter(chapter + 1)
        break
      case 'previous':
        setChapter(chapter - 1)
        break
      case 'content':
        setIsOpenContent(true)
        break
    }
  }

  return (
    <div ref={read} className={styles['read']}>
      <div
        className={`${styles['read-body']} ${
          isFullScreen ? styles['read-body--fullscreen'] : ''
        }`}
        dangerouslySetInnerHTML={{ __html: ePubData as string }}
      ></div>
      <Tool isFullScreen={isFullScreen} clickButton={clickButton} />
      <Content
        isOpenContent={isOpenContent}
        closeModal={() => {
          setIsOpenContent(false)
        }}
      />
    </div>
  )
}

export default Read
