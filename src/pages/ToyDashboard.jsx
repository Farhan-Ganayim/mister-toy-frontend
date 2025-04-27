import { LineChart } from "../cmps/LineChart"
import { PriceByLabelChart } from "../cmps/PriceByLabelChart"
import { StockByLabelChart } from "../cmps/StockByLabelChart"


export function ToyDashboard() {

    return (
        <div className="charts-grid">
            <div className="chart-container">
                <h1 className="chart-title">Average price per label</h1>
                <PriceByLabelChart />
            </div>
            <div className="chart-container">
                <h1 className="chart-title">In stock by label</h1>
                <StockByLabelChart />
            </div>
            <div className="chart-container">

                <LineChart />
            </div>
        </div>
    )
}