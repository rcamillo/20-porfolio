import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: grid;
    gap: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      grid-template-columns: auto 1fr;
      gap: calc(${theme.spacings.large} * 2);
    `}
  `}
`

export const Navigation = styled.ul``

type NavigationItemProps = {
  isActive: boolean
}

export const NavigationItem = styled.button<NavigationItemProps>`
  ${({ theme, isActive }) => css`
    width: 100%;
    text-align: left;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    font-size: ${theme.font.sizes.large};
    font-weight: 300;
    color: ${theme.colors.grayLight};
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 2px;
      top: 0;
      left: 0;
      background-color: ${theme.colors['background-2']};
    }

    &:hover {
      background-color: ${theme.colors['background-2']};

      &::before {
        background-color: ${theme.colors.primary};
      }
    }

    ${isActive &&
    css`
      background-color: ${theme.colors['background-2']};

      &::before {
        background-color: ${theme.colors.primary};
      }
    `}
  `}
`

export const Jobs = styled.div`
  overflow: hidden;
`
