import type { ChartProps } from "../../interface";
import "./Chart.css";

export default function Chart(matrix: ChartProps) {
  if (!matrix.matrix) {
    return;
  }
  console.log(matrix.matrix);

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
      {/* {matrix && (
        // <div className="chart-item main-data">
        //   <div className="data-item">Дата народження:</div>
        //   <div className="data-item">{date}</div>
        //   <div className="data-item">Додатні цифри:</div>
        //   <div className="data-item">
        //     {firstAddNumber}.{secondAddNumber}.{thirdAddNumber}.
        //     {fourthAddNumber}
        //   </div>
        //   <div className="data-item">Число долі</div>
        //   <div className="data-item">{fateNumber}</div>
        // </div>
      )} */}
      {matrix && (
        <div className="chart-container">
          <div className="chart-item added-numbers">
            <p className="data-item">Додатні цифри:</p>
            <p className="data-item">
              {firstAddNumber}.{secondAddNumber}.{thirdAddNumber}.
              {fourthAddNumber}
            </p>
          </div>
          <div className="chart-item number-fate">
            <p className="data-item">Число долі</p>
            <p className="data-item">{fateNumber}</p>
          </div>
          <div className="chart-item temper">
            <p>Темперамент</p>
            <p>{temper ? temper : "Пусто"}</p>
          </div>
          <div className="chart-item character">
            <p>Характер</p>
            <p>{character ? character : "Пусто"}</p>
          </div>
          <div className="chart-item energy">
            <p>Енергія</p>
            <p>{energy ? energy : "Пусто"}</p>
          </div>
          <div className="chart-item intrest">
            <p>Інтерес</p>
            <p>{intrest ? intrest : "Пусто"} </p>
          </div>
          <div className="chart-item health">
            <p>Здоров'я</p>
            <p>{health ? health : "Пусто"}</p>
          </div>
          <div className="chart-item logic">
            <p>Логіка</p>
            <p>{logic ? logic : "Пусто"}</p>
          </div>
          <div className="chart-item work">
            <p>Труд</p>
            <p>{work ? work : "Пусто"}</p>
          </div>
          <div className="chart-item luck">
            <p>Вдача</p>
            <p>{luck ? luck : "Пусто"}</p>
          </div>
          <div className="chart-item debt">
            <p>Борг</p>
            <p>{debt ? debt : "Пусто"}</p>
          </div>
          <div className="chart-item memory">
            <p>Пам'ять</p>
            <p>{memory ? memory : "Пусто"}</p>
          </div>
          <div className="chart-item family">
            <p>Сім'я</p>
            <p>{family ? family : "Пусто"}</p>
          </div>
          <div className="chart-item purpose">
            <p>Ціль</p>
            <p>
              {purpose ? purpose : "Пусто"}({hiddenPurpose ? hiddenPurpose : ""}
              )
            </p>
          </div>
          <div className="chart-item life">
            <p>Побут</p>
            <p>{life ? life : "Пусто"}</p>
          </div>
          <div className="chart-item habits">
            <p>Звички</p>
            <p>{habits ? habits : "Пусто"}</p>
          </div>
        </div>
      )}
    </div>
  );
}
