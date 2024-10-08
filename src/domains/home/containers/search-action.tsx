import Link from "next/link";
import { useTranslations } from "next-intl";

import { Icon } from "@/shared/components";

export function SearchAction() {
  const t = useTranslations("HomePage");
  return (
    <header id="search-action" data-testid="search-action" className="p-4">
      <Link
        href="/search"
        className="flex h-[52px] items-center justify-between rounded-xl bg-surface-secondary py-2 pl-2 pr-4"
      >
        <div className="flex gap-2.5">
          <Icon name="magnifier" iconClassName="text-content-secondary" />
          <p className="text-content-tertiary text-labelMedium">
            {t("searchForProdcut")}
          </p>
        </div>
        <div className="flex size-8 items-center justify-center">
          <Icon
            size="small"
            iconClassName="text-content-primary"
            name="microphone"
          />
        </div>
      </Link>
    </header>
  );
}
