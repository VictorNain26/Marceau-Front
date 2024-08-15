import Main from "@/components/templates/main";

async function getHomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/home?populate=*`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  const data = await res.json();
    
  return data.data.attributes;
}

async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projets?populate=*`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  const data = await res.json();
    
  return data.data;
}

export default async function Home() {
  const home = await getHomePage()
  const projects = await getProjects()

  return (
    < Main home={home} projects={projects} />
  );
}
