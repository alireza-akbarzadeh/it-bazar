import { Button } from '@/shared/ui';

export function SortChanges() {
  return (
    <div className="w-[360px]">
      <div className="flex items-center gap-3 py-2">
        <Button fullWidth variant="outline">
          ماهانه
        </Button>
        <Button fullWidth variant="outline">
          ۳ ماهه
        </Button>
        <Button fullWidth variant="outline">
          ۶ ماهه
        </Button>
        <Button fullWidth variant="outline">
          سالانه
        </Button>
      </div>
    </div>
  );
}
