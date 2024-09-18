import RegisterForm from "@/components/Forms/RegisterForm";
import Image from "next/image";
import Link from "next/link";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/svgviewer-output (5).png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm />
          <div className="text-14-regular mt-10 flex justify-between">
            <p className="text-dark-600 xl:text-left">
              © 2024 CureConnect by{" "}
              <Link
                href="https://www.linkedin.com/in/vardaan-bhatia-028446203/"
                className="text-cyan-400"
                target="_blank"
              >
                Vardaan Bhatia
              </Link>
            </p>
            <Link href="/?admin=true" className="text-cyan-400">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/Gemini_Generated_Image_qniqfkqniqfkqniq.jpeg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Register;
