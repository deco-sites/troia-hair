import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider/index.tsx";
import { useId } from "../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Product {
  content?: {
    description: string;
    productImage: ImageWidget;
    /** @description Image's alt text */
    alt: string;
    price: string;
    textPrice: string;
    desconto?: string;
  };
}

export interface Props {
  title: string;
  subtitle: string;
  whatsapp: string;
  slides: Product[];
  /**
   * @title Show arrows
   * @description show arrows to navigate through the images
   */
  arrows?: boolean;
  /**
   * @title Show dots
   * @description show dots to navigate through the images
   */
  dots?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  title: "BESTSELLERS DO BRASIL",
  subtitle: "Os mais procurados pelos nossos clientes",
  slides: [
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
  ],
};

function SliderItem({ slide, id }: { slide: Product; id: string }) {
  const { content } = slide;

  return (
    <div
      id={id}
      class="relative overflow-y-hidden w-full flex flex-col items-center"
    >
      <div class="flex flex-col h-[266px] w-[167px] border-[0.18px] border-primary rounded-[7px] px-2 pt-[5px]">
        <div class="flex justify-between w-full pb-3">
          <Image
            alt="icone de coração"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10652/a7e41c85-ae36-4885-8a3e-8084afa71c68"
            width={18}
            height={16}
          />

          <Image
            alt="icone de whatsapp"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10652/53b0d5db-8082-4f1d-a526-9b3e6221aff9"
            width={14}
            height={13}
          />
        </div>
        <div class="flex flex-col items-center">
          <div class=" w-[143px] h-[143px] pb-[17px]">
            <Image
              class="object-contain"
              alt={content?.alt}
              src={content?.productImage || ""}
              width={143}
              height={129}
            />
          </div>
          <div class="flex flex-col items-center">
            <p class="font-bold text-[7px] w-[157px] text-primary text-center pb-[6px]">
              {content?.description}
            </p>
            <p class="font-bold  w-[327px] text-primary text-center text-[17px] pb-[13px]">
              {`R$ ${content?.price}`}
            </p>
            <div class="flex gap-2">
              <a
                class="font-normal uppercase btn btn-accent p-0 w-[75px] h-[18px] text-[8.5px] text-primary rounded-md min-h-0"
                href="/"
              >
                comprar
              </a>
              <a
                class="font-normal uppercase btn btn-accent p-0 w-[75px] h-[18px] text-[8.5px] text-primary placeholder-primary rounded-md min-h-0"
                href="/"
              >
                ver produto
              </a>
            </div>
          </div>
        </div>
      </div>
      <p class="text-[7px] text-primary w-[134px] text-center pt-[9px]">
        {content?.textPrice}
      </p>
      <div class="flex gap-[11px] pt-[6px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            alt="icone de estrela para avaliar o produto"
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10652/4991c5d9-1b97-41c5-aadf-544e1984e90e"
            width={13}
            height={13}
          />
        ))}
      </div>
    </div>
  );
}

function Dots({ slides, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel col-span-full gap-3 z-10">
        {slides?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-2 h-2 rounded-full group-disabled:animate-progress dot"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, subtitle, slides, interval } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-screen">
      <div
        id={id}
        class="min-h-min flex flex-col justify-center items-center lg:container md:max-w-6xl lg:mx-auto mx-4 py-4 lg:py-12 b"
      >
        <h2 class="text-2xl text-primary font-bold pb-2">{title}</h2>
        <p class="text-base text-primary">{subtitle}</p>
        <Slider
          class="carousel carousel-center w-[1043px] col-span-full row-span-full gap-[52px] pt-[92px]"
          rootId={id}
          interval={interval && interval * 1e3}
          infinite
        >
          {slides?.map((slide, index) => (
            <Slider.Item index={index} class="carousel-item">
              <SliderItem slide={slide} id={`${id}::${index}`} />
            </Slider.Item>
          ))}
        </Slider>

        <div class="flex justify-between pt-8 lg:px-16 ">
        {props.dots && <Dots slides={slides} interval={interval} />}{" "}
        {props.arrows && <Buttons />}
      </div>
      </div>
    </div>
  );
}

export default Carousel;
