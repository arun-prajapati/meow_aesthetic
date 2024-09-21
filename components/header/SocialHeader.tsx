import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { Button } from "../ui/button"
import { TfiEmail } from "react-icons/tfi"
import { IoCallOutline } from "react-icons/io5"

const SocialHeader = () => {
  return (
    <div className="container hidden lg:grid grid-cols-2 2xl:px-0 py-3 border-b">
      <div className="flex items-center gap-3">
        <a href="tel:+91 73833101048" className="flex items-center gap-2">
          <IoCallOutline className="text-white text-xl"/>
          <span className="text-[#FFFEFA9E]">
            6353102045
          </span>
        </a>
        <a href="mailto:test@gmail.com" className="flex items-center gap-2">
          <TfiEmail className="text-white text-xl"/>
          <span className="text-[#FFFEFA9E]">
            hello@gmail.com
          </span>
        </a>
      </div>

      <div className="flex items-center gap-2 justify-end">
        <Button title="Facebook" aria-label="Facebook" className="rounded-full bg-transparent border border-[#FBFAFA30] text-white h-4 px-1 py-3">
          <FaFacebookF className="text-xs"/>
        </Button>
        <Button title="Instagram" aria-label="Instagram" className="rounded-full bg-transparent border border-[#FBFAFA30] text-white h-4 px-1 py-3">
          <FaInstagram className="text-xs"/>
        </Button>
      </div>
    </div>
  )
}

export default SocialHeader