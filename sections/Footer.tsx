import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network:
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "X - Twitter"
    | "Youtube"
    | "Tiktok";
  href: string;
  socialImage?: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  title?: string;
  subtitle?: string;
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
  social?: Social[];
}

export default function Footer({
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10652/160dd22a-c4b6-4826-86af-9a96537715e0",
    alt: "Logo",
  },
  title = "Assine nossa newsletter",
  subtitle = "Fique por dentro de nossas novidades e descontos",
  links = [
    {
      title: "Column One",
      items: [
        { label: "Link One", href: "/" },
        { label: "Link Two", href: "/" },
        { label: "Link Three", href: "/" },
        { label: "Link Four", href: "/" },
        { label: "Link Five", href: "/" },
      ],
    },
    {
      title: "Column Two",
      items: [
        { label: "Link Six", href: "/" },
        { label: "Link Seven", href: "/" },
        { label: "Link Eight", href: "/" },
        { label: "Link Nine", href: "/" },
        { label: "Link Ten", href: "/" },
      ],
    },
    {
      title: "Column Three",
      items: [
        { label: "Link Eleven", href: "/" },
        { label: "Link Twelve", href: "/" },
        { label: "Link FourThirteenteen", href: "/" },
        { label: "Link Fourteen", href: "/" },
        { label: "Link Fifteen", href: "/" },
      ],
    },
  ],
  subscribe = {
    title: "Subcribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to with our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: "Made with",
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
  social = [
    { network: "Facebook", href: "", socialImage: "" },
    { network: "Instagram", href: "", socialImage: "" },
    { network: "X - Twitter", href: "", socialImage: "" },
    { network: "Linkedin", href: "", socialImage: "" },
    { network: "Youtube", href: "", socialImage: "" },
    { network: "Tiktok", href: "", socialImage: "" },
  ],
}: Props) {
  return (
    <div class="lg:max-w-none bg-neutral mx-auto md:max-w-6xl px-4 pt-16 text-sm flex justify-center">
      <div class="w-[1153px] flex flex-col gap-20">
        <div class="flex flex-col gap-6 justify-between lg:flex-row text-secondary-content">
          <div>
            <h3 class="font-poppins text-2xl font-bold">{title}</h3>
            <p class="font-poppins text-xs font-bold pt-1">{subtitle}</p>
          </div>
          <div class="flex gap-9 text-secondary-content">
            {links?.map((link) => (
              <div>
                <h4 class="font-semibold mb-4">{link.title}</h4>
                {link.items?.map((item) => (
                  <a
                    class="block hover:underline link no-underline py-1"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div class="lg:w-[40%]">
            <h4 class="font-semibold mb-4">{subscribe?.title}</h4>
            <form class="flex flex-col gap-4">
              <p class="font-normal">{subscribe.description}</p>
              <div class="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="w-full input input-bordered input-primary"
                />
                <button
                  type="submit"
                  class="btn btn-outline font-normal"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </div>
              <p
                class="text-xs"
                dangerouslySetInnerHTML={{ __html: subscribe.instructions }}
              ></p>
            </form>
          </div>
        </div>
        <div class="border-primary border-t flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-center py-8">
          <div class="flex flex-col gap-4 items-center lg:flex-row lg:gap-6">
            <a
              href={madeWith?.href}
              class="flex items-center gap-2"
              target="_blank"
            >
              <span>{madeWith?.label}</span>
              <Image
                src={madeWith?.src || ""}
                width={100}
                height={28}
                alt={madeWith?.label}
              />
            </a>
            <span>{copyright}</span>
            <div class="flex gap-2 justify-between lg:gap-6">
              {bottomLinks?.map((item) => (
                <a class="link" href={item.href} target="_blank">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div class="flex gap-3">
            {social?.map((item) => (
              <a class="block" href={item.href} target="_blank">
                {item.network == "Facebook" && (
                  <Image
                    src={item.socialImage || ""}
                    width={25}
                    height={25}
                    alt={item.network}
                  />
                )}
                {item.network == "Instagram" && (
                  <Image
                    src={item.socialImage || ""}
                    width={25}
                    height={25}
                    alt={item.network}
                  />
                )}
                {item.network == "Linkedin" && (
                  <Image
                    src={item.socialImage || ""}
                    width={25}
                    height={25}
                    alt={item.network}
                  />
                )}
                {item.network == "X - Twitter" && (
                  <Image
                    src={item.socialImage || ""}
                    width={25}
                    height={25}
                    alt={item.network}
                  />
                )}
                {item.network == "Youtube" && (
                  <Image
                    src={item.socialImage || ""}
                    width={25}
                    height={25}
                    alt={item.network}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
