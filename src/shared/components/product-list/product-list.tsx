import Link from "next/link";
import { DiscountBadge } from "@/domains/home/components";

import { FeaturesList } from "@/domains/offline-store/components";
import { Icon, LazyImage } from "@/shared/components";
import { FindProductTypes } from "@/shared/config/mock-data";
import { CURRENCY } from "@/shared/constant";
import { Separator } from "@/shared/ui";
import { cn } from "@/shared/utils";

type ProductListPage = FindProductTypes & {
  activeBorder?: boolean;
};

export function ProductList(props: ProductListPage) {
  const {
    hasDiscountBadge = false,
    discountLabel,
    title,
    imageUrl,
    priceRange,
    activeBorder,
    loved,
    latinName,
  } = props;
  const items = ["تهران", "مشهد"];

  return (
    <div className="mt-5 px-4">
      <Link
        href={`/product/${latinName}`}
        aria-label="see the product in details"
        className="h-[125 px] flex items-center gap-8"
      >
        <div className="flex items-center gap-4">
          <div className="relative flex size-[109px] flex-col items-center justify-center rounded-md bg-surface-tertiary p-2">
            <figure className="size-[93px]">
              <LazyImage
                src={imageUrl}
                style={{
                  objectFit: "cover",
                }}
                quality={100}
                alt={title}
                fill
              />
            </figure>
            {hasDiscountBadge && discountLabel && (
              <DiscountBadge
                className="top-2 -translate-x-6"
                discount={discountLabel}
              />
            )}
            <div
              className={cn(
                "absolute bottom-2 right-2 flex size-6 translate-x-0 transform items-center justify-center rounded-full bg-gray-300",
                {
                  "bg-brand-main": loved,
                },
              )}
            >
              <Icon
                iconClassName="text-content-inverse"
                name={loved ? "heart-fill" : "heart"}
                size="xxSmall"
              />
            </div>
          </div>
          <figcaption>
            <div className="w-[229px]">
              <div className="w-full space-y-2">
                <h2 className="text-content-primary text-labelXSmall">
                  {title}
                </h2>
                <p className="flex items-center gap-1 text-content-primary text-labelXSmall">
                  <span className="text-tiny">از</span>
                  <span className="text-labelMedium">{priceRange}</span>
                  <span className="text-tiny">{CURRENCY.IR}</span>
                </p>
                <div className="flex gap-4">
                  <FeaturesList items={items} />
                </div>
              </div>
            </div>
          </figcaption>
        </div>
      </Link>
      {activeBorder && (
        <Separator className="my-4 border-b border-border-primary text-displaySmall" />
      )}
    </div>
  );
}
