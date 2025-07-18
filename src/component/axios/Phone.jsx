import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phone = ({phone}) => {




    return (
        <div className='mx-12'>
            
           <ResponsiveContainer width={'100%'} height={600}>
           <BarChart width={1200} height={600} data={phone}>
             <Legend />
            <Bar dataKey='price' fill="brown" label={{position: "top"}}  ></Bar>
            <Tooltip></Tooltip>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis dataKey={'price'}></YAxis>
            

             </BarChart>

           </ResponsiveContainer>
        </div>
    );
};

export default Phone;