import { getStoryblokApi } from "@storyblok/react/rsc";

export async function fetchPageData({ fullSlug, resolve_relations = [] }) {
  const storyblokApi = getStoryblokApi();

  return await storyblokApi.get(`cdn/stories/${fullSlug}`, {
    version: !!process.env.NEXT_PUBLIC_FORCE_PREVIEW ? "draft" : "published",
    content_type: "Page",
    resolve_links: "url",
    resolve_relations: [...resolve_relations, "Page.headerStory", "Page.footerStory" ],
  });
}

export async function fetchPages({ excluding_slugs }) {
  const storyblokApi = getStoryblokApi();

  const resp = await storyblokApi.get(`cdn/stories`, {
    content_type: "Page",
    excluding_slugs: [...(excluding_slugs || [])].join(","),
    version: !!process.env.NEXT_PUBLIC_FORCE_PREVIEW ? "draft" : "published",
    per_page: 100,
    resolve_links: "url",
    resolve_relations: ["AccordionFaqSection.faqs"],
  });

  return resp;
}

export async function fetchContenTypeStory({
  content_type,
  per_page = 1,
  sort_by = "published_at:desc",
  starts_with,
  resolve_relations = [],
}) {
  const storyblokApi = getStoryblokApi();

  const requestParams = {
    content_type: content_type,
    version: !!process.env.NEXT_PUBLIC_FORCE_PREVIEW ? "draft" : "published",
    per_page: per_page,
    sort_by: sort_by,
    resolve_relations: resolve_relations,
  };

  if (!!starts_with) {
    requestParams.starts_with = starts_with;
  }

  const resp = await storyblokApi.get("cdn/stories", requestParams);

  return resp.data.stories;
}

export async function fetchDataSource({ name, dimension }) {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/datasource_entries`, {
    datasource: name,
    dimension: dimension,
    per_page: 1000,
  });

  return !!data.datasource_entries ? data.datasource_entries : [];
}

export async function fetchContentByUuid({
  uuid,
  resolve_relations = [],
}) {
  try {
    const storyblokApi = getStoryblokApi();
    const data = await storyblokApi.get(`cdn/stories/${uuid}`, {
      resolve_relations,
      find_by: 'uuid'
    });

    return data;
  } catch(error) {
    return null;
  }
}