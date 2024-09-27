import Image from "next/image";
import AppointmentForm from "@/components/Forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/svgviewer-output (5).png"
            height={1000}
            width={1000}
            alt="Icon"
            className="h-8 w-fit"
          />
          <AppointmentForm
            type="create"
            patientId={patient.$id}
            userId={userId}
          />

          <p className="copyright">© {new Date().getFullYear()} CureConnect</p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        alt="appointment-img"
        className="side-img max-w-[390px] bg-bottom"
        height={1000}
        width={1000}
      />
    </div>
  );
}
