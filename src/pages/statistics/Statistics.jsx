
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';



const Statistics = () => {
  
  
  const COLORS = ['#00C49F', '#FF444A'];
  const [donations, setDonations] = useState([])
  const [nofound, setNofound] = useState('')

  


  useEffect(() => {
      const getDonation = JSON.parse(localStorage.getItem('donation'))
      
      if (getDonation) {
         
          setDonations(getDonation.length)
         

      }
      else {
          setNofound('No Data Found')
      }
  }, [])
  const data = [
    { name: 'Your Donation', value: donations },
    { name: 'Total Donation', value: 12 },
  ];
  

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
     
    </div>
  );
};

export default Statistics;
