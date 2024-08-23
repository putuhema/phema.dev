"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Copy, GithubLogo, LinkedinLogo, Mailbox, ReadCvLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr/index";


export const ContactCopyItem = ({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = (text: string) => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <button className={cn(copied
      && "text-gray-11"
    )} onClick={() => handleCopy(copy)}>
      {copied ? "Copied to clipboard!" : title}
    </button>
  );
};

export const ContactItem = ({
  icon,
  children,
  className,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("group relative text-gray-11 hover:text-gray-1", className)}
    >
      <Slot>{children}</Slot>
      <div
        className="group-hover:opacity-100 opacity-0 absolute -right-4 bottom-[5px] bg-accent shrink-0 block w-3 h-3 text-[black]"
        aria-hidden={true}
      >
        {icon}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <Section heading="Contact">
      <div className="flex flex-wrap flex-col md:gap-y-0 md:items-start md:mt-0">
        <ContactItem icon={<Copy />}>
          <div className="flex items-center">
            <Mailbox className="group-hover:text-accent mr-2" />
            <ContactCopyItem title="Email" copy="putuhendramahendra@gmail.com" />
          </div>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <div className="flex items-center">
            <TwitterLogo className="group-hover:text-accent mr-2" />
            <a href="https://twitter.com/putuhema_" target="_blank">
              Twitter
            </a>
          </div>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <div className="flex items-center">
            <GithubLogo className="group-hover:text-accent mr-2" />
            <a href="https://github.com/putuhema" target="_blank">
              GitHub
            </a>
          </div>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <div className="flex items-center">
            <LinkedinLogo className="group-hover:text-accent mr-2" />
            <a href="https://linkedin.com/in/putuhema" target="_blank">
              LinkedIn
            </a>
          </div>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <div className="flex items-center">
            <ReadCvLogo className="group-hover:text-accent mr-2" />
            <a href="https://drive.google.com/file/d/13E8xg4_CXG_SuNOVqyi4_gFzneAE0vFp/view?usp=drive_link" target="_blank">
              CV
            </a>
          </div>
        </ContactItem>
      </div>
    </Section>
  );
};

export default Contact;
