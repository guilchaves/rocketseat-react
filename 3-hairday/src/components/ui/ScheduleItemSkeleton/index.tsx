import Skeleton from "../Skeleton";

export default function ScheduleItemSkeleton() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex gap-4">
        <Skeleton rounded="sm" className="h-5 w-10" />
        <Skeleton rounded="sm" className="h-5 w-40" />
      </div>
      <div>
        <Skeleton rounded="sm" className="h-5 w-5" />
      </div>
    </div>
  );
}
