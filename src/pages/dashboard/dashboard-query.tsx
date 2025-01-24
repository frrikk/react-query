import DashboardPage from "@/pages/dashboard/dashboard-page";

/**
 * @Component DashboardQuery is responsible for getting the data and passing it down to the Page UI component, in charge of rendering the UI
 .
 * */

function DashboardQuery() {
  return <DashboardPage data={[]} />;
}

export default DashboardQuery;
