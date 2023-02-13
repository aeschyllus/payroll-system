import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Table from "./Partials/AttendanceTable";

export default function Attendance(props) {
  const { attendances, auth, errors, has_timed_in } = props;
  const { post, patch } = useForm();

  const submit = (e) => {
    e.preventDefault();

    if (!has_timed_in) {
      post(route("attendance.store"));
    } else {
      patch(route("attendance.update", attendances[0]));
    }
  };

  return (
    <AuthenticatedLayout
      auth={auth}
      errors={errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Attendance
        </h2>
      }
    >
      <Head title="Attendance" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          {auth.role !== "Administrator" && (
            <form
              className="bg-white overflow-hidden shadow-sm sm:rounded-lg"
              onSubmit={submit}
            >
              <div className="p-6 text-gray-900 flex justify-between items-center">
                {attendances[0].time_out
                  ? "You have not timed in yet."
                  : `You have timed in at ${new Date(
                      attendances[0].time_in
                    ).toLocaleString()}`}
                {has_timed_in ? (
                  <DangerButton>Time out</DangerButton>
                ) : (
                  <PrimaryButton>Time in</PrimaryButton>
                )}
              </div>
            </form>
          )}

          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <Table attendances={attendances} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
