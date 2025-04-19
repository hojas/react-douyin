'use client'

import { TabBar } from 'antd-mobile'
import React, { useState } from 'react'

function MainTabBar() {
  const tabs = [
    {
      key: 'home',
      title: '首页',
    },
    {
      key: 'mall',
      title: '商城',
    },
    {
      key: 'message',
      title: '消息',
      badge: '99+',
    },
    {
      key: 'mine',
      title: '我',
    },
  ]

  const [activeKey, setActiveKey] = useState('home')

  return (
    <TabBar className="bg-gray-700 text-gray-50" activeKey={activeKey} onChange={activeKey => setActiveKey(activeKey)}>
      {tabs.map(item => (
        <TabBar.Item
          key={item.key}
          title={item.title}
          badge={item.badge}
        />
      ))}
    </TabBar>
  )
}

export default MainTabBar
