
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const PageHeader = ({ title, description, className }: PageHeaderProps) => {
  return (
    <div className={cn("bg-repair-800 text-white py-16 md:py-24", className)}>
      <div className="container text-center">
        <h1 className="text-3xl font-bold md:text-5xl mb-4">{title}</h1>
        {description && <p className="text-lg text-gray-200 max-w-2xl mx-auto">{description}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
