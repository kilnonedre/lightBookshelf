import React from 'react'
import styles from './summaryStyle.module.scss'

const Summary = () => {
  return (
    <div className={styles['summary']}>
      <div className={styles['summary-head']}>
        <div className={styles['summary-head-title']}>作品简介</div>
        <div className={styles['summary-head-divide']}></div>
      </div>
      <div>
        <p>
          藤宫周所住公寓的隔壁，住着学校第一的美少女椎名真昼。自从周看到真昼在雨中淋得全身湿透而把伞借给她以后，原本并无交集的两人便开始了奇妙的交流。
        </p>
        <p>
          真昼看不下去周自甘堕落的独居生活，于是开始帮他做饭、打扫房间，在各方面照顾着周。
        </p>
        <p>
          真昼渴望家人间的联系，逐渐敞开心房，开始懂得撒娇；然而，周没有自信能接受她的好意。尽管两人不够坦率，仍然渐渐缩短彼此间的距离……
        </p>
        <p>
          本作于「成为小说家吧」网站获得读者们大力支持，为主角与冷淡却可爱的邻居间甜蜜而令人焦急的恋爱故事。
        </p>
      </div>
    </div>
  )
}

export default Summary
