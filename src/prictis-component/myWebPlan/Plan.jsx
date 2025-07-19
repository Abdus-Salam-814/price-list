
const Plan = ({plans}) => {
    const {name, description, features, pricing } = plans;
    const {monthly, yearly} = pricing;
    
    console.log(name)
    
    return (
        <div className="bg-sky-500 rounded p-8 space-y-6">
            <h3>
               <span className="text-6xl font-bold"> {monthly.price} </span>
               / <span>{monthly.billing_cycle}</span>
                
                </h3>
            <h3>
               <span className="text-3xl font-bold"> {yearly.price} </span>
               / <span>{yearly.billing_cycle}</span>
                
                </h3>
            <h1 className="text-3xl font-extrabold">{name}</h1>

            <ul className="text-xl">
                <li>{description}</li>
            </ul>
            <ul className="text-xl">
                {
                    features.map( fea =>(<li>{fea}</li>))

                }
            </ul>
            <button className="btn w-3/4 bg-green-500 ">Buy Now</button>
        </div>
    );
};

export default Plan;