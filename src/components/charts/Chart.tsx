import type { ChartProps } from "../../interface";

export default function Chart(matrix: ChartProps) {
    console.log(matrix);
    return(
        <div>
            {matrix.matrix && (
                <div className="chart-container">
                    <h2>Матриця</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Перша додатня цифра</th>
                                <th>Друга додатня цифра</th>
                                <th>Третя додатня цифра</th>
                                <th>Четверта додатня цифра</th>
                                <th>Число долі</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{matrix.matrix.date}</td>
                                <td>{matrix.matrix.firstAddNumber}</td>
                                <td>{matrix.matrix.secondAddNumber}</td>
                                <td>{matrix.matrix.thirdAddNumber}</td>
                                <td>{matrix.matrix.fourthAddNumber}</td>
                                <td>{matrix.matrix.fateNumber}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            )}
            {matrix.matrix && (
                <div className="chart-container">
                    <h2>Характеристика</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Темперамент</th>
                                <th>Характер</th>
                                <th>Енергія</th>
                                <th>Інтерес</th>
                                <th>Здоров'я</th>
                                <th>Логіка</th>
                                <th>Труд</th>
                                <th>Вдача</th>
                                <th>Борг</th>
                                <th>Пам'ять</th>
                                <th>Сім'я</th>
                                <th>Ціль</th>
                                <th>Звички</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{matrix.matrix.temper?matrix.matrix.temper:"Пусто"}</td>
                                <td>{matrix.matrix.character?matrix.matrix.character:"Пусто"}</td>
                                <td>{matrix.matrix.energy?matrix.matrix.energy:"Пусто"}</td>
                                <td>{matrix.matrix.intrest?matrix.matrix.intrest:"Пусто"}</td>
                                <td>{matrix.matrix.health?matrix.matrix.health:"Пусто"}</td>
                                <td>{matrix.matrix.logic?matrix.matrix.logic:"Пусто"}</td>
                                <td>{matrix.matrix.work?matrix.matrix.work:"Пусто"}</td>
                                <td>{matrix.matrix.luck?matrix.matrix.luck:"Пусто"}</td>
                                <td>{matrix.matrix.debt?matrix.matrix.debt:"Пусто"}</td>
                                <td>{matrix.matrix.memory?matrix.matrix.memory:"Пусто"}</td>
                                <td>{matrix.matrix.family?matrix.matrix.family:"Пусто"}</td>
                                <td>{matrix.matrix.purpose?matrix.matrix.purpose:"Пусто"}</td>
                                <td>{matrix.matrix.habits?matrix.matrix.habits:"Пусто"}</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            )}
            
        </div>
    )
}