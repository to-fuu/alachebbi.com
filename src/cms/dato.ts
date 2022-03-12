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
    allProjects(orderBy: [wip_ASC,order_ASC]) {
      description
      liveSite
      repo
      title
      year
      techs
      wip
      id
      icon {
        url
      }
      image {
        url
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
    }
  }
  
   `);

  return data.allProjects;
}

export async function getHomeProjects(): Promise<Project[]> {
  const data = await fetchCmsAPI(`
 {
  allProjects(filter: {featured: {eq: "true"}},orderBy: [wip_ASC,order_ASC], first: "5") {
    description
    liveSite
    repo
    title
    year
    techs
    wip
    id
    icon {
      url
    }
    image {
      url
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
  }
 }
   `);

  return data.allProjects;
}

export async function getAllTestimonials(): Promise<Project[]> {
  const data = await fetchCmsAPI(`
   {
    allTestimonials(orderBy: _createdAt_ASC) {
      review
      name
      title
      initials
      thumb {
        url
      }
    }
  }
  
   `);

  return data.allTestimonials;
}
