import {Card, CardHeader, CardBody} from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function PromiseCard(props: { icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800">
      <CardHeader className="flex gap-3">
        <div className="text-3xl">{props.icon}</div>
        <p className="font-medium text-md">{props.title}</p>
      </CardHeader>
      <Divider/>
      <CardBody className="py-3">
        <p>{props.content}</p>
      </CardBody>
    </Card>
  );
}
