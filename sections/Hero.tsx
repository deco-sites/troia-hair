import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Informations {
  title: string;
  subtitle: string;
  item: ImageWidget;
}

export interface Props {
  image: ImageWidget;
  informationBar: Informations[];
}



export default function HeroFlats({
 image,
  informationBar,
  
}: Props) {
  return (
    <nav class="lg:container lg:mx-auto mx-4">
      <div class="flex flex-col items-center gap-8">
        <div class="flex w-full xl:container xl:mx-auto py-2 mx-5 md:mx-10 z-10 flex-col  justify-center text-center  gap-12 md:gap-20 items-center">
          {image && (
            <Image
              width={1300}
              class="w-full object-fit"
              sizes="(max-width: 1300px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
        </div>
        <div>
          {informationBar?.map((item) => (
            <div>
              <Image
                width={41}
                class=""
                src={item.item}
                alt={item.title}
                decoding="async"
                loading="lazy"
              />
              <h5>{item.title}</h5>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
