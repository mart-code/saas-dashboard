import React from 'react'
import { StatCards } from './StatCards'
import { ActivityGraphs } from './ActivityGraphs'
import { UsageRadar } from './UsageRadar'
import { RecentTransaction } from './RecentTransaction'

export const Grid = () => {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
<StatCards/>
<ActivityGraphs/>
<UsageRadar/>
<RecentTransaction/>
    </div>
  )
}
