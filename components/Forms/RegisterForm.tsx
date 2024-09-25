"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField, { formfieldtype } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PatientFormValidation } from "@/lib/FormValidation";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Doctors,
  IdentificationTypes,
  PatientFormDefaultValues,
  GenderOptions,
} from "../../constants/index";

import Image from "next/image";
import { SelectItem } from "../ui/select";
import FileUploader from "../FileUploader";

const RegisterForm = ({ User }: { user: User }) => {
  const router = useRouter();

  const [isLoading, setisLoading] = useState(false);

  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      ...PatientFormDefaultValues,
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof PatientFormValidation>) {
    setisLoading(true);
    let formData;
    if (
      values.identificationDocument &&
      values.identificationDocument?.length > 0
    ) {
      const blobFile = new Blob([values.identificationDocument[0]], {
        type: values.identificationDocument[0].type,
      });

      formData = new FormData();
      formData.append("blobFile", blobFile);
      formData.append("fileName", values.identificationDocument[0].name);
    }

    try {
      const patientData = {
        ...values,
        userId: user.$id,
        birthDate: new Date(values.birthDate),
        identificationDocument: formData,
      };
      const patient = await registerPatient(patientData);
      if (patient) router.push(`/patients/${user.$id}/new-appointment`);
    } catch (error) {
      console.log(error);
    }
    setisLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        {/* email and phone number */}
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
        {/* date and gender */}
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={formfieldtype.DATE_PICKER}
            control={form.control}
            name="birthDate"
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
                    <div key={gender} className="radio-group">
                      <RadioGroupItem value={gender} id={gender} />
                      <label htmlFor={gender} className="cursor-pointer">
                        {gender}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>
        {/* address and occupation */}
        <div className="flex flex-col gap-6 xl:flex-row">
          {" "}
          <CustomFormField
            fieldType={formfieldtype.INPUT}
            control={form.control}
            name="address"
            label="Address"
            placeholder="ex 130B, Sector-20c, Chandigarh."
          />
          <CustomFormField
            fieldType={formfieldtype.INPUT}
            control={form.control}
            name="occupation"
            label="Occupation"
            placeholder="Software Engineer"
          />
        </div>
        {/* emergency contact name and phone number */}
        <div className="flex flex-col gap-6 xl:flex-row">
          {" "}
          <CustomFormField
            fieldType={formfieldtype.INPUT}
            control={form.control}
            name="emergencyContactName"
            label="Emergency contact name"
            placeholder="Guardian's name"
          />{" "}
          <CustomFormField
            fieldType={formfieldtype.PHONE_INPUT}
            control={form.control}
            name="emergencyContactNumber"
            label="Emergency Contact Number"
          />
        </div>
        <section className="space-y-8">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Medical Information</h2>
          </div>
        </section>
        <CustomFormField
          fieldType={formfieldtype.SELECT}
          control={form.control}
          name="primaryPhysician"
          label="Your Trusted Doctor"
          placeholder="Select a doctor"
        >
          {/* Map Doctors array to render options */}
          {Doctors.map((doctor) => (
            <SelectItem
              key={doctor.name}
              value={doctor.name}
              className="cursor-pointer hover:bg-dark-300 "
            >
              <div className="flex items-center">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={24}
                  height={24}
                />
                <span className="ml-2">{doctor.name}</span>
              </div>
            </SelectItem>
          ))}
        </CustomFormField>
        {/* insurance provider and policy number */}
        <div className="flex flex-col gap-6 xl:flex-row">
          {" "}
          <CustomFormField
            fieldType={formfieldtype.INPUT}
            control={form.control}
            name="insuranceProvider"
            label="Insurance Provider"
            placeholder="ex-Aditya Birla Health Insurance Co"
          />{" "}
          <CustomFormField
            fieldType={formfieldtype.INPUT}
            control={form.control}
            name="insurancePolicyNumber"
            label="Insurance policy number"
            placeholder="ex-123DX5R65"
          />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          {" "}
          <CustomFormField
            fieldType={formfieldtype.TEXTAREA}
            control={form.control}
            name="allergies"
            label="Allergies(if any)"
            placeholder="ex: Shellfish, Dust, Polle"
          />
          <CustomFormField
            fieldType={formfieldtype.TEXTAREA}
            control={form.control}
            name="currentMedication"
            label="Medications Currently Taken"
            placeholder="ex: Paracetamol 500mg, Lisinopril 10mg"
          />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          {" "}
          <CustomFormField
            fieldType={formfieldtype.TEXTAREA}
            control={form.control}
            name="familyMedicalHistory"
            label="Family Health History"
            placeholder="ex: Father had hypertension"
          />{" "}
          <CustomFormField
            fieldType={formfieldtype.TEXTAREA}
            control={form.control}
            name="pastMedicalHistory"
            label="Previous Medical Conditions"
            placeholder="Diabetes diagnosed at age 30"
          />
        </div>
        <section className="space-y-8">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Identification and verification</h2>
          </div>
        </section>
        <CustomFormField
          fieldType={formfieldtype.SELECT}
          control={form.control}
          name="identificationType"
          label="Identification type"
          placeholder="Select your ID type"
        >
          {/* Map IdentificationTypes array to render options */}
          {IdentificationTypes.map((id) => (
            <SelectItem
              key={id}
              value={id}
              className="cursor-pointer hover:bg-dark-300 "
            >
              {id}
            </SelectItem>
          ))}
        </CustomFormField>{" "}
        <CustomFormField
          fieldType={formfieldtype.INPUT}
          control={form.control}
          name="identificationNumber"
          label="Identification number"
          placeholder="ex-1345 2345 4234"
        />{" "}
        <CustomFormField
          fieldType={formfieldtype.SKELETON}
          control={form.control}
          name="identificationDocument"
          label="Scanned copy of your Identification document"
          renderSkeleton={(field) => (
            <FormControl>
              <FileUploader files={field.value} onChange={field.onChange} />
            </FormControl>
          )}
        />{" "}
        <section className="space-y-8">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Consent and Privacy</h2>
          </div>
        </section>{" "}
        <CustomFormField
          fieldType={formfieldtype.CHECKBOX}
          control={form.control}
          name="treatmentConsent"
          label="I agree to receive medical treatment for my condition. "
        />
        <CustomFormField
          fieldType={formfieldtype.CHECKBOX}
          control={form.control}
          name="disclosureConsent"
          label="I approve the sharing of my health information for treatment-related purposes."
        />
        <CustomFormField
          fieldType={formfieldtype.CHECKBOX}
          control={form.control}
          name="privacyConsent"
          label="I confirm that I have read and accepted the terms of the privacy policy."
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
