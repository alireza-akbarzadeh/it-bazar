"use client";

import { StoreMapProps } from "@/domains/offline-store/offline-store-types";
import { Button } from "@/shared/ui";

/* eslint-disable @next/next/no-img-element */
export function StoreMap(props: StoreMapProps) {
  const { handleToggleClick } = props;

  return (
    <div className="relative size-full">
      <div className="relative size-full">
        <img
          src="/images/map.png"
          alt="map"
          className="size-full object-cover"
        />
      </div>
      <Button
        onClick={() => handleToggleClick("one")}
        variant="outline"
        className="absolute left-0 top-1/2 z-20 translate-x-1/2 translate-y-1/2 cursor-pointer rounded-full text-content-primary text-labelMedium"
      >
        ۳۶۵,۰۰۰
      </Button>
      <Button
        onClick={() => handleToggleClick("one")}
        variant="outline"
        className="absolute left-1/2 top-1/3 z-20 cursor-pointer rounded-full text-content-primary text-labelMedium"
      >
        ۴۶۵,۰۰۰
      </Button>
      <Button
        onClick={() => handleToggleClick("one")}
        variant="outline"
        className="absolute left-0 top-20 z-20 translate-x-1/2 translate-y-1/2 cursor-pointer rounded-full text-content-primary text-labelMedium"
      >
        ۲۶۵,۰۰۰
      </Button>
    </div>
  );
}
