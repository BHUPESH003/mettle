"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { teamMembers, type TeamMember } from "@/lib/team";
import { SlideOverPanel } from "@/components/ui/SlideOverPanel";

function TeamMemberPanel({
  member,
  open,
  onClose,
}: {
  member: TeamMember;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <SlideOverPanel
      open={open}
      onClose={onClose}
      size="sm"
      closeLabel={`Close ${member.name}`}
    >
      <div className="flex flex-1 flex-col overflow-hidden pt-14">
        <div className="relative mx-4 aspect-4/5 max-h-[42vh] overflow-hidden rounded-panel sm:mx-6 sm:max-h-[38vh]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-8 pt-6 sm:px-8">
          <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            {member.name}
          </h3>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            {member.role}
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/65">{member.bio}</p>
          <Link
            href="/contact"
            className="mettle-btn mettle-btn-ghost mt-8 px-6 py-3"
          >
            Get in touch
            <Icons.arrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </SlideOverPanel>
  );
}

export function TeamSection() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <section className="border-b border-white/8 px-6 py-20 md:py-28">
      <div className="container mx-auto">
        <p className="mettle-label mb-14 text-white/35">Meet the team</p>

        <div className="divide-y divide-white/8 border-y border-white/8">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              type="button"
              onClick={() => setSelected(member)}
              className="group grid w-full gap-6 py-10 text-left transition-colors hover:bg-white/2 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-10 md:py-12"
            >
              <div className="relative aspect-4/5 w-full max-w-[280px] overflow-hidden rounded-panel  transition-[filter,transform] duration-500 group-hover:scale-[1.02]  md:aspect-square md:h-44 md:max-w-none">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top md:object-center"
                  sizes="(min-width: 768px) 220px, 280px"
                />
              </div>
              <div>
                <h3 className="mb-1.5 text-2xl font-black tracking-tight text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  {member.role}
                </p>
                <p className="line-clamp-3 max-w-lg text-sm leading-relaxed text-white/55 md:line-clamp-2">
                  {member.bio}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/35 transition-colors group-hover:text-accent">
                View profile
                <Icons.arrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected ? (
        <TeamMemberPanel
          member={selected}
          open
          onClose={() => setSelected(null)}
        />
      ) : null}
    </section>
  );
}
