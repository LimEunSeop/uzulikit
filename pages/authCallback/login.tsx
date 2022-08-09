import { useStore } from '@/hooks/storeHooks'
import service from '@/services/service'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const { userService } = service

const RedirectToOnboarding = () => {
  const router = useRouter()
  const { onboardingStore } = useStore()

  useEffect(() => {
    if (!router.isReady) return
    ;(async () => {
      const { providerToken } = router.query

      try {
        await userService.getJwtToken(providerToken as string)

        router.replace('/')
      } catch (err) {
        window.alert('로그인에 실패하였습니다')
        router.replace('/launch')
      }
    })()
  }, [router, onboardingStore])

  return <div>로그인 처리중입니다...</div>
}
export default RedirectToOnboarding