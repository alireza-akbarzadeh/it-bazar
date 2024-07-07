'use client';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useBanners } from '@/domains/home/hooks';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui';
import { cn } from '@/shared/utils';

export function Banners() {
  const { scrollSnaps, scrollTo, selectedIndex, setApi } = useBanners();

  return (
    <section className="my-3">
      <Carousel
        opts={{ direction: 'rtl' }}
        plugins={[Autoplay({ delay: 2500 })]}
        setApi={setApi}
        className="relative mt-9"
      >
        <CarouselContent className="gap-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[95%] pl-2">
              <div className="rounded-3xl">
                <div className="relative h-[207px] w-[328px]">
                  <Image
                    src="/images/banner.png"
                    layout="fill"
                    alt="store"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 right-1/2 translate-x-16 cursor-pointer">
          <div className="flex flex-row items-center gap-2">
            {scrollSnaps?.map((_, index) => (
              <span
                key={index}
                onClick={(event) => {
                  scrollTo(index);
                  event.stopPropagation();
                }}
                className={cn(
                  'h-2 w-2 rounded-full bg-black/30 transition-all duration-300 ease-in-out',
                  {
                    'h-2 w-5': index === selectedIndex,
                    'bg-white': index === selectedIndex,
                  },
                )}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
