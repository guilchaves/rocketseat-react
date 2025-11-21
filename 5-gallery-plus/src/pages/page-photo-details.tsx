import { useParams } from "react-router";
import Text from "../components/text";

export default function PhotoDetailsPage() {
  const { id } = useParams();
  return (
    <>
      <Text variant="heading-medium">Photo Details Page</Text>
      <hr />
      <Text variant="heading-medium">ID da foto: {id}</Text>
    </>
  );
}
