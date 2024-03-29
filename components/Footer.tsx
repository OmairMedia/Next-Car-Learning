import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear()
  }  
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
       <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
          <div className="flex flex-col justify-start items-start gap-6">
             <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain"></Image>
             <p className="text-base text-gray-700">
                Carhub {getCurrentYear()} <br /> All Rights Reserved &copy;
             </p>
          </div>

          <div className="footer__links">
             {footerLinks.map((link)=>(
                <div key={link.title} className="footer__link">
                    <h3 className="font-bold">{link.title}</h3>
                    {link.links.map((item)=>(
                        <Link key={item.title} href={item.url}>{item.title}</Link>
                    ))}
                </div>
             ))}
          </div>
       </div>
    </footer>
  )
}



export default Footer