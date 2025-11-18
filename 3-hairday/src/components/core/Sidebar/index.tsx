import CalendarBlankIcon from "../../../assets/icons/calendar-blank.svg?react";
import UserSquareIcon from "../../../assets/icons/user-square.svg?react";
import Button from "../../ui/Button";
import TextInput from "../../ui/TextInput";
import TimeSelect from "../../ui/TimeSelect";
import Typography from "../../ui/Typography";

export default function Sidebar() {
  return (
    <>
      <div className="bg-gray-700 max-w-[550px] rounded-lg flex flex-col justify-center align-center p-20">
        <div className="mb-6">
          <Typography as="h1" variant="title-lg" className="text-gray-100">
            Agende um atendimento
          </Typography>
          <Typography as="p" variant="text-sm" className="text-gray-300">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </Typography>
        </div>

        <div className="mb-8 space-y-2">
          <Typography as="h3" variant="title-md" className="text-gray-200">
            Data
          </Typography>
          <TextInput type="date" icon={CalendarBlankIcon} />
        </div>

        <div className="space-y-2 mb-8">
          <Typography as="h3" variant="title-md" className="text-gray-200">
            Horários
          </Typography>
          <Typography as="p" variant="title-sm" className="text-gray-300">
            Manhã
          </Typography>
          <div className="flex gap-1 flex-wrap">
            <TimeSelect time="09:00" />
            <TimeSelect time="10:00" />
            <TimeSelect time="11:00" disabled />
            <TimeSelect time="12:00" />
          </div>
          <Typography as="p" variant="title-sm" className="text-gray-300">
            Tarde
          </Typography>
          <div className="flex gap-1 flex-wrap">
            <TimeSelect time="13:00" disabled />
            <TimeSelect time="14:00" disabled />
            <TimeSelect time="15:00" />
            <TimeSelect time="16:00" disabled />
            <TimeSelect time="17:00" disabled />
            <TimeSelect time="18:00" />
          </div>
          <Typography as="p" variant="title-sm" className="text-gray-300">
            Noite
          </Typography>
          <div className="flex gap-1 flex-wrap">
            <TimeSelect time="19:00" />
            <TimeSelect time="20:00" />
            <TimeSelect time="21:00" disabled />
          </div>
        </div>

        <div className="mb-6 space-y-2">
          <Typography as="h3" variant="title-md" className="text-gray-200">
            Cliente
          </Typography>
          <TextInput
            type="text"
            placeholder="Nome do cliente"
            icon={UserSquareIcon}
          />
        </div>

        <Button>Agendar</Button>
      </div>
    </>
  );
}
