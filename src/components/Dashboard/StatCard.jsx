import {
  FaFileAlt,
  FaChartLine,
  FaRobot,
  FaBriefcase,
} from "react-icons/fa";

function StatCard() {
  const stats = [
    {
      title: "Total Resumes",
      value: "24",
      icon: <FaFileAlt size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Average ATS Score",
      value: "87%",
      icon: <FaChartLine size={28} />,
      color: "bg-green-500",
    },
    {
      title: "AI Reviews",
      value: "24",
      icon: <FaRobot size={28} />,
      color: "bg-purple-500",
    },
    {
      title: "Job Matches",
      value: "16",
      icon: <FaBriefcase size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition"
        >
          <div>
            <p className="text-gray-500">{stat.title}</p>
            <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
          </div>

          <div className={`${stat.color} text-white p-4 rounded-xl`}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatCard;