import StatCard from "../components/StatCard"
import './Dashboard.css'
function Dashboard() {
  return (
      <div className="stats-grid">
        <StatCard title="Total Employees" count={120} />
        <StatCard title="Active Employees" count={105} />
        <StatCard title="New Joiners" count={8} />
        <StatCard title="On Leave" count={7} />
      </div>
  )
}

export default Dashboard
