import React from 'react'
import styles from './headerStyle.module.scss'
import types from './headerType'
// import { useRouter } from 'next/router'
// import logo from '@/assets/images/logo/logo.jpg'
import {
  Dropdown,
  Progress,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Badge,
} from '@nextui-org/react'

const dropDownItemList: Array<types.ConfigDropDownItem> = [
  {
    key: 'information',
    name: '粗略信息',
    withDivider: false,
  },
  {
    key: 'personal',
    name: '个人中心',
    withDivider: false,
    icon: '',
  },
  {
    key: 'release',
    name: '发布管理',
    withDivider: false,
    icon: '',
  },
  {
    key: 'subscribe',
    name: '我的订阅',
    withDivider: false,
    icon: '',
  },
  {
    key: 'set',
    name: '网站设置',
    withDivider: false,
    icon: '',
  },
  {
    key: 'quit',
    name: '退出登录',
    withDivider: true,
    color: 'danger',
    icon: '',
  },
]

const dataList = ['关注', '粉丝', '发帖']

const Header = () => {
  // const router = useRouter()

  // const toCoverPage = () => {
  //   router.push('/')
  // }

  // const switchChange = (key: string) => {
  //   console.log(key)
  //   switch (key) {
  //     case 'personal':
  //       router.push('/admin/login')
  //       break
  //     case 'release':
  //       break
  //     case 'subscribe':
  //       break
  //     case 'set':
  //       break
  //     case 'quit':
  //       router.push('/')
  //       break
  //   }
  // }

  return (
    <header className={styles['header']}>
      {/* <div className={styles['header-logo']} onClick={toCoverPage}>
        <img src={logo.src} alt="logo" />
      </div> */}
      <div className={styles['header-nav']}>
        <Badge content="5" size="sm" color="danger">
          <div className={styles['header-nav-icon']}></div>
        </Badge>
        <Badge content="5" size="sm" color="danger">
          <div className={styles['header-nav-icon']}></div>
        </Badge>
        <div className={styles['header-nav-divide']}></div>
        <Dropdown>
          <DropdownTrigger>
            <div className={styles['header-nav-avatar']}></div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection actions"
            disabledKeys={['information']}
            color="secondary"
            items={dropDownItemList}
            disallowEmptySelection
            selectionMode="single"
          >
            {(item: any) => {
              if (item.key === 'information') {
                return (
                  <DropdownItem className={styles['opacity']} key={item.key}>
                    <div className={styles['information']}>
                      <div className={styles['information-text']}>
                        <div className={styles['information-text-name']}>
                          梦涵之诺
                        </div>
                        <div className={styles['information-text-purview']}>
                          注册会员
                        </div>
                      </div>
                      <div className={styles['information-level']}>
                        <p className={styles['information-level-grade']}>lv0</p>
                        <Progress
                          color="primary"
                          size="sm"
                          value={68}
                          className={styles['information-level-progress']}
                        />
                        <p className={styles['information-level-grade']}>lv0</p>
                      </div>
                      <div className={styles['information-tip']}>
                        当前经验0，还需要111111经验升到lv1
                      </div>
                      <div className={styles['information-data']}>
                        {dataList.map(data => {
                          return (
                            <div
                              className={styles['information-data-single']}
                              key={data}
                            >
                              <p
                                className={
                                  styles['information-data-single-number']
                                }
                              >
                                0
                              </p>
                              <p
                                className={
                                  styles['information-data-single-subtype']
                                }
                              >
                                {data}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </DropdownItem>
                )
              } else {
                return (
                  <DropdownItem
                    key={item.key}
                    color={item.color ? item.color : 'default'}
                  >
                    <div className={styles['tag']}>
                      <div className={styles['tag-icon']}>{item.icon}</div>
                      <div>{item.name}</div>
                      <div className={styles['tag-enter']}></div>
                    </div>
                  </DropdownItem>
                )
              }
            }}
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header
