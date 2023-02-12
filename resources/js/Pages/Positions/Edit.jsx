import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit(props) {
  const { auth, position } = props;
  const { data, setData, patch, errors } = useForm({
    name: position.name,
    salary: position.salary,
  });

  const submit = (e) => {
    e.preventDefault();
    patch(route("positions.update", position));
  };

  return (
    <AuthenticatedLayout
      auth={auth}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit Position
        </h2>
      }
    >
      <Head title="Employees" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <form onSubmit={submit} className="space-y-6 max-w-xl">
              <div>
                <InputLabel for="name" value="Position Name" />

                <TextInput
                  id="name"
                  className="mt-1 block w-full"
                  value={data.name}
                  handleChange={(e) => setData("name", e.target.value)}
                  autoComplete="name"
                />

                <InputError className="mt-2" message={errors.name} />
              </div>

              <div>
                <InputLabel for="salary" value="Salary" />

                <TextInput
                  id="salary"
                  className="mt-1 block w-full"
                  value={data.salary}
                  handleChange={(e) => setData("salary", e.target.value)}
                  autoComplete="salary"
                />

                <InputError className="mt-2" message={errors.salary} />
              </div>

              <div className="space-x-3">
                <Link
                  href={route("positions")}
                  className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"
                >
                  Back
                </Link>
                <PrimaryButton>Save</PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
