import Image from "next/image";
import AppointmentForm from "@/components/Forms/AppointmentForm";

export default function NewAppointment() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/svgviewer-output (5).png"
            height={1000}
            width={1000}
            alt="Icon"
            className="mb-8 h-8 w-fit"
          />
          <AppointmentForm />

          <p className="text-dark-600 xl:text-left text-14-regular">
            © {new Date().getFullYear()} CureConnect
          </p>
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
