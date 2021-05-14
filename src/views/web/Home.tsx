import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { isTest } from '@/utils/tools'
// 在普通JS文件中，使用多语言
import i18n from '@/lang'
console.log(i18n.t('home'))

const Home: FC = () => {
  const { t } = useTranslation()
  isTest()
  return (
    <div className="App">
      this is web home page12
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
