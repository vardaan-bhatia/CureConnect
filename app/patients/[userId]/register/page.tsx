import RegisterForm from "@/components/Forms/RegisterForm";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/svgviewer-output (5).png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <p className="copyright py-8">© 2024 CureConnect</p>
        </div>
      </section>

      <Image
        src="/assets/images/Gemini_Generated_Image_qniqfkqniqfkqniq.jpeg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
