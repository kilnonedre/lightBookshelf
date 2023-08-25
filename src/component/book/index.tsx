'use client'
import React, { useState } from 'react'
import { Tooltip } from '@nextui-org/react'
import styles from './bookStyle.module.scss'
import img from '@/asset/img/cover.jpg'

const Book = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className={styles['book']}>
      <div
        className={`${styles['book-cover']} ${
          isHover ? styles['book-cover--hover'] : ''
        }`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={img.src} alt="" />
      </div>
      <Tooltip
        showArrow={true}
        placement="bottom-start"
        content="关于我在无意间被隔壁的天使变成废柴这件事 01"
      >
        <p className={styles['book-title']}>
          关于我在无意间被隔壁的天使变成废柴这件事 01
        </p>
      </Tooltip>
      <div className={styles['book-misc']}>
        <p className={styles['book-misc-upload']}>梦涵之诺</p>
        <p className={styles['book-misc-date']}>2023/8/24</p>
      </div>
      <div className={styles['book-label']}>
        <div className={styles['book-label-corner']}></div>
        <div className={styles['book-label-status']}>录入</div>
      </div>
    </div>
  )
}

export default Book
