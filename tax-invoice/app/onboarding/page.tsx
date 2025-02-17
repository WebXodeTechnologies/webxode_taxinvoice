import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Onboarding() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Card className="max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">You are Almost Finished!</CardTitle>
          <CardDescription>
            Enter Your Information to Create An Account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="">
              <div className="flex flex-col gap-2">
                <Label>First Name</Label>
                <Input placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Last Name</Label>
                <Input placeholder="Doe" />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
