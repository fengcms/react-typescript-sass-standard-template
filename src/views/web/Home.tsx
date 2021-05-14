import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { isTest } from '@/utils/tools'

import C from '@/components'

// 在普通JS文件中，使用多语言
import i18n from '@/lang'
console.log(i18n.t('home'))

const Home: FC = () => {
  const { t } = useTranslation()
  isTest()

  return (
    <div className="App">
      this is web home page12 <Link to="/about">about</Link>
      <br/>
      <C.WebHomeCount />
      <br/>
      {t('home.home', 'Home')}
      <br/>
      {t('home.welcome', 'Welcome', { name: 'fungleo' })}
      <br/>
      <span style={{ whiteSpace: 'pre-line' }}>{t('home.message')}</span>
    </div>
  )
}

export default Home
