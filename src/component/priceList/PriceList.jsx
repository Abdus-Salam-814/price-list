import PriceOfProduct from "../PriceOfProduct/PriceOfProduct";

const PriceList = () => {
    const priceListData =  [
        {
          "id": "basic-monthly",
          "name": "Basic Plan",
          "price": 30,
          "billingCycle": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 group fitness class per week"
          ]
        },
        {
          "id": "standard-monthly",
          "name": "Standard Plan",
          "price": 50,
          "billingCycle": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group fitness classes",
            "1 personal training session per month",
            "Free Wi-Fi"
          ]
        },
        {
          "id": "premium-monthly",
          "name": "Premium Plan",
          "price": 80,
          "billingCycle": "monthly",
          "features": [
            "24/7 gym access",
            "Access to all equipment and classes",
            "Weekly personal training sessions",
            "Nutrition consultation",
            "Sauna & steam room access",
            "Priority support"
          ]
        },
        {
          "id": "student-discount",
          "name": "Student Plan",
          "price": 25,
          "billingCycle": "monthly",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 fitness class per week",
            "Valid student ID required"
          ]
        },
        {
          "id": "yearly-premium",
          "name": "Annual Premium Plan",
          "price": 800,
          "billingCycle": "yearly",
          "features": [
            "24/7 gym access",
            "Unlimited classes and personal training",
            "Monthly body composition analysis",
            "Nutrition coaching",
            "2 guest passes per month",
            "VIP lounge access"
          ]
        }
      ]
      

    return (

        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 text-center text-white">
            {
                priceListData.map(product => <PriceOfProduct key={product.id} product={product}></PriceOfProduct> )
            }
        </div>
    );
};

export default PriceList;