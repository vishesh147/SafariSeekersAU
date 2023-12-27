/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schema'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'Netlify Deploys',
            sites: [
              {
                title: 'Safari Seekers AU',
                apiId: '368b5160-34c6-4375-b012-1ca9ea139e42',
                buildHookId: '65432b3631857e1136fd5465',
                name: 'safariseekersau',
                url: 'https://safariseekers.com.au',
              }
            ]
        })
      ]
    })
  ],
})
