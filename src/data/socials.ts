export interface SocialLink {
  label: string;
  href: string;
  /** inline SVG path data rendered inside a 24x24 viewBox */
  icon: "email" | "github" | "linkedin" | "scholar";
}

export const email = "shadmantabib2002@gmail.com";
export const phone = "+880-1880-198766";

export const socials: SocialLink[] = [
  { label: "Email", href: `mailto:${email}`, icon: "email" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=T08yBzoAAAAJ&hl=en",
    icon: "scholar",
  },
  { label: "GitHub", href: "https://github.com/shadmantabib", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hm-shadman-tabib",
    icon: "linkedin",
  },
];

export const contactNote =
  "Feel free to reach out via email for research collaborations or inquiries.";
