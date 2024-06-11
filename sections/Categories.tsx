import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Item {
  title: string;
  imgHref: ImageWidget;
}

interface Props {
  title?: string;
  categorie?: Item[];
}

export default function Section({ title="nossas categorias", categorie}: Props) {
  return (
    <div class="flex flex-col items-center w-[1300px] justify-center mx-auto pb-16">
      <h2 class="text-2xl text-primary text-center font-bold uppercase py-20">
        {title}
      </h2>
      <div class="flex justify-between w-full px-8">
        {categorie?.map((item) => (
          <div>
            <div class="flex items-center justify-center w-[115px] h-[115px] rounded-full border border-primary">
              <Image
                class="object-cover"
                src={item.imgHref || ""}
                width={83}
                height={83}
                alt={item.title}
              />
            </div>
            <p class="text-[10px] text-primary text-center font-bold pt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
