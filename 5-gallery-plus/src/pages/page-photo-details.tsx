import { useParams } from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import type { Photo } from "../contexts/photos/models/photos";
import Skeleton from "../components/skeleton";
import PhotoNavigator from "../contexts/photos/components/photo-navigator";
import ImagePreview from "../components/image-preview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";
import useAlbums from "../contexts/albums/hooks/use-albums";

export default function PhotoDetailsPage() {
  const { id } = useParams();
  const { albums, isLoading: isLoadingAlbums } = useAlbums();
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
          <Text as="h2" variant="heading-large">
            {photo?.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotoNavigator loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="h-10 w-20" />
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-7">
            Álbuns
          </Text>

          <AlbumsListSelectable
            photo={photo}
            loading={isLoadingAlbums}
            albums={albums}
          />
        </div>
      </div>
    </Container>
  );
}
