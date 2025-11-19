import Skeleton from "../Skeleton";

export default function ScheduleItemSkeleton() {
  return (
    <div className="flex flex-row justify-between items-center py-3 px-5">
      <div className="flex gap-2">
        <Skeleton rounded="sm" className="h-5 w-10" />
        <Skeleton rounded="sm" className="h-5 w-40" />
      </div>
      <div>
        <Skeleton rounded="sm" className="h-5 w-5" />
      </div>
    </div>
  );
}
