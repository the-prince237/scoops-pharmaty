import React from 'react'
import { StatItemWrapper } from './statItemStyle'

const StatItem = ({title, number, text, Icon}) => {
  return (
    <StatItemWrapper>
      <div className='stat-item__header'>
        <Icon className='item-icon' />
        <div>
          <h1 className="title2">+{number}</h1>
          <h1 className="title3">{title}</h1>
        </div>
      </div>
      <p className='subTitle2'>{text}</p>
    </StatItemWrapper>
  )
}

export default StatItem