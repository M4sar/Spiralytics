import "./ArchiveSubHeader.css";

export default function ArchiveSubHeader() {
  return (
    <div className="archive-subHeader">
      <a
        className="archive-subHeader__link "
        style={{ borderRadius: "20px 0 0 20px" }}
      >
        Characters
      </a>
      <a className="archive-subHeader__link ">Weapons</a>
      <a className="archive-subHeader__link ">Artifacts</a>
      <a className="archive-subHeader__link ">Enemies</a>
      <a
        className="archive-subHeader__link "
        style={{ borderRadius: "0 20px 20px 0" }}
      >
        Materials
      </a>
    </div>
  );
}
