import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function FeatureCard(props: { className: string; imgSrc: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <Card className={props.className + "bg-slate-100 dark:bg-slate-800 p-2"}>
      <CardHeader className="flex bg-transparent justify-center">
        <Image
          alt="Feature Card"
          className="object-contain w-full md:w-auto md:h-60"
          src={props.imgSrc}
        />
      </CardHeader>
      <CardBody className="p-4">
        <h2 className="text-lg font-medium mb-2 text-center"> {props.title} </h2>
        <p className="">
          {props.content}
        </p>
      </CardBody>
    </Card>
  );
}