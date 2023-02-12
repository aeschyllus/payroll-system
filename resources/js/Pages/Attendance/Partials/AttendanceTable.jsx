export default function Table(props) {
  const { attendances } = props;

  const formatDate = (date) => {
    const d = new Date(date);

    return d.toLocaleString();
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    Employee ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    First
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    Last
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    In
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    Out
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendances.map((attendance, i) => (
                  <tr className="border-b" key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {i + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {attendance.user_id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {attendance.user.first_name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {attendance.user.last_name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {formatDate(attendance.time_in)}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {attendance.time_out
                        ? formatDate(attendance.time_out)
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
