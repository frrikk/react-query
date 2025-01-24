import { PropsWithChildren } from "react";

interface DashboardPageProps extends PropsWithChildren {
  data: any[];
}

export default function DashboardPage({ data }: DashboardPageProps) {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
