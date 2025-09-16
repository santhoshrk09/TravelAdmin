import React from 'react';
import StatsCard from './StatsCard';


export default function StatsGrid({ stats = [] }) {
return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
{stats.map((s) => <StatsCard key={s.id} stat={s} />)}
</div>
);
}