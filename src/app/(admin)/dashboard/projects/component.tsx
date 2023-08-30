"use client";
import { IProject } from "@/types/projects.types";
import React from "react";
import classNames from "classnames";

// Tanstack table
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { MdEditNote, MdDelete } from "react-icons/md";

//
import PageWrapper from "@/components/@app/PageWrapper";
import Breadcrumbs from "@/components/@resuable/breadcrumbs";
import Button from "@/components/@resuable/buttons";
import { useRouter } from "next/navigation";

const columnHelper = createColumnHelper<IProject>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span> Project Name </span>,
  }),
  columnHelper.accessor("appType", {
    cell: (info) => info.getValue().toUpperCase(),
    header: () => <span> App Type </span>,
  }),
  columnHelper.accessor("freelance", {
    cell: (info) => (info.getValue() ? "True" : "False"),
    header: "Is Freelance",
  }),
  columnHelper.accessor("_id", {
    cell: (info) => (
      <div className="flex gap-2 justify-center">
        <button
          className=" text-white hover:text-indigo-800"
          onClick={() => {
            //
          }}
        >
          <MdEditNote />
        </button>

        <button
          className=" text-white hover:text-indigo-800"
          onClick={() => {
            console.log(info.row && info.row.id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    ),
    header: "Actions",
  }),
];

//
const ProjectsListComponent = ({ projects }: { projects: IProject[] }) => {
  const router = useRouter();
  //
  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // this handles pagination
    getPaginationRowModel: getPaginationRowModel(),
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

        <div className="flex justify-between pb-10">
          <p className="text-2xl font-bold tracking-widest">Projects List</p>

          <Button
            size="medium"
            variant="indigo-800"
            className="rounded-md"
            onClick={() => {
              //
              router.push("/dashboard/projects/create");
            }}
          >
            <p className="font-bold">Create new projects</p>
          </Button>
        </div>

        {/*  */}
        <table className="w-full text-center overflow-x-auto text-lg bg-slate-900 rounded-md">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="h-16">
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
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={classNames(
                  "h-16",
                  index % 2 === 0 ? "bg-slate-800" : "bg-gray-900"
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-2">
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
