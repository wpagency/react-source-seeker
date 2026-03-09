
export interface NavLinkType {
  name: string;
  href: string;
  dropdown?: Array<{ name: string; href: string; description?: string }>;
}

export const navLinks: NavLinkType[] = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services", 
    dropdown: [
      { name: "Web Design", href: "/services/web-design", description: "Beautiful, conversion-focused websites" },
      { name: "App Solutions", href: "/services/app-solutions", description: "Custom web and mobile applications" },
      { name: "SEO", href: "/services/seo", description: "Organic growth and visibility" },
      { name: "E-commerce", href: "/services/ecommerce", description: "Online stores that sell" },
      { name: "UX Design", href: "/services/ux-design", description: "User experiences that convert" },
      { name: "Consulting", href: "/services/consulting", description: "Strategic digital guidance" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];


