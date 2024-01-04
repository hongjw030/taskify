import Link from 'next/link'
import Image from 'next/image'
import useDropdown from '@/hooks/useDropdown'
import styles from './FloatingButton.module.scss'

interface FloatingProps {
  boardId: number
  onOpen: () => void
}

function FloatingMenu({ boardId, onOpen }: FloatingProps) {
  return (
    <div className={styles['button-container']}>
      <button className={styles['button']}>
        <Link href={`/dashboard/${String(boardId)}/edit`}>
          <Image src="/assets/images/settingIcon.svg" alt="setting icon" width={18} height={18} />
          관리
        </Link>
      </button>
      <button onClick={onOpen} className={styles['button']}>
        <Image src="/assets/images/addIcon.svg" alt="add icon" width={20} height={20} /> 초대하기
      </button>
    </div>
  )
}

export default function FloatingButton({ boardId, onOpen }: FloatingProps) {
  const [isVisible, setHandleOpenDropdown, setHandleCloseDropdown] = useDropdown()

  return (
    <>
      {isVisible && <FloatingMenu boardId={boardId} onOpen={onOpen} />}
      <button
        className={styles.floating}
        onClick={setHandleOpenDropdown}
        onBlur={setHandleCloseDropdown}
        data-show={isVisible}
      >
        <svg
          width={16}
          height={16}
          viewBox="4 4 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.24209 8.75876H3.95659C3.74378 8.75876 3.56419 8.68557 3.41781 8.53919C3.27143 8.39281 3.19824 8.21323 3.19824 8.00043C3.19824 7.78763 3.27143 7.60804 3.41781 7.46166C3.56419 7.31528 3.74378 7.24209 3.95659 7.24209H7.24209V3.95659C7.24209 3.74378 7.31528 3.56419 7.46166 3.41781C7.60804 3.27143 7.78763 3.19824 8.00043 3.19824C8.21323 3.19824 8.39281 3.27143 8.53919 3.41781C8.68557 3.56419 8.75876 3.74378 8.75876 3.95659V7.24209H12.0443C12.2571 7.24209 12.4367 7.31528 12.583 7.46166C12.7294 7.60804 12.8026 7.78763 12.8026 8.00043C12.8026 8.21323 12.7294 8.39281 12.583 8.53919C12.4367 8.68557 12.2571 8.75876 12.0443 8.75876H8.75876V12.0443C8.75876 12.2571 8.68557 12.4367 8.53919 12.583C8.39281 12.7294 8.21323 12.8026 8.00043 12.8026C7.78763 12.8026 7.60804 12.7294 7.46166 12.583C7.31528 12.4367 7.24209 12.2571 7.24209 12.0443V8.75876Z"
            fill={isVisible ? '#5534DA' : '#ffffff'}
          />
        </svg>
      </button>
    </>
  )
}
