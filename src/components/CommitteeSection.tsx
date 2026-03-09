"use client";

import { Separator } from "@/components/ui/separator";
import { Globe } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const committeeMembers = [
  {
    name: "Dr. Daniel Adams",
    email: "daniel@tig.foundation",
    bio: "Dr. Daniel Adams is a Mathematics Researcher at The Innovation Game (TIG). He holds an MSc in Mathematics from the University of Bristol and a PhD from the University of Edinburgh, where he specialised in Stochastic Analysis and Optimal Transport. He was awarded a prestigious Maxwell Research Fellowship jointly by the University of Edinburgh and Heriot-Watt University, and later held a postdoctoral position at Université Paris Dauphine.",
  },
  {
    name: "Henrique Assumpção",
    email: "henriquesoares@dcc.ufmg.br",
    bio: "Henrique Assumpção is a Machine Learning Researcher at Inter and a Master's student in Computer Science at Universidade Federal de Minas Gerais (UFMG). He holds a BSc in Computer Science from UFMG, with a minor in Pure Mathematics. He is the lead developer of CodeEvolve, an open-source implementation of Google DeepMind's AlphaEvolve for automated algorithmic discovery and optimization. His research spans representation learning, language models, and algebraic graph theory.",
  },
//   {
//     name: "Prof. Michael Rodriguez",
//     email: "m.rodriguez@algorithm-mining.org",
//     bio: "Prof. Michael Rodriguez is an Associate Professor at Stanford University's Computer Science department, specializing in systems for machine learning. He holds a Ph.D. from UC Berkeley and has published extensively on distributed training and model parallelism. He previously led ML infrastructure teams at Meta.",
//   },
//   {
//     name: "Dr. Aisha Patel",
//     email: "aisha.patel@algorithm-mining.org",
//     bio: "Dr. Aisha Patel is a Principal Researcher at Microsoft Research, Redmond, where she works on neural architecture search and automated ML systems. She completed her Ph.D. at Carnegie Mellon University and has been instrumental in developing efficiency benchmarks for the ML community.",
//   },
];

export function CommitteeSection() {
  return (
    <section id="committee" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mb-4">
            Committee Members
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <p className="text-stone-600 mb-12 font-normal">
            The Institute for Algorithm Mining is seeking additional committee members. If you would like to get involved, reach out to us at{" "}
            <a
              href="mailto:committee@algorithmdiscovery.org"
              className="text-stone-900 underline underline-offset-2 hover:text-stone-700"
            >
              committee@algorithmdiscovery.org
            </a>
            .
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="space-y-0">
          {committeeMembers.map((member, index) => (
            <StaggerItem key={member.name}>
              <div>
                <div className="py-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                    {/* Name and email column */}
                    <div className="md:col-span-1">
                      <h3 className="text-xl font-normal text-stone-900 mb-2">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm text-stone-600 underline underline-offset-2 hover:text-stone-900 font-normal"
                        >
                          {member.email}
                        </a>
                        <a
                          href="#"
                          className="text-stone-400 hover:text-stone-700 transition-colors"
                          aria-label="Website"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Bio column */}
                    <div className="md:col-span-2">
                      <p className="text-stone-700 leading-relaxed font-normal">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
                {index < committeeMembers.length - 1 && (
                  <Separator className="bg-stone-200" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
