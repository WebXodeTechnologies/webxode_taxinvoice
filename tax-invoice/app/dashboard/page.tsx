import { signOut } from "../utils/auth";
import { requireUser } from "../utils/hooks";

export default async function Dashboard() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const session = await requireUser();
    
  return (
    <div>
      <h1>Hello From Dashboard</h1>
      <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
    </div>
  );
}


