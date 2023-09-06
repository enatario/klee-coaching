export function heroFields() {
  return [
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
  ];
}
export function listFields() {
  return [
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
  ];
}
export function testimonialsFields() {
  return [
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
  ];
}
export function title___listFields() {
  return [
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
  ];
}
