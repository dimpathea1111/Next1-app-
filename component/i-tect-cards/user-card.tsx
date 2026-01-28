import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserResponse } from "@/app/components/lib/type/user";

export function UserCard({
  email = "jonh@gmail.com",
  name = "Jesus Weiss",
  role = "user",
  avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOgfDMZUNUFrmelM5jVoQarAr6d1gVgQxaA&s",
  creationAt = "now",
}: UserResponse) {
  return (
    <Card className="mx-auto w-full max-col-sm p-6 shadow-sm border rounded-3xl">
      <div className="flex items-start gap-5">
        <div className="relative h-24 w-24 flex-shrink-0">
          <img
            src={avatar}
            alt={name}
            className="h-full w-full rounded-full object-cover border"
          />
        </div>

        <div className="flex flex-col gap-1">
          <CardTitle className="text-2xl line-clamp-1">{name}</CardTitle>
          <CardTitle className="line-clamp-1">{email}</CardTitle>
          <CardTitle className="text-gray-400">{creationAt}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1 font-normal text-blue-600 border-blue-200"
            >
              {role}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}