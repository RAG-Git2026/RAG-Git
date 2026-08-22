// app/page.tsx
'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('checking...');
  useEffect(() => {
    fetch('http://localhost:4000/api/health')
      .then(r => r.json())
      .then(d => setStatus(d.status));
  }, []);
  return <main className="p-8">Backend status: {status}</main>;
}