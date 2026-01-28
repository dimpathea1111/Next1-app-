// import { UserCard } from "@/component/i-tech-card/user-card";
import { UserCard } from "@/component/i-tect-cards/user-card";
// import { UserResponse } from "@/lib/type/users";

const BASE_URL = process.env.NEXT_PUBLIC_API;
export async function getUsers() {
  const response = await fetch(`${BASE_URL}/api/v1/users`);
  return response.json();
}

export default async function UserPage() {
  const users: UserResponse[] = await getUsers();

  return (
    <div>
      <section className=" mt-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-10 py-5">
        {users.map((user, index) => (
          <UserCard
            key={index}
            email={user.email}
            name={user.name}
            role={user.role}
            avatar={user.avatar}
            creationAt={user.creationAt}
          />
        ))}
      </section>
    </div>
  );
}