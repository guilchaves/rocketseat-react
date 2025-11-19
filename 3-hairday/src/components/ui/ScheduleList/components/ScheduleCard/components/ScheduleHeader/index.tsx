import SunHorizonIcon from "../../../../../../../assets/icons/sun-horizon.svg?react";
import CloudSunIcon from "../../../../../../../assets/icons/cloud-sun.svg?react";
import MoonStarsIcon from "../../../../../../../assets/icons/moon-stars.svg?react";
import Typography from "../../../../../Typography";
import Icon from "../../../../../Icon";

interface ScheduleHeaderProps {
  daytime: "Manhã" | "Tarde" | "Noite";
  timeRange: string;
}

const DAYTIME_ICONS = {
  Manhã: SunHorizonIcon,
  Tarde: CloudSunIcon,
  Noite: MoonStarsIcon,
};

export default function ScheduleHeader({
  daytime,
  timeRange,
}: ScheduleHeaderProps) {
  const IconComponent = DAYTIME_ICONS[daytime] || SunHorizonIcon;

  return (
    <>
      <div className="border-b border-gray-600 flex flex-row justify-between py-3 px-5">
        <div className="flex gap-2">
          <Icon svg={IconComponent} className="fill-yellow" />
          <Typography as="h4" variant="text-sm" className="text-gray-300">
            {daytime}
          </Typography>
        </div>
        <Typography as="h4" variant="text-sm" className="text-gray-300">
          {timeRange}
        </Typography>
      </div>
    </>
  );
}
