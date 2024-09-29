import Image from "next/image";
import PatientForm from "@/components/Forms/PatientForm";
import Link from "next/link";
import PassKeyModal from "@/components/PaasKeyModal";
export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PassKeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/svgviewer-output (5).png"
            height={1000}
            width={1000}
            alt="Icon"
            className="mb-8 h-8 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-10 flex justify-between">
            <p className="text-dark-600 xl:text-left">
              © {new Date().getFullYear()} CureConnect by{" "}
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
        src="/assets/images/doctorhero.png"
        alt="heroimg-doctor"
        className="side-img max-w-[50%]"
        height={1000}
        width={1000}
      />
    </div>
  );
}
