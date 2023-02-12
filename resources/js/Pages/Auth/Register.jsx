import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form onSubmit={submit}>
        <div>
          <InputLabel forInput="first_name" value="First Name" />

          <TextInput
            id="first_name"
            name="first_name"
            value={data.first_name}
            className="mt-1 block w-full"
            autoComplete="first_name"
            isFocused={true}
            handleChange={onHandleChange}
          />

          <InputError message={errors.first_name} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="last_name" value="Last Name" />

          <TextInput
            id="last_name"
            name="last_name"
            value={data.last_name}
            className="mt-1 block w-full"
            autoComplete="last_name"
            handleChange={onHandleChange}
          />

          <InputError message={errors.last_name} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="phone_number" value="Phone Number" />

          <TextInput
            id="phone_number"
            name="phone_number"
            value={data.phone_number}
            className="mt-1 block w-full"
            autoComplete="phone_number"
            handleChange={onHandleChange}
          />

          <InputError message={errors.phone_number} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            handleChange={onHandleChange}
            // required
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel forInput="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel
            forInput="password_confirmation"
            value="Confirm Password"
          />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Link
            href={route("login")}
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Already registered?
          </Link>

          <PrimaryButton className="ml-4" processing={processing}>
            Register
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
