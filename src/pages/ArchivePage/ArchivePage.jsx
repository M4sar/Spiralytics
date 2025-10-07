import ArchiveSubHeader from "../../components/ArchiveSubHeader/ArchiveSubHeader";
import ArchiveCharacters from "./ArchiveCharacters/ArchiveCharacters";

export default function ArchivePage() {
  return (
    <>
      <ArchiveSubHeader />

      <div
        style={{
          display: "inline-block",
          width: "100%",
          color: "aliceblue",
          fontSize: "max(3.5vh, 20px)",
          textAlign: "center",
        }}
      >
        Last updates
      </div>
    </>
  );
}
