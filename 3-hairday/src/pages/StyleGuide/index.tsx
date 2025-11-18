import CalendarBlankIcon from "../../assets/icons/calendar-blank.svg?react";
import CaretDownIcon from "../../assets/icons/caret-down.svg?react";
import CaretLeftIcon from "../../assets/icons/caret-left.svg?react";
import CaretRightIcon from "../../assets/icons/caret-right.svg?react";
import CloudSunIcon from "../../assets/icons/cloud-sun.svg?react";
import MoonStarsIcon from "../../assets/icons/moon-stars.svg?react";
import SunHorizonIcon from "../../assets/icons/sun-horizon.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import UserSquareIcon from "../../assets/icons/user-square.svg?react";
import Button from "../../components/ui/Button";
import ButtonIcon from "../../components/ui/ButtonIcon";
import Icon from "../../components/ui/Icon";
import TextInput from "../../components/ui/TextInput";
import TimeSelect from "../../components/ui/TimeSelect";
import Typography from "../../components/ui/Typography";

export default function StyleGuidePage() {
  return (
    <div className="p-10">
      <Typography
        variant="title-lg"
        as="h1"
        className="mb-10 mt-2 text-gray-100"
      >
        Tipografia
      </Typography>
      <div className="flex flex-col gap-2 text-gray-100">
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

      <Typography
        variant="title-lg"
        as="h1"
        className="mb-10 mt-10 text-gray-100"
      >
        Ícones
      </Typography>

      <div className="flex gap-1 mt-4">
        <Icon svg={TrashIcon} className="fill-gray-100" />
        <Icon svg={CalendarBlankIcon} className="fill-gray-100" />
        <Icon svg={CaretDownIcon} className="fill-gray-100" />
        <Icon svg={CaretLeftIcon} className="fill-gray-100" />
        <Icon svg={CaretRightIcon} className="fill-gray-100" />
        <Icon svg={SunHorizonIcon} className="fill-gray-100" />
        <Icon svg={CloudSunIcon} className="fill-gray-100" />
        <Icon svg={UserSquareIcon} className="fill-gray-100" />
        <Icon svg={MoonStarsIcon} className="fill-gray-100" />
      </div>

      <Typography
        variant="title-lg"
        as="h1"
        className="mb-10 mt-10 text-gray-100"
      >
        Button
      </Typography>
      <div className="flex flex-col gap-2 mt-4">
        <Button>Agendar</Button>
        <Button disabled>Agendar</Button>
      </div>

      <Typography
        variant="title-lg"
        as="h1"
        className="mb-10 mt-10 text-gray-100"
      >
        TextInput
      </Typography>

      <div className="flex flex-col gap-4 mt-4">
        <TextInput
          placeholder="Nome do cliente"
          icon={CalendarBlankIcon}
          type="date"
        />
        <TextInput
          placeholder="Nome do cliente"
          icon={UserSquareIcon}
        />
        <TextInput
          placeholder="Input desativado"
          icon={UserSquareIcon}
          disabled
        />
      </div>

      <Typography
        variant="title-lg"
        as="h1"
        className="mb-10 mt-10 text-gray-100"
      >
        Button Icon
      </Typography>

      <div className="flex flex-col gap-4 mt-4">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} disabled />
      </div>

      <Typography
        variant="title-lg"
        as="h1"
        className="mb-10 mt-10 text-gray-100"
      >
        Time Select
      </Typography>

      <div className="flex flex-col gap-4 mt-4">
        <TimeSelect time="09:00" />
        <TimeSelect time="09:00" />
        <TimeSelect time="09:00" />
        <TimeSelect time="09:00" disabled />
      </div>
    </div>
  );
}
