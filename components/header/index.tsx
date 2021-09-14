import Link from 'next/link';
import styles from './header.module.css';
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white w-full p-4 px-4 shadow flex justify-between">
       <Link href="/">
          <a className="text-purple-800 hover:text-purple-300 font-bold text-xl">Promager</a>
        </Link>
      <div className="text-purple-600 hover:text-purple-300">
        <a href="/categories">Categories</a>
      </div>
    </header>
  )
}

export default Header;