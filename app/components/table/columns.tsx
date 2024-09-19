"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Tasks = {
  id: string
  title: string
  status: boolean
  created_at: string
}

export const columns: ColumnDef<Tasks>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "create_at",
    header: "Created At",
  },
]
