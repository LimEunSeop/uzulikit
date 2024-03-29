import React, { MouseEvent, useState } from 'react'
import styled, { css } from 'styled-components'
import Button from '@/components/ui/buttons/Button'
import ChevronDropdownG40D from '../icons/ChevronDropdownG40D'

type Position = 'left' | 'right'

const gridConfig = css<{ position: Position }>`
  display: grid;
  grid-template-columns: ${({ position }) =>
    position === 'left' ? `12px auto` : `auto 12px`};
  place-items: center;
  gap: 2px;
`

const PrimaryButton = styled(Button).attrs({ type: 'button' })`
  order: 1;
`

const SecondaryButton = styled(Button).attrs({ type: 'button' })`
  order: 2;
`

const Icon = styled(ChevronDropdownG40D)``

const Name = styled.span`
  ${({ theme }) => theme.typo.P50B}
  color: ${({ theme }) => theme.color.G40D};
`

const ulPadding = 4

const ButtonList = styled.div<{ opened: boolean }>`
  display: none;
  background-color: #fff;

  border-radius: 4px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.05), 0px 4px 12px rgba(0, 0, 0, 0.1);

  ${({ opened }) =>
    opened &&
    css`
      & {
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 999;
        ${PrimaryButton}, a:hover {
          /* color: #c83d7f; */
        }
      }

      ${Icon} {
        transform: rotate(180deg);
      }
    `}
`

const Wrapper = styled.div`
  ${gridConfig}
  position: relative;
  white-space: nowrap;
  ${({ theme }) => theme.typo.P50B}
  color: ${({ theme }) => theme.color.G40D};
  cursor: pointer;

  ${PrimaryButton}, ${SecondaryButton} {
    ${gridConfig}
    padding: ${({ position }) =>
      position === 'left'
        ? `${ulPadding}px 8px ${ulPadding}px ${ulPadding}px`
        : `${ulPadding}px ${ulPadding}px ${ulPadding}px 8px`};
    background: ${({ theme }) => theme.color.G30};

    :hover {
      background: ${({ theme }) => theme.color.G10};
    }
  }

  ${Icon} {
    grid-column: ${({ position }) => (position === 'left' ? 1 : 2)} / span 1;
    grid-row: 1;
  }

  ${Name} {
    grid-column: ${({ position }) => (position === 'left' ? 2 : 1)} / span 1;
    grid-row: 1;
  }

  ${ButtonList} {
    ${({ position }) =>
      position === 'left' ? `left: -${ulPadding}px;` : `right: -${ulPadding}px;`}
    top: -${ulPadding}px;
  }
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export type SimpleMenuItem = {
  label: string
  value: string
}

type Props = {
  menus: Array<SimpleMenuItem>
  position?: Position
  selectedMenu: SimpleMenuItem
  onSelectItem: (menu: SimpleMenuItem) => void
}

const SimpleDropdown = ({
  menus,
  position = 'left',
  selectedMenu,
  onSelectItem,
  ...props
}: Props) => {
  const [opened, setOpened] = useState(false)

  const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
    setOpened(true)
  }

  const handleSelect = (e: MouseEvent<HTMLButtonElement>, menu: SimpleMenuItem) => {
    e.stopPropagation() // 아하, 이벤트 전파는 공유해서 쓰는구나.
    setOpened(false)
    onSelectItem(menu)
  }

  return (
    <>
      {opened && <Backdrop onClick={() => setOpened(false)} />}
      <Wrapper position={position} onClick={handleOpen} {...props}>
        <Icon />
        <Name>{selectedMenu.label}</Name>
        <ButtonList opened={opened}>
          {menus.map((menu, index) =>
            menu.value === selectedMenu.value ? (
              <PrimaryButton key={index} onClick={(e) => handleSelect(e, menu)}>
                <Icon />
                <Name>{menu.label}</Name>
              </PrimaryButton>
            ) : (
              <SecondaryButton key={index} onClick={(e) => handleSelect(e, menu)}>
                <Name>{menu.label}</Name>
              </SecondaryButton>
            )
          )}
        </ButtonList>
      </Wrapper>
    </>
  )
}

export default SimpleDropdown
