import React from 'react'
import Data from '@/component/admin/data'
import Chart from '@/component/admin/chart'
import Tabulation from '@/component/admin/tabulation'
import styles from './adminStyle.module.scss'

const trendObj = {
  upward: {
    icon: '',
    mainColor: '#0ccf52',
    secondaryColor: '#97eab5',
  },
  down: {
    icon: '',
    mainColor: '#ff5050',
    secondaryColor: '#FFCDD2',
  },
}

const Admin = () => {
  return (
    <div className={styles['admin']}>
      <Data trendObj={trendObj['upward']} />
      <Data trendObj={trendObj['down']} />
      <Data trendObj={trendObj['upward']} />
      <div className={styles['admin-chart']}>
        <Chart trendObj={trendObj['upward']} />
      </div>
      <div className={styles['admin-tabulation']}>
        <Tabulation subtype="user" />
      </div>
      <div className={styles['admin-tabulation']}>
        <Tabulation subtype="book" />
      </div>
    </div>
  )
}

export default Admin
