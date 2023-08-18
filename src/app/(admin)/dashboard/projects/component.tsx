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
import PageWrapper from "@/components/@app/PageWrapper";
import Breadcrumbs from "@/components/@resuable/breadcrumbs";

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
            console.log(info.row && info.row.id);
          }}
        >
          <MdNotes />
        </button>
      </div>
    ),
    header: "Actions",
  }),
];

//
const ProjectsListComponent = ({ projects }: { projects: IProject[] }) => {
  //
  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <PageWrapper>
      <div className="p-16">
        <Breadcrumbs
          crumbs={[
            {
              title: "Dashboard",
              url: "/dashboard",
            },
            {
              title: "Projects",
            },
          ]}
          className="text-white mb-10"
        />
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="h-4" />
        {/*  */}
      </div>
    </PageWrapper>
  );
};

export default ProjectsListComponent;
