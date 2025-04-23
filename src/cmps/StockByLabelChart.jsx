import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { toyService } from '../services/toy.service.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export function StockByLabelChart() {
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        toyService.getToyLabelData().then(res => {
            const labels = []
            const percent = []

            for (const label in res) {
                const info = res[label]
                labels.push(label)

                const calcPercent = info.total ? (info.inStock / info.total) * 100 : 0
                percent.push(+calcPercent)
            }

            setChartData({
                labels,
                datasets: [
                    {
                        label: '% in stock',
                        data: percent,
                        backgroundColor: [
                            'rgba(75, 192, 192, .5)',
                            'rgba(255, 99, 132, .5)',
                            'rgba(54, 162, 235, .5)',
                            'rgba(255, 206, 86, .5)',
                            'rgba(153, 102, 255, .5)',
                            'rgba(255, 159, 64, .5)'
                        ],
                        borderWidth: 1
                    }
                ]
            })
        })
    }, [])

    if (!chartData) return null
    return <Doughnut data={chartData} />
}
