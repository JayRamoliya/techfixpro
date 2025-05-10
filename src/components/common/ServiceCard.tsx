
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon, title, description, link = "/services" }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-transform hover:translate-y-[-5px]">
      <CardHeader>
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-repair-100 text-repair-700 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
