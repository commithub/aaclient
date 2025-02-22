import blackLogo from "../../assets/logos/black_without_slogan.png"
import whiteLogo from "../../assets/logos/white_without_slogan.png"
import { useTheme } from "../ThemeProvider";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

  const {actualTheme} = useTheme()

  return (
    <footer className=" bg-background text-muted-foreground ">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <img
          src={actualTheme === "dark" ? whiteLogo : blackLogo}
          className="w-20"
        />
        <p className="text-sm text-muted-foreground sm:ml-6 sm:mt-0 mt-4">
          © 2024 commithub
        </p>
      </div>
    </footer>
  );
}



