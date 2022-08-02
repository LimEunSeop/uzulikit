import { ReactNode } from 'react'
import styled from 'styled-components'
import Container from '@/components/layout/container-layout/Container'
import { viewportHeight } from '@/styles/mixins'

const EmptyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <StyledMain>{children}</StyledMain>
    </Container>
  )
}
export default EmptyLayout

const StyledMain = styled.main`
  ${viewportHeight}
`