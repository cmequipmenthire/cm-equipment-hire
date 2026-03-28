import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const equipment = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/equipment' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum(['excavators', 'dump-trucks', 'wheel-loaders', 'graders', 'water-carts', 'rollers']),
    brand: z.string(),
    model: z.string(),
    year: z.number().optional(),
    heroImage: image().optional(),
    gallery: z.array(image()).default([]),
    operatingWeight: z.string().optional(),
    engine: z.string().optional(),
    payload: z.string().optional(),
    maxDigDepth: z.string().optional(),
    bucketCapacity: z.string().optional(),
    heapedCapacity: z.string().optional(),
    bladeWidth: z.string().optional(),
    power: z.string().optional(),
    hireTypes: z.array(z.enum(['wet', 'dry'])),
    idealFor: z.array(z.string()),
    metaTitle: z.string(),
    metaDescription: z.string(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(0),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    heroImage: z.string().optional(),
    shortDescription: z.string(),
    whatWeDo: z.array(z.string()),
    whyItMatters: z.string(),
    equipmentUsed: z.array(z.string()),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    metaTitle: z.string(),
    metaDescription: z.string(),
    sortOrder: z.number().default(0),
  }),
});

export const collections = { equipment, services };
