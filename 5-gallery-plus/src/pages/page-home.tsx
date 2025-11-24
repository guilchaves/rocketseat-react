import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";

export default function HomePage() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: "123",
            title: "Ola mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Album 1" },
              { id: "23", title: "Album 2" },
              { id: "2131", title: "Album 3" },
              { id: "12", title: "Album 4" },
            ],
          }}
        />
      </div>
    </Container>
  );
}
