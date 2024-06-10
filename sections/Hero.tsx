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
    <nav class="lg:container lg:mx-auto ">
      <div class="flex flex-col items-center">
        <div class="flex w-full xl:container  pt-2  z-10 flex-col  justify-center text-center  items-center">
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
        <div class="flex justify-between bg-primary w-full h-14 px-10">
          {informationBar?.map((item) => (
            <div class="flex justify-center items-center gap-5">
              <Image
                width={41}
                class=""
                src={item.item}
                alt={item.title}
                decoding="async"
                loading="lazy"
              />
              <div>
                <h5 class="font-bold text-[10px] text-white">{item.title}</h5>
                <p class="font-normal text-[10px] text-white">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
