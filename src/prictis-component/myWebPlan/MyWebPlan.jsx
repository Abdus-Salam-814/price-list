import React from 'react';
import Plan from './Plan';

const MyWebPlan = () => {
    const planData = [
        {
          "id": "basic",
          "name": "Basic",
          "description": "Essential features to get started.",
          "features": [
            "1 User",
            "Basic Support",
            "Access to core features"
          ],
          "pricing": {
            "monthly": {
              "price": 9.99,
              "currency": "USD",
              "billing_cycle": "monthly"
            },
            "yearly": {
              "price": 99.99,
              "currency": "USD",
              "billing_cycle": "yearly"
            }
          }
        },
        {
          "id": "standard",
          "name": "Standard",
          "description": "More power for growing teams.",
          "features": [
            "Up to 5 Users",
            "Priority Support",
            "Advanced analytics"
          ],
          "pricing": {
            "monthly": {
              "price": 19.99,
              "currency": "USD",
              "billing_cycle": "monthly"
            },
            "yearly": {
              "price": 199.99,
              "currency": "USD",
              "billing_cycle": "yearly"
            }
          }
        },
        {
          "id": "premium",
          "name": "Premium",
          "description": "All features for large teams.",
          "features": [
            "Unlimited Users",
            "24/7 Dedicated Support",
            "All advanced features"
          ],
          "pricing": {
            "monthly": {
              "price": 29.99,
              "currency": "USD",
              "billing_cycle": "monthly"
            },
            "yearly": {
              "price": 299.99,
              "currency": "USD",
              "billing_cycle": "yearly"
            }
          }
        }
      ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center text-center text-white my-6'>
            {
                planData.map(plans => <Plan plans={plans} key={plans.id}></Plan>)
            }

            
        </div>
    );
};

export default MyWebPlan;