import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useAppSelector } from '@/store/hooks';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import styles from './StockChart.module.scss';
import Skeleton from 'react-loading-skeleton';

const StockChart = () => {
  const { stock } = useAppSelector((state) => state.stock);
  const { loading } = useAppSelector((state) => state.symbols);

  const [series, setSeries] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  const chartOptions = {
    series,
    options: {
      labels,
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              height: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

  useEffect(() => {
    if (stock.length > 0 && !loading) {
      const seriesData = stock.map((item) => item.quantity);
      const labelsData = stock.map((item) => item.data.symbol);
      setSeries(seriesData);
      setLabels(labelsData);
    } else {
      setSeries([1]);
      setLabels(['your portfolio is Empty']);
    }
  }, [stock]);

  return (
    <div className={styles.stockChart}>
      {loading ? (
        <Skeleton circle width={360} height={360} />
      ) : (
        <ApexChart options={chartOptions?.options} series={chartOptions?.series} type="pie" height={380} width={380} />
      )}
    </div>
  );
};

export default StockChart;
