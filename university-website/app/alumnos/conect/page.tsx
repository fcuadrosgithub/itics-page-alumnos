import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ConectPage() {
  return (
    <div className="space-y-6">
      <a href="http://conect.itsoeh.edu.mx/mix_21_alu/" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="gap-2">
          Acceder a Conect
          <ExternalLink className="h-4 w-4 ml-1" />
        </Button>
      </a>
    </div>
  );
}