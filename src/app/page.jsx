import Main from "@/components/templates/main";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/home?populate=*`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  
  return data.data.attributes;
}

export default async function Home() {
  const data = await getData()

  return (
    < Main data={data} />
  );
}
