import Header from "./components/header/Header";
import Characters from "./pages/ArchivePage/ArchiveCharacters/ArchiveCharacters.jsx";
import ArchivePage from "./pages/ArchivePage/ArchivePage.jsx";

export default function App() {
  return (
    <>
      <div className="site-background-dark" id="background"></div>
      <Header />
      <main className="main">
        <ArchivePage />
      </main>
      {/* <Characters /> */}
    </>
  );
}
