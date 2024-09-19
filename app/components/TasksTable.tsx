'use client'

import React from 'react'
import { Tasks, columns } from "./table/columns"
import { DataTable } from './table/data-table'
import { supabase } from '@/supabase/client'

async function getData(): Promise<Tasks[]> {


let { data: tasks, error } = await supabase
.from('tasks')
.select('*')
        console.log(tasks)
        
  
  return [
    {
      id: "728ed52f",
      title: "pending",
      status: false,
      created_at: "hghghg",
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()
 
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}