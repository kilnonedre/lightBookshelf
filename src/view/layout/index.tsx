import React from 'react'
import Side from '@/component/layout/side'
import Header from '@/component/layout/header'
import types from './layoutType'
import styles from './layoutStyle.module.scss'

const Layout = (props: types.ConfigProps) => {
  return (
    <div className={styles['layout']}>
      <div className={styles['layout-side']}>
        <Side />
      </div>
      <div className={styles['layout-main']}>
        <div className={styles['layout-main-panel']}>
          <Header />
          <div className={styles['layout-main-panel-child']}>
            {props.component}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
