import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { languages } from '@/lang'

const Components: FC = () => {
  const { i18n } = useTranslation()
  const changelang = (code: string): void => {
    i18n.changeLanguage(code).catch(() => {})
  }
  return (
    <div className="select-lang">
      <h3>切换语言</h3>
      <ul>
        {
          languages.map(({ label, value }) => {
            return (
              <li onClick={() => changelang(value)} key={value}>{label}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Components

export const auto = {
  name: 'SelectLang',
  Components
}
