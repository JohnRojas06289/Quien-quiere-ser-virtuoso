import "../styles/Answers.css"

function Answers() {
  return (
    <div className="millonario">
      {/* Primera fila de botones */}
      <div className="millonario__item">
        <div className="opciones">
          <div className="opciones__item">
            <button id="a" className="button fondoA">
              <span className="amarillo">A:</span> Delaware
            </button>
          </div>

          <div className="opciones__item">
            <button id="b" className="button fondoB">
              <span className="amarillo">B:</span> Connecticut
            </button>
          </div>
        </div>
      </div>

      {/* Segunda fila de botones */}
      <div className="millonario__item">
        <div className="opciones">
          <div className="opciones__item">
            <button id="c" className="button fondoA">
              <span className="amarillo">C:</span> Nueva Jersey
            </button>
          </div>

          <div className="opciones__item">
            <button id="d" className="button fondoB">
              <span className="amarillo">D:</span> Rhode Island
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Answers;