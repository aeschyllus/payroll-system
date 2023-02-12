import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Table from "./Partials/EmployeesTable";

export default function Index(props) {
  const { auth, errors, employees } = props;
    console.log(employees)

  return (
    <AuthenticatedLayout
      auth={auth}
      errors={errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Employees
        </h2>
      }
    >
      <Head title="Employees" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <Table employees={employees} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
