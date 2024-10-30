import React, { useState } from "react";
import {
  MDXEditor,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  InsertImage,
  InsertTable,
  imagePlugin,
  tablePlugin,
  ListsToggle,
  listsPlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import SidebarAI from "../elements/SidebarAI";

export default function Article() {
  const [title, setTitle] = useState("Titre de l'article");

  return (
    <>
      <div className="flex justify-end">
        <div className="flex-1 max-w-[950px] ">
          <div className="flex gap-2 py-4">
            <button>Sauvegarder les changements</button>
            <button>Publier</button>
          </div>
          <input
            type="text"
            className="subtitle text-2xl font-bold border border-gray-300 p-2 mb-4 w-full"
            value={title}
            placeholder="Titre de l'article"
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <MDXEditor
            markdown="Hello world"
            plugins={[
              toolbarPlugin({
                toolbarContents: () => (
                  <>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <InsertImage />
                    <InsertTable />
                    <ListsToggle />
                  </>
                ),
              }),
              imagePlugin(),
              tablePlugin(),
              listsPlugin(),
              markdownShortcutPlugin(),
            ]}
          />
        </div>
      </div>
    </>
  );
}
