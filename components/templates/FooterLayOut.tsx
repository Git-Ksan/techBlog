import Image from 'next/image'

export default function FooterLayOut() {
    //そんな重要じゃないからメンテはあと
    return(
        <div className="justify-center">
            <footer className="w-full h-12 flex justify-center items-center border-t">
            <a
                className="flex items-center"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{" "}
                {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </a>
            </footer>
        </div>
    )
}