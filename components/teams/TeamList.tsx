'use client'

import { Team } from "@/app/team/page"
import { TeamCard } from "./TeamCard"

interface TeamListProps {
  data: Team[];
}

export const TeamList = ({data}: TeamListProps) => {

  const approvedMembers = data.filter((member) => member.isApproved)
  const pendingMembers = data.filter((member) => !member.isApproved)

  return (
    <div className="space-y-16">
      <div>
        <h2 className="mb-4">Approved Members</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {approvedMembers.map((member, index) => (
          <TeamCard
            key={index}
            member={member}
            isPending={false}
          />
        ))}
      </div>
      <div>
        <h2 className="mb-4">Pending Members</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pendingMembers.map((member, index) => (
          <TeamCard
            key={index}
            member={member}
            isPending={true}
          />
        ))}
      </div>
    </div>
  )
}