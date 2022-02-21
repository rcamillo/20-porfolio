import React from 'react'
import { JobData } from '../JobList'

import { Wrapper, Heading, Company, Description } from './styles'

type JobDescriptionProps = JobData & {
  isActive?: boolean
}

export const JobDescription = ({
  role,
  dateFrom,
  dateTo,
  company,
  isCurrent = false,
  description,
  isActive = false
}: JobDescriptionProps) => {
  const dateFormatted = isCurrent
    ? `${dateFrom} - Atual`
    : `${dateFrom} - ${dateTo}`

  return (
    <Wrapper isActive={isActive}>
      <Heading>
        <h2>{role}</h2>
        <span>{dateFormatted}</span>
      </Heading>

      <Company>{company}</Company>

      <Description>{description}</Description>
    </Wrapper>
  )
}
