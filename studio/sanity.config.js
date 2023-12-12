

// sanity.config.js

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
import { deskStructure } from './deskStructure';
import { muxInput } from 'sanity-plugin-mux-input';
import { schemaTypes } from './schemas';
import {visionTool} from '@sanity/vision'


function getPreviewUrl(doc) {
  const protocol = 'https://'; // Assuming your local server is running on HTTP, adjust if needed
  const host = 'megan-site.vercel.app'; // Adjust the port if your server is running on a different port
  const path = doc?.slug?.current;

  return doc?.slug?.current
      ? `${protocol}${host}${path}?preview=true`
      : `${protocol}${host}?preview=true`;
}


const defaultDocumentNode = (S, { schemaType }) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case 'home':
      return S.document().views([
        S.view.form(),
        // S.listItem()
        // .title('Home')
        // .icon(() => <MdHome />)
        // ,
        S.view
          .component(Iframe)
          .options({
            url: (doc) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defineConfig({
  name: 'default',
  title: 'MeganPoems',

  projectId: 'xezmn8bb',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: deskStructure,
      defaultDocumentNode,
    }),
    visionTool(),
    muxInput(),
  ],
  
  schema: {
    types: schemaTypes,
  },
});










