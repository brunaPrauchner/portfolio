import './Table.css';

function Table() {
  return (
    <>
      <div class="Rtable Rtable--4cols">
        <div style={{ order: 1 }} className="Rtable-cell columname">Coding</div>
        <div style={{ order: 2 }} className="Rtable-cell rowtext">C# </div>
        <div style={{ order: 3 }} className="Rtable-cell rowtext">Java</div>
        <div style={{ order: 4 }} className="Rtable-cell rowtext">JavaScript</div>
        <div style={{ order: 5 }} className="Rtable-cell rowtext">HTML/CSS</div>

        <div style={{ order: 1 }} className="Rtable-cell columname">Frameworks</div>
        <div style={{ order: 2 }} className="Rtable-cell rowtext">.Net Core</div>
        <div style={{ order: 3 }} className="Rtable-cell rowtext">Spring Boot</div>
        <div style={{ order: 4 }} className="Rtable-cell rowtext">React.js</div>
        <div style={{ order: 5 }} className="Rtable-cell rowtext">Express.js</div>

        <div style={{ order: 1 }} className="Rtable-cell columname">Tools</div>
        <div style={{ order: 2 }} className="Rtable-cell rowtext">Git</div>
        <div style={{ order: 3 }} className="Rtable-cell rowtext">Postman</div>
        <div style={{ order: 4 }} className="Rtable-cell rowtext">Swagger</div>
        <div style={{ order: 5 }} className="Rtable-cell rowtext">Figma</div>

        <div style={{ order: 1 }} className="Rtable-cell columname">AI</div>
        <div style={{ order: 2 }} className="Rtable-cell rowtext">Scikit Learn</div>
        <div style={{ order: 3 }} className="Rtable-cell rowtext">Keras</div>
        <div style={{ order: 4 }} className="Rtable-cell rowtext">TensorFlow</div>
        <div style={{ order: 5 }} className="Rtable-cell rowtext">CNTK</div>
      </div>
    </>
  );
}

export default Table;