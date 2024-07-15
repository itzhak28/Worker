import React from 'react';
import '../CSS/Stripe.css';

function Stripe() {
    const getCurrentGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return "Good morning, what do you want to search for?";
        } else if (currentHour < 18) {
            return "Good afternoon, what do you want to search for?";
        } else {
            return "Good evening, what do you want to search for?";
        }
    };

    return (
        <div className="stripe-container">
            {getCurrentGreeting()}
        </div>
    );
}

export default Stripe;
