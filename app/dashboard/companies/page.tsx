export default function CompaniesPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Companies</h1>
      <p className="mb-6 text-muted-foreground">No companies yet. Start by adding a new company.</p>
      <div className="border rounded-xl p-8 bg-muted flex flex-col items-center justify-center min-h-[180px]">
        <a href="#" className="inline-block px-6 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/80 transition-colors">
          Add Company
        </a>
      </div>
    </section>
  );
}