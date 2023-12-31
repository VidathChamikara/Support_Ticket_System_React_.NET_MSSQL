import React, { FC, useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

interface chartData {
  data: {
    labels: string[]
    datasets: [
      {
        label: string                  
        data: number[]
        backgroundColor: string
        barThickness: number;
      },
      {
        label: string
        data: number[]
        backgroundColor: string
        barThickness: number;
      },
      {
        label: string
        data: number[]
        backgroundColor: string
        barThickness: number;
      },
    ]
  }
  options?: object
}

const TicketBarChart: FC<chartData> = (props) => {
  return <Bar data={props.data} options={props.options} />
}

export default TicketBarChart
