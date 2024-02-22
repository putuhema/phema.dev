import {
  FileIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center   text-sm">
      <div className="flex items-center justify-center gap-2 my-4">
        {[
          {
            icon: <GitHubLogoIcon />,
            title: "GitHub",
            url: "https://github.com/putuhema",
          },
          {
            icon: <LinkedInLogoIcon />,
            title: "LinkedIn",
            url: "https://linkedin.com/in/putuhema",
          },
          {
            icon: <TwitterLogoIcon />,
            title: "Twitter",
            url: "https://twitter.com/putuhema_",
          },
          {
            icon: <FileIcon />,
            title: "CV",
            url: "#",
          },
        ].map((social) => (
          <a
            href={social.url}
            key={social.title}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "link" }), "w-max")}
          >
            <span className="mr-2">{social.icon}</span>
            {social.title}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

