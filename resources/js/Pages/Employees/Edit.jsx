import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit(props) {
  const { auth, employee, positions } = props;
  const { data, setData, patch, errors } = useForm({
    first_name: employee.first_name,
    last_name: employee.last_name,
    phone_number: employee.phone_number,
    email: employee.email,
    position_id: employee.position_id,
  });

  const submit = (e) => {
    e.preventDefault();
    patch(route("employees.update", employee.id));
  };

  return (
    <AuthenticatedLayout
      auth={auth}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit Employee
        </h2>
      }
    >
      <Head title="Employees" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <form onSubmit={submit} className="space-y-6 max-w-xl">
              <div>
                <InputLabel for="first_name" value="First Name" />

                <TextInput
                  id="first_name"
                  className="mt-1 block w-full"
                  value={data.first_name}
                  handleChange={(e) => setData("first_name", e.target.value)}
                  autoComplete="first_name"
                />

                <InputError className="mt-2" message={errors.first_name} />
              </div>
              <div>
                <InputLabel for="last_name" value="Last Name" />

                <TextInput
                  id="last_name"
                  className="mt-1 block w-full"
                  value={data.last_name}
                  handleChange={(e) => setData("last_name", e.target.value)}
                  autoComplete="last_name"
                />

                <InputError className="mt-2" message={errors.last_name} />
              </div>

              <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                  id="email"
                  className="mt-1 block w-full"
                  value={data.email}
                  handleChange={(e) => setData("email", e.target.value)}
                  autoComplete="email"
                />

                <InputError className="mt-2" message={errors.email} />
              </div>

              <div>
                <InputLabel for="position" value="Position" />

                <div className="flex flex-col flex-start">
                  <select
                    name="position"
                    id="position"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                    onChange={(e) =>
                      setData("position_id", Number(e.target.value))
                    }
                    defaultValue={data.position_id}
                  >
                    {positions.map((position) => (
                      <option key={position.id} value={position.id}>
                        {position.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-x-3">
                <Link
                  href={route("employees")}
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
