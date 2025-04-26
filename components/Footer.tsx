import { footerLinks, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 mt-56">
      <div className="flex flex-col gap-4">
        <Image
          src="/logo.svg"
          alt="logo"
          width={80}
          height={80}
          className="size-20 mb-2"
        />
        <p className="text-lg font-medium">
          &copy; {new Date().getFullYear()} - All rights reserved
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className="bg-surface p-4 rounded-full">
                <link.Icon className="text-primary size-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-2xl">Categories</h3>
        <div className="flex flex-col gap-2">
          {footerLinks.categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="text-dark-muted/80 font-medium text-lg"
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-2xl">Legal</h3>
        <div className="flex flex-col gap-2">
          {footerLinks.legal.map((legal) => (
            <Link
              key={legal.label}
              href={legal.href}
              className="text-dark-muted/80 font-medium text-lg"
            >
              {legal.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-2xl">Company</h3>
        <div className="flex flex-col gap-2">
          {footerLinks.company.map((company) => (
            <Link
              key={company.label}
              href={company.href}
              className="text-dark-muted/80 font-medium text-lg"
            >
              {company.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
