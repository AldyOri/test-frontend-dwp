import { MailOpen, MapPin, Phone } from "lucide-react";
import { FaGoogle, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Company from "./Company";
import Service from "./Service";
import Support from "./Support";

const LogoPath = "/x-logo.png";

function Footer() {
  return (
    <footer className="flex w-full items-center justify-center bg-[#3674B5] px-4 py-12">
      <div
        className={cn(
          "flex w-full max-w-7xl flex-col-reverse gap-1",
          "md:flex-row md:gap-16",
        )}
      >
        {/* First column*/}
        <div className="mx-auto w-full rounded-2xl bg-[#578FCA] px-5 py-8 lg:mx-0 lg:max-w-sm">
          <img
            className="mx-auto my-5 max-w-[150px]"
            src={LogoPath}
            alt="Logo"
          />
          <p className="text-primary-foreground my-5 text-center font-extralight lg:text-left">
            Menyediakan beragam paket data internet. Murah, Terpercaya &
            Berkualitas
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-x-2">
              <MapPin className="text-background" strokeWidth={1.5} />
              <p className="text-primary-foreground font-extralight">
                Jl. Abcde No.99, Indonesia
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <MailOpen className="text-background" strokeWidth={1.5} />
              <p className="text-primary-foreground font-extralight">
                mail@example.com
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <Phone className="text-background" strokeWidth={1.5} />
              <p className="text-primary-foreground font-extralight">
                +62-123-4567-8910
              </p>
            </div>
          </div>

          <div className="my-6 flex justify-around">
            <a href="#">
              <FaFacebook className="text-background size-9" />
            </a>
            <a href="#">
              <FaInstagram className="text-background size-9" />
            </a>
            <a href="#">
              <FaWhatsapp className="text-background size-9" />
            </a>
            <a href="#">
              <FaGoogle className="text-background size-9" />
            </a>
          </div>
        </div>

        {/* Second column*/}
        <div className="flex w-full flex-col">
          <h1 className="text-background mb-4 text-center text-2xl font-semibold lg:text-left">
            Hubungi Kami :
          </h1>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <Input
              className="bg-secondary rounded-full"
              type="text"
              placeholder="Tuliskan pesan"
            />
            <Button className="rounded-full px-10 whitespace-nowrap">
              KIRIM
            </Button>
          </div>

          <div
            className={cn(
              "hidden justify-start gap-5",
              "md:flex md:flex-row md:flex-wrap",
            )}
          >
            <Company />
            <Service />
            <Support />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
