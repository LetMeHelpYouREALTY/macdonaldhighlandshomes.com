import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/config/siteConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-16 px-4">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-6">{siteConfig.name}</h3>
            <p className="text-primary-200 mb-4 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {siteConfig.social.facebook && (
                <Link
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition duration-300"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
                </Link>
              )}
              {siteConfig.social.twitter && (
                <Link
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition duration-300"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
                </Link>
              )}
              {siteConfig.social.instagram && (
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition duration-300"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                </Link>
              )}
              {siteConfig.social.linkedin && (
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition duration-300"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Property"
                  className="text-primary-200 hover:text-white transition duration-300"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-primary-200 hover:text-white transition duration-300"
                >
                  About Community
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-primary-200 hover:text-white transition duration-300"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact_us"
                  className="text-primary-200 hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Property/Property_type/Vu"
                  className="text-primary-200 hover:text-white transition duration-300"
                >
                  Vu Neighborhood
                </Link>
              </li>
              <li>
                <Link
                  href="/Property/Property_type/SkyVu"
                  className="text-primary-200 hover:text-white transition duration-300"
                >
                  SkyVu Neighborhood
                </Link>
              </li>
              <li>
                <Link
                  href="/Property/Property_type/Vue Pointe"
                  className="text-primary-200 hover:text-white transition duration-300"
                >
                  Vue Pointe
                </Link>
              </li>
              <li>
                <span className="text-primary-200">
                  DragonRidge Golf Course
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-3 text-primary-300 mt-1 flex-shrink-0" />
                <span className="text-primary-200">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-3 text-primary-300 flex-shrink-0" />
                <Link
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="text-primary-200 hover:text-white transition duration-300"
                >
                  {siteConfig.contact.phone}
                </Link>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-3 text-primary-300 flex-shrink-0" />
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary-200 hover:text-white transition duration-300"
                >
                  {siteConfig.contact.email}
                </Link>
              </li>
              <li className="text-primary-200 text-sm mt-4">
                <p>Hours: {siteConfig.contact.hours}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-300">
          <p>
            © {currentYear} {siteConfig.name}. All Rights Reserved.
          </p>
          <p className="mt-2 text-sm">
            {siteConfig.location} • Guard-Gated Luxury Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;