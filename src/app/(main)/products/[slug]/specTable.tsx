"use client";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

export default function ClientTable(props: { data: Iterable<any> | undefined; }) {
  const specListColumns = [
    {
        "key": "spec",
        "label": "Specification"
    },
    {
        "key": "description",
        "label": "Description"
    }
  ]
  return (
    <Table className='lg:col-span-2 mb-4 [&>*]:bg-slate-100 [&>*]:dark:bg-slate-800'>
    <TableHeader columns={specListColumns}>
      {(column) => <TableColumn className="bg-slate-100 dark:bg-slate-800" key={column.key}>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody className="" items={props.data} >
      {(item:any) => (
        <TableRow key={item.spec}  className="">
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
  );
}
