import BeforeAfter from "@/components/BeforeAfter";
export const metadata = { title: "Realizacje | EcoRide Detailing" };
export default function Gallery(){
  return (
    <section className="container-max my-10">
      <h1>Realizacje</h1>
      <p className="text-gray-700 mt-2">Zobacz efekty naszych usług „przed / po”.</p>
      <BeforeAfter />
    </section>
  );
}
