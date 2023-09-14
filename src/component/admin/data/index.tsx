'use client'
import React from 'react'
import styles from './dataStyle.module.scss'
import types from './dataType.d'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const Data = (props: types.ConfigProps) => {
  const uuid = uuidv4()
  return (
    <div className={styles['data']}>
      <div
        className={styles['data-cycle']}
        style={{
          backgroundColor: props['trendObj']['secondaryColor'],
        }}
      ></div>
      <div className={styles['data-overview']}>
        <div className={styles['data-overview-header']}>
          <div className={styles['data-overview-header-misc']}>
            <div
              className={styles['data-overview-header-misc-bg']}
              style={{
                backgroundColor: props['trendObj']['secondaryColor'],
              }}
            ></div>
            <div
              className={styles['data-overview-header-misc-icon']}
              style={{
                borderColor: props['trendObj']['mainColor'],
                color: props['trendObj']['mainColor'],
              }}
            >
              
            </div>
          </div>
          <div className={styles['data-overview-header-title']}>数据</div>
        </div>
        <div className={styles['data-overview-number']}>$50,435.3</div>
        <div className={styles['data-overview-describe']}>
          <span
            className={styles['data-overview-describe-trend']}
            style={{ color: props['trendObj']['mainColor'] }}
          >
            {props['trendObj']['icon']}1.7%
          </span>
          vs last month
        </div>
      </div>
      <div className={styles['data-graph']}>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart
            data={data}
            syncId="anyId"
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id={uuid} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={props['trendObj']['secondaryColor']}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={props['trendObj']['secondaryColor']}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="pv"
              stroke={props['trendObj']['mainColor']}
              strokeWidth={3}
              fill={`url(#${uuid})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Data
