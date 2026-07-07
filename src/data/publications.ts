export interface PubLink {
  label: string;
  href: string;
}

export interface Author {
  name: string;
  me?: boolean;
  /** co-first author (marked with * in the source bibliography) */
  coFirst?: boolean;
}

export interface Publication {
  key: string;
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  note?: string;
  abbr: string;
  selected?: boolean;
  links: PubLink[];
}

const me = (name: string, coFirst = false): Author => ({ name, me: true, coFirst });
const a = (name: string): Author => ({ name });

export const publications: Publication[] = [
  {
    key: "cryoet_diffusion",
    title:
      "Unsupervised Multi-scale Segmentation of Cellular Cryo-electron Tomograms with Stable Diffusion Foundation Model",
    authors: [
      a("Mostofa Rafid Uddin"),
      { name: "Thanh-Huy Nguyen", coFirst: true },
      me("H.M. Shadman Tabib", true),
      a("Kashish Gandhi"),
      a("Min Xu"),
    ],
    venue: "Submitted to CVPR",
    year: 2025,
    abbr: "CVPR",
    selected: true,
    links: [{ label: "PDF", href: "https://doi.org/10.1101/2025.06.25.661425" }],
  },
  {
    key: "macromolecule_sparse",
    title:
      "Localization of Macromolecules in Crowded Cellular Cryo-electron Tomograms from Extremely Sparse Labels",
    authors: [
      a("Mostofa Rafid Uddin"),
      { name: "Ajmain Yasar Ahmed", coFirst: true },
      me("H.M. Shadman Tabib", true),
      a("Md Toki Tahmid"),
      a("Md Zarif Ul Alam"),
      a("Zachary Freyberg"),
      a("Min Xu"),
    ],
    venue: "Briefings in Bioinformatics",
    year: 2025,
    note: "Accepted",
    abbr: "BIB",
    selected: true,
    links: [
      { label: "PDF", href: "https://www.biorxiv.org/content/10.1101/2024.11.04.620735v2" },
    ],
  },
  {
    key: "neurosky",
    title:
      "NEUROSKY-EPI: The First Open Single-Electrode Epilepsy EEG Dataset with Context-Aware Modeling",
    authors: [
      me("H.M. Shadman Tabib"),
      a("Md. Hasnaen Adil"),
      a("Ayesha Rahman"),
      a("Ahmmad Nur Swapnil"),
      a("Maoyejatun Hasana"),
      a("A.B.M. Alim Al Islam"),
    ],
    venue: "NeurIPS 2025 Workshop on Time Series for Health (TS4H)",
    year: 2025,
    note: "Accepted",
    abbr: "NeurIPS Workshop",
    selected: true,
    links: [{ label: "OpenReview", href: "https://openreview.net/forum?id=RumQSMSRHj" }],
  },
  {
    key: "contextualized",
    title:
      "Contextualized Machine Learning: Towards Adaptive, Interpretable, and Generalizable AI Systems",
    authors: [
      a("Ben Lengerich"),
      a("Caleb Ellington"),
      a("Sazan Mahbub"),
      me("H.M. Shadman Tabib"),
      a("others"),
    ],
    venue: "UW–Madison Research Project",
    year: 2025,
    abbr: "UW-Madison",
    links: [{ label: "Code", href: "https://github.com/AdaptInfer/context-review" }],
  },
  {
    key: "spectrasentinel",
    title:
      "SpectraSentinel: Lightweight Dual-Stream Real-Time Drone Detection, Tracking and Payload Identification",
    authors: [
      a("Shahriar Kabir"),
      a("Istiak Ahmmed Rifti"),
      me("H.M. Shadman Tabib"),
      a("Mushfiqur Rahman"),
      a("Sadatul Islam Sadi"),
      a("Hasnaen Adil"),
      a("Ahmed Mahir Sultan Rumi"),
      a("Ch. Md. Rakin Haider"),
    ],
    venue: "arXiv preprint",
    year: 2025,
    abbr: "arXiv",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2507.22650" }],
  },
  {
    key: "epidemic",
    title:
      "Study on Locomotive Epidemic Dynamics in a Stochastic Spatio-Temporal Simulation Model on a Multiplex Network",
    authors: [me("H.M. Shadman Tabib"), a("Jaber Ahmed Deedar"), a("K.M. Ariful Kabir")],
    venue: "arXiv preprint",
    year: 2025,
    abbr: "arXiv",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2509.21017" }],
  },
  {
    key: "llm_judge",
    title:
      "Toward Trustworthy Difficulty Assessments: Large Language Models as Judges in Programming and Synthetic Tasks",
    authors: [me("H.M. Shadman Tabib"), a("Jaber Ahmed Deedar")],
    venue: "arXiv preprint",
    year: 2025,
    abbr: "arXiv",
    links: [],
  },
  {
    key: "bangla_math",
    title: "End-to-End Bangla AI for Solving Math Olympiad Problem Benchmark",
    authors: [me("H.M. Shadman Tabib"), a("Jaber Ahmed Deedar")],
    venue: "International Journal of Natural Language Computing (IJNLC)",
    year: 2024,
    note: "Accepted",
    abbr: "IJNLC",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2501.04425" }],
  },
  {
    key: "breast_cancer",
    title:
      "Breast Cancer Detection Using Semi-Supervised Learning: Multimodal Data Integration and Comparative Demographic Analysis",
    authors: [
      me("H.M. Shadman Tabib"),
      a("Mst. Fahmida Sultana Naznin"),
      a("Sadatul Islam Sadi"),
      a("Md. Hasnaen Adil"),
      a("Zarin Tasnim Oishi"),
      a("M. Sohel Rahman"),
    ],
    venue: "11th International Conference on Networking, Systems, and Security (NSyS)",
    year: 2024,
    note: "Accepted as Poster",
    abbr: "NSyS",
    selected: true,
    links: [
      {
        label: "PDF",
        href: "https://www.researchgate.net/profile/Mst-Fahmida-Naznin/publication/386218434",
      },
    ],
  },
  {
    key: "mangrove",
    title:
      "Exploring Livelihood Dynamics and Policy Interventions in Mangrove Social-Ecological Systems with Agent-Based Modeling: A Mesa Framework Approach",
    authors: [a("Anik Saha"), me("H.M. Shadman Tabib"), a("M. Sohel Rahman")],
    venue: "OpenReview preprint",
    year: 2024,
    abbr: "OpenReview",
    links: [{ label: "PDF", href: "https://openreview.net/pdf?id=h8B1HGSYoa" }],
  },
];

export const selectedPublications = publications.filter((p) => p.selected);

export const publicationsByYear = () => {
  const years = [...new Set(publications.map((p) => p.year))].sort((x, y) => y - x);
  return years.map((year) => ({
    year,
    items: publications.filter((p) => p.year === year),
  }));
};
