import React from 'react'
import styles from './detailStyle.module.scss'
import Overview from '@/component/detail/overview'
import Summary from '@/component/detail/summary'
import Content from '@/component/detail/content'
import Expand from '@/component/detail/expand'

const Detail = () => {
  return (
    <div className={styles['detail']}>
      <div className={styles['detail-overview']}>
        <Overview />
      </div>
      <div className={styles['detail-message']}>
        <Summary />
        <Content />
      </div>
      <div className={styles['detail-expand']}>
        <Expand />
        <Expand />
      </div>
    </div>
  )
}

export default Detail
