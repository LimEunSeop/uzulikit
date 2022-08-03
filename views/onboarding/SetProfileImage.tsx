import { OnboardingConfirmButton } from '@/components/ui/buttons'
import { useStore } from '@/hooks/storeHooks'
import { observer } from 'mobx-react-lite'
import { MouseEventHandler, useCallback, useEffect } from 'react'

const SetProfileImage = observer(() => {
  const { onboardingStore } = useStore()

  useEffect(() => {
    onboardingStore.setProgressTitle([
      `${onboardingStore.nickname}님,`,
      '프로필사진을 변경해주세요!',
    ])
  }, [onboardingStore])

  const handleConfirm: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    onboardingStore.setCurrentProgress(3)
  }, [onboardingStore])

  return (
    <>
      <OnboardingConfirmButton
        disabled={true}
        isFinal={false}
        displayText="다음 단계로"
        onClick={handleConfirm}
      />
    </>
  )
})
export default SetProfileImage
