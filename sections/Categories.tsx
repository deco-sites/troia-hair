import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Item {
  title: string;
  imgHref: ImageWidget;
}

interface Props {
  categorie?: Item[];
}

export default function Section({ categorie}: Props) {
  return (
    <div class="flex justify-between">
      {categorie?.map((item) => (
        <div>
          <Image
            class="object-cover rounded-full bg-primary border border-primary"
            src={item.imgHref || ""}
            width={83}
            height={83}
            alt={item.title}
          />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
