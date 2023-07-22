import { WebElArtGallery } from "./WebElArtGallery";

function App() {
  return (
    <div className="App">
      <WebElArtGallery
        photos={[
          {
            id: 1,
            src: "/photos/1.jpg",
            preview: "/photos/preview/1.jpg",
            description: "Norway 1",
          },
          {
            id: 1,
            src: "/photos/2.jpg",
            preview: "/photos/preview/2.jpg",
            description: "Norway 2",
          },
          {
            id: 1,
            src: "/photos/3.jpg",
            preview: "/photos/preview/3.jpg",
            description: "Norway 3",
          },
          {
            id: 1,
            src: "/photos/4.jpg",
            preview: "/photos/preview/4.jpg",
            description: "Norway 4",
          },
          {
            id: 1,
            src: "/photos/5.jpg",
            preview: "/photos/preview/5.jpg",
            description: "Norway 5",
          },
          {
            id: 1,
            src: "/photos/6.jpg",
            preview: "/photos/preview/6.jpg",
            description: "Norway 6",
          },
          {
            id: 1,
            src: "/photos/7.jpg",
            preview: "/photos/preview/7.jpg",
            description: "Norway 7",
          },
        ]}
      />
    </div>
  );
}

export default App;
