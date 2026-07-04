function RecentResumes() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">
        Recent Resume Analysis
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="py-3">Resume</th>
            <th>ATS Score</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="py-4">Software_Engineer.pdf</td>
            <td className="text-green-600 font-bold">92%</td>
            <td>04 Jul 2026</td>
            <td>Completed</td>
          </tr>

          <tr className="border-b">
            <td className="py-4">Data_Analyst.pdf</td>
            <td className="text-yellow-600 font-bold">81%</td>
            <td>03 Jul 2026</td>
            <td>Completed</td>
          </tr>

          <tr>
            <td className="py-4">Frontend_Developer.pdf</td>
            <td className="text-blue-600 font-bold">88%</td>
            <td>01 Jul 2026</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentResumes;