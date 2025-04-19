import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import MainTabBar from '@/app/components/TabBar'
import { SafeArea } from 'antd-mobile'
import './globals.css'

export const metadata: Metadata = {
  title: 'douyin',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div id="app" className="flex h-screen flex-col">
          <SafeArea position="top" />
          <div className="grow">
            {children}
          </div>
          <MainTabBar />
          <SafeArea position="bottom" />
        </div>
      </body>
    </html>
  )
}
