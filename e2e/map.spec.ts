import { test, expect } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.beforeEach(async ({ page }) => {
  await page.goto('/learn');
});

const LANDING_PAGE_LINKS = [
  {
    slug: '2022/responsive-web-design',
    name: 'Responsive Web Design'
  },
  {
    slug: 'javascript-algorithms-and-data-structures-v8',
    name: 'JavaScript Algorithms and Data Structures'
  },
  {
    slug: 'front-end-development-libraries',
    name: 'Front End Development Libraries'
  },
  { slug: 'data-visualization', name: 'Data Visualization' },
  { slug: 'relational-database', name: 'Relational Database' },
  {
    slug: 'back-end-development-and-apis',
    name: 'Back End Development and APIs'
  },
  { slug: 'quality-assurance', name: 'Quality Assurance' },
  {
    slug: 'scientific-computing-with-python',
    name: 'Scientific Computing with Python'
  },
  {
    slug: 'data-analysis-with-python',
    name: 'Data Analysis with Python'
  },
  { slug: 'information-security', name: 'Information Security' },
  {
    slug: 'machine-learning-with-python',
    name: 'Machine Learning with Python'
  },
  {
    slug: 'college-algebra-with-python',
    name: 'College Algebra with Python'
  },
  {
    slug: 'full-stack-developer',
    name: 'Certified Full Stack Developer Curriculum'
  },
  {
    slug: 'a2-english-for-developers',
    name: 'A2 English for Developers (Beta) Certification'
  },
  {
    slug: 'b1-english-for-developers',
    name: 'B1 English for Developers (Beta) Certification'
  },
  {
    slug: 'foundational-c-sharp-with-microsoft',
    name: 'Free Foundational C# with Microsoft Certification'
  },
  { slug: 'the-odin-project', name: 'The Odin Project - freeCodeCamp Remix' },
  { slug: 'coding-interview-prep', name: 'Coding Interview Prep' },
  { slug: 'project-euler', name: 'Project Euler' },
  { slug: 'rosetta-code', name: 'Rosetta Code' },
  {
    slug: 'responsive-web-design',
    name: 'Legacy Responsive Web Design Challenges'
  },
  {
    slug: 'javascript-algorithms-and-data-structures',
    name: 'Legacy JavaScript Algorithms and Data Structures'
  },
  { slug: 'python-for-everybody', name: 'Legacy Python for Everybody' }
];

test.describe('Map Component', () => {
  test('should render correctly', async ({ page }) => {
    await expect(
      page.getByText(translations.landing['core-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['professional-certs-heading'])
    ).toBeVisible();
    await expect(
      page.getByText(translations.landing['interview-prep-heading'])
    ).toBeVisible();
    const curriculumBtns = page.getByTestId('curriculum-map-button');
    await expect(curriculumBtns).toHaveCount(23);

    for (const { name, slug } of LANDING_PAGE_LINKS) {
      const superblockLink = page.getByRole('link', {
        exact: true,
        name
      });

      await expect(superblockLink).toBeVisible();
      await expect(superblockLink).toHaveAttribute('href', `/learn/${slug}/`);
    }
  });
});
