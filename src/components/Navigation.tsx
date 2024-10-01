// app/components/Navigation.tsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className='flex bg-blue-500 py-4 px-40 justify-between' >
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/champions">챔피언 목록</Link>
        </li>
        <li>
          <Link href="/items">아이템 목록</Link>
        </li>
        <li>
          <Link href="/rotation">챔피언 로테이션</Link>
        </li>
      </ul>
    </nav>
  );
}
