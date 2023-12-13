import * as echarts from "echarts";

export default function crearGrafico() {

    const contenedor = document.querySelector(".grafico-container");

    const width = contenedor.clientWidth;
    const height = contenedor.clientHeight;

    const datos = {
        meses: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],
        valores: [90, 89, 38, 23, 34, 6, 7, 23, 90, 23, 34, 54]
    };

    const opciones = {
        title: {
            text: "Grafico de Prueba",
        },
        xAxis: {
            data: datos.meses,
        },
        yAxis: {

        },
        series: [
            {
                data: datos.valores,
                type: 'bar',
            },
        ]
    };

    const miGrafico = echarts.init(contenedor, "dark");
    miGrafico.resize({ width, height });

    miGrafico.setOption(opciones);
    return miGrafico;
}