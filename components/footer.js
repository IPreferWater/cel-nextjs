import { InstagramIcon } from '@components/icons/instagram-icon'
import { FacebookIcon } from '@components/icons/facebook-icon'
import Link from 'next/link'


function Footer() {
    return (
        <footer className="bg-green-700 text-white">


            <div className="flex justify-between p-8">

                <nav className="flex flex-col">
                    <h1 className="text-center">Suivez nous</h1>
                    <div className="m-2 flex flex-row ">
                        <Link href={"https://www.instagram.com/clementinestla"} target="_blank">
                            <div className="px-4">
                                <InstagramIcon />
                            </div>
                        </Link>

                        <Link href={"https://www.facebook.com/search/top?q=clementine%20conceptstore"} target="_blank">
                            <div className="px-4">
                                <FacebookIcon />
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;