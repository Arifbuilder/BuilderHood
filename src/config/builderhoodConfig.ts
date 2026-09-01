export interface SocialLink {
  label: string;
  url: string;
  iconName?: string;
}

export interface QuestTask {
  id: string;
  title: string;
  account: string;
  description: string;
  buttonText: string;
  url: string;
  type: 'follow' | 'like' | 'repost' | 'comment';
}

export interface XPost {
  id: string;
  authorName: string;
  username: string;
  avatarUrl: string;
  date: string;
  content: string;
  likes: number;
  reposts: number;
  comments: number;
  url: string;
}

export interface GitHubShowcaseProfile {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  description: string;
  techTags: string[];
  url: string;
}

export interface RoadmapStage {
  step: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export const BUILDERHOOD_CONFIG = {
  // Core Branding
  name: 'BuilderHood',
  tagline: 'Built by builders. Made for builders.',
  mainQuote: 'For the builders who build the next thing.',
  description: 'An NFT community for developers, creators, and builders shaping the future of Robinhood Chain.',
  statusBadge: 'BUILDERHOOD // ROBINHOOD CHAIN',
  smallHeroText: 'For Developers • Builders • Creators • Open Source',

  // NFT Collection Specs
  collectionName: 'BuilderHood Genesis Collection',
  supply: '1,000',
  network: 'Robinhood Chain',
  mintStatus: 'Coming Soon',
  futureMintInfo: 'Whitelist & GTD members get priority mint access. Exact mint date and price will be announced on official channels.',
  collectionPlaceholderImage: '/BuilderHood.png',
  collectionUrl: 'https://opensea.io', // Replace with real collection URL when live

  // Official Social & Community URLs
  twitterHandle: '@BuilderHood',
  twitterUrl: 'https://x.com',
  githubUrl: 'https://github.com',
  discordUrl: 'https://discord.gg',
  communityUrl: 'https://t.me',

  // About Section Cards
  aboutQuote: "BuilderHood is more than an NFT. It's a badge for people who build, experiment, contribute and ship.",
  aboutCards: [
    {
      id: 'devs',
      title: 'Developers',
      icon: 'Code2',
      description: 'Engineers crafting smart contracts, dApps, SDKs, and core protocol infrastructure.'
    },
    {
      id: 'open-source',
      title: 'Open Source Builders',
      icon: 'FolderGit2',
      description: 'Maintainers shipping open repositories, developer tooling, and public goods.'
    },
    {
      id: 'creators',
      title: 'Creators',
      icon: 'Palette',
      description: 'Designers, technical writers, and product thinkers shaping user experiences.'
    },
    {
      id: 'web3',
      title: 'Web3 Builders',
      icon: 'Blocks',
      description: 'Founders and hackers pushing decentralized governance and tokenomics forward.'
    }
  ],

  // Quest Section Tasks (Demo / Editable)
  questTasks: [
    {
      id: 'task-follow',
      title: 'Follow BuilderHood',
      account: 'Follow @BuilderHood',
      description: 'Stay up-to-date with mint updates, ecosystem news, and builder spotlights.',
      buttonText: 'Follow on X',
      url: 'https://x.com/intent/follow?screen_name=BuilderHood',
      type: 'follow'
    },
    {
      id: 'task-like',
      title: 'Like the Post',
      account: '@BuilderHood',
      description: '"Builders are early. Builders are different. BuilderHood is for them."',
      buttonText: 'Like',
      url: 'https://x.com',
      type: 'like'
    },
    {
      id: 'task-repost',
      title: 'Repost Announcement',
      account: '@BuilderHood',
      description: '"Building on Robinhood Chain? We\'re building something for you."',
      buttonText: 'Repost',
      url: 'https://x.com',
      type: 'repost'
    },
    {
      id: 'task-comment',
      title: 'Comment & Show Project',
      account: '@BuilderHood',
      description: '"Show us what you\'re building. Your GitHub might be your ticket."',
      buttonText: 'Comment',
      url: 'https://x.com',
      type: 'comment'
    }
  ] as QuestTask[],

  // Demo X Feed Posts (3 customizable posts)
  demoXPosts: [
    {
      id: 'post-1',
      authorName: 'BuilderHood',
      username: 'BuilderHood',
      avatarUrl: '/BuilderHood.png',
      date: 'Aug 28',
      content: 'Builders are early. Builders are different. BuilderHood is for them.',
      likes: 142,
      reposts: 38,
      comments: 19,
      url: 'https://x.com'
    },
    {
      id: 'post-2',
      authorName: 'BuilderHood',
      username: 'BuilderHood',
      avatarUrl: '/BuilderHood.png',
      date: 'Aug 30',
      content: 'Building on Robinhood Chain? We\'re building something for you.',
      likes: 210,
      reposts: 54,
      comments: 27,
      url: 'https://x.com'
    },
    {
      id: 'post-3',
      authorName: 'BuilderHood',
      username: 'BuilderHood',
      avatarUrl: '/BuilderHood.png',
      date: 'Sep 01',
      content: 'Show us what you\'re building. Your GitHub might be your ticket.',
      likes: 389,
      reposts: 92,
      comments: 41,
      url: 'https://x.com'
    }
  ] as XPost[],

  // GitHub Showcase Profiles
  githubShowcaseSection: {
    title: 'Show us what you build.',
    description: 'We care about what you ship, not just what you say.',
    profiles: [
      {
        id: 'gh-1',
        name: 'Alex Rivers',
        username: 'alexrivers-dev',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        description: 'Building open-source smart contract tools & Robinhood Chain indexing SDK.',
        techTags: ['Solidity', 'TypeScript', 'Vite'],
        url: 'https://github.com'
      },
      {
        id: 'gh-2',
        name: 'Elena Rostova',
        username: 'elena-builds',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        description: 'Creator of HoodPay & Web3 developer toolkits for EVM chain integrations.',
        techTags: ['React', 'Next.js', 'Ethers.js'],
        url: 'https://github.com'
      },
      {
        id: 'gh-3',
        name: 'Marcus Chen',
        username: 'mchen-hacks',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        description: 'Rust & Solidity hacker. Building decentralised oracle bridges on Robinhood Chain.',
        techTags: ['Rust', 'Foundry', 'Go'],
        url: 'https://github.com'
      }
    ] as GitHubShowcaseProfile[]
  },

  // Why BuilderHood Pillars
  whyBuilderHood: [
    {
      title: 'Build',
      description: 'Ship real projects.',
      icon: 'Hammer'
    },
    {
      title: 'Learn',
      description: 'Experiment with new technologies.',
      icon: 'Terminal'
    },
    {
      title: 'Connect',
      description: 'Meet other builders.',
      icon: 'Users'
    },
    {
      title: 'Contribute',
      description: 'Help grow the ecosystem.',
      icon: 'GitPullRequest'
    }
  ],

  // Roadmap Stages
  roadmap: [
    {
      step: '01 — Foundation',
      title: 'Community & Core Portal',
      description: 'BuilderHood website release, community channels launch, and developer submission gateway.',
      status: 'in-progress'
    },
    {
      step: '02 — WL',
      title: 'Whitelist & GTD Selection',
      description: 'Early builder application review, GitHub repo indexing, and allocation distribution.',
      status: 'upcoming'
    },
    {
      step: '03 — Mint',
      title: 'NFT Collection Launch',
      description: 'Official 1,000 NFT supply minting live on Robinhood Chain for verified builders.',
      status: 'upcoming'
    },
    {
      step: '04 — Builder Network',
      title: 'Ecosystem & Grants',
      description: 'Community hackathons, open-source micro-grants, and Robinhood Chain builder collaborations.',
      status: 'upcoming'
    }
  ] as RoadmapStage[]
};
