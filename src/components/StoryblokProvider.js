"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import YoutubeIframe from "@/components/atoms/YoutubeIframe";

const components = {
  youtubeiframe : YoutubeIframe,
};
 
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components
});
 
export default function StoryblokProvider({ children }) {
  return children;
}