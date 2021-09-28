import Head from "next/head";

export default function Layout({ children, title = "HP by Nextjs" }) {
    return (
        <div className="flex items-center flex-col min-h-screen text-gray-600 text-sm font-mono"> 
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    )
}