import React  from "react";

export default function Hero({children}) {
  return <div className="hero">
      <div className="banner">
           <h1>think,code,deploy</h1>
           <p>embrace your chice- we do</p>
           {children}
           
      </div>
    </div>;
}
