import Icon from "./components/ui/Icon";
import Typography from "./components/ui/Typography";
import TrashIcon from "./assets/icons/trash.svg?react";
import CalendarBlankIcon from "./assets/icons/calendar-blank.svg?react";
import CaretLeftIcon from "./assets/icons/caret-left.svg?react";
import CaretRightIcon from "./assets/icons/caret-right.svg?react";
import CaretDownIcon from "./assets/icons/caret-down.svg?react";
import CloudSunIcon from "./assets/icons/cloud-sun.svg?react";
import MoonStarsIcon from "./assets/icons/moon-stars.svg?react";
import SunHorizonIcon from "./assets/icons/sun-horizon.svg?react";
import UserSquareIcon from "./assets/icons/user-square.svg?react";



function App() {
  return (
    <>
      <div className="space-y-2">
        <Typography variant="title-lg" as="h1">
          This is a large title
        </Typography>
        <Typography variant="title-md" as="h2">
          This is a medium title
        </Typography>
        <Typography variant="title-sm" as="h3">
          This is a small title
        </Typography>
        <Typography variant="text-md" as="p">
          This is a medium text
        </Typography>
        <Typography variant="text-sm" as="p">
          This is a small text
        </Typography>
      </div>

      <div className="flex gap-1 mt-4">
        <Icon svg={TrashIcon} />
        <Icon svg={CalendarBlankIcon} />
        <Icon svg={CaretDownIcon} />
        <Icon svg={CaretLeftIcon} />
        <Icon svg={CaretRightIcon} />
        <Icon svg={SunHorizonIcon } />
        <Icon svg={CloudSunIcon} />
        <Icon svg={UserSquareIcon} />
        <Icon svg={MoonStarsIcon} />
      </div>
    </>
  );
}

export default App;
