"use client";
import React from "react";

import {Card, CardBody, Image} from "@nextui-org/react";
import Link from "next/link";
import { UrlObject } from "url";

export default function ProductCard(props: { href: string | UrlObject; imgSrc: string | undefined; productName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <Card className="hover:scale-105 bg-slate-100 dark:bg-slate-800" as={Link} href={props.href}>
      <CardBody className="p-0">
        <div className="flex justify-center items-center h-64 md:h-72 w-full">
            <img
                alt="Product Image"
                className="object-contain h-full rounded-none p-2"
                src={props.imgSrc}
            />
        </div>

        <div className="p-4">
            <h4 className="font-semibold text-lg"> {props.productName} </h4>
            <p className="text-default-500 text-sm">{props.description}</p>
        </div>
      </CardBody>
    </Card>
  );
}
