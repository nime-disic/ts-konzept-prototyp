import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>Das Traunsee: shadcn-Prototyp</CardTitle>
          <CardDescription>Placeholder description text.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Primary action</Button>
        </CardContent>
      </Card>
    </main>
  );
}