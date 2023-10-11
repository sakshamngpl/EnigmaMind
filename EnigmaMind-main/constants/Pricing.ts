

const Pricing = {
  SGDMonthlyPrice: 45.00,
  currencyList: {
    'ARS': 8349.30,
    'AUD': 49.50,
    'BGN': 59.85,
    'Rp': 5000.00,
    'BRL': 160.20,
    'SGD': 45.00,
  },

  section_1: {
    heading: 'With Moobidesk, anyone can deliver outstanding customer engagement effortlessly',
  },

  section_2: {
    subheading: 'For teams of up to 3 people looking to engage customers on multiple channels',
    discountPercentage: 20,

    plan_1: {
      title: 'Plan includes:',
      features: [
        {
          imageURL: '/pricing/plan-1.svg',
          name: 'A unified easy-to-use interface for all channels',
        },
        {
          imageURL: '/pricing/plan-2.svg',
          name: 'Get real-time analytics to monitor performance',
        },
        {
          imageURL: '/pricing/plan-3.svg',
          name: 'Dedicated account manager who can assist and work with you',
        },
        {
          imageURL: '/pricing/plan-4.svg',
          name: 'Recommended for more than 3 agents',
        },
      ],
      button: { text: 'CONTACT US NOW', url: '/#contact-us', },
    },

    plan_2: {
      title: 'All Standard plus:',
      subheading: 'Advanced features for large teams looking to track, manage and assign chat messages',
      features: [
        {
          imageURL: '/pricing/plan-1x.svg',
          name: 'Benefit from powerful omnichannel routing',
        },
        {
          imageURL: '/pricing/plan-2x.svg',
          name: 'Configurable workflow and SLAs to define metrics and optimise business performance',
        },
        {
          imageURL: '/pricing/plan-3x.svg',
          name: 'Monitor conversations and effectively train agents to achieve the best results.',
        },
        {
          imageURL: '/pricing/plan-4x.svg',
          name: 'Recommended for up to 10 agents',
        },
      ],
      button: { text: 'CONTACT US NOW', url: '/#contact-us', },
    },


  },

  section_3: {
    heading: 'Full Plan Comparision',

    tables: [
      {
        c1: 'Communication Channels',
        c2: 'Standard',
        c3: 'Enterprise',

        rows: [
          {
            name: 'SMS',
            c1: true,
            c2: true,
          },
          {
            name: 'Voice',
            c1: true,
            c2: true,
          },
          {
            name: 'Email',
            c1: true,
            c2: true,
          },
          {
            name: 'Line',
            c1: true,
            c2: true,
          },
          {
            name: 'Instagram',
            c1: true,
            c2: true,
          },
          {
            name: 'Facebook',
            c1: true,
            c2: true,
          },
          {
            name: 'Telegram',
            c1: true,
            c2: true,
          },
          {
            name: 'Wechat',
            c1: true,
            c2: true,
          },
          {
            name: 'WhatsApp',
            c1: true,
            c2: true,
          },
          {
            name: 'Twitter',
            c1: true,
            c2: true,
          },
          {
            name: 'Webchat',
            c1: true,
            c2: true,
          },
        ],
      },
      {
        c1: 'Customer Relationship Management',
        c2: 'Standard',
        c3: 'Enterprise',

        rows: [
          {
            name: "Customer profile",
            c1: true,
            c2: true,
          },
          {
            name: "Contact list management",
            c1: true,
            c2: true,
          },
          {
            name: "Import & export contacts",
            c1: true,
            c2: true,
          },
          {
            name: "Unified omnichannel conversations",
            c1: true,
            c2: true,
          },
          {
            name: "Audit trail",
            c1: false,
            c2: true,
          },
          {
            name: "Broadcast messaging",
            c1: false,
            c2: true,
          },
        ],
      },
      {
        c1: 'Agent Productivity',
        c2: 'Standard',
        c3: 'Standard',

        rows: [
          {
            name: "Suggested responses",
            c1: true,
            c2: true,
          },
          {
            name: "Unified search",
            c1: true,
            c2: true,
          },
          {
            name: "Agent collision detection",
            c1: true,
            c2: true,
          },
          {
            name: "Auto responders",
            c1: true,
            c2: true,
          },
          {
            name: "Agent collaboration",
            c1: false,
            c2: true,
          }

        ],
      },
      {
        c1: 'Contact Center Features',
        c2: 'Standard',
        c3: 'Enterprise',

        rows: [
          {
            name: "SLA management",
            c1: false,
            c2: true,
          },
          {
            name: "SLA alerts",
            c1: false,
            c2: true,
          },
          {
            name: "Call/Message transfer",
            c1: false,
            c2: true,
          },
          {
            name: "Custom aux code",
            c1: false,
            c2: true,
          },
          {
            name: "Agent management",
            c1: false,
            c2: true,
          },
          {
            name: "Queue management",
            c1: false,
            c2: true,
          }

        ],
      },
      {
        c1: 'Intelligent Routing',
        c2: 'Standard',
        c3: 'Enterprise',

        rows: [
          {
            name: "Multichannel priority routing",
            c1: true,
            c2: true,
          },
          {
            name: "Chat routing using round-robin and pick-me method",
            c1: true,
            c2: true,
          },
          {
            name: "Skills-based routing",
            c1: true,
            c2: true,
          },
          {
            name: "Smart omnichannel routing & artificial intelligence",
            c1: true,
            c2: true,
          }

        ],
      },
      {
        c1: 'Analytics and Reporting',
        c2: 'Standard',
        c3: 'Enterprise',

        rows: [
          {
            name: "Chat and agent reports",
            c1: true,
            c2: true,
          },
          {
            name: "Agent dashboard",
            c1: true,
            c2: true,
          },
          {
            name: "Supervisor dashboard",
            c1: true,
            c2: true,
          },
          {
            name: "Wallboard",
            c1: true,
            c2: true,
          }

        ],
      },
      {
        c1: 'Integration',
        c2: 'Standard',
        c3: 'Enterprise',

        rows: [
          {
            name: "CRM integration",
            c1: true,
            c2: true,
          },
          {
            name: "API",
            c1: true,
            c2: true,
          }

        ],
      },
      {
        c1: 'Customer Support',
        c2: 'Standard',
        c3: 'Enterprise',

        rows: [
          {
            name: "Email support",
            c1: true,
            c2: true,
          },
          {
            name: "Web Chat support",
            c1: true,
            c2: true,
          },
          {
            name: "SMS support",
            c1: true,
            c2: true,
          },
          {
            name: "WhatsApp support",
            c1: true,
            c2: true,
          },
          {
            name: "Dedicated account manager",
            c1: true,
            c2: true,
          },
          {
            name: "One-to-one onboarding session",
            c1: true,
            c2: true,
          }

        ],
      },
    ],
  },

  section_4: {
    heading: 'A Few Frequently Asked Questions',

    questions: [
      {
        question: 'What’s an agent?',
        answer: ['An agent is anyone in your company that will interact with customers. Each rep, admin, manager and supervisor needs their own agent account. Add as many agents as you want on any plan.'],
      },
      {
        question: 'Will my data be private and safe?',
        answer: ['Absolutely! All your records are private, therefore only you can view and use them.'],
      },
      {
        question: 'Can I cancel my plan at any time?',
        answer: ['Yes. Even if we hope that it won’t be necessary, you can cancel your subscription whenever you believe Moobidesk is no longer helping you with your business.'],
      },
      {
        question: 'Can I integrate Moobidesk with my CRM?',
        answer: ['Currently Moobidesk only provides integration with SugarCRM. If you wish to integrate with a different CRM solution, please contact us.'],
      },
    ],
  },

  section_5: {
    heading: "Contact our sales team to find out more.",
    buttons: [
      { text: 'CONTACT US', url: '/#contact-us', },
    ]
  },
};

export default Pricing;