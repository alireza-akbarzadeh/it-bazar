"use client";

import { LazyImage } from "@/shared/components";
import { CURRENCY } from "@/shared/constant";
import { useScroll } from "@/shared/hooks";
import { cn } from "@/shared/utils";
import { Appbar } from "./appbar/appbar";

export function RowInfo() {
  const isSticky = useScroll(300);

  const handleBackToTop = () => {
    if (!isSticky) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        `z-10 w-full appearance-none p-4 px-4 transition-all duration-200`,
        {
          "sticky top-0 flex-row border-b border-border-primary bg-content-inverse px-0 py-3":
            isSticky,
        },
      )}
    >
      {isSticky && <Appbar />}
      <button
        onClick={handleBackToTop}
        className="flex w-full appearance-none flex-col p-4 transition-all duration-200"
      >
        {isSticky && (
          <div className="flex h-[72px] w-20 items-center justify-center">
            <div className="relative size-[56px]">
              <LazyImage
                src="/images/phone.webp"
                alt="store"
                className="size-full"
                width={56}
                height={56}
              />
            </div>
          </div>
        )}
        <div className={isSticky ? "flex flex-col-reverse" : ""}>
          <h2 className="py-2 text-content-primary text-headlineXSmall">
            گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت
          </h2>
          <p className="pb-[9px] pt-px text-right text-content-primary text-headlineSmall">
            <span
              className={cn("text-bodyXXSmall", {
                "text-headlineSmall": isSticky,
              })}
            >
              از
            </span>{" "}
            ۱‍۶۷,۰۰۰
            <span
              className={cn("mr-1 text-labelXSmall", {
                "text-headlineSmall": isSticky,
              })}
            >
              {CURRENCY.IR}
            </span>
          </p>
        </div>
      </button>
    </div>
  );
}
