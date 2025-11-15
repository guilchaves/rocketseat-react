import CheckIcon from "../../assets/icons/check.svg?react";
import PencilIcon from "../../assets/icons/pencil.svg?react";
import PlusIcon from "../../assets/icons/plus.svg?react";
import SpinnerIcon from "../../assets/icons/spinner.svg?react";
import TrashIcon from "../../assets/icons/trash.svg?react";
import XIcon from "../../assets/icons/x.svg?react";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Icon from "../../components/Icon";
import InputCheckbox from "../../components/InputCheckbox";
import InputText from "../../components/InputText";
import Skeleton from "../../components/Skeleton";
import Text from "../../components/Text";

function ComponentsPage() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text>Olá mundo</Text>
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá mundo
          </Text>
          <Text variant="body-md" className="text-green-base">
            Olá mundo
          </Text>
          <Text variant="body-md-bold">Olá mundo</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={PencilIcon} />
          <Icon svg={XIcon} />
        </div>

        <div className="flex gap-1">
          <Badge variant="primary">5</Badge>
          <Badge variant="secondary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md"> Olá mundo </Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>
    </Container>
  );
}

export default ComponentsPage;
