export function FeaturesList({ items }: { items: string[] }) {
  return (
    <div className="flex gap-2 pb-[12px] pt-2.5">
      {items.map((text) => (
        <div className="rounded-lg bg-surface-secondary p-1.5 px-2" key={text}>
          <p className="text-nowrap text-content-tertiary text-bodyXSmall">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}
