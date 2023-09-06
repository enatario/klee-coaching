import { defineConfig } from "tinacms";
import { heroFields } from "./templates";
import { listFields } from "./templates";
import { testimonialsFields } from "./templates";
import { title___listFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENTID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "dist",
  },
  media: {
    tina: {
      mediaRoot: "static/images",
      publicFolder: "src",
    },
  },
  schema: {
    collections: [
      {
        format: "json",
        label: "Intro",
        name: "intro",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "intro",
        },
        fields: [
          {
            type: "object",
            name: "headline",
            label: "Headline",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "headshot",
            label: "Headshot",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "alt",
                label: "Alternative text",
                required: true,
              },
              {
                type: "string",
                name: "caption",
                label: "Caption",
              },
            ],
          },
        ],
      },
      {
        format: "json",
        label: "Why coaching",
        name: "why_coaching",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "why",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "boolean",
            name: "quote_title",
            label: "Quote title",
          },
          {
            type: "string",
            name: "attribution",
            label: "Attribution",
          },
          {
            type: "object",
            name: "list",
            label: "List",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
            ],
          },
        ],
      },
      {
        format: "json",
        label: "Philosophy",
        name: "philosophy",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "philosophy",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "boolean",
            name: "quote_title",
            label: "Quote title",
          },
          {
            type: "string",
            name: "attribution",
            label: "Attribution",
          },
          {
            type: "object",
            name: "list",
            label: "List",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
            ],
          },
        ],
      },
      {
        format: "json",
        label: "Testimonials",
        name: "testimonials",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "testimonials",
        },
        fields: [
          {
            type: "object",
            name: "quote_list",
            label: "Quote list",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "attribution",
                label: "Attribution",
                required: true,
              },
              {
                type: "string",
                name: "extra_info",
                label: "Extra info",
              },
            ],
          },
        ],
      },
      {
        format: "json",
        label: "Certifications",
        name: "certifications",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "certifications",
        },
        fields: [
          {
            type: "object",
            name: "list",
            label: "List",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
            ],
          },
        ],
      },
      {
        format: "json",
        label: "How it works",
        name: "how_it_works",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "how",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "boolean",
            name: "quote_title",
            label: "Quote title",
          },
          {
            type: "string",
            name: "attribution",
            label: "Attribution",
          },
          {
            type: "object",
            name: "list",
            label: "List",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
