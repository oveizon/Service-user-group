import Link from "next/link";
import footer from "@/styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={footer.link}>
      <Link href="#">
        See All <img src="/forward.png" alt="see all" />{" "}
      </Link>
    </div>
  );
};

export default Footer;
