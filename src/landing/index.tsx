import { Button } from "@/shared/components/ui";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>LandingPage</h1>

      <Button asChild>
        <Link to="/chat" className="text-white">
          Get Started
        </Link>
      </Button>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
