import { useParams } from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import type { Photo } from "../contexts/photos/models/photos";
import Skeleton from "../components/skeleton";
import PhotoNavigator from "../contexts/photos/components/photo-navigator";

export default function PhotoDetailsPage() {
  const { id } = useParams();
  //TODO: apenas para teste do mock, retirar ao finalizar
  const isLoadingPhoto = false;
  const photo = {
    id: "1",
    title: "Tower",
    imageId: "portrait-tower.png",
    albums: [
      { id: "123", title: "Album 1" },
      { id: "321", title: "Album 2" },
      { id: "333", title: "Album 3" },
    ],
  } as Photo;

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotoNavigator loading={isLoadingPhoto} />
      </header>
    </Container>
  );
}
