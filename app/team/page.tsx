import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard"
import { TeamList } from "@/components/teams/TeamList";

export interface Team {
    isAdmin: boolean;
    name: string;
    image: string;
    isApproved: boolean;
    email: string;
}

async function getTeam(): Promise<Team[]> {
  const res = await fetch(
    'https://66deb303de4426916ee207f9.mockapi.io/team',
    { cache: 'no-store' }
  );

  const data = await res.json();
  return data;
}

export default async function page() {
    const data = await getTeam()

    return (
      <div className="p-6">
        <TeamList data={data} />
      </div>
    )
}