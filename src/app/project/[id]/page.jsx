import ProjectData from "@/components/templates/project";

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projets?populate=*`);
  const projects = await response.json();

  return projects.data.map((project) => ({
    id: project.id.toString(),
  }))
}

async function getPost(id) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projets/${id}?populate=*`);
  const project = await response.json();

  return project.data.attributes;
}

export default async function Project({ params }) {
  const data =  await getPost(params.id);

  return (
    < ProjectData project={data} />
  );
}
