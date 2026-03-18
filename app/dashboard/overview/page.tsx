export default function OverviewPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">CRM Overview</h1>
      <p className="mb-6 text-muted-foreground">View a summary of your contacts, companies, and deal pipeline here.</p>
      <div className="border rounded-xl p-8 bg-muted flex flex-col items-center justify-center min-h-[280px]">
        <span className="text-center text-xl font-semibold text-muted-foreground mb-4">Welcome to ClientNest</span>
        <p className="mb-6 text-center">Get started by adding your first contact, company, or deal.</p>
        <a href="/dashboard/contacts" className="inline-block px-6 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/80 transition-colors">
          Add Contact
        </a>
      </div>
    </section>
  );
}