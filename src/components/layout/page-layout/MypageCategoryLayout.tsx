import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'
import Button from '@/components/ui/buttons/Button'
import { MypageCategoryContext } from 'src/contexts/mypage-contexts'
import { viewportHeight } from '@/styles/mixins'

type Props = {
  children: ReactNode
}

const MypageCategoryLayout = ({ children }: Props) => {
  const [isPossibleSubmit, setPossibleSubmit] = useState(false)

  const changePossibleSubmit = (possible: boolean) => {
    setPossibleSubmit(possible)
  }

  return (
    <AppContainer>
      <PageHeader
        headerTitle={'카테고리 관리'}
        hasPrev
        renderAdditionalUI={() => (
          <SubmitButton
            form="mypage-category"
            type="submit"
            disabled={!isPossibleSubmit}
          >
            저장
          </SubmitButton>
        )}
      />
      <StyledMain>
        <MypageCategoryContext.Provider
          value={{ isPossibleSubmit, changePossibleSubmit }}
        >
          {children}
        </MypageCategoryContext.Provider>
      </StyledMain>
    </AppContainer>
  )
}
export default MypageCategoryLayout

const StyledMain = styled.main`
  ${viewportHeight}
  padding-top: ${pageHeaderHeight}px;
`

const SubmitButton = styled(Button)`
  position: absolute;
  top: 29px;
  right: 18px;
  ${({ theme }) => theme.typo.H50M}
  color: ${({ theme }) => theme.color.PB600};

  :disabled {
    ${({ theme }) => theme.typo.H50R}
    color: ${({ theme }) => theme.color.G50};
  }
`
