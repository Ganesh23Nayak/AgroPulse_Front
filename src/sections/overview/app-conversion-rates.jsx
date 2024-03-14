import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';

export default function StackedHistogram({ title, subheader, chart, ...other }) {
  const { series, options } = chart;

  // Grouping data by market (y-axis) and summing up modal prices (x-axis)
  const groupedData = series.reduce((acc, curr) => {
    const existingItem = acc.find(item => item.market === curr.market);
    if (existingItem) {
      existingItem.modal_price += curr.modal_price;
    } else {
      acc.push({ market: curr.market, modal_price: curr.modal_price });
    }
    return acc;
  }, []);

  // Extracting grouped data for x-axis (modal price) and y-axis (market)
  const xData = groupedData.map(data => data.modal_price);
  const yData = groupedData.map(data => data.market);

  // Chart series configuration with stacked data and different colors
  const chartSeries = [{
    name: 'Modal Price',
    data: xData,
    type: 'bar',
    stack: 'modal_price',
    fill: {
      colors: ['#007AFF', '#00E3FF', '#FFD800', '#FF6D00', '#F5365C'], // Custom colors for each stacked bar
    },
  }];

  // Chart options
  const chartOptions = useChart({
    tooltip: {
      y: {
        formatter: (value) => fNumber(value),
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '90%',
        borderRadius: 2,
        dataLabels: {
          position: 'center',
        },
        stacked: true,
      },
    },
    xaxis: {
      categories: yData.sort(), // Sort y-axis labels alphabetically
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ mx: 3 }}>
        <Chart
          dir="ltr"
          type="bar"
          series={chartSeries}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

StackedHistogram.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};