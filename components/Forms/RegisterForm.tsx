"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField, { formfieldtype } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserFormValidation } from "@/lib/FormValidation";
import { createUser } from "@/lib/actions/patient.actions";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { GenderOptions } from "../../constants/index";

const RegisterForm = () => {
  const router = useRouter();

  const [isLoading, setisLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setisLoading(true);
    try {
      const userData = {
        name,
        email,
        phone,
      };
      const newUser = await createUser(userData);
      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }
    setisLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <section className="space-y-4">
          <p className="text-24-bold md:text-24-bold">Welcome 👋,</p>
          <p className="text-dark-700">Let us know more about yourself</p>
        </section>
        <section className="space-y-8">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>
        </section>
        <CustomFormField
          fieldType={formfieldtype.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
          placeholder="Vardaan Bhatia"
        />
        <div className="flex flex-col gap-6 xl:flex-row">
          {" "}
          <CustomFormField
            fieldType={formfieldtype.INPUT}
            control={form.control}
            name="email"
            label="Email"
            iconSrc="/assets/icons/email.svg"
            iconAlt="user"
            placeholder="xyz@gmail.com"
          />{" "}
          <CustomFormField
            fieldType={formfieldtype.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone Number"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
            placeholder="Vardaan Bhatia"
          />{" "}
        </div>{" "}
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={formfieldtype.DATE_PICKER}
            control={form.control}
            name="birthdate"
            label="Date of birth"
            iconSrc="/assets/icons/calendar.svg"
            placeholder="Select your birth date"
          />
          <CustomFormField
            fieldType={formfieldtype.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((gender) => (
                    <div
                      key={gender}
                      className="rounded-md border border-dark-500 bg-dark-400"
    >
                      <RadioGroupItem value={gender} id={gender} />
                      <label htmlFor={gender} className="cursor-pointer ml-2  p-2">
                        {gender}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row"></div>
        <div className="flex flex-col gap-6 xl:flex-row"></div>
        <div className="flex flex-col gap-6 xl:flex-row"></div>
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
