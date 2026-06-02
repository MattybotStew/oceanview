// components/TickerBar.jsx
import { useState } from 'react'

export default function TickerBar() {
  const [tickerData] = useState([
    { symbol: "S&P 500", value: "4,832.14", change: "+0.42%", positive: true },
    { symbol: "NASDAQ", value: "15,214.82", change: "+0.87%", positive: true },
    { symbol: "RUSSELL 2000", value: "1,987.24", change: "+1.12%", positive: true },
    { symbol: "10 YR TREASURY", value: "4.28%", change: "+0.03%", positive: true },
    { symbol: "VIX", value: "13.24", change: "-0.18%", positive: false }
  ]);

  const allItems = [...tickerData, ...tickerData];

  return (
    <div className="ov-ticker">
      <div className="ov-ticker-track">
        {allItems.map((item, idx) => (
          <div key={idx} className="ov-ticker-item">
            <span className="ov-ticker-symbol">{item.symbol}</span>
            <span className="ov-ticker-value">{item.value}</span>
            <span className={item.positive ? "ov-ticker-change-positive" : "ov-ticker-change-negative"}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
