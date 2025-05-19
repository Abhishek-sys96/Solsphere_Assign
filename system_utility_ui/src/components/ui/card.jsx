// src/components/ui/card.jsx
export function Card({ className = "", children }) {
  return (
    <div className={`bg-white border rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
