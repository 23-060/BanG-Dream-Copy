'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
      { label: 'HOME', href: '/',  active: pathname === '/' },
      { label: 'NEWS', href: '/news', active: pathname === '/news' },
      { label: 'ABOUT', href: '/about', active: pathname === '/about' },
      { label: 'CHARACTER', href: '/character', active: pathname === '/character' },
      { label: 'MUSIC', href: '/music', active: pathname === '/music' },
      { label: 'SPECIAL', href: '/special', active: pathname === '/special' },
      { label: 'FAQ', href: '/faq', active: pathname === '/faq' },
    ];
      return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
          <nav className="fixed top-0 left-0 right-0 bg-white shadow font-['poppins'] z-40 border-t-4 border-rose-400">
            <ul>
              <div className="flex justify-center text-[25px] text-rose-400 font-bold">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`border-x-slate-300 transition-all hover:bg-rose-400 hover:text-[#ffffff] hover:transition-all ${item.active ?'text-[#ffffff] bg-rose-400':''} ${
                      index % 2 === 0 ? 'border-x-2' : ''
                    } p-5`}
                  >
                    <Link
                      href={item.href}
                      className={`active:bg-rose-400 active:text-[#ffffff]`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </>
      );
}
