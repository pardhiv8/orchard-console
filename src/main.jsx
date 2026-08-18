import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const orchards = [
  { id: 'north', name: 'North Orchard', trees: 42, health: 96 },
  { id: 'river', name: 'River Orchard', trees: 31, health: 91 },
  { id: 'hill', name: 'Hill Orchard', trees: 27, health: 87 },
];

export function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(
    () => orchards.filter((o) => o.name.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <main>
      <header>
        <div><p className="eyebrow">ORCHARD CONSOLE</p><h1>Tree health overview</h1></div>
        <span className="badge">Live</span>
      </header>
      <label htmlFor="search">Search orchards</label>
      <input id="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by orchard name" />
      <section aria-label="Orchards" className="grid">
        {filtered.map((o) => (
          <button key={o.id} className={selected === o.id ? 'card selected' : 'card'} onClick={() => setSelected(o.id)} aria-pressed={selected === o.id}>
            <span className="name">{o.name}</span><strong>{o.health}%</strong><span>{o.trees} trees monitored</span>
          </button>
        ))}
      </section>
      <p role="status" aria-live="polite">{selected ? `${orchards.find((o) => o.id === selected).name} selected` : 'Select an orchard to inspect it.'}</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
