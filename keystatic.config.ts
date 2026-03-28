import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    equipment: collection({
      label: 'Equipment',
      slugField: 'name',
      path: 'src/content/equipment/*',
      format: { contentField: 'description' },
      schema: {
        name: fields.slug({ name: { label: 'Machine Name' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Excavators', value: 'excavators' },
            { label: 'Dump Trucks', value: 'dump-trucks' },
            { label: 'Wheel Loaders', value: 'wheel-loaders' },
            { label: 'Graders', value: 'graders' },
            { label: 'Water Carts', value: 'water-carts' },
            { label: 'Rollers', value: 'rollers' },
          ],
          defaultValue: 'excavators',
        }),
        brand: fields.text({ label: 'Brand' }),
        model: fields.text({ label: 'Model' }),
        year: fields.number({ label: 'Year', defaultValue: 2024 }),
        heroImage: fields.text({ label: 'Hero Image Path' }),
        gallery: fields.array(
          fields.text({ label: 'Image Path' }),
          { label: 'Gallery Images', itemLabel: (props) => props.value },
        ),
        operatingWeight: fields.text({ label: 'Operating Weight' }),
        engine: fields.text({ label: 'Engine' }),
        payload: fields.text({ label: 'Payload' }),
        maxDigDepth: fields.text({ label: 'Max Dig Depth' }),
        bucketCapacity: fields.text({ label: 'Bucket Capacity' }),
        heapedCapacity: fields.text({ label: 'Heaped Capacity' }),
        bladeWidth: fields.text({ label: 'Blade Width' }),
        power: fields.text({ label: 'Power' }),
        hireTypes: fields.multiselect({
          label: 'Hire Types',
          options: [
            { label: 'Wet Hire', value: 'wet' },
            { label: 'Dry Hire', value: 'dry' },
          ],
        }),
        idealFor: fields.array(
          fields.text({ label: 'Use Case' }),
          { label: 'Ideal For', itemLabel: (props) => props.value },
        ),
        description: fields.markdoc({ label: 'Description', extension: 'md' }),
        metaTitle: fields.text({
          label: 'SEO Title',
          validation: { length: { max: 60 } },
        }),
        metaDescription: fields.text({
          label: 'Meta Description',
          multiline: true,
          validation: { length: { max: 155 } },
        }),
        featured: fields.checkbox({ label: 'Featured on Homepage', defaultValue: false }),
        sortOrder: fields.number({ label: 'Sort Order', defaultValue: 0 }),
      },
    }),
  },
});
