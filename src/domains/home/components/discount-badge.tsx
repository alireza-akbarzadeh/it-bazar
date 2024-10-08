import { DiscountBadgePropsType } from "@/domains/home/home-types";
import { Icon } from "@/shared/components";
import { cn } from "@/shared/utils";

export function DiscountBadge(props: DiscountBadgePropsType) {
  const { discount, className } = props;
  return (
    <div
      className={cn(
        "bg-surface-gradient-brand flex-center absolute top-2 h-[20px] w-[39px] -translate-x-8 rounded-sm px-[21px]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-[2px] pt-[2px]">
        <span className="text-content-inverse text-tiny">{`%${discount}`}</span>
        <Icon
          size={12}
          iconClassName="text-content-inverse mb-[2px]"
          name="coupon-puched-fill"
        />
      </div>
    </div>
  );
}
