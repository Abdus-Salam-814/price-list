import { SiTicktick } from "react-icons/si";
const PriceOfProduct = ({ product }) => {
  const { name, price, billingCycle, features } = product;

  return (
    <div className="bg-blue-400 p-8 space-y-12 rounded  mx-3">
      <h2>
        <span className="text-7xl">{price}</span>/
        <span className="text-2xl">{billingCycle}</span>
      </h2>
      <h3 className="text-4xl font-bold">{name}</h3>

      <ul>
        {features.map((item) => (
          <li className="flex  items-center gap-4" >
            
            <span><SiTicktick />
            </span> <span>{item}</span>
          </li>
        ))}
      </ul>
    <div className="flex justify-center items-center">
    <button className="btn w-3/4  text-white font-bold bg-green-600 hover:bg-green-900 duration-1000 rounded-xl
      ">Buy Now</button>
    </div>
    </div>
  );
};

export default PriceOfProduct;
