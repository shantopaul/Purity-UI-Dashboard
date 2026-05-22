import AuthorsTable from "../components/tables/AuthorsTable";
import ProjectsTable from "../components/tables/ProjectsTable";

export default function Tables() {
  return (
    <div className="flex flex-col gap-6">
      <AuthorsTable />
      <ProjectsTable />
    </div>
  );
}
