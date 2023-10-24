import {Card, CardBody} from "@nextui-org/card";

export default function ProductFeatureCard(props: { className: string; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <Card className={props.className + " bg-slate-100 dark:bg-slate-800 p-2"}>
      <CardBody className="p-2 px-4">
        <h2 className="md:text-lg font-medium mb-2"> {props.title} </h2>
        <p className="text-justify">
          {props.content}
        </p>
      </CardBody>
    </Card>
  );
}