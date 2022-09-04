import ReviewAdd from '@/components/domain/review/add'
import ReviewAddLayout from '@/components/layout/page-layout/ReviewAddLayout'
import { ChannelLocalSearchInfo } from '@/types/channelTypes'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const ReviewAddPage = () => {
  const router = useRouter()

  const channelInfo: ChannelLocalSearchInfo | null = null

  return <ReviewAdd channelInfo={channelInfo} />
}
export default ReviewAddPage

ReviewAddPage.getLayout = function getLayout(page: ReactElement) {
  return <ReviewAddLayout>{page}</ReviewAddLayout>
}