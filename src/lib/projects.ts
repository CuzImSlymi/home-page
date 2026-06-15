export type ProjectMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "code"; language: string; code: string };

export type Project = {
  id: string;
  name: string;
  tagline: string;
  metric?: string;
  metricLabel?: string;
  secondaryMetric?: string;
  secondaryMetricLabel?: string;
  description: string;
  stack: string[];
  href: string;
  linkLabel: string;
  media: ProjectMedia;
};

export const projects: Project[] = [
  {
    id: "bssmvalues",
    name: "BSSMValues",
    tagline: "Full-stack web platform",
    metric: "1.2M+",
    metricLabel: "unique visitors / month",
    secondaryMetric: "300GB",
    secondaryMetricLabel: "peak traffic / day",
    description:
      "A full-stack platform serving a large community, coded and hosted entirely by me. Built to stay fast and reliable under heavy load.",
    stack: ["Full-stack", "Self-hosted", "High traffic"],
    href: "https://bssmvalues.com",
    linkLabel: "Visit site",
    media: { type: "image", src: "/projects/bssmvalues.png" },
  },
  {
    id: "bss-ai",
    name: "BSS-AI",
    tagline: "Open-source macro",
    metric: "20K+",
    metricLabel: "labelled training images",
    secondaryMetric: "25K+",
    secondaryMetricLabel: "community members",
    description:
      "A neural network trained on a hand-labelled dataset, built with a small dev team. Grew into an open-source project with a community of over 25,000 people.",
    stack: ["Neural Networks", "Team Lead", "Open Source"],
    href: "https://github.com/BSS-AI/BSS-AI",
    linkLabel: "View on GitHub",
    media: {
      type: "video",
      src: "https://slymi.org/bss-ai-demo-compressed.mp4",
    },
  },
  {
    id: "puter-python-sdk",
    name: "Puter Python SDK",
    tagline: "Open-source Python SDK",
    description:
      "A Python SDK built because the official options fell short. A clean, well-designed API that other developers can read and rely on.",
    stack: ["Python", "API Design", "Open Source"],
    href: "https://github.com/CuzImSlymi/puter-python-sdk",
    linkLabel: "View on GitHub",
    media: {
      type: "code",
      language: "python",
      code: `from puter import PuterAI

client = PuterAI(username="user", password="pass")
client.login()

client.set_model("claude-fable-5")
reply = client.chat("Summarize quantum computing.")
print(reply)

# Multimodal: pass local paths or URLs
answer = client.chat("What's in this image?", images=["chart.png"])
print(answer)`,
    },
  },
];
