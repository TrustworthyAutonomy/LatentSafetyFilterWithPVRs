/**
 * Paper project page configuration
 * Edit this file for each new paper — most pages need no HTML edits.
 */
window.PAPER_CONFIG = {
  title: "Designing Latent Safety Filters using Pre-Trained Vision Models",
  shortTitle: "Latent Safety Filters with PVRs",
  authors: [
    { name: "Ihab Tabbara", affiliation: "", link: "" },
    { name: "Yuxuan Yang", affiliation: "", link: "" },
    { name: "Ahmad Hamzeh", affiliation: "", link: "" },
    { name: "Maxwell Astafyev", affiliation: "", link: "" },
    { name: "Hussein Sibai", affiliation: "", link: "" },
  ],
  venue: "arXiv 2025 · cs.RO",
  abstract:
    "Ensuring safety of vision-based control systems remains a major challenge hindering their deployment in critical settings. Safety filters have gained increased interest as effective tools for ensuring the safety of classical control systems, but their applications in vision-based control settings have so far been limited. Pre-trained vision models (PVRs) have been shown to be effective perception backbones for control in various robotics domains. In this paper, we are interested in examining their effectiveness when used for designing vision-based safety filters. We use them as backbones for classifiers defining failure sets, for Hamilton-Jacobi (HJ) reachability-based safety filters, and for latent world models. We discuss the trade-offs between training from scratch, fine-tuning, and freezing the PVRs when training the models they are backbones for. We also evaluate whether one of the PVRs is superior across all tasks, evaluate whether learned world models or Q-functions are better for switching decisions to safe policies, and discuss practical considerations for deploying these PVRs on resource-constrained devices.",

  // Replace with a real teaser figure from the paper when available
  heroImage:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2400&q=80",
  heroImageAlt: "Placeholder teaser — replace with a figure from the paper",

  links: {
    pdf: "https://arxiv.org/pdf/2509.14758",
    arxiv: "https://arxiv.org/abs/2509.14758",
    code: "",
    video: "",
    data: "",
    lab: "https://trustworthyautonomy.github.io/",
  },

  bibtex: `@misc{tabbara2025designinglatentsafetyfilters,
  title={Designing Latent Safety Filters using Pre-Trained Vision Models},
  author={Ihab Tabbara and Yuxuan Yang and Ahmad Hamzeh and Maxwell Astafyev and Hussein Sibai},
  year={2025},
  eprint={2509.14758},
  archivePrefix={arXiv},
  primaryClass={cs.RO},
  url={https://arxiv.org/abs/2509.14758},
}`,

  highlights: [
    {
      title: "Problem",
      text: "Vision-based controllers need safety guarantees, but classical safety filters rarely extend cleanly to high-dimensional visual observations.",
    },
    {
      title: "Approach",
      text: "Use pre-trained vision models as backbones for failure classifiers, HJ reachability safety filters, and latent world models.",
    },
    {
      title: "Findings",
      text: "Compare scratch vs fine-tune vs frozen PVRs, assess which backbones transfer across tasks, and discuss deployment on resource-constrained devices.",
    },
  ],
};
