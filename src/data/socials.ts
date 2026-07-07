export interface SocialLink {
  label: string;
  href: string;
  /** inline SVG path data rendered inside a 24x24 viewBox */
  icon: "email" | "github" | "linkedin" | "globe";
}

export const email = "shadmantabib2002@gmail.com";

export const socials: SocialLink[] = [
  { label: "Email", href: `mailto:${email}`, icon: "email" },
  { label: "GitHub", href: "https://github.com/shadmantabib", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hm-shadman-tabib",
    icon: "linkedin",
  },
  { label: "Portfolio", href: "https://shadmantabib.github.io/", icon: "globe" },
];

export const contactNote =
  "Feel free to reach out via email for research collaborations or inquiries.";
