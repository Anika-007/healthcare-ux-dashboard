interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export default function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0];
    const total = payload[0].payload.total || 24;
    const percentage = ((data.value / total) * 100).toFixed(1);

    return (
      <div className="bg-gray-900 border-2 border-white/20 rounded-xl p-4 shadow-2xl backdrop-blur-md">
        <p className="text-white font-bold text-lg mb-2">{label || data.name}</p>
        <p className="text-blue-400 font-semibold text-2xl mb-1">{data.value} people</p>
        <p className="text-gray-300 text-sm">{percentage}% of total</p>
      </div>
    );
  }

  return null;
}
