import './Table.css';

function Table() {
  return (
    <>
      <div class="Rtable Rtable--4cols">
        <div style={{ order: 1 }} className="Rtable-cell columname">Languages</div>
        <div style={{ order: 2 }} className="Rtable-cell rowtext">C# Java</div>
        <div style={{ order: 3 }} className="Rtable-cell rowtext">JavaScript SQL</div>
        <div style={{ order: 4 }} className="Rtable-cell rowtext">HTML/CSS</div>
        <div style={{ order: 5 }} className="Rtable-cell rowtext">Prototyping</div>

        <div style={{ order: 1 }} className="Rtable-cell columname">Frameworks</div>
        <div style={{ order: 2 }} className="Rtable-cell rowtext">.Net Core</div>
        <div style={{ order: 3 }} className="Rtable-cell rowtext">React Node Express</div>
        <div style={{ order: 4 }} className="Rtable-cell rowtext">Spring Boot</div>
        <div style={{ order: 5 }} className="Rtable-cell rowtext">Prototyping</div>

        <div style={{ order: 1 }} className="Rtable-cell columname">Tools</div>
        <div style={{ order: 2 }} className="Rtable-cell rowtext">Git</div>
        <div style={{ order: 3 }} className="Rtable-cell rowtext">Postman</div>
        <div style={{ order: 4 }} className="Rtable-cell rowtext">Figma</div>
        <div style={{ order: 5 }} className="Rtable-cell rowtext">Prototyping</div>

        <div style={{ order: 1 }} className="Rtable-cell columname">AI</div>
        <div style={{ order: 2 }} className="Rtable-cell rowtext">Sketch</div>
        <div style={{ order: 3 }} className="Rtable-cell rowtext">InDesign</div>
        <div style={{ order: 4 }} className="Rtable-cell rowtext">InVision</div>
        <div style={{ order: 5 }} className="Rtable-cell rowtext">Prototyping</div>
      </div>
    </>
  );
}

export default Table;