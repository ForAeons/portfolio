import {
  BentoSkeleton,
  BentoSkeletonWide,
  type BentoGridItemProps,
} from "@/components/BentoGrid";
import { getImage } from "astro:assets";
import { BsPersonBadgeFill } from "solid-icons/bs";
import { FaBrandsGithub, FaBrandsTiktok } from "solid-icons/fa";
import { FiExternalLink } from "solid-icons/fi";
import { ImLibrary } from "solid-icons/im";
import rustScript from "../assets/RustScript.png";
import cvwo from "../assets/cvwo.svg";
import rspack from "../assets/rspack.svg";

// Optimise images at build time
const rustScriptPng = await getImage({
  src: rustScript,
  format: "webp",
});
const cvwoSvg = await getImage({
  src: cvwo,
});
const rspackSvg = await getImage({
  src: rspack,
});

export const projects: BentoGridItemProps[] = [
  {
    header: (
      <img
        src={rustScriptPng.src}
        alt="Rustscript logo"
        width={96}
        height={96}
        class="m-auto group-hover/bento:rotate-3 transition-all rounded-md"
      />
    ),
    title: "Rustscript",
    icon: (
      <a
        href="https://github.com/crabscript/rustscript"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Developed a statically typed, compiled programming language combining Rust's syntax with the simplicity of TypeScript and Go with core features including primitive data types, higher-order functions, type checking, concurrency and garbage collector. The language to compile code into bytecode, akin to Java, followed by execution on a virtual machine.",
    class: "bg-neutral-50 sm:col-span-2",
  },
  {
    header: (
      <BsPersonBadgeFill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Portfolio",
    icon: (
      <a
        href="https://github.com/wxiaoyun/wxiaoyun.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "The current portfolio you are viewing. A minimalist design with a focus on responsive UI.  Built with Astro, Solidjs and Shadcn UI.",
    class: "bg-neutral-50",
  },
  BentoSkeleton,
  {
    header: (
      <ImLibrary class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Cambodia Community Library",
    icon: (
      <a
        href="https://github.com/wxiaoyun/lms-backend"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Solo built a full stack Library Management System with role based access control for a village located at Cambodia. It is a two year school project aimed to improve literacy level in Ou Ruessei, a village located at Cambodia.",
    class: "bg-neutral-50 sm:col-span-2",
  },
];

export const openSourceContrib: BentoGridItemProps[] = [
  {
    header: (
      <img
        src={rspackSvg.src}
        alt="Rspack logo"
        width={96}
        height={96}
        class="m-auto group-hover/bento:rotate-3 transition-all rounded-md"
      />
    ),
    title: "Rspack",
    icon: (
      <a
        href="https://www.rspack.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Made contribution to Webpack alignments and Javascript to Typescript migrations.",
    class: "bg-neutral-50",
  },
  BentoSkeletonWide,
];

export const professionalExperiences: BentoGridItemProps[] = [
  {
    header: (
      <FaBrandsTiktok
        size={72}
        class="m-auto opacity-70 group-hover/bento:rotate-3 transition-all rounded-md"
      />
    ),
    title: "Software Engineer Intern @ ByteDance",
    icon: (
      <a
        href="https://www.bytedance.com/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink />
      </a>
    ),
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Led a cross-functional team collaboration to migrate Money-Platform from Webpack to Rspack, reducing bundling time by 50%."
          }
        </li>
        <li>
          {
            "Developed on whitescreen alarms and alarm handling system, streamlined the process of handling alarms. The whitescreen alarm caught and report a major bug released to production."
          }
        </li>
      </ul>
    ),
    class: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small class="text-xs text-muted-foreground">05/2024 - 09/2024</small>
    ),
  },
  BentoSkeleton,
  BentoSkeleton,
  {
    header: (
      <img
        class="group-hover/bento:scale-105 transition-transform h-[96px]"
        src={cvwoSvg.src}
        alt="CVWO Logo"
      />
    ),
    title: "Software Engineer @ Computing for Voluntary Welfare Organisations",
    icon: (
      <a
        href="https://www.comp.nus.edu.sg/~vwo/projects/2023-cms.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiExternalLink />
      </a>
    ),
    description:
      "Reduced backend response time by 5 times by porting a Case Management System backend from Ruby on Rails to Golang. Features ported include RBAC, Auth, 2FA and Masquerading.",
    class: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small class="text-xs text-muted-foreground">05/2023 - 08/2023</small>
    ),
  },
];
