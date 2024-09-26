import AppointmentForm from "@/components/Forms/AppointmentForm";
import Image from "next/image";

const Appointment = async () => {
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

          <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;
