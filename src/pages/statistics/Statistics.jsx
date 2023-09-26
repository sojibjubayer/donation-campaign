
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Your Donation', value: 30 },
  { name: 'Total Donation', value: 60 },
];

const COLORS = ['#00C49F', '#FF444A'];

const Statistics = () => {
  return (
    <div>
      <PieChart className='mx-auto' width={600} height={600}>
        <Pie
          dataKey="value"
          data={data}
          cx={200}
          cy={200}
          innerRadius={0}
          outerRadius={200}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`center-cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
      <text x={200} y={200} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={18}>
        60%
      </text>
      <text x={200} y={250} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={18}>
        30%
      </text>
    </div>
  );
};

export default Statistics;
