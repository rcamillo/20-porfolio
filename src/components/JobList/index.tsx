import React, { useState } from 'react'

import { JobDescription } from '../JobDescription'
import data from './data.json'

import { Wrapper, Navigation, NavigationItem, Jobs } from './styles'

export type JobData = {
  id: number
  role: string
  dateFrom: string
  dateTo?: string
  company: string
  description: string
  isCurrent?: boolean
}

export const JobList = () => {
  const [active, setActive] = useState(1)

  return (
    <Wrapper>
      <Navigation>
        {data.map((job) => (
          <li key={`job-list-${job.id}`}>
            <NavigationItem
              isActive={active === job.id}
              onClick={() => setActive(job.id)}
            >
              {job.company}
            </NavigationItem>
          </li>
        ))}
      </Navigation>

      <Jobs>
        {data.map((job) => (
          <JobDescription
            key={`job-description-${job.id}`}
            isActive={job.id === active}
            {...job}
          />
        ))}
      </Jobs>
    </Wrapper>
  )
}
