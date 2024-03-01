import { sanityClient } from "sanity:client"
import type { PortableTextBlock } from "@portabletext/types"
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

export async function getProjects(): Promise<Project[]> {
  return await sanityClient.fetch(
    groq`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export interface Project {
  _type: "project";
  _createdAt: string;
  title?: string;
  slug: Slug;
  role?: string;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}
