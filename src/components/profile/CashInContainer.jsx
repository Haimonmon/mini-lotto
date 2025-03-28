import React, { useEffect, useRef, useState } from "react";
import { addMoney, getWalletMoney } from "../../api/ProfileApi";

const CashInContainer = () => {
    const [message, setMessage] = useState("");
    const [walletBalance, setWalletBalance] = useState(getWalletMoney());
    const scrollContainerRef = useRef(null);
    const [activeCard, setActiveCard] = useState(null);
    
    const cards = [
        { id: "card-1", price: "$20", title: "Rookie Gambler", value: 20 },
        { id: "card-2", price: "$100", title: "Casual Better", value: 100 },
        { id: "card-3", price: "$500", title: "Risk Taker", value: 500 },
        { id: "card-4", price: "$1K", title: "High Roller", value: 1000 },
        { id: "card-5", price: "$10K", title: "Jackpot Dreamer", value: 10000 },
    ];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        // Center Card-1 on load
        const firstCard = scrollContainer.querySelector("#card-1");
        if (firstCard) {
            scrollContainer.scrollLeft = firstCard.offsetLeft - scrollContainer.offsetWidth / 2 + firstCard.offsetWidth / 2;
            setActiveCard(firstCard.id);
        }

        const handleScroll = () => {
            let closestCard = null;
            let closestDistance = Infinity;
            const containerCenter = scrollContainer.offsetWidth / 2 + scrollContainer.scrollLeft;

            scrollContainer.querySelectorAll(".cash-in-cards > div").forEach((card) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const distance = Math.abs(containerCenter - cardCenter);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = card;
                }
            });

            if (closestCard) setActiveCard(closestCard.id);
        };

        scrollContainer.addEventListener("scroll", handleScroll);
        return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }, []);

    const handleCashIn = async (amount) => {
        setMessage("");

        try {
            const response = await addMoney(amount);
            if (response.data.success) {
                const newBalance = response.data.new_balance;
                setMessage(`✅ Successfully added $${amount.toLocaleString()}!`);

                setWalletBalance(newBalance);
                const walletElement = document.getElementById("wallet-money");
                console.log(response);
                if (walletElement) {
                    walletElement.textContent = `$ ${newBalance.toLocaleString()}`;
                }
            } else {
                setMessage(`❌ Failed: ${response.data.message || "Error occurred"}`);
            }
        } catch (err) {
            setMessage(`❌ Error: ${err.message}`);
        }
    };

    return (
        <div className="cash-in-container">
            <div className="cash-in-title-container">
                <span id="cash-in-title">Cash in</span>
                <span id="cash-in-sub-title">You may want to refill that wallet, my guy.</span>
            </div>

            <div className="cash-in-cards" ref={scrollContainerRef}>
                {cards.map(({ id, price, title, value }, index) => (
                    <div
                        key={index}
                        id={`${id}`}
                        className={`card ${activeCard === id ? "active" : ""}`}
                        onClick={() => handleCashIn(value)}
                    >
                        <span id={`${id}-price-value`}>{price}</span>
                        <span id={`${id}-title`}>{title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CashInContainer;
