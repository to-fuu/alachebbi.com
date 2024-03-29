/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Project from './types/Project';
import Resume from './types/Resume';

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(
  query: string,
  { variables }: { variables?: Record<string, any> } = {}
) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllProjects(): Promise<Project[]> {
  const data = await fetchCmsAPI(`
   {
    allProjects {
      description

      title
      year
      subtitle
      techs
      dark
      wip
      id
      icon {
        url
      webp: url(imgixParams: {fm: webp, q: 100})
      blurUpThumb
      width
      height
      alt
      }
      wideImage {
        url
      webp: url(imgixParams: {fm: webp, q: 100})
      blurUpThumb
      width
      height
      alt
      }
      image {
        url
      webp: url(imgixParams: {fm: webp, q: 100})
      blurUpThumb
      width
      height
      alt
      }
      accentColor {
        hex
      }
      colorBottomRight {
        hex
      }
      colorTopLeft {
        hex
      }
      projectLinks{
        __typename
        ... on PlayStoreButtonRecord{
          id
          url
          comingSoon
        }
        ... on AppStoreButtonRecord{
          id
          url
          comingSoon
        }
        ... on GithubButtonRecord{
          id
          url
          comingSoon
          private
        }
        ... on VisitButtonRecord{
          id
          url
          comingSoon
        }

        ... on YoutubeButtonRecord{
          id
          url
        }
      }
    }
  }
  
   `);

  return data.allProjects;
}

export async function getHomeProjects(): Promise<Project[]> {
  const data = await fetchCmsAPI(`
 {
  allProjects(first: "5") {
    description
    title
    year
    techs
    dark
    wip
    subtitle
    id
    icon {
      url
      webp: url(imgixParams: {fm: webp, q: 100})
      blurUpThumb
      width
      height
      alt
    }
    wideImage {
      url
    webp: url(imgixParams: {fm: webp, q: 100})
    blurUpThumb
    width
    height
    alt
    }
    image {
      url
      webp: url(imgixParams: {fm: webp, q: 100})
      blurUpThumb
      width
      height
      alt
    }
    colorBottomRight {
      hex
    }
    colorTopLeft {
      hex
    }
    accentColor {
      hex
    }
    projectLinks{
      __typename
      ... on PlayStoreButtonRecord{
        id
        url
        comingSoon
      }
      ... on AppStoreButtonRecord{
        id
        url
        comingSoon
      }
      ... on GithubButtonRecord{
        id
        url
        comingSoon
        private
      }
      ... on VisitButtonRecord{
        id
        url
        comingSoon
      }

      ... on YoutubeButtonRecord{
        id
        url
      }
    }
  }
 }
   `);

  return data.allProjects;
}

export async function getAllTestimonials(): Promise<Project[]> {
  const data = await fetchCmsAPI(`
   {
    allTestimonials {
      review
      name
      title
      initials
      thumb {
        url
        webp: url(imgixParams: {fm: webp, q: 100})
        blurUpThumb
        width
        height
        alt
      }
    }
  }
  
   `);

  return data.allTestimonials;
}

export async function getResume(): Promise<Resume> {
  const data = await fetchCmsAPI(`
  query Resume {
    allExperiences {
      title
      subtitle
      year
      content {
        content
        extra
      }
    }
    allEducations {
      title
      subtitle
      twoColumn
      hideHeader
      content {
        content
        extra
      }
    }
    resume {
      excerpt
    }
  }  
   `);

  const resume: Resume = {
    experiences: data.allExperiences,
    educations: data.allEducations,
    excerpt: data.resume.excerpt,
  };
  return resume;
}
