import React, { useState } from 'react'

import { Wrapper, Navigation, NavigationItem } from './styles'

export const JobList = () => {
  const [active, setActive] = useState('tw')

  return (
    <Wrapper>
      <Navigation>
        <li>
          <NavigationItem
            isActive={active === 'tw'}
            onClick={() => setActive('tw')}
          >
            ThoughtWorks
          </NavigationItem>
        </li>
        <li>
          <NavigationItem
            isActive={active === 'empresa2'}
            onClick={() => setActive('empresa2')}
          >
            Empresa 2
          </NavigationItem>
        </li>
        <li>
          <NavigationItem
            isActive={active === 'empresa3'}
            onClick={() => setActive('empresa3')}
          >
            Empresa 3
          </NavigationItem>
        </li>
      </Navigation>

      <div style={{ background: '#ccc' }}>{active}</div>
    </Wrapper>
  )
}
