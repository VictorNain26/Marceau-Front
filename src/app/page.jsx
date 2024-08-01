import Main from "@/components/templates/main";
import { getStoryblokApi } from "@storyblok/react/rsc";

export async function fetchData() {
  let sbParams = { version: "draft" };
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"});
}

export default async function Home() {
  const { data } = await fetchData();

  return (
    < Main data={data} />
  );
}
