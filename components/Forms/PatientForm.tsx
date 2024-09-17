"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserFormValidation } from "@/lib/FormValidation";
import { createUser } from "@/lib/actions/patient.actions";

export enum formfieldtype {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <section className="space-y-4">
          <p className="text-24-bold md:text-24-bold">
            Hi 👋, Let's make your health journey smoother!
          </p>
          <p className="text-dark-700">
            Manage your appointments effortlessly—start by booking your first
            one now.
          </p>
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
        <CustomFormField
          fieldType={formfieldtype.INPUT}
          control={form.control}
          name="email"
          label="Email"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
          placeholder="vardaanbhatia55@gmail.com"
        />
        <CustomFormField
          fieldType={formfieldtype.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
