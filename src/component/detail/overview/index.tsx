'use client'
import React from 'react'
import { Button, Tooltip } from '@nextui-org/react'
import styles from './overviewStyle.module.scss'
import img from '@/asset/img/cover.jpg'
import avatar from '@/asset/avatar/103779202_p0.png'

const Overview = () => {
  return (
    <div className={styles['overview']}>
      <div className={styles['overview-cover']}>
        <img src={img.src} alt="关于我在无意间被隔壁的天使变成废柴这件事 01" />
      </div>
      <div className={styles['overview-message']}>
        <Tooltip
          showArrow={true}
          placement="bottom-start"
          content="关于我在无意间被隔壁的天使变成废柴这件事 01"
        >
          <p className={styles['overview-message-title']}>
            关于我在无意间被隔壁的天使变成废柴这件事 01
          </p>
        </Tooltip>
        <p className={styles['overview-message-creator']}>
          作者：佐伯さん | 插画：和武はざの
        </p>
        <p className={styles['overview-message-renew']}>
          最后更新：第14话　两人共度圣诞节
        </p>
        <p className={styles['overview-message-time']}>
          更新时间：2023-8-25 12:00:00
        </p>
        <p className={styles['overview-message-score']}>
          <span className={styles['overview-message-score-word']}>200k</span>字
          <span className={styles['overview-message-score-collect']}>5k</span>
          总收藏
        </p>
        <div className={styles['overview-message-button']}>
          <Button size="sm" color="danger">
            加入书架
          </Button>
          <Button size="sm" color="danger">
            开始阅读
          </Button>
        </div>
      </div>
      <div className={styles['overview-uploader']}>
        <div className={styles['overview-uploader-avatar']}>
          <img src={avatar.src} alt="avatar" />
        </div>
        <div className={styles['overview-uploader-name']}>梦涵之诺</div>
        <div className={styles['overview-uploader-misc']}>
          <div
            className={`${styles['overview-uploader-misc-single']} ${styles['overview-uploader-misc__divide']}`}
          >
            <p className={styles['overview-uploader-misc__tag']}>上传总数</p>
            <p className={styles['overview-uploader-misc__number']}>10</p>
          </div>
          <div className={styles['overview-uploader-misc-single']}>
            <p className={styles['overview-uploader-misc__tag']}>上传总数</p>
            <p className={styles['overview-uploader-misc__number']}>10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
