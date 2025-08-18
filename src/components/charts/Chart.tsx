import type { ChartProps } from "../../interface";
import "./Chart.css";

export default function Chart(matrix: ChartProps) {
  if (!matrix.matrix) {
    return;
  }

  const {
    firstAddNumber,
    secondAddNumber,
    thirdAddNumber,
    fourthAddNumber,
    fateNumber,
    temper,
    character,
    energy,
    intrest,
    health,
    logic,
    life,
    work,
    luck,
    debt,
    memory,
    family,
    purpose,
    hiddenPurpose,
    habits,
  } = matrix.matrix;

  return (
    <div>

      {matrix && (
        <div className="chart-container">
          <div className="chart-item added-numbers">
            <p className="smallFont">Додатні цифри:</p>
            <p>
              {firstAddNumber}.{secondAddNumber}.{thirdAddNumber}.
              {fourthAddNumber}
            </p>
          </div>
          <div className="chart-item number-fate">
            <p className="smallFont">Число долі</p>
            <p>{fateNumber}</p>
          </div>
          <div className="chart-item temper">
            <p className="smallFont">Темперамент</p>
            <p>{temper || temper === "0" ? temper : "-"}</p>
          </div>
          <div className="chart-item character">
            <p className="smallFont">Характер</p>
            <p>{character ? character : "-"}</p>
          </div>
          <div className="chart-item energy">
            <p className="smallFont">Енергія</p>
            <p>{energy ? energy : "-"}</p>
          </div>
          <div className="chart-item intrest">
            <p className="smallFont">Інтерес</p>
            <p>{intrest ? intrest : "-"} </p>
          </div>
          <div className="chart-item health">
            <p className="smallFont">Здоров'я</p>
            <p>{health ? health : "-"}</p>
          </div>
          <div className="chart-item logic">
            <p className="smallFont">Логіка</p>
            <p>{logic ? logic : "-"}</p>
          </div>
          <div className="chart-item work">
            <p className="smallFont">Труд</p>
            <p>{work ? work : "-"}</p>
          </div>
          <div className="chart-item luck">
            <p className="smallFont">Удача</p>
            <p>{luck ? luck : "-"}</p>
          </div>
          <div className="chart-item debt">
            <p className="smallFont">Борг</p>
            <p>{debt ? debt : "-"}</p>
          </div>
          <div className="chart-item memory">
            <p className="smallFont">Пам'ять</p>
            <p>{memory ? memory : "-"}</p>
          </div>
          <div className="chart-item family">
            <p className="smallFont">Сім'я</p>
            <p>{family || family === "0" ? family : "-"}</p>
          </div>
          <div className="chart-item purpose">
            <p className="smallFont">Ціль</p>
            <p>
              {purpose || purpose === "0" ? purpose : "-"}({hiddenPurpose ? hiddenPurpose : ""})
            </p>
          </div>
          <div className="chart-item life">
            <p className="smallFont">Побут</p>
            <p>{life && life !== "0" ? life : "-"}</p>
          </div>
          <div className="chart-item habits">
            <p className="smallFont">Звички</p>
            <p>{habits || habits === "0" ? habits : "-"}</p>
          </div>
        </div>
      )}
    </div>
  );
}
