import PageHeader from '@/components/ui/headers/PageHeader'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import styled from 'styled-components'
import AppContainer from '../container-layout/AppContainer'

type Props = {
  title: string
  children: ReactNode
  hasBookmark?: boolean
}

const ChannelViewLayout = ({ title, hasBookmark, children }: Props) => {
  return (
    <AppContainer>
      <StyledPageHeader title={title} hasPrev hasBookmark={hasBookmark} />
      <main>{children}</main>
    </AppContainer>
  )
}
export default ChannelViewLayout

const StyledPageHeader = styled(PageHeader)`
  background: none;

  h1 {
    opacity: 0;
  }
`