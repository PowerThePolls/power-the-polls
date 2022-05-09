import { Partner } from "../../data/types";

export type PartnerTableData = {
   master: Partner;
   /**
    * Concatenated `data` fields that are used for searching and filtering
    */
   search: string;
   branch?: Partner;
   local?: Partner;
};

export type GitCreateTreeTreeItem = {
   path?: string;
   mode?: "100644" | "100755" | "040000" | "160000" | "120000";
   type?: "blob" | "tree" | "commit";
   sha?: string | null;
   content?: string;
};

export type GitCreateTreeRequest = {
   owner: string;
   repo: string;
   /**
    * Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.
    */
   tree: GitCreateTreeTreeItem[];
   /**
    * The SHA1 of the tree you want to update with new data. If you don't set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted.
    */
   base_tree?: string;
};
