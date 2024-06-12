import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @title Imagem do Banner
   * @description Tamanho da Imagem largura:1140px altura:195px.
   */
  banner: ImageWidget;
  /**
   * @title Alt
   * @description Descrição da imagem para acessibilidade.
   */
  alt?: string;
}

export default function Section({ banner, alt }: Props) {
  return (
    <div>
      <Image
        class="mx-auto w-[1140px] h-[195px] object-cover object-top"
        src={banner || ""}
        width={1140}
        height={195}
        alt={alt}
      />
    </div>
  );
}
