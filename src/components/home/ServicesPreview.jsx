import ServiceCard from "@/components/common/ServiceCard";

export default function ServicesPreview() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        <ServiceCard title="Sofa Repair" />
        <ServiceCard title="Chair Upholstery" />
        <ServiceCard title="Commercial Upholstery" />
      </div>
    </section>
  );
}
