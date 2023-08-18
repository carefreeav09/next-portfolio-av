import React from "react";

// Tanstack table
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

//
import { MdInfo, MdNotes } from "react-icons/md";

//
import { IProject } from "@/types/projects.types";

const columnHelper = createColumnHelper<IProject>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span> Project Name </span>,
  }),
  columnHelper.accessor("appType", {
    cell: (info) => info.getValue(),
    header: () => <span> App Type </span>,
  }),
  columnHelper.accessor("freelance", {
    cell: (info) => (info.getValue() ? "True" : "False"),
    header: "Is Freelance",
  }),
  columnHelper.accessor("_id", {
    cell: (info) => (
      <div>
        <button
          className="bg-indigo-800 text-white"
          onClick={() => {
            console.log(info);
          }}
        >
          <MdNotes />
        </button>
      </div>
    ),
    header: "Actions",
  }),
];

const page = () => {
  return <div>page</div>;
};

export default page;
