'use client'
import React, { useState } from 'react'
import styles from './chartStyle.module.scss'
import types from './chartType.d'
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'

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

const intervalList = [
  {
    title: '1H',
    mark: 'hour',
  },
  {
    title: '1D',
    mark: 'day',
  },
  {
    title: '1W',
    mark: 'week',
  },
  {
    title: '1M',
    mark: 'month',
  },
  {
    title: '1Y',
    mark: 'year',
  },
]

const Chart = (props: types.ConfigProps) => {
  const [selectMark, setSelectMark] = useState<string>('year')
  const [hoverMark, setHoverMark] = useState<string | null>(null)

  return (
    <div className={styles['chart']}>
      <div className={styles['chart-header']}>
        <div className={styles['chart-header-title']}>详细数据</div>
        <div
          className={styles['chart-header-trend']}
          style={{ color: props['trendObj']['mainColor'] }}
        >
          {props['trendObj']['icon']}1.7%
        </div>
        <div className={styles['chart-header-interval']}>
          {intervalList.map(interval => {
            return (
              <div
                className={styles['chart-header-interval-single']}
                style={{
                  color:
                    selectMark === interval.mark || hoverMark === interval.mark
                      ? props['trendObj']['mainColor']
                      : '#858585',
                }}
                onMouseEnter={() => setHoverMark(interval.mark)}
                onMouseLeave={() => setHoverMark(null)}
                onClick={() => setSelectMark(interval.mark)}
                key={interval.mark}
              >
                {interval.title}
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles['chart-body']}>
        <ResponsiveContainer width="100%" height={300}>
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
              <linearGradient id="uuid" x1="0" y1="0" x2="0" y2="1">
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              wrapperStyle={{ borderRadius: '0.5rem' }}
              contentStyle={{
                backgroundColor: 'transparent',
                backdropFilter: 'blur(7px)',
                borderRadius: '0.5rem',
              }}
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke={props['trendObj']['mainColor']}
              strokeWidth={3}
              fill="url(#uuid)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
