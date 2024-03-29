import Home from '@/components/domain/home'
import AppContainer from '@/components/layout/container-layout/AppContainer'
import { useUser } from '@/hooks/queries/user/userQueries'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

const HomePage = observer(() => {
  const user = useUser()

  return (
    <AppContainer>
      <div>닉네임: {user?.nickname || '로그인 하세요'}</div>
      {user?.isLoggedIn ? (
        <Link href="/logout">
          <a>로그아웃</a>
        </Link>
      ) : (
        <Link href="/launch">
          <a>로그인</a>
        </Link>
      )}
      <br />
      <br />
      <Link href="/channel/add">채널 등록</Link>
      <br />
      <br />
      <Link href="/channel/view/1">채널 정보</Link>
      <br />
      <br />
      <Link href="/review/add">리뷰 작성</Link>
      <br />
      <br />
      <Link href="/mypage">마이페이지</Link>
      <br />
      <br />
      <Link href="/dangerous/quit">회원탈퇴</Link>
      <Home />
    </AppContainer>
  )
})

export default HomePage
