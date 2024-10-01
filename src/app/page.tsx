import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      홈 페이지입니다.
<Link href={"/"}> </Link>

    </div>
  )
}

export default page


// - 글로벌 레이아웃을 설정하고 네비게이션 메뉴를 추가하여 페이지 간 이동이 가능하도록 합니다.
// - 챔피언 목록, 아이템 목록, 로테이션 정보 페이지로 이동할 수 있는 링크를 제공합니다.