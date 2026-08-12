/**
 * Paper project page — simple academic layout.
 * https://arxiv.org/abs/2509.14758
 */
window.PAPER_CONFIG = {
  title: "Designing Latent Safety Filters using Pre-Trained Vision Models",
  authors: [
    { name: "Ihab Tabbara", link: "" },
    { name: "Yuxuan Yang", link: "" },
    { name: "Ahmad Hamzeh", link: "" },
    { name: "Maxwell Astafyev", link: "" },
    { name: "Hussein Sibai", link: "" },
  ],
  affiliations: ["Trustworthy Autonomy"],
  venue: "arXiv preprint, 2025 · cs.RO",

  links: {
    Paper: "https://arxiv.org/pdf/2509.14758",
    arXiv: "https://arxiv.org/abs/2509.14758",
    Code: "",
  },

  teaser: {
    image: "",
    caption: "",
  },

  abstract:
    "Ensuring safety of vision-based control systems remains a major challenge hindering their deployment in critical settings. Safety filters have gained increased interest as effective tools for ensuring the safety of classical control systems, but their applications in vision-based control settings have so far been limited. Pre-trained vision models (PVRs) have been shown to be effective perception backbones for control in various robotics domains. In this paper, we are interested in examining their effectiveness when used for designing vision-based safety filters. We use them as backbones for classifiers defining failure sets, for Hamilton-Jacobi (HJ) reachability-based safety filters, and for latent world models. We discuss the trade-offs between training from scratch, fine-tuning, and freezing the PVRs when training the models they are backbones for. We also evaluate whether one of the PVRs is superior across all tasks, evaluate whether learned world models or Q-functions are better for switching decisions to safe policies, and discuss practical considerations for deploying these PVRs on resource-constrained devices.",

  sections: [],

  bibtex: `@misc{tabbara2025designinglatentsafetyfilters,
  title={Designing Latent Safety Filters using Pre-Trained Vision Models},
  author={Ihab Tabbara and Yuxuan Yang and Ahmad Hamzeh and Maxwell Astafyev and Hussein Sibai},
  year={2025},
  eprint={2509.14758},
  archivePrefix={arXiv},
  primaryClass={cs.RO},
  url={https://arxiv.org/abs/2509.14758},
}`,
};
