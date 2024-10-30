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
  const [title, setTitle] = useState("");
  const [segment, setSegment] = useState("");
  const [emailType, setEmailType] = useState("informatif");

  return (
    <>
      <div className="flex justify-end">
        <div className="flex-1 max-w-[950px] ">
          <div className="flex gap-2 py-4">
            <button>Sauvegarder les changements</button>
            <button>Enregistrer comme brouillon</button>

            <button>Publier</button>
          </div>

          <div className="flex mb-4 items-center gap-2">
            <label htmlFor="object" className="text-lg font-semibold mb-2">
              Objet:
            </label>
            <input
              type="text"
              id="object"
              className="subtitle text-2xl font-bold border border-gray-300 p-2 w-full"
              value={title}
              placeholder="Titre de l'article"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex mb-4 items-center gap-2">
            <label htmlFor="segment" className="text-lg font-semibold mb-2">
              Groupe de destinataire:
            </label>
            <input
              type="text"
              id="segment"
              placeholder="Segment"
              className="subtitle text-2xl font-bold border border-gray-300 p-2 w-full"
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
            />
          </div>

          <div className="flex mb-4 items-center gap-2">
            <label className="text-lg font-semibold mb-2">Type d'email:</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="emailType"
                  value="informatif"
                  checked={emailType === "informatif"}
                  onChange={(e) => setEmailType(e.target.value)}
                  className="mr-2"
                />
                Informatif
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="emailType"
                  value="promotionnel"
                  checked={emailType === "promotionnel"}
                  onChange={(e) => setEmailType(e.target.value)}
                  className="mr-2"
                />
                Promotionnel
              </label>
            </div>
          </div>

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
