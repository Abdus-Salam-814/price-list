import { LineChart, Line, CartesianGrid, Legend, Tooltip, XAxis } from 'recharts';
const MyChart = () => {
    const studentMathMarksData =[
        { "id": 1, "name": "Alice", "mathMarks": 78, "physicsMarks": 72, "chemistryMarks": 81 },
        { "id": 2, "name": "Bob", "mathMarks": 85, "physicsMarks": 88, "chemistryMarks": 76 },
        { "id": 3, "name": "Charlie", "mathMarks": 92, "physicsMarks": 90, "chemistryMarks": 89 },
        { "id": 4, "name": "Diana", "mathMarks": 66, "physicsMarks": 70, "chemistryMarks": 64 },
        { "id": 5, "name": "Ethan", "mathMarks": 74, "physicsMarks": 68, "chemistryMarks": 73 },
        { "id": 6, "name": "Fiona", "mathMarks": 88, "physicsMarks": 85, "chemistryMarks": 91 },
        { "id": 7, "name": "George", "mathMarks": 59, "physicsMarks": 62, "chemistryMarks": 58 },
        { "id": 8, "name": "Hannah", "mathMarks": 95, "physicsMarks": 93, "chemistryMarks": 96 },
        { "id": 9, "name": "Ivan", "mathMarks": 81, "physicsMarks": 77, "chemistryMarks": 84 },
        { "id": 10, "name": "Julia", "mathMarks": 69, "physicsMarks": 71, "chemistryMarks": 66 }
      ];
      
    return (
        <div className='mx-32 my-12'>
            <LineChart width={1200} height={300} data={studentMathMarksData}>
               
            <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
            <Line dataKey="mathMarks" stroke="purple" />
            <Line dataKey={'physicsMarks'} stroke='blue'></Line>
            <Line type="monotone" dataKey={'chemistryMarks'} stroke='red' strokeWidth={3}  ></Line>
            <Legend align="right" />
            <Tooltip />
            <XAxis dataKey="name" />
                </LineChart> 
            
        </div>
    );
};

export default MyChart;