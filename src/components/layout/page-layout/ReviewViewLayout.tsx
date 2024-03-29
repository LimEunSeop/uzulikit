import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import { confirmButtonHeight } from '@/components/ui/buttons/ConfirmButton'
import { observer } from 'mobx-react-lite'
import PageHeader, { pageHeaderHeight } from '@/components/ui/headers/PageHeader'
import { viewportHeight } from '@/styles/mixins'

type Props = {
  hasPrev?: boolean
  children: ReactNode
}

const ReviewViewLayout = ({ children }: Props) => {
  return (
    <AppContainer>
      <PageHeader headerTitle={'리뷰 상세'} hasPrev={true} />
      <StyledMain>{children}</StyledMain>
    </AppContainer>
  )
}
export default ReviewViewLayout

const StyledMain = styled.main`
  padding-top: ${pageHeaderHeight}px;
`
