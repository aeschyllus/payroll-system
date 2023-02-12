import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateProfileInformation({ className }) {
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      email: user.email,
    });

  const submit = (e) => {
    e.preventDefault();

    patch(route("profile.update"));
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div>
          <InputLabel for="first_name" value="First Name" />

          <TextInput
            id="first_name"
            className="mt-1 block w-full"
            value={data.first_name}
            handleChange={(e) => setData("first_name", e.target.value)}
            isFocused
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
          <InputLabel for="phone_number" value="Phone Number" />

          <TextInput
            id="phone_number"
            className="mt-1 block w-full"
            value={data.phone_number}
            handleChange={(e) => setData("phone_number", e.target.value)}
            autoComplete="phone_number"
          />

          <InputError className="mt-2" message={errors.phone_number} />
        </div>

        <div>
          <InputLabel for="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={data.email}
            handleChange={(e) => setData("email", e.target.value)}
            autoComplete="username"
          />

          <InputError className="mt-2" message={errors.email} />
        </div>

        <div className="flex items-center gap-4">
          <PrimaryButton processing={processing}>Save</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enterFrom="opacity-0"
            leaveTo="opacity-0"
            className="transition ease-in-out"
          >
            <p className="text-sm text-gray-600">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
