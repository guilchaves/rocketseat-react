import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotoList from "../contexts/photos/components/photo-list";

export default function HomePage() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "123", title: "Album 1" },
          { id: "321", title: "Album 2" },
          { id: "333", title: "Album 3" },
        ]}
        className="mb-9"
      />
      <PhotoList
        photos={[
          {
            id: "1",
            title: "Tower",
            imageId: "portrait-tower.png",
            albums: [
              { id: "123", title: "Album 1" },
              { id: "321", title: "Album 2" },
              { id: "333", title: "Album 3" },
            ],
          },
          {
            id: "2",
            title: "Shadow",
            imageId: "portrait-shadow.png",
            albums: [
              { id: "123", title: "Album 1" },
              { id: "321", title: "Album 2" },
              { id: "333", title: "Album 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}
