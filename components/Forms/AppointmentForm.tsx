"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField, { formfieldtype } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAppointmentSchema } from "@/lib/FormValidation";
import { Doctors } from "../../constants/index";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import { createAppointment } from "@/lib/actions/appointment.action";

const AppointmentForm = ({
  type,
  userId,
  patientId,
}: {
  userId: string;
  patientId: string;
  type: "create" | "cancel" | "schedule";
}) => {
  const router = useRouter();

  const [isLoading, setisLoading] = useState(false);

  const AppointmentFormValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: "",
      schedule: new Date(),
      reason: "",
      note: "",
      cancellationReason: "",
    },
  });

  async function onSubmit(values: z.infer<typeof AppointmentFormValidation>) {
    setisLoading(true); // Start loading state

    try {
      let status;
      switch (type) {
        case "schedule":
          status = "scheduled";
          break;
        case "cancel":
          status = "cancelled";
          break;
        default:
          status = "pending";
      }

      if (type === "create" && patientId) {
        const appointmentData = {
          userId,
          patient: patientId,
          primaryPhysician: values.primaryPhysician,
          schedule: new Date(values.schedule),
          reason: values.reason!,
          status: status as Status,
          note: values.note,
        };

        const appointment = await createAppointment(appointmentData);

        if (appointment) {
          form.reset(); // Reset the form
          router.push(
            `/patients/${userId}/new-appointment/success?appointmentId=${appointment.$id}`
          );
        }
      }
    } catch (error) {
      console.error("Error during appointment submission:", error); // Log the error
      alert(
        "An error occurred while creating the appointment. Please try again."
      ); // User-friendly error message
    } finally {
      setisLoading(false); // Ensure loading state is reset
    }
  }

  let buttonLabel;
  switch (type) {
    case "cancel":
      buttonLabel = "Cancel Appointment";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      break;
    default:
      buttonLabel = "Book Apppointment";
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <section className="space-y-4">
          <p className="text-24-bold md:text-24-bold">
            Hi 👋, Let's get you started with an appointment!
          </p>
          <p className="text-dark-700">
            Easily book your appointment in under 10 seconds.
          </p>
        </section>
        {type !== "cancel" && (
          <>
            {" "}
            <CustomFormField
              fieldType={formfieldtype.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Select your preferred doctor"
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
            <div className="flex flex-col gap-6 xl:flex-row">
              {" "}
              <CustomFormField
                fieldType={formfieldtype.TEXTAREA}
                control={form.control}
                name="reason"
                label="What's the purpose of your visit?"
                placeholder="e.g., General health check-up, follow-up visit"
              />
              <CustomFormField
                fieldType={formfieldtype.TEXTAREA}
                control={form.control}
                name="note"
                label="Any specific requests or preferences?"
                placeholder="e.g., Morning appointments preferred, if available"
              />
            </div>
            <CustomFormField
              fieldType={formfieldtype.DATE_PICKER}
              control={form.control}
              name="appointmentDateTime"
              label="Choose your preferred appointment date and time"
              iconSrc="/assets/icons/calendar.svg"
              placeholder="Pick a date and time that works best for you"
              showTimeSelect
              dateFormat="dd/MM/yyyy h:mm aa"
            />
          </>
        )}
        {type == "cancel" && (
          <>
            {" "}
            <CustomFormField
              fieldType={formfieldtype.TEXTAREA}
              control={form.control}
              name="cancellationReason"
              label="Reason for cancellation"
              placeholder="Urgent meeting came up"
            />
          </>
        )}
        <SubmitButton
          isLoading={isLoading}
          className={`${
            type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"
          } w-full`}
        >
          {buttonLabel}
        </SubmitButton>{" "}
      </form>
    </Form>
  );
};

export default AppointmentForm;
