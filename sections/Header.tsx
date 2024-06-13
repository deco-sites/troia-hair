import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  label: string;
  id?: string;
  href: string;
  icon: ImageWidget;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
}

export default function Header({
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10652/160dd22a-c4b6-4826-86af-9a96537715e0",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
   
  },
}: Nav) {
  return (
    <nav class="drawer drawer-end  w-[1300px] mx-auto">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content lg:px-0 px-4 flex gap-8 items-center justify-between py-4">
        <a href="/">
          <Image src={logo.src || ""} width={137} height={58} alt={logo.alt} />
        </a>

        <div class="hidden items-center justify-between lg:flex ">
          <ul class="flex gap-[54px] ">
            {navigation.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline text-[10px] text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div class="flex gap-3">
            <a
              href="/"
              class=" font-normal btn btn-primary btn-outline border rounded-full p-0 m-0 w-[43px] h-[43px] min-h-0"
            >
              <Image
                class="w-[28px] h-[38px]  p-0 m-0"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10652/42e42ba9-9d4b-41e7-88fd-1f9472b23575"
                width={28}
                height={38}
                alt="icone do carrinho de compras"
              />
            </a>
            <a
              href="/"
              class=" font-normal btn btn-primary btn-outline border rounded-full p-0 m-0 w-[43px] h-[43px]  min-h-0"
            >
              <Image
                class="w-[28px] h-[38px] hover:fill-primary"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10652/1a1a3c39-17f3-4687-84ae-de810f201285"
                width={28}
                height={38}
                alt="icone do carrinho de compras"
              />
            </a>
            <a
              href="/"
              class=" font-normal btn btn-primary btn-outline border rounded-full p-0 m-0 w-[43px] h-[43px]  min-h-0"
            >
              <Image
                class="w-[28px] h-[38px] hover:fill-primary"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10652/4b00e9f1-1cc7-4f6d-b12f-18ec0c8952af"
                width={28}
                height={38}
                alt="icone do carrinho de compras"
              />
            </a>
          </div>
        </div>

        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
          <a class="p-4" href="/">
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt}
            />
          </a>

          <ul class="menu">
            {navigation?.links.map((link) => (
              <li>
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* <ul class="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                // class={`font-normal btn btn-primary ${
                //   item.outline && "btn-outline"
                // }`}
              >
                {item?.text}
              </a>
            ))}
          </ul> */}
        </div>
      </aside>
    </nav>
  );
}
