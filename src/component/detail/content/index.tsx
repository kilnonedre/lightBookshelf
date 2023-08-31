'use client'
import React, { useState } from 'react'
import styles from './contentStyle.module.scss'

const contentList = [
  { id: 1, title: '第1话　与天使相遇' },
  { id: 2, title: '第2话　感冒与天使的照料' },
  { id: 3, title: '第3话　天使的分送' },
  { id: 4, title: '第4话　偶然相遇' },
  { id: 5, title: '第5话　天使与扫除大作战' },
  { id: 6, title: '第6话　友人来访' },
  { id: 7, title: '第7话　天使受伤与谢礼' },
  { id: 8, title: '第8话　开始共进晚餐' },
  { id: 9, title: '第9话　天使生日' },
  { id: 10, title: '第10话　母亲来袭' },
  { id: 11, title: '第11话　给天使的奖励' },
  { id: 12, title: '第12话　天使指导的料理教室' },
  { id: 13, title: '第13话　大家一起过圣诞节' },
  { id: 14, title: '第14话　两人共度圣诞节' },
]

const Content = () => {
  const [hoverId, setHoverId] = useState<number | null>(null)
  const [selectId, setSelectId] = useState<number | null>(null)

  return (
    <div className={styles['content']}>
      <div className={styles['content-head']}>
        <div className={styles['content-head-title']}>目录</div>
        <div className={styles['content-head-divide']}></div>
      </div>
      <div className={styles['content-main']}>
        {contentList.map(content => {
          return (
            <div className={styles['content-main-item']} key={content.id}>
              <div
                className={`${styles['content-main-item-title']} ${
                  hoverId === content.id || selectId === content.id
                    ? styles['content-main-item-title--active']
                    : ''
                }`}
                onMouseEnter={() => setHoverId(content.id)}
                onMouseLeave={() => setHoverId(null)}
                onClick={() => setSelectId(content.id)}
              >
                {content.title}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Content
