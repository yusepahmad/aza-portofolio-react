import {
  projects,
  smallProjects,
  type PipelineTrack,
  type Challenge,
  type Metric,
  type ArchitectureLayer,
  type Component,
  type TechGroup,
  type ProjectVisualKey,
} from './content';

export type ProjectPageData = {
  slug: string;
  type: string;
  year: string;
  title: string;
  tagline: string;
  stack: string[];
  link?: string;
  metrics: Metric[];
  overview: string;
  layers: ArchitectureLayer[];
  architecture: string;
  pipelineTracks: PipelineTrack[];
  components: Component[];
  challenges: Challenge[];
  techGroups: TechGroup[];
  results: string[];
  visual?: ProjectVisualKey;
  gradient?: string;
  numLabel?: string;
  tagLabel?: string;
  index: number;
  total: number;
};

const total = projects.length + smallProjects.length;

const fromMain: ProjectPageData[] = projects.map((p, i) => ({
  slug: p.detail.slug,
  type: p.type,
  year: p.year,
  title: `${p.title} ${p.titleAccent}`,
  tagline: p.tagline,
  stack: p.stack,
  link: p.link,
  metrics: p.detail.metrics,
  overview: p.detail.overview,
  layers: p.detail.layers,
  architecture: p.detail.architecture,
  pipelineTracks: p.detail.pipelineTracks,
  components: p.detail.components,
  challenges: p.detail.challenges,
  techGroups: p.detail.techGroups,
  results: p.detail.results,
  visual: p.visual,
  gradient: p.gradient,
  numLabel: p.numLabel,
  tagLabel: p.tagLabel,
  index: i,
  total,
}));

const fromSmall: ProjectPageData[] = smallProjects.map((p, i) => ({
  slug: p.slug,
  type: p.type,
  year: p.year,
  title: p.title,
  tagline: p.description,
  stack: p.tags,
  metrics: p.metrics,
  overview: p.overview,
  layers: p.layers,
  architecture: p.architecture,
  pipelineTracks: p.pipelineTracks,
  components: p.components,
  challenges: p.challenges,
  techGroups: p.techGroups,
  results: p.results,
  index: projects.length + i,
  total,
}));

export const allProjectPages: ProjectPageData[] = [...fromMain, ...fromSmall];

export function getProjectBySlug(slug: string): ProjectPageData | undefined {
  return allProjectPages.find((p) => p.slug === slug);
}

export function getAdjacentProjects(index: number) {
  const prev = allProjectPages[(index - 1 + allProjectPages.length) % allProjectPages.length];
  const next = allProjectPages[(index + 1) % allProjectPages.length];
  return { prev, next };
}
