import React from "react";

const Recent = () => {
  const transactions = [    { type: "Purchase", coin: "Bitcoin", date: "2022-04-28", amount: 0.0543 },  { type: "Card", coin: "Ethereum", date: "2022-04-24", amount: 1.2398 }  ,   { type: "Sale", coin: "Ethereum", date: "2022-04-24", amount: 1.2398 },    { type: "Purchase", coin: "Ethereum", date: "2022-04-22", amount: 0.9832 },  ];

  return (
    <div className="Graphcard" style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", marginTop: "20px", width: "calc(60% - 250px - 20px)" }}>
  <h2 style={{ marginBottom: "10px" }}>Another Card</h2>
  <p>Content goes here...</p>
</div>


  );
};

export default Recent;
