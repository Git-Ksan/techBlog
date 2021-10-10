import Link from "next/link";
import Image from 'next/image'

export default function MainHeader() {
    return (
        <header className="sticky -top-0 z-50">
          <nav className="bg-white w-screen header-style">
            <div className="flex items-center justify-center pl-8 h-14">
              <div className="flex space-x-4">
                <Image src="/React-icon.png" alt="React Logo" width={60} height={16} />
                <Link href="/">
                  <a className="text-black hover:opacity-75 px-3 py-2 rounded">
                    Home
                  </a>
                </Link>
                <Link href="/blog-page">
                  <a className="text-black hover:opacity-75 px-3 py-2 rounded">
                    Blog
                  </a>
                </Link>
                <Link href="/react/home">
                  <a className="text-black hover:opacity-75 px-3 py-2 rounded">
                    React
                  </a>
                </Link>
                <Link href="/python/home">
                  <a className="text-black hover:opacity-75 px-3 py-2 rounded">
                    Python
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-black hover:opacity-75 px-3 py-2 rounded">
                    Contact
                  </a>
                </Link>
                <Link href="/load/home">
                  <a className="text-black hover:opacity-75 px-3 py-2 rounded">
                    Load
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </header>
    );
  }
  