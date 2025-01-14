import { Container, Row } from 'reactstrap'
import BasicAreaChart from './BasicAreaChart/BasicAreaChart'
import AreaSpalineChart from './AreaSpalineChart/AreaSpalineChart'
import BarChart from './BarChart/BarChart'
import FirstColumnChart from './FirstColumnChart/FirstColumnChart'
import BubbleChart from './BubbleChart/BubbleChart'
import SteplineChart from './SteplineChart/SteplineChart'
import ColumnCharts from './ColumnCharts/ColumnCharts'
import MixedChart from './MixedChart/MixedChart'
import CandlestickChart from './CandlestickChart/CandlestickChart'
import RadarChart from './RadarChart/RadarChart'

const ApexChartContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicAreaChart />
        <AreaSpalineChart />
        <BarChart />
        <FirstColumnChart />
        <BubbleChart />
        <SteplineChart />
        <ColumnCharts />
        <MixedChart />
        <CandlestickChart />
        <RadarChart />
      </Row>
    </Container>
  )
}

export default ApexChartContainer