/* 메인 내비게이션 컴포넌트

TODO - 나중에 사이드바 컴포넌트와 합칠 때, 사이드바를 가리지 않게 조정할 것.
- 랜딩 페이지에서 사용하는 내비게이션
- string형 인자 theme을 인자로 받음
- theme 인자가 없다면 light 테마가 적용됨
 */

import Image from 'next/image'
import Link from 'next/link'
import styles from './MainNav.module.scss'

function MainNav({ theme = 'light' }) {
  const logoSrc = theme === 'light' ? 'assets/images/logoLight.svg' : 'assets/images/logoDark.svg'
  const logoTitleSrc =
    theme === 'light' ? 'assets/images/logoTitleLight.svg' : 'assets/images/logoTitleDark.svg'

  return (
    <nav className={styles['nav-container']} data-theme={theme}>
      <div className={styles['logo-container']}>
        <Link href="/">
          <Image src={logoSrc} width={29} height={34} alt="logo icon" />
          <Image
            src={logoTitleSrc}
            className={styles['logo-title']}
            width={80}
            height={22}
            alt="logo icon"
          />
        </Link>
      </div>
      <div className={styles['button-container']}>
        <button className={styles['button']}>
          <Link href="/signin">로그인</Link>
        </button>
        <button className={styles['button']}>
          <Link href="/signup">회원가입</Link>
        </button>
      </div>
    </nav>
  )
}

export default MainNav
