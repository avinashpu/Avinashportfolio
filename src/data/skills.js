import { Figma, Palette, Target, Search, Code2, Database, TestTube, Brain } from 'lucide-react';

export const skillCategories = [
  {
    title: 'UI/UX',
    skills: [
      { name: 'Figma', icon: Figma },
      { name: 'Wireframing', icon: Palette },
      { name: 'Prototyping', icon: Target },
      { name: 'UX Research', icon: Search },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'JavaScript', icon: Code2 },
      { name: 'HTML/CSS', icon: Code2 },
      { name: 'Tailwind', icon: Code2 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: Database },
      { name: 'Express', icon: Database },
      { name: 'MongoDB', icon: Database },
    ],
  },
  {
    title: 'Testing & AI',
    skills: [
      { name: 'Playwright', icon: TestTube },
      { name: 'Automation', icon: TestTube },
      { name: 'Labelbox', icon: Brain },
      { name: 'Label Studio', icon: Brain },
    ],
  },
];
