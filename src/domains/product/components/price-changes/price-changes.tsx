'use client';

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
import { SectionTitle } from '@/domains/home/components';
import { CURRENCY } from '@/shared/constant';
import { ChartConfig, ChartContainer } from '@/shared/ui';
import { SortChanges } from './sort-changes';

// Define the chart data type
interface ChartData {
  month: string;
  price: number;
}

const chartData: ChartData[] = [
  { month: 'فروردین', price: 140 },
  { month: 'اردیبهشت', price: 300 },
  { month: 'خرداد', price: 150 },
  { month: 'تیر', price: 300 },
];

const chartConfig = {
  price: {
    label: '۱۲ اردیبهشت',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

// Define the custom tooltip props
interface CustomTooltipProps extends TooltipProps<number, string> {}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip relative space-y-2 rounded bg-content-primary px-4 py-3 text-bodyXSmall text-content-inverse shadow-elevation3">
        <p className="">{`${payload[0].value} ${CURRENCY.IR}`}</p>
        <p className="">{`۱۲ ${label} ۱۴۰۳ `}</p>
        <div className="tooltip-triangle border-l-5 border-r-5 border-t-5 absolute bottom-[-5px] left-1/2 size-0 -translate-x-1/2 border-x-transparent border-t-black"></div>
      </div>
    );
  }
  return null;
};

export function PriceChanges() {
  return (
    <div className="w-[360px]">
      <SortChanges />
      <ChartContainer config={chartConfig}>
        <LineChart width={400} accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} stroke={'#EAEAEA'} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={{ stroke: '#EAEAEA' }}
            tickMargin={9}
            tick={({ x, y, payload }) => (
              <text x={x} y={y} className="text-bodyXSmall text-[#A9A9A9]">
                {payload.value}
              </text>
            )}
          />
          <YAxis
            yAxisId="left"
            tickLine={false}
            tickMargin={14}
            axisLine={{ stroke: '#EAEAEA' }}
            tickFormatter={(value) => `${value}`}
            tick={({ x, y, payload }) => (
              <text x={x} y={y} className="text-bodyXSmall text-[#A9A9A9]">
                {payload.value}
              </text>
            )}
          />

          <Tooltip content={<CustomTooltip />} />
          <Line
            yAxisId="left"
            dataKey="price"
            type="linear"
            stroke="var(--color-price)"
            strokeWidth={2}
            dot={{ fill: 'var(--color-price)' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
      <SectionTitle title="اطلاع رسانی قیمت" />
    </div>
  );
}
