import "./App.css";
import Gallery from "./components/Gallery/Gallery";
// export const ImageIndexContext = createContext();

function App() {
  // const [imageIndex, setImageIndex] = useState(0);

  return (
    // <ImageIndexContext.Provider value={{ imageIndex, setImageIndex }}>
    <Gallery />
    // </ImageIndexContext.Provider>
  );
}
export default App;
