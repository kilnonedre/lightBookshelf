'use client'
import React from 'react'
import styles from './tabulationStyle.module.scss'
import types from './tabulationType.d'
import img from '@/asset/avatar/103779202_p0.png'
import Icon from './icon'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Select,
  SelectItem,
  Progress,
  Pagination,
  Input,
} from '@nextui-org/react'

const thList = {
  user: {
    title: '用户列表',
    placeholder: '请输入用户名',
    tableColumn: [
      { name: '#', mark: '#' },
      { name: '用户ID', mark: 'userID' },
      { name: '用户名', mark: 'userName' },
      { name: '权限', mark: 'purview' },
      { name: '外部权限等级', mark: 'externalGrade' },
      { name: '内部权限等级', mark: 'internalGrade' },
      { name: '总活跃度', mark: 'active' },
      { name: '上次登录', mark: 'activeDate' },
      { name: '操作', mark: 'action' },
    ],
  },
  book: {
    title: '书籍列表',
    placeholder: '请输入书籍名称',
    tableColumn: [
      { name: '#', mark: '#' },
      { name: '书籍ID', mark: 'bookID' },
      { name: '书籍名称', mark: 'bookName' },
      { name: '作者', mark: 'author' },
      { name: '状态', mark: 'status' },
      { name: '外部权限等级', mark: 'externalGrade' },
      { name: '内部权限等级', mark: 'internalGrade' },
      { name: '书籍热度', mark: 'heat' },
      { name: '操作', mark: 'action' },
    ],
  },
}

const tableData = [
  {
    '#': 1,
    userID: 1,
    username: '梦涵之诺',
    purview: 'admin',
    externalGrade: 1,
    internalGrade: 1,
    active: 1,
    activeDate: '2023/8/15',
    action: 1,
  },
  {
    '#': 2,
    userID: 1,
    username: '梦涵之诺',
    purview: 'admin',
    externalGrade: 1,
    internalGrade: 1,
    active: 1,
    activeDate: '2023/8/15',
    action: 1,
  },
]

const externalGradeList = [
  {
    id: 0,
    grade: '愚者',
    mark: 'fool',
  },
  {
    id: 1,
    grade: '魔术师',
    mark: 'magician',
  },
  {
    id: 2,
    grade: '女祭司',
    mark: 'priestess',
  },
  {
    id: 3,
    grade: '女皇',
    mark: 'empress',
  },
  {
    id: 4,
    grade: '皇帝',
    mark: 'emperor',
  },
  {
    id: 5,
    grade: '教皇',
    mark: 'hierophant',
  },
  {
    id: 6,
    grade: '恋人',
    mark: 'lovers',
  },
  {
    id: 7,
    grade: '战车',
    mark: 'chariot',
  },
  {
    id: 8,
    grade: '力量',
    mark: 'strength',
  },
  {
    id: 9,
    grade: '隐者',
    mark: 'hermit',
  },
  {
    id: 10,
    grade: '命运之轮',
    mark: 'wheelOfFortune',
  },
]

const internalGradeList = [
  {
    id: 0,
    grade: '正义',
    mark: 'justice',
  },
  {
    id: 1,
    grade: '倒吊人',
    mark: 'hangedMan',
  },
  {
    id: 2,
    grade: '死神',
    mark: 'death',
  },
  {
    id: 3,
    grade: '节制',
    mark: 'temperance',
  },
  {
    id: 4,
    grade: '恶魔',
    mark: 'devil',
  },
  {
    id: 5,
    grade: '塔',
    mark: 'tower',
  },
  {
    id: 6,
    grade: '星星',
    mark: 'star',
  },
  {
    id: 7,
    grade: '月亮',
    mark: 'moon',
  },
  {
    id: 8,
    grade: '太阳',
    mark: 'sun',
  },
  {
    id: 9,
    grade: '审判',
    mark: 'judgement',
  },
  {
    id: 10,
    grade: '世界',
    mark: 'world',
  },
]

const getTableCell = (thName: string, data?: string | number) => {
  switch (thName) {
    case 'externalGrade':
    case 'internalGrade': {
      const isExternalGrade = thName === 'externalGrade'
      const gradeList = isExternalGrade ? externalGradeList : internalGradeList
      const defaultSelect = isExternalGrade ? 'fool' : 'justice'
      return (
        <Select
          disallowEmptySelection
          labelPlacement="outside-left"
          size="sm"
          isRequired
          defaultSelectedKeys={[defaultSelect]}
          items={gradeList}
        >
          {item => <SelectItem key={item.mark}>{item.grade}</SelectItem>}
        </Select>
      )
    }
    case 'heat':
    case 'active':
      return <Progress value={60} color="danger" />
    case 'action':
      return <div className={styles['action']}></div>
    case 'userName':
    case 'author':
      return (
        <User
          className={styles['user']}
          name={111111}
          avatarProps={{
            radius: 'lg',
            src: img.src,
          }}
        />
      )
    case 'purview':
    case 'status':
      return <div className={styles['purview']}>admin</div>
    default:
      return data
  }
}

const Tabulation = (props: types.ConfigProps) => {
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setValues(new Set(e.target.value.split(",")));
    console.log(new Set(e.target.value.split(',')))
  }
  return (
    <div className={styles['tabulation']}>
      <div className={styles['tabulation-title']}>
        {thList[props.subtype].title}
      </div>
      <div className={styles['tabulation-filter']}>
        <Input
          isClearable
          className={styles['tabulation-filter-search']}
          size="sm"
          placeholder={thList[props.subtype].placeholder}
          startContent={<Icon />}
        />
        <Select
          disallowEmptySelection
          labelPlacement="outside-left"
          className={styles['tabulation-filter-select']}
          size="sm"
          isRequired
          placeholder="条目"
          items={externalGradeList}
          onChange={handleSelectionChange}
        >
          {item => <SelectItem key={item.mark}>{item.grade}</SelectItem>}
        </Select>
        <Select
          disallowEmptySelection
          labelPlacement="outside-left"
          className={styles['tabulation-filter-select']}
          size="sm"
          isRequired
          placeholder="类目"
          items={externalGradeList}
        >
          {item => <SelectItem key={item.mark}>{item.grade}</SelectItem>}
        </Select>
      </div>
      <div className={styles['tabulation-table']}>
        <Table
          color="default"
          selectionMode="single"
          aria-label="Example static collection table"
        >
          <TableHeader>
            {thList[props.subtype].tableColumn.map(th => {
              return (
                <TableColumn key={th.mark} allowsSorting>
                  {th.name}
                </TableColumn>
              )
            })}
          </TableHeader>
          <TableBody emptyContent={'No users found'}>
            {tableData.map(table => {
              return (
                <TableRow key={table['#']}>
                  {thList[props.subtype].tableColumn.map(th => {
                    return (
                      <TableCell key={th.mark}>
                        {getTableCell(th.mark, 111)}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <div className={styles['tabulation-pagination']}>
        <Pagination isCompact showControls total={10} initialPage={1} />
      </div>
    </div>
  )
}

export default Tabulation
