import ServiceCard from "@/components/common/ServiceCard";

export default function ServicesList() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        <ServiceCard title="Sofa repair" />
        <ServiceCard title="Chair upholstery" />
        <ServiceCard title="Commercial upholstery" />
      </div>
    </section>
  );
}
