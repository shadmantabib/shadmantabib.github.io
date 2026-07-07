export interface NewsItem {
  date: string; // ISO date, used for sorting
  display: string; // human-friendly short date
  html: string;
}

// Newest first.
export const news: NewsItem[] = [
  {
    date: "2026-06-06",
    display: "Jun 2026",
    html: '🏆 Second-authored paper received a <strong>Highlight</strong> and was an <strong>Award Candidate</strong> at <strong>CVPR 2026</strong>!',
  },
  {
    date: "2026-06-04",
    display: "Jun 2026",
    html: 'Moved to Singapore as an <strong>on-site Visiting Scholar</strong> at the <strong>National University of Singapore (NUS)</strong>.',
  },
  {
    date: "2025-10-01",
    display: "Oct 2025",
    html: '📚 Paper accepted in <strong>Briefings in Bioinformatics</strong> on macromolecule localization in crowded cellular cryo-electron tomograms from extremely sparse labels!',
  },
  {
    date: "2025-09-21",
    display: "Sep 2025",
    html: '📄 Paper accepted at <strong>NeurIPS 2025 Workshop on Time Series for Health (TS4H)</strong>! NEUROSKY-EPI introduces the first open single-electrode epilepsy EEG dataset.',
  },
  {
    date: "2025-09-18",
    display: "Sep 2025",
    html: '🥈 Achieved <strong>Global 2nd Runner-up</strong> at IEEE SPS Video &amp; Image Processing (VIP) Cup 2025 with our SpectraSentinel project on real-time drone detection!',
  },
  {
    date: "2025-01-15",
    display: "Jan 2025",
    html: '🏆 Our team <strong>NeoScreenix</strong> won the <strong>Global Championship</strong> at Johns Hopkins Healthcare Design Competition 2025! Featured in national media: <a href="https://www.thedailystar.net/news/bangladesh/news/buet-team-wins-1st-place-johns-hopkins-healthcare-design-competition-3884801" target="_blank" rel="noopener">Daily Star</a>, <a href="https://www.tbsnews.net/features/pursuit/neoscreenix-how-buet-students-early-breast-cancer-detection-technology-could-make" target="_blank" rel="noopener">TBS</a>, <a href="https://unb.com.bd/category/Bangladesh/a-moment-of-global-recognition-for-local-brilliance-of-bangladesh-in-digital-health-care/158731" target="_blank" rel="noopener">UNB</a>.',
  },
];
