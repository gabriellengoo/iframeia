import React from "react";
import Emoji from "a11y-react-emoji";
const Artist = () => <Emoji style={{ fontSize: "2rem" }} symbol="✍️" />;
const Content = () => <Emoji style={{ fontSize: "2rem" }} symbol="✍️" />;
const Links = () => <Emoji style={{ fontSize: "2rem" }} symbol="🔊" />;

export default {
  name: "talent",
  title: "Poems",
  type: "document",
  icon: Artist,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "hidden",
      title: "Hidden",
      type: "boolean",
    },
    {
      name: "sections",
      title: "Poem Content",
      type: "array",
      of: [
        {
          name: "section",
          title: "Poem Content",
          type: "object",
          icon: Content,
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "blockContent",
            },
          ],
        },
      ],
    },
    {
      name: "metaemails",
      title: "Audios or Links",
      type: "array",
      options: {
        modal: "popover",
      },
      of: [
        {
          name: "meta",
          title: "Meta",
          type: "object",
          icon: Links,
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "content",
              title: "Name of Audio",
              description: "This will show on the page",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "url",
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            },
           
          ],
          preview: {
            select: {
              title: "content",
              subtitle: "title",
            },
          },
        },
      ],
    },
    // {
    //   name: "footer",
    //   title: "Links",
    //   type: "array",
    //   of: [
    //     {
    //       name: "button",
    //       title: "Button",
    //       type: "object",
    //       icon: Links,
    //       fields: [
    //         {
    //           name: "title",
    //           title: "Title",
    //           type: "string",
    //         },
    //         {
    //           name: "link",
    //           title: "Link",
    //           type: "url",
    //           validation: (Rule) =>
    //             Rule.uri({
    //               scheme: ["http", "https", "mailto", "tel"],
    //             }),
    //         },
    //       ],
    //     },
    //   ],
    // },

  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
};
