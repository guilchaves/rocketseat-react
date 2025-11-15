import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import TrashIcon from "./assets/icons/trash.svg?react";
import XIcon from "./assets/icons/x.svg?react";

import Icon from "./components/Icon";
import Text from "./components/Text";

function App() {
  return (
    <div className="grid gap-3">
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
        <Icon svg={SpinnerIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>
    </div>
  );
}

export default App;
