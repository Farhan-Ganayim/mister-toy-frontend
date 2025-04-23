
import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import { toyService } from '../services/toy.service.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export function PriceByLabelChart() {
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        toyService.getToyLabelData().then(res => {
            const labels = []
            const averages = []

            for (const label in res) {
                labels.push(label)
                const info = res[label]
                averages.push(+((info.sumPrice / info.total)))
            }

            const data = {
                labels,
                datasets: [
                    {
                        label: 'Avg Price €',
                        data: averages,
                        backgroundColor: [
                            'rgba(255, 99, 132, .5)',
                            'rgba(54, 162, 235, .5)',
                            'rgba(255, 206, 86, .5)',
                            'rgba(75, 192, 192, .5)',
                            'rgba(153, 102, 255, .5)',
                            'rgba(255, 159, 64, .5)',
                        ],
                        borderWidth: 2
                    }
                ]
            }

            setChartData(data)
        })
    }, [])

    if (!chartData) return null
    return <Pie data={chartData} />
}



