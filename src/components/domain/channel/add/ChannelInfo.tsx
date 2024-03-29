import { borderGradient } from '@/styles/mixins'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import Button from '@/components/ui/buttons/Button'
import { getSummarizedCount } from '@/utils/convertingValueUtils'
import { ChannelSearchInfo } from '@/types/channel-types'

type Props = {
  className?: string
  channelInfo: ChannelSearchInfo
  isSelected?: boolean
  onClick?: (channelInfo: ChannelSearchInfo) => void
}

const ChannelInfo = ({ className, channelInfo, onClick, isSelected }: Props) => {
  return (
    <Wrapper
      className={className}
      onClick={() => onClick && onClick(channelInfo)}
      isActive={isSelected}
    >
      <ImageWrapper>
        <Image
          src={channelInfo.imageUrl}
          width={52}
          height={52}
          alt="채널 이미지"
          style={{ borderRadius: '50%' }}
        />
      </ImageWrapper>
      <TextInfo>
        <ChannelName>{channelInfo.name}</ChannelName>
        <SubscribersCount>
          구독자 {getSummarizedCount(channelInfo.subscribersCount)}명
        </SubscribersCount>
      </TextInfo>
    </Wrapper>
  )
}

export default ChannelInfo

const Wrapper = styled(Button)<{ isActive?: boolean }>`
  display: flex;
  align-items: stretch;
  gap: 22px;
  height: 85px;
  padding: 0 17px;
  background: ${({ theme }) => theme.color.G30};
  border-radius: 59px;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      ${borderGradient(2, ['top', 'bottom', 'left', 'right'], theme.color.G30)}
      padding: 0 15px;
    `}
`

const ChannelName = styled.b`
  ${({ theme }) => theme.typo.H75B}
  color: ${({ theme }) => theme.color.G100};
`

const SubscribersCount = styled.span`
  ${({ theme }) => theme.typo.P100R}
  color: ${({ theme }) => theme.color.G60};
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
