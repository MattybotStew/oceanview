// components/TickerBar.jsx
import { useState, useEffect } from 'react'

const TICKER_DATA = [
  { symbol: "S&P 500",      value: "4,832.14",  change: "+0.42%", positive: true },
  { symbol: "NASDAQ",       value: "15,214.82", change: "+0.87%", positive: true },
  { symbol: "RUSSELL 2000", value: "1,987.24",  change: "+1.12%", positive: true },
  { symbol: "10 YR TREASURY", value: "4.28%",   change: "+0.03%", positive: true },
  { symbol: "VIX",          value: "13.24",     change: "-0.18%", positive: false },
]

function formatTimestamp(d) {
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' })
}

export default function TickerBar({ compact = false }) {
  const [tickerData] = useState(TICKER_DATA)
  const [asOf, setAsOf] = useState(() => formatTimestamp(new Date()))

  useEffect(() => {
    const id = setInterval(() => setAsOf(formatTimestamp(new Date())), 60000)
    return () => clearInterval(id)
  }, [])

  const renderItem = (item, idx) => (
    <div key={idx} className="ov-ticker-item">
      <span className="ov-ticker-symbol">{item.symbol}</span>
      <span className="ov-ticker-value">{item.value}</span>
      <span className={item.positive ? "ov-ticker-change-positive" : "ov-ticker-change-negative"}>
        {item.positive ? "▲" : "▼"} {item.change}
      </span>
    </div>
  )

  if (compact) {
    return (
      <div className="ov-ticker ov-ticker-compact" role="group" aria-label="Market data summary">
        <div className="ov-ticker-track ov-ticker-track-static">
          {tickerData.map(renderItem)}
          <span className="ov-ticker-asof">As of {asOf}</span>
        </div>
      </div>
    )
  }

  const allItems = [...tickerData, ...tickerData]

  return (
    <div className="ov-ticker" role="marquee" aria-label={`Market data as of ${asOf}: S&P 500, NASDAQ, Russell 2000, 10 Year Treasury, VIX`}>
      <span className="ov-ticker-asof-fixed">As of {asOf}</span>
      <div className="ov-ticker-scroll">
        <div className="ov-ticker-track">
          {allItems.map(renderItem)}
        </div>
      </div>
    </div>
  )
}
