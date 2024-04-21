import { SocialIcon } from "react-social-icons";
import { Button } from "../ui/button";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 justify-around md:flex-row md:gap-9 lg:gap-0  bg-white mt-4 p-8">
      <div>
        <h2 className="font-semibold text-xl">Eventra Logo</h2>
        <div className="mt-4">
          <h3 className="text-sm">Social Media Logo</h3>
          <div className="flex gap-4 w-1/2">
            <SocialIcon url="https://facebook.com/jaketrent" />
            <SocialIcon url="https://twitter.com/jaketrent" />
            <SocialIcon url="https://instagram.com/jaketrent" />
          </div>
        </div>
      </div>
      <div>
      <ul className="text-sm">
          <h2 className="font-semibold text-lg">Venues</h2>
          <li>BEAWAR</li>
          <li>AJMER</li>
          <li>KOTA</li>
          <li>JAIPUR</li>
          <li>BHILWARA</li>
          <li>RAJSAMAND</li>
        </ul>
      </div>
      <div>
      <ul className="text-sm">
          <h2 className="font-semibold text-lg">Suppliers</h2>
          <li>Photographers</li>
          <li>Decorators</li>
          <li>Venues Planner</li>
          <li>Choreographers</li>
          <li>Designers</li>
          <li>Makeup Artist</li>
        </ul>
      </div>
      <div>
        <ul className="text-sm ">
          <h2 className="font-semibold text-lg">Quick Links</h2>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
         
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Newsletter</h2>
        <p className="text-xs">
          Subscribe to our newsletter for the latest updates
        </p>
        <Button className="mt-5">Subscribe</Button>
      </div>
    </footer>
  );
}
