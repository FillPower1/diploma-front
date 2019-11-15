import React from 'react'

const Characteristics = ({ characteristics }) => {
    const {
        amountOfMemory,
        processor,
        color,
        camera,
        diagonal,
        resolution,
        authentication,
        additionals,
        weight,
        zoom } = characteristics

    return (
        <table className="striped">
            <tbody>
                <tr>
                    <td>Объем памяти</td>
                    <td>{amountOfMemory} GB</td>
                </tr>
                <tr>
                    <td>Процессор</td>
                    <td>{processor}</td>
                </tr>
                <tr>
                    <td>Цвет</td>
                    <td>{color}</td>
                </tr>
                <tr>
                    <td>Диагональ</td>
                    <td>{diagonal}</td>
                </tr>
                <tr>
                    <td>Разрешение</td>
                    <td>{resolution}</td>
                </tr>
                <tr>
                    <td>Камера</td>
                    <td>{camera}</td>
                </tr>
                <tr>
                    <td>Зум</td>
                    <td>{zoom}</td>
                </tr>
                <tr>
                    <td>Аутентификация</td>
                    <td>{authentication}</td>
                </tr>
                <tr>
                    <td>Доп. возможности</td>
                    <td>{additionals}</td>
                </tr>
                <tr>
                    <td>Вес</td>
                    <td>{weight}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Characteristics
