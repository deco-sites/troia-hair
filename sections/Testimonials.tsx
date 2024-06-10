import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider/index.tsx";
import { useId } from "../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Testimonial {
  content?: {
    description: string;
    avatar: ImageWidget;
    /** @description Image's alt text */
    alt: string;
    name: string;
    position: string;
  };
}

export interface Props {
  title: string;
  subtitle: string;
  slides: Testimonial[];
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
  title: "This is where you'll put your customer testimonials",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Enim est porttitor gravida dolor id. Id ipsum semper euismod euismod. Risus parturient non tempus eget libero ullamcorper ultricies tellus. Accumsan turpis tempor nunc tellus ut.",
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

function SliderItem({ slide, id }: { slide: Testimonial; id: string }) {
  const { content } = slide;

  return (
    <div id={id} class="relative overflow-y-hidden w-full min-h-[292px]">
      <div class="flex flex-col justify-center gap-16 p-8 h-[409px] w-[327px]">
        <div class="flex flex-col items-center gap-5">
          <Image
            class="object-cover rounded-full bg-primary"
            alt={content?.alt}
            src={content?.avatar || ""}
            width={186}
            height={186}
          />
          <div class="flex flex-col">
            <p class="font-semibold  w-[327px] text-primary text-center text-base">
              {content?.name}
            </p>
            <p class="text-primary text-center text-[10px]">
              {content?.position}
            </p>
            <p class="text-xs w-[327px] text-primary text-center pt-6">
              {content?.description}
            </p>
          </div>
        </div>
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
    <div class="w-screen border-t-2 border-primary">
      <div
        id={id}
        class="min-h-min flex flex-col  lg:container md:max-w-6xl lg:mx-auto mx-4 py-4 lg:py-12 b"
      >
        <h2 class="text-2xl text-primary font-bold pb-5">{title}</h2>
        <p class="text-base text-primary">{subtitle}</p>
        <Slider
          class="carousel carousel-center w-full col-span-full row-span-full gap-20 pt-10"
          rootId={id}
          interval={interval && interval * 1e3}
          infinite
        >
          {slides?.map((slide, index) => (
            <Slider.Item
              index={index}
              class="carousel-item"
            >
              <SliderItem slide={slide} id={`${id}::${index}`} />
            </Slider.Item>
          ))}
        </Slider>

        {/* <div class="flex justify-between pt-8 lg:px-16">
        {props.dots && <Dots slides={slides} interval={interval} />}{" "}
        {props.arrows && <Buttons />}
      </div> */}
      </div>
    </div>
  );
}

export default Carousel;
