import classNames from "classnames";

//
import { RxSlash } from "react-icons/rx";

//
interface IBreadcrumbProps {
  crumbs: {
    title: string;
    url?: string;
  }[];
  className?: string;
}

//
export default function Breadcrumbs(props: IBreadcrumbProps) {
  const allItems = props.crumbs;

  //
  return (
    <div className={classNames("flex", props.className)}>
      {allItems.map((crumb, index) => (
        <div key={index} className="flex items-center">
          <div
            className={classNames(
              "text-md font-normal",
              index < allItems.length - 1
                ? "text-primary hover:text-primary-dark hover:underline font-semibold"
                : "text-white font-bold"
            )}
          >
            {crumb.url && index < allItems.length - 1 ? (
              <a href={crumb.url}>{crumb.title}</a>
            ) : (
              <span className="cursor-default">{crumb.title}</span>
            )}
          </div>

          {index < allItems.length - 1 && (
            <RxSlash size={16} className="mx-1 flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}
