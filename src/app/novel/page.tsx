'use client'
import React from 'react'
import Book from '@/component/book'
import styles from './novelStyle.module.scss'
import { Pagination } from '@nextui-org/react'

const bookList = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
  {
    id: 6,
  },
]

const Novel = () => {
  return (
    <div className={styles['novel']}>
      <div className={styles['novel-book']}>
        <div className={styles['novel-book-outer']}>
          {bookList.map(book => {
            return <Book key={book.id} />
          })}
        </div>
      </div>
      <div className={styles['novel-pagination']}>
        <Pagination total={10} initialPage={1} />
      </div>
    </div>
  )
}

export default Novel
