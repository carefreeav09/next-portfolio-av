"use client";
import { IProject } from "@/types/projects.types";
import React from "react";

// Tanstack table
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

//
import { MdNotes } from "react-icons/md";

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

const ProjectsListComponent = ({ projects }: { projects: IProject[] }) => {
  return <div>component</div>;
};

export default ProjectsListComponent;
