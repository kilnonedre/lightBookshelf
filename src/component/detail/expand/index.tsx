'use client'
import React from 'react'
import styles from './expandStyle.module.scss'
import img from '@/asset/img/cover.jpg'
import { Tooltip } from '@nextui-org/react'

const Expand = () => {
  return (
    <div className={styles['expand']}>
      <div className={styles['expand-head']}>
        <div className={styles['expand-head-title']}>排行榜</div>
        <div className={styles['expand-head-more']}>更多</div>
      </div>
      <div className={styles['expand-main']}>
        <div className={styles['expand-main-item']}>
          <div className={styles['book']}>
            <div className={styles['book-cover']}>
              <img
                src={img.src}
                alt="关于我在无意间被隔壁的天使变成废柴这件事 01"
              />
            </div>
            <div className={styles['book-message']}>
              <Tooltip
                showArrow={true}
                placement="bottom-start"
                content="关于我在无意间被隔壁的天使变成废柴这件事 01"
              >
                <p className={styles['book-message-title']}>
                  关于我在无意间被隔壁的天使变成废柴这件事 01
                </p>
              </Tooltip>
              <p className={styles['book-message-author']}>作者：佐伯さん</p>
              <p className={styles['book-message-illustrator']}>
                插画：和武はざの
              </p>
              <p className={styles['book-message-time']}>录入时间：2023-8-16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expand
